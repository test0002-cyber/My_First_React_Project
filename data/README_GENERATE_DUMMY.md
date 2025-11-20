Dummy stores generation

This folder contains a generator script that produces a large JSON array of dummy store records.

Script: scripts/generate_dummy_stores.js

Defaults
- total: 100000
- brands: 20
- min per brand: 100
- max per brand: 10000
- out: data/dummy_stores.json

Run (from project root):

```bash
node scripts/generate_dummy_stores.js --total=100000 --brands=20 --min=100 --max=10000 --out=data/dummy_stores.json
```

Notes
- The script streams JSON to avoid high memory usage. The output file is a JSON array (one object per line inside array).
- Fields included per record (minimal useful schema):
  - masteroutletid (brand id, e.g. "brand-1")
  - brandName
  - storeid (unique store id, e.g. "store-0000123")
  - name
  - address, city, state, postal, country, phone
  - location: { lat, lon }
  - createdAt

Importing into MongoDB

If you want to import into MongoDB (replace uri, db, collection accordingly):

```bash
# generate file
node scripts/generate_dummy_stores.js --total=100000 --brands=20 --min=100 --max=10000 --out=data/dummy_stores.json

# import into MongoDB
mongoimport --uri="mongodb://localhost:27017/mydb" --collection=stores --file=data/dummy_stores.json --jsonArray
```

Importing into SQL

For SQL you can convert JSON into CSV or create an ETL script that reads the JSON and inserts into your SQL DB in batches.

Next steps
- Optionally add a server-side script to run this and merge into `server/data.json`.
- If you need store-specific custom fields (GBP ids, review stats), we can extend the generator to include them.
