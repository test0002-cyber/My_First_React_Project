export function exportReportsCSV(data: Array<{ metric: string; value: number }>) {
  const header = ['metric','value']
  const rows = data.map(r => [r.metric, String(r.value)].join(','))
  const csv = [header.join(','), ...rows].join('\n')
  // save to localStorage as a simulated scheduled export
  const key = `ri_export_${Date.now()}`
  localStorage.setItem(key, csv)
  // also mark last run
  localStorage.setItem('ri_report_last_run', new Date().toISOString())
  // create a downloadable blob and return URL for immediate download if desired
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  return { url, csv }
}
