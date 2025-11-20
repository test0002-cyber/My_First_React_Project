#!/usr/bin/env node
/*
 Generates a large JSON array of dummy store records streaming to a file to avoid high memory use.
 Defaults: total=100000, brands=20, minPerBrand=100, maxPerBrand=10000
 Usage:
  node scripts/generate_dummy_stores.js --total=100000 --brands=20 --min=100 --max=10000 --out=data/dummy_stores.json
*/

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { total: 100000, brands: 20, min: 100, max: 10000, out: 'data/dummy_stores.json' };
  args.forEach(a => {
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=');
      if (!v) return;
      if (k === 'total') out.total = Number(v);
      if (k === 'brands') out.brands = Number(v);
      if (k === 'min') out.min = Number(v);
      if (k === 'max') out.max = Number(v);
      if (k === 'out') out.out = v;
    }
  });
  return out;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[randomInt(0, arr.length - 1)];
}

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function allocateCounts(total, n, minPer, maxPer) {
  const minTotal = n * minPer;
  const maxTotal = n * maxPer;
  if (total < minTotal || total > maxTotal) {
    throw new Error(`Total ${total} not in feasible range [${minTotal}, ${maxTotal}] for ${n} brands with min ${minPer} and max ${maxPer}`);
  }
  const counts = new Array(n).fill(0);
  let remaining = total;
  for (let i = 0; i < n; i++) {
    const remainingBrands = n - i;
    const minAllowed = minPer;
    // ensure we leave enough for remaining brands
    const maxAllowed = Math.min(maxPer, remaining - (remainingBrands - 1) * minPer);
    let assigned;
    if (i === n - 1) {
      assigned = remaining; // last gets the rest
    } else {
      const delta = maxAllowed - minAllowed;
      assigned = minAllowed + (delta > 0 ? randomInt(0, delta) : 0);
    }
    counts[i] = assigned;
    remaining -= assigned;
  }
  return counts;
}

function makeStoreRecord({ brandId, brandName, idx, globalIndex }) {
  // lightweight random generators for fields
  const streets = ['Oak', 'Maple', 'Pine', 'Cedar', 'Elm', 'Willow', 'Birch', 'Spruce', 'Chestnut', 'Walnut'];
  const suffixes = ['St', 'Ave', 'Blvd', 'Rd', 'Ln', 'Way'];
  const cities = ['Springfield','Riverside','Greenville','Fairview','Madison','Franklin','Georgetown','Clinton','Centerville','Arlington'];
  const states = ['CA','TX','FL','NY','IL','PA','OH','GA','NC','MI'];
  const countries = ['US'];

  const storeId = `store-${String(globalIndex).padStart(7, '0')}`;
  const streetNumber = randomInt(1, 9999);
  const street = `${pick(streets)} ${pick(['Street','Road','Avenue','Boulevard'])}`;
  const city = pick(cities);
  const state = pick(states);
  const postal = String(randomInt(10000, 99999));
  const phone = `+1${randomInt(200,999)}${String(randomInt(1000000,9999999)).padStart(7,'0')}`;

  // simple lat/lon roughly in continental US bounds
  const lat = (Math.random() * (49 - 24) + 24).toFixed(6);
  const lon = (Math.random() * (-66 + 125) - 125).toFixed(6); // -125 .. -66

  return {
    masteroutletid: brandId,
    brandName,
    storeid: storeId,
    name: `${brandName} - ${city} #${idx}`,
    address: `${streetNumber} ${street}`,
    city,
    state,
    postal,
    country: pick(countries),
    phone,
    location: { lat: Number(lat), lon: Number(lon) },
    createdAt: new Date().toISOString()
  };
}

async function generate() {
  const opts = parseArgs();
  const { total, brands, min, max, out } = opts;
  console.log('Options:', opts);
  ensureDirExists(out);

  // prepare brands
  const brandList = [];
  for (let i = 1; i <= brands; i++) {
    brandList.push({ id: `brand-${i}`, name: `Brand ${i}` });
  }

  const counts = allocateCounts(total, brands, min, max);
  console.log('Per-brand counts sample:', counts.slice(0,5));

  const stream = fs.createWriteStream(out, { encoding: 'utf8' });
  stream.write('[\n');

  let globalIndex = 1;
  for (let b = 0; b < brands; b++) {
    const brand = brandList[b];
    const count = counts[b];
    for (let i = 1; i <= count; i++) {
      const rec = makeStoreRecord({ brandId: brand.id, brandName: brand.name, idx: i, globalIndex });
      const json = JSON.stringify(rec);
      const isLast = (globalIndex === total);
      stream.write(json + (isLast ? '\n' : ',\n'));
      globalIndex++;
      // occasionally flush backpressure
      if (globalIndex % 10000 === 0) {
        console.log(`Generated ${globalIndex - 1}/${total} records...`);
      }
    }
  }

  stream.write(']\n');

  stream.end(() => {
    console.log(`Finished writing ${total} records to ${out}`);
  });
}

// run
generate().catch(err => {
  console.error('Error generating data:', err);
  process.exit(1);
});
