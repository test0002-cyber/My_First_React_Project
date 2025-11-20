import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { Target, TrendingDown, Award } from 'lucide-react'

const competitorData = [
  { competitor: 'Your Business', rating: 4.8, reviews: 1240, response: 91 },
  { competitor: 'Competitor A', rating: 4.5, reviews: 2100, response: 72 },
  { competitor: 'Competitor B', rating: 4.3, reviews: 1850, response: 68 },
  { competitor: 'Competitor C', rating: 4.6, reviews: 1650, response: 85 },
]

const comparisonMetrics = [
  { metric: 'Average Rating', you: 4.8, industry: 4.4, gap: '+0.4' },
  { metric: 'Response Rate', you: 91, industry: 75, gap: '+16%' },
  { metric: 'Response Time', you: 2.4, industry: 4.2, gap: '-1.8h' },
  { metric: 'Positive Reviews', you: 85, industry: 72, gap: '+13%' },
]

export default function Competitive() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Competitive Analysis</h2>
        <p className="text-gray-600">Benchmark against competitors and market leaders</p>
      </div>

      {/* Competitive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Market Position"
          value="#1"
          change="↑ Top rated in category"
          changeType="positive"
          icon={Award}
          backgroundColor="bg-yellow-50"
        />
        <MetricCard
          title="Rating Advantage"
          value="+0.4★"
          change="vs category average"
          changeType="positive"
          icon={TrendingDown}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="Review Velocity"
          value="2.3x"
          change="vs category average"
          changeType="positive"
          icon={Target}
          backgroundColor="bg-blue-50"
        />
      </div>

      {/* Competitor Comparison */}
      <Card title="Direct Competitor Comparison" subtitle="Rating and review metrics">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Business</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Reviews</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Response Rate</th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((item, index) => (
                <tr key={index} className={`border-b border-gray-100 ${index === 0 ? 'bg-blue-50' : ''}`}>
                  <td className="py-3 px-4 font-medium text-gray-900">{item.competitor}</td>
                  <td className="py-3 px-4 text-gray-700">⭐ {item.rating}</td>
                  <td className="py-3 px-4 text-gray-700">{item.reviews.toLocaleString()}</td>
                  <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.response > 85 ? 'bg-green-100 text-green-800' :
                    item.response > 75 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>{item.response}%</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Performance Gap */}
      <Card title="Performance Gap Analysis" subtitle="How you compare to industry average">
        <div className="space-y-4">
          {comparisonMetrics.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.metric}</p>
                <p className="text-sm text-gray-600">You: {item.you} | Industry: {item.industry}</p>
              </div>
              <div className={`text-right px-4 py-2 rounded-lg ${
                item.gap.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <p className="font-bold">{item.gap}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Competitive Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Share of Voice</p>
          <p className="text-3xl font-bold text-gray-900">28%</p>
          <p className="text-xs text-green-600 mt-2">↑ Strongest brand</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Win Rate vs Top Competitor</p>
          <p className="text-3xl font-bold text-gray-900">67%</p>
          <p className="text-xs text-gray-600 mt-2">Customers choose you</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Feature Parity</p>
          <p className="text-3xl font-bold text-gray-900">95%</p>
          <p className="text-xs text-blue-600 mt-2">vs competitors</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Vulnerability Score</p>
          <p className="text-3xl font-bold text-green-600">Low</p>
          <p className="text-xs text-gray-600 mt-2">Well protected</p>
        </div>
      </div>

      {/* Strategic Insights */}
      <Card title="Strategic Recommendations" subtitle="Based on competitive analysis">
        <div className="space-y-3">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900">✓ Strength: Rating Leadership</p>
            <p className="text-sm text-green-800 mt-1">Maintain your 4.8 rating with consistent quality - this is your biggest advantage</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900">→ Opportunity: Scale Marketing</p>
            <p className="text-sm text-blue-800 mt-1">With 28% share of voice, investing in marketing could gain significant market share</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-900">↑ Focus Area: Review Volume</p>
            <p className="text-sm text-yellow-800 mt-1">Increase review collection campaigns to compete on volume with larger competitors</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
