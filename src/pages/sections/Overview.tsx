import MetricCard from '../../components/MetricCard'
import Card from '../../components/Card'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Star, TrendingUp, MessageSquare, Clock } from 'lucide-react'

const chartData = [
  { name: 'Jan', reviews: 45, rating: 4.5 },
  { name: 'Feb', reviews: 52, rating: 4.6 },
  { name: 'Mar', reviews: 48, rating: 4.5 },
  { name: 'Apr', reviews: 61, rating: 4.7 },
  { name: 'May', reviews: 55, rating: 4.6 },
  { name: 'Jun', reviews: 67, rating: 4.8 },
]

const ratingDistribution = [
  { name: '5 Stars', value: 65, color: '#10B981' },
  { name: '4 Stars', value: 20, color: '#3B82F6' },
  { name: '3 Stars', value: 8, color: '#F59E0B' },
  { name: '2 Stars', value: 4, color: '#EF4444' },
  { name: '1 Star', value: 3, color: '#7F1D1D' },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Real-time insights from your Google Business Profile reviews</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Average Rating"
          value="4.6"
          change="↑ 0.2 from last month"
          changeType="positive"
          icon={Star}
          backgroundColor="bg-yellow-50"
        />
        <MetricCard
          title="Total Reviews"
          value="1,240"
          change="↑ 12% this month"
          changeType="positive"
          icon={MessageSquare}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Response Rate"
          value="89%"
          change="↑ 5% from last month"
          changeType="positive"
          icon={TrendingUp}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="Avg Response Time"
          value="2.4 hrs"
          change="↓ 0.6 hrs improvement"
          changeType="positive"
          icon={Clock}
          backgroundColor="bg-purple-50"
        />
      </div>

      {/* Review Trends Chart */}
      <Card title="Review Volume & Rating Trend" subtitle="Last 6 months">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="reviews" stroke="#3B82F6" strokeWidth={2} name="Reviews" />
            <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#10B981" strokeWidth={2} name="Avg Rating" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Rating Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Rating Distribution" subtitle="Breakdown by star count">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ratingDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ratingDistribution.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Quick Stats" subtitle="Key metrics at a glance">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Positive Reviews (4-5★)</span>
              <span className="text-2xl font-bold text-green-600">85%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Neutral Reviews (3★)</span>
              <span className="text-2xl font-bold text-yellow-600">8%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Negative Reviews (1-2★)</span>
              <span className="text-2xl font-bold text-red-600">7%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Unanswered Reviews</span>
              <span className="text-2xl font-bold text-orange-600">47</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
