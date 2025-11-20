import MetricCard from '../../components/MetricCard'
import Card from '../../components/Card'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Smile, Frown, Meh } from 'lucide-react'

const sentimentData = [
  { name: 'Positive', value: 68, color: '#10B981' },
  { name: 'Neutral', value: 18, color: '#F59E0B' },
  { name: 'Negative', value: 14, color: '#EF4444' },
]

const sentimentTrend = [
  { month: 'Jan', positive: 62, neutral: 20, negative: 18 },
  { month: 'Feb', positive: 64, neutral: 19, negative: 17 },
  { month: 'Mar', positive: 65, neutral: 18, negative: 17 },
  { month: 'Apr', positive: 67, neutral: 17, negative: 16 },
  { month: 'May', positive: 68, neutral: 18, negative: 14 },
  { month: 'Jun', positive: 70, neutral: 16, negative: 14 },
]

const topPhrases = [
  { phrase: 'Excellent service', count: 156, sentiment: 'positive' },
  { phrase: 'Great experience', count: 142, sentiment: 'positive' },
  { phrase: 'Quick response', count: 128, sentiment: 'positive' },
  { phrase: 'Friendly staff', count: 115, sentiment: 'positive' },
  { phrase: 'Could improve', count: 87, sentiment: 'neutral' },
  { phrase: 'Long wait time', count: 62, sentiment: 'negative' },
  { phrase: 'Not satisfied', count: 45, sentiment: 'negative' },
]

export default function SentimentAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sentiment Analysis</h2>
        <p className="text-gray-600">Deep dive into customer emotions and feedback tone</p>
      </div>

      {/* Sentiment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Positive Sentiment"
          value="70%"
          change="↑ 2% from last month"
          changeType="positive"
          icon={Smile}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="Neutral Sentiment"
          value="16%"
          change="↓ 2% from last month"
          changeType="negative"
          icon={Meh}
          backgroundColor="bg-yellow-50"
        />
        <MetricCard
          title="Negative Sentiment"
          value="14%"
          change="↓ 3% from last month"
          changeType="positive"
          icon={Frown}
          backgroundColor="bg-red-50"
        />
      </div>

      {/* Sentiment Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Overall Sentiment Distribution" subtitle="Current month breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {sentimentData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Sentiment Trend" subtitle="Last 6 months">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sentimentTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="positive" stackId="a" fill="#10B981" name="Positive" />
              <Bar dataKey="neutral" stackId="a" fill="#F59E0B" name="Neutral" />
              <Bar dataKey="negative" stackId="a" fill="#EF4444" name="Negative" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Phrases & Keywords */}
      <Card title="Most Mentioned Phrases" subtitle="Frequency of key phrases in reviews">
        <div className="space-y-3">
          {topPhrases.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                  item.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.phrase}
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{item.count}</p>
                <p className="text-xs text-gray-500">mentions</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Sentiment Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Sentiment Momentum</p>
          <p className="text-3xl font-bold text-green-600">↑ Improving</p>
          <p className="text-xs text-gray-600 mt-2">+5% this quarter</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Mixed Sentiment Reviews</p>
          <p className="text-3xl font-bold text-gray-900">154</p>
          <p className="text-xs text-gray-600 mt-2">Both praise & criticism</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Emotion Intensity</p>
          <p className="text-3xl font-bold text-gray-900">7.2/10</p>
          <p className="text-xs text-gray-600 mt-2">Average strength</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Sarcasm Detected</p>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-xs text-gray-600 mt-2">Requires human review</p>
        </div>
      </div>
    </div>
  )
}
