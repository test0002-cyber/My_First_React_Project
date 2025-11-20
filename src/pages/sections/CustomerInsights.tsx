import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, UserCheck, AlertTriangle } from 'lucide-react'

const segmentData = [
  { segment: 'New Customers', count: 156, satisfaction: 92, loyalty: 65 },
  { segment: 'Loyal Customers', count: 234, satisfaction: 96, loyalty: 94 },
  { segment: 'At-Risk', count: 42, satisfaction: 58, loyalty: 25 },
]

const customerJourney = [
  { stage: 'Awareness', sentiment: 7.2, count: 450 },
  { stage: 'Consideration', sentiment: 7.8, count: 320 },
  { stage: 'Purchase', sentiment: 8.5, count: 280 },
  { stage: 'Post-Purchase', sentiment: 8.7, count: 240 },
  { stage: 'Retention', sentiment: 8.2, count: 190 },
]

export default function CustomerInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Insights</h2>
        <p className="text-gray-600">Deep understanding of customer behavior and preferences</p>
      </div>

      {/* Customer Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Customers"
          value="432"
          change="↑ 15% this month"
          changeType="positive"
          icon={Users}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Retention Rate"
          value="87%"
          change="↑ 5% improvement"
          changeType="positive"
          icon={UserCheck}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="At-Risk Customers"
          value="42"
          change="↓ 8 fewer from last month"
          changeType="positive"
          icon={AlertTriangle}
          backgroundColor="bg-red-50"
        />
      </div>

      {/* Customer Segmentation */}
      <Card title="Customer Segments Analysis" subtitle="Breakdown by customer type">
        <div className="space-y-4">
          {segmentData.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{item.segment}</p>
                  <p className="text-sm text-gray-600">{item.count} customers</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{item.satisfaction}%</p>
                  <p className="text-xs text-gray-600">Satisfaction</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Loyalty Score</span>
                  <span className="font-semibold text-gray-900">{item.loyalty}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.loyalty > 80 ? 'bg-green-500' : item.loyalty > 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.loyalty}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Customer Journey */}
      <Card title="Customer Journey Sentiment" subtitle="Sentiment across purchase journey">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={customerJourney}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sentiment" fill="#3B82F6" name="Avg Sentiment" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Customer Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Top Customer Needs" subtitle="Most requested features/services">
          <div className="space-y-3">
            {[
              { need: 'Faster delivery', priority: 'High', mentions: 156 },
              { need: 'More customization', priority: 'High', mentions: 134 },
              { need: 'Better customer support', priority: 'Medium', mentions: 98 },
              { need: 'Eco-friendly options', priority: 'Medium', mentions: 76 },
              { need: 'Mobile app', priority: 'Low', mentions: 42 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.need}</p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                    item.priority === 'High' ? 'bg-red-100 text-red-800' :
                    item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.mentions}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Customer Satisfaction Drivers" subtitle="What makes customers happy">
          <div className="space-y-3">
            {[
              { driver: 'Quality of service', impact: 95 },
              { driver: 'Response time', impact: 87 },
              { driver: 'Staff friendliness', impact: 92 },
              { driver: 'Value for money', impact: 78 },
              { driver: 'Consistency', impact: 85 },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{item.driver}</span>
                  <span className="text-gray-700">{item.impact}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${item.impact}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Customer Lifetime Value</p>
          <p className="text-3xl font-bold text-gray-900">$4,250</p>
          <p className="text-xs text-gray-600 mt-2">Average per customer</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Churn Risk Score</p>
          <p className="text-3xl font-bold text-green-600">Low</p>
          <p className="text-xs text-gray-600 mt-2">9.7% at-risk</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Expansion Opportunity</p>
          <p className="text-3xl font-bold text-gray-900">$1.2M</p>
          <p className="text-xs text-blue-600 mt-2">Potential upsell value</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Customer Effort Score</p>
          <p className="text-3xl font-bold text-gray-900">3.2/5</p>
          <p className="text-xs text-gray-600 mt-2">Low effort (better)</p>
        </div>
      </div>
    </div>
  )
}
