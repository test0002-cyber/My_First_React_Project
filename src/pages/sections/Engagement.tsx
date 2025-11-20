import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'
import { Users, Heart, Share2 } from 'lucide-react'

const engagementData = [
  { day: 'Mon', views: 450, clicks: 120, responses: 45 },
  { day: 'Tue', views: 520, clicks: 145, responses: 52 },
  { day: 'Wed', views: 480, clicks: 130, responses: 48 },
  { day: 'Thu', views: 600, clicks: 165, responses: 62 },
  { day: 'Fri', views: 550, clicks: 150, responses: 55 },
  { day: 'Sat', views: 420, clicks: 110, responses: 38 },
  { day: 'Sun', views: 380, clicks: 95, responses: 32 },
]

const reviewersData = [
  { name: 'First-time Reviewers', count: 156, percentage: 45 },
  { name: 'Repeat Customers', count: 128, percentage: 37 },
  { name: 'Power Reviewers', count: 64, percentage: 18 },
]

export default function Engagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Engagement Metrics</h2>
        <p className="text-gray-600">Track customer interaction and engagement patterns</p>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Engagement Rate"
          value="34.2%"
          change="↑ 8% from last month"
          changeType="positive"
          icon={Heart}
          backgroundColor="bg-red-50"
        />
        <MetricCard
          title="Review Visibility"
          value="3,240"
          change="Total views this month"
          changeType="neutral"
          icon={Users}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Share Rate"
          value="12.5%"
          change="↑ 3% from last month"
          changeType="positive"
          icon={Share2}
          backgroundColor="bg-purple-50"
        />
      </div>

      {/* Daily Engagement */}
      <Card title="Daily Engagement Pattern" subtitle="Weekly engagement metrics">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#3B82F6" name="Views" />
            <Bar dataKey="clicks" fill="#10B981" name="Clicks" />
            <Bar dataKey="responses" fill="#F59E0B" name="Responses" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Reviewer Types */}
      <Card title="Reviewer Segmentation" subtitle="Customer review patterns">
        <div className="space-y-4">
          {reviewersData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{item.name}</span>
                <span className="text-sm font-bold text-gray-900">{item.count} ({item.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Engagement Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Helpful Votes</p>
          <p className="text-3xl font-bold text-gray-900">428</p>
          <p className="text-xs text-gray-600 mt-2">This month</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Unhelpful Votes</p>
          <p className="text-3xl font-bold text-gray-900">34</p>
          <p className="text-xs text-gray-600 mt-2">Low rate: 7%</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Social Shares</p>
          <p className="text-3xl font-bold text-gray-900">156</p>
          <p className="text-xs text-gray-600 mt-2">↑ 45% increase</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Click-through Rate</p>
          <p className="text-3xl font-bold text-gray-900">3.7%</p>
          <p className="text-xs text-gray-600 mt-2">Above average</p>
        </div>
      </div>

      {/* NPS Calculation */}
      <Card title="Net Promoter Score (NPS)" subtitle="Customer loyalty metric">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <p className="text-sm text-gray-600 mb-2">Promoters (9-10★)</p>
            <p className="text-3xl font-bold text-green-600">68%</p>
            <p className="text-xs text-gray-600 mt-2">Likely to recommend</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <p className="text-sm text-gray-600 mb-2">Passives (7-8★)</p>
            <p className="text-3xl font-bold text-yellow-600">18%</p>
            <p className="text-xs text-gray-600 mt-2">Neutral</p>
          </div>
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <p className="text-sm text-gray-600 mb-2">Detractors (0-6★)</p>
            <p className="text-3xl font-bold text-red-600">14%</p>
            <p className="text-xs text-gray-600 mt-2">Unlikely to recommend</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <p className="text-center text-sm text-gray-600 mb-2">Overall NPS Score</p>
          <p className="text-center text-4xl font-bold text-blue-600">+54</p>
          <p className="text-center text-xs text-gray-600 mt-2">Excellent (greater than 50 is great)</p>
        </div>
      </Card>
    </div>
  )
}
