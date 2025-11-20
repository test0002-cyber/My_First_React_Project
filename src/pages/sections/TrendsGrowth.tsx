import MetricCard from '../../components/MetricCard'
import Card from '../../components/Card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Calendar, Zap } from 'lucide-react'

const trendData = [
  { month: 'Jan', reviews: 120, rating: 4.3, growth: 0 },
  { month: 'Feb', reviews: 135, rating: 4.4, growth: 12.5 },
  { month: 'Mar', reviews: 148, rating: 4.5, growth: 9.6 },
  { month: 'Apr', reviews: 175, rating: 4.6, growth: 18.2 },
  { month: 'May', reviews: 192, rating: 4.7, growth: 9.7 },
  { month: 'Jun', reviews: 247, rating: 4.8, growth: 28.6 },
]

const seasonalData = [
  { month: 'Jan', volume: 120 },
  { month: 'Feb', volume: 135 },
  { month: 'Mar', volume: 128 },
  { month: 'Apr', volume: 175 },
  { month: 'May', volume: 192 },
  { month: 'Jun', volume: 247 },
  { month: 'Jul', volume: 210 },
  { month: 'Aug', volume: 195 },
  { month: 'Sep', volume: 168 },
  { month: 'Oct', volume: 182 },
  { month: 'Nov', volume: 156 },
  { month: 'Dec', volume: 189 },
]

export default function TrendsGrowth() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Trends & Growth</h2>
        <p className="text-gray-600">Monitor growth patterns and identify business momentum</p>
      </div>

      {/* Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Monthly Growth Rate"
          value="28.6%"
          change="↑ Accelerating"
          changeType="positive"
          icon={TrendingUp}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="YoY Growth"
          value="156%"
          change="Compared to last year"
          changeType="positive"
          icon={Zap}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Peak Month"
          value="Jun"
          change="247 reviews"
          changeType="neutral"
          icon={Calendar}
          backgroundColor="bg-purple-50"
        />
      </div>

      {/* Review Growth Trend */}
      <Card title="Review Volume & Rating Growth" subtitle="6-month trend">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="reviews" stroke="#3B82F6" strokeWidth={2} name="Reviews" />
            <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#10B981" strokeWidth={2} name="Avg Rating" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Monthly Growth Rate */}
      <Card title="Month-over-Month Growth Rate" subtitle="Percentage growth each month">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar dataKey="growth" fill="#F59E0B" name="Growth %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Seasonality */}
      <Card title="Seasonal Patterns" subtitle="Full year review volume">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={seasonalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volume" fill="#8B5CF6" name="Review Volume" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Trend Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Trend Direction</p>
          <p className="text-2xl font-bold text-green-600">↑ Strong Upward</p>
          <p className="text-xs text-gray-600 mt-2">Consistent growth</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Velocity</p>
          <p className="text-2xl font-bold text-blue-600">Accelerating</p>
          <p className="text-xs text-gray-600 mt-2">+4.2% faster</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Forecast (Next Month)</p>
          <p className="text-2xl font-bold text-gray-900">~285 reviews</p>
          <p className="text-xs text-gray-600 mt-2">Based on trend</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Volatility</p>
          <p className="text-2xl font-bold text-yellow-600">Low</p>
          <p className="text-xs text-gray-600 mt-2">Stable growth</p>
        </div>
      </div>
    </div>
  )
}
