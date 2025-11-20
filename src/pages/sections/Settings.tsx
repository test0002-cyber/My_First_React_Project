import Card from '../../components/Card'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Configure dashboard preferences and integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Google Business Profile Connection" subtitle="API Integration status">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">✓ Connected</p>
              <p className="text-sm text-green-800 mt-1">Account: YourBusiness</p>
              <p className="text-xs text-green-700 mt-2">Last sync: 2 hours ago</p>
            </div>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Auto-sync every 1 hour</span>
              </label>
              <label className="block">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Fetch all review history</span>
              </label>
              <label className="block">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Include photos</span>
              </label>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Reconnect Account
            </button>
          </div>
        </Card>

        <Card title="Dashboard Preferences" subtitle="Customize your view">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Theme</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Light Mode</option>
                <option>Dark Mode</option>
                <option>Auto (System)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Refresh Interval</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Every 1 hour</option>
                <option>Every 4 hours</option>
                <option>Daily</option>
                <option>Manual only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Default Time Range</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 12 months</option>
                <option>All time</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Notifications" subtitle="Alert preferences">
          <div className="space-y-3">
            <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-3" />
              <div>
                <p className="font-medium text-gray-900">New reviews</p>
                <p className="text-xs text-gray-600">Get notified of new reviews</p>
              </div>
            </label>
            <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-3" />
              <div>
                <p className="font-medium text-gray-900">Unanswered reviews</p>
                <p className="text-xs text-gray-600">Alert when review is unanswered for 24 hours</p>
              </div>
            </label>
            <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-3" />
              <div>
                <p className="font-medium text-gray-900">Rating drops</p>
                <p className="text-xs text-gray-600">Alert if rating drops by 0.2 or more</p>
              </div>
            </label>
            <label className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" className="mr-3" />
              <div>
                <p className="font-medium text-gray-900">Weekly digest</p>
                <p className="text-xs text-gray-600">Receive weekly summary email</p>
              </div>
            </label>
          </div>
        </Card>

        <Card title="Data & Privacy" subtitle="Manage your data">
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900">Data Storage</p>
              <p className="text-sm text-blue-800 mt-1">All data encrypted at rest and in transit</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">GDPR Compliant</p>
              <p className="text-sm text-green-800 mt-1">Ready to comply with data deletion requests</p>
            </div>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors mt-2">
              Download My Data
            </button>
            <button className="w-full px-4 py-2 bg-red-100 text-red-900 rounded-lg hover:bg-red-200 transition-colors">
              Delete All Data
            </button>
          </div>
        </Card>
      </div>

      <Card title="API & Integrations" subtitle="Connect external tools">
        <div className="space-y-3">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">Slack Integration</p>
                <p className="text-sm text-gray-600">Get daily review summaries in Slack</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                Connect
              </button>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Connected ✓</p>
              </div>
              <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded text-sm hover:bg-gray-400">
                Manage
              </button>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">Zapier Automation</p>
                <p className="text-sm text-gray-600">Automate workflows with 1000+ apps</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                Setup
              </button>
            </div>
          </div>
        </div>
      </Card>

      <Card title="About This Dashboard" subtitle="Version and support information">
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-900 font-medium">Version</span>
            <span className="text-gray-700">1.0.0</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-900 font-medium">Last Updated</span>
            <span className="text-gray-700">November 19, 2025</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-900 font-medium">Data Points Tracked</span>
            <span className="text-gray-700">120+ insights</span>
          </div>
          <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">
            View Documentation
          </button>
          <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">
            Contact Support
          </button>
        </div>
      </Card>
    </div>
  )
}
