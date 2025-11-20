import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { TrendingUp, AlertTriangle } from 'lucide-react'

export default function Predictive() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Predictive Analytics</h2>
        <p className="text-gray-600">Forecast trends and anticipate customer needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard
          title="Next Month Forecast"
          value="~315 reviews"
          change="↑ Based on current trend"
          changeType="positive"
          icon={TrendingUp}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Churn Risk Alert"
          value="42 customers"
          change="↑ 5 new at-risk"
          changeType="negative"
          icon={AlertTriangle}
          backgroundColor="bg-red-50"
        />
      </div>

      <Card title="Rating Forecast" subtitle="Predicted rating for next 3 months">
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900">July Forecast</p>
            <p className="text-3xl font-bold text-green-600 mt-2">4.85 ★</p>
            <p className="text-sm text-green-800 mt-1">↑ 0.05 improvement expected</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900">August Forecast</p>
            <p className="text-3xl font-bold text-green-600 mt-2">4.87 ★</p>
            <p className="text-sm text-green-800 mt-1">↑ 0.02 improvement expected</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900">September Forecast</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">4.82 ★</p>
            <p className="text-sm text-blue-800 mt-1">↓ Slight seasonal dip expected</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Churn Risk Score" subtitle="Customers likely to leave">
          <div className="space-y-3">
            {[
              { name: 'Sarah Mitchell', risk: 85, reason: 'Negative review trend' },
              { name: 'James Anderson', risk: 72, reason: 'Reduced engagement' },
              { name: 'Emily Watson', risk: 68, reason: 'Price sensitivity' },
              { name: 'David Brown', risk: 61, reason: 'Long response time' },
            ].map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    item.risk > 75 ? 'bg-red-100 text-red-800' :
                    item.risk > 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>{item.risk}%</span>
                </div>
                <p className="text-xs text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Growth Opportunity" subtitle="Expansion potential">
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">Upsell Potential</p>
              <p className="text-2xl font-bold text-green-600 mt-2">$1.2M</p>
              <p className="text-sm text-green-800 mt-1">156 customers likely to upgrade</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900">Cross-sell Potential</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">$850K</p>
              <p className="text-sm text-blue-800 mt-1">234 customers interested</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="font-semibold text-purple-900">Retention Value</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">$2.1M</p>
              <p className="text-sm text-purple-800 mt-1">Save from churn prevention</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Recommended Actions" subtitle="AI-powered recommendations">
        <div className="space-y-3">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-semibold text-red-900">🚨 URGENT: Reach out to Sarah Mitchell</p>
            <p className="text-sm text-red-800 mt-1">High churn risk (85%) - Schedule immediate call to resolve concerns</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="font-semibold text-yellow-900">→ Start upsell campaign</p>
            <p className="text-sm text-yellow-800 mt-1">Target 156 loyal customers with premium tier offer</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-green-900">✓ Maintain quality standards</p>
            <p className="text-sm text-green-800 mt-1">Current satisfaction is excellent - focus on consistency</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
