import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { Zap, TrendingUp, AlertTriangle, Award, Brain, Zap as InsightIcon } from 'lucide-react'

export default function AdvancedAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics & AI Insights</h2>
        <p className="text-gray-600">Deep machine learning insights, 120+ metrics, and predictive analytics</p>
      </div>

      {/* AI-Powered Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="AI Confidence"
          value="94%"
          change="High confidence in predictions"
          changeType="positive"
          icon={Brain}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Patterns Found"
          value="127"
          change="Unique patterns detected"
          changeType="neutral"
          icon={TrendingUp}
          backgroundColor="bg-purple-50"
        />
        <MetricCard
          title="Anomalies"
          value="3"
          change="Requires attention"
          changeType="negative"
          icon={AlertTriangle}
          backgroundColor="bg-red-50"
        />
        <MetricCard
          title="Data Quality"
          value="98%"
          change="Excellent integrity"
          changeType="positive"
          icon={Award}
          backgroundColor="bg-green-50"
        />
      </div>

      {/* 120+ Insights Catalog */}
      <Card title="Complete Insights Catalog (120+ Metrics)" subtitle="All available metrics from Google Reviews API">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="font-semibold text-blue-900 mb-3">📊 Foundational (10)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Total Reviews Count</li>
              <li>✓ Average Rating (4.8★)</li>
              <li>✓ Rating Distribution</li>
              <li>✓ Response Rate (91%)</li>
              <li>✓ Review Velocity (247/mo)</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="font-semibold text-purple-900 mb-3">📈 Analytical (30)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Sentiment Analysis (70%+)</li>
              <li>✓ Topic Extraction</li>
              <li>✓ Growth Trends (+28.6%)</li>
              <li>✓ Pain Points Analysis</li>
              <li>✓ Key Phrase Mining</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="font-semibold text-green-900 mb-3">🎯 Intelligent (20)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Churn Prediction (12%)</li>
              <li>✓ Customer Segmentation</li>
              <li>✓ Competitive Gap (+0.3★)</li>
              <li>✓ Behavior Patterns</li>
              <li>✓ Loyalty Scoring (7.8/10)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="font-semibold text-yellow-900 mb-3">🚀 Strategic (20)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Revenue Attribution ($48.5K)</li>
              <li>✓ Market Position (1st)</li>
              <li>✓ Innovation Signals</li>
              <li>✓ Risk Assessment</li>
              <li>✓ Resource Planning</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="font-semibold text-red-900 mb-3">⚠️ Risk & Compliance (15)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Crisis Probability (8%)</li>
              <li>✓ Regulatory Issues</li>
              <li>✓ Privacy Concerns</li>
              <li>✓ Safety Alerts</li>
              <li>✓ Legal Risk Score</li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
            <p className="font-semibold text-indigo-900 mb-3">🔬 Advanced (25+)</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ NLP Analysis</li>
              <li>✓ Entity Recognition</li>
              <li>✓ Semantic Clustering</li>
              <li>✓ Attribution Models</li>
              <li>✓ Predictive Analytics</li>
            </ul>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">120+</p>
            <p className="text-xs text-gray-600 mt-1">Total Insights</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">10</p>
            <p className="text-xs text-gray-600 mt-1">Categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">15</p>
            <p className="text-xs text-gray-600 mt-1">Real-time Metrics</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">98%</p>
            <p className="text-xs text-gray-600 mt-1">API Coverage</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Topic Clustering" subtitle="Discovered topics in customer reviews">
          <div className="space-y-3">
            {[
              { topic: 'Service Quality', relevance: 94, mentions: 312 },
              { topic: 'Wait Times', relevance: 87, mentions: 256 },
              { topic: 'Staff Attitude', relevance: 85, mentions: 198 },
              { topic: 'Pricing', relevance: 72, mentions: 167 },
              { topic: 'Cleanliness', relevance: 68, mentions: 156 },
              { topic: 'Product Quality', relevance: 82, mentions: 234 },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{item.topic}</span>
                  <span className="text-gray-600">{item.mentions} mentions</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${item.relevance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Entity Recognition" subtitle="Most mentioned entities">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900">Staff Members</p>
              <p className="text-sm text-blue-800 mt-1">John: 42 mentions, Emma: 38 mentions, Mike: 35 mentions</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">Products</p>
              <p className="text-sm text-green-800 mt-1">Premium Service: 89 mentions, Standard Plan: 67 mentions</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900">Issues</p>
              <p className="text-sm text-yellow-800 mt-1">Long wait: 42 mentions, Wrong order: 18 mentions</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="font-semibold text-purple-900">Locations</p>
              <p className="text-sm text-purple-800 mt-1">Downtown: 128 mentions, Mall Branch: 95 mentions</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Anomaly Detection" subtitle="Unusual patterns flagged by ML">
        <div className="space-y-3">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-semibold text-red-900">⚠ Suspicious Activity Detected</p>
            <p className="text-sm text-red-800 mt-1">12 similar 1-star reviews from different IPs - Possible review bombing</p>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="font-semibold text-orange-900">↓ Sudden Drop in Ratings</p>
            <p className="text-sm text-orange-800 mt-1">Rating dropped 0.3 points in 2 days - Investigate recent changes</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="font-semibold text-yellow-900">→ Spam Review Detected</p>
            <p className="text-sm text-yellow-800 mt-1">8 reviews likely promotional content - 95% confidence</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Semantic Similarity" subtitle="Similar reviews grouped">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900">Cluster 1: Positive Service Experience</p>
              <p className="text-xs text-gray-600 mt-1">142 reviews | Common phrases: 'excellent', 'fast', 'friendly'</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900">Cluster 2: Wait Time Complaints</p>
              <p className="text-xs text-gray-600 mt-1">87 reviews | Common phrases: 'long wait', 'slow', 'delayed'</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900">Cluster 3: Product Quality Praise</p>
              <p className="text-xs text-gray-600 mt-1">124 reviews | Common phrases: 'high quality', 'excellent product'</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900">Cluster 4: Pricing Concerns</p>
              <p className="text-xs text-gray-600 mt-1">56 reviews | Common phrases: 'expensive', 'overpriced', 'not worth'</p>
            </div>
          </div>
        </Card>

        <Card title="Pattern Recognition" subtitle="Hidden patterns discovered">
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">✓ Quality Consistency</p>
              <p className="text-sm text-green-800 mt-1">Morning shifts outperform by 8% - Staff training working</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900">→ Seasonal Pattern</p>
              <p className="text-sm text-blue-800 mt-1">Summer months see 23% more reviews - Plan accordingly</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900">↑ Response Impact</p>
              <p className="text-sm text-yellow-800 mt-1">Personalized responses get 34% more engagement</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="font-semibold text-purple-900">📈 Photo Boost</p>
              <p className="text-sm text-purple-800 mt-1">Reviews with photos get 2.5x more visibility</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
