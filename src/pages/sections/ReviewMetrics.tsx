import MetricCard from '../../components/MetricCard'
import Card from '../../components/Card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { MessageSquare, Clock, TrendingUp } from 'lucide-react'

const responseData = [
  { day: 'Mon', responses: 12, avgTime: 2.1 },
  { day: 'Tue', responses: 15, avgTime: 2.3 },
  { day: 'Wed', responses: 18, avgTime: 1.9 },
  { day: 'Thu', responses: 14, avgTime: 2.4 },
  { day: 'Fri', responses: 16, avgTime: 2.2 },
  { day: 'Sat', responses: 11, avgTime: 3.1 },
  { day: 'Sun', responses: 9, avgTime: 3.5 },
]

const recentReviews = [
  { id: 1, author: 'John Smith', rating: 5, text: 'Excellent service!', date: '2 hours ago' },
  { id: 2, author: 'Sarah Johnson', rating: 4, text: 'Good but could improve', date: '5 hours ago' },
  { id: 3, author: 'Mike Wilson', rating: 5, text: 'Highly recommended!', date: 'Yesterday' },
  { id: 4, author: 'Emily Brown', rating: 3, text: 'Average experience', date: '2 days ago' },
  { id: 5, author: 'David Lee', rating: 5, text: 'Best in town!', date: '3 days ago' },
]

export default function ReviewMetrics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Metrics</h2>
        <p className="text-gray-600">Comprehensive review management insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Total Reviews This Month"
          value="247"
          change="↑ 28% from last month"
          changeType="positive"
          icon={MessageSquare}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Avg Response Time"
          value="2.4 hrs"
          change="↓ improved by 35%"
          changeType="positive"
          icon={Clock}
          backgroundColor="bg-purple-50"
        />
        <MetricCard
          title="Response Rate"
          value="91%"
          change="↑ 6% from last month"
          changeType="positive"
          icon={TrendingUp}
          backgroundColor="bg-green-50"
        />
      </div>

      {/* Response Pattern */}
      <Card title="Response Pattern by Day" subtitle="Weekly response activity">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={responseData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="responses" fill="#3B82F6" name="Responses" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Response Time Trend */}
      <Card title="Response Time Trend" subtitle="Average hours to respond">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={responseData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value) => `${value} hrs`} />
            <Line type="monotone" dataKey="avgTime" stroke="#10B981" strokeWidth={2} name="Avg Response Time" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Reviews */}
      <Card title="Recent Reviews" subtitle="Latest customer feedback">
        <div className="space-y-4">
          {recentReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Review Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Answered Reviews</p>
          <p className="text-3xl font-bold text-gray-900">1,134</p>
          <p className="text-xs text-green-600 mt-2">91% response rate</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Unanswered Reviews</p>
          <p className="text-3xl font-bold text-gray-900">106</p>
          <p className="text-xs text-orange-600 mt-2">9% pending</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Flagged for Review</p>
          <p className="text-3xl font-bold text-gray-900">23</p>
          <p className="text-xs text-red-600 mt-2">Needs attention</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Auto-Responses Used</p>
          <p className="text-3xl font-bold text-gray-900">342</p>
          <p className="text-xs text-blue-600 mt-2">27% of total</p>
        </div>
      </div>
    </div>
  )
}
