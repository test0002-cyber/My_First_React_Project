import Card from '../../components/Card'

export default function RiskCompliance() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Risk & Compliance</h2>
        <p className="text-gray-600">Monitor reputation risks and regulatory compliance</p>
      </div>

      <Card title="Risk Dashboard" subtitle="Overall reputation health">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-2">Overall Risk Level</p>
            <p className="text-3xl font-bold text-green-600">LOW</p>
            <p className="text-xs text-green-800 mt-2">Score: 15/100 (lower is better)</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-600 mb-2">Crisis Probability</p>
            <p className="text-3xl font-bold text-yellow-600">3%</p>
            <p className="text-xs text-yellow-800 mt-2">Very unlikely</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600 mb-2">Sentiment Volatility</p>
            <p className="text-3xl font-bold text-blue-600">Stable</p>
            <p className="text-xs text-blue-800 mt-2">±2% fluctuation</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm text-gray-600 mb-2">Trust Index</p>
            <p className="text-3xl font-bold text-purple-600">8.7/10</p>
            <p className="text-xs text-purple-800 mt-2">Excellent trust</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Flagged Reviews" subtitle="Reviews requiring review">
          <div className="space-y-3">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-semibold text-red-900">⚠ Potential Legal Issue</p>
              <p className="text-sm text-red-800 mt-1">"They violated my privacy..." - Review ID #4521</p>
              <p className="text-xs text-red-700 mt-2">Action: Review and consider legal consultation</p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="font-semibold text-orange-900">→ Spam Detected</p>
              <p className="text-sm text-orange-800 mt-1">"Buy cheap products here..." - Review ID #4519</p>
              <p className="text-xs text-orange-700 mt-2">Action: Report for spam</p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="font-semibold text-yellow-900">♦ Potentially Fake</p>
              <p className="text-sm text-yellow-800 mt-1">"5 stars, amazing, best ever..." - Review ID #4517</p>
              <p className="text-xs text-yellow-700 mt-2">Action: Verify authenticity (85% confidence)</p>
            </div>
          </div>
        </Card>

        <Card title="Compliance Status" subtitle="Regulatory requirements">
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">✓ GDPR Compliant</p>
              <p className="text-sm text-green-800 mt-1">All customer data handling follows GDPR guidelines</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">✓ FTC Compliance</p>
              <p className="text-sm text-green-800 mt-1">Reviews properly disclosed and authentic</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900">✓ Accessibility Standards</p>
              <p className="text-sm text-green-800 mt-1">Dashboard meets WCAG 2.1 AA standards</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900">→ Data Privacy Review</p>
              <p className="text-sm text-yellow-800 mt-1">Annual audit due in 2 months</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Reputation Crisis Indicators" subtitle="Early warning signs">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Negative Review Spike</span>
              <span className="text-sm text-gray-600">0% (Normal: Less than 2%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Sentiment Shift Velocity</span>
              <span className="text-sm text-gray-600">Stable (Normal: Gradual)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Complaint Concentration</span>
              <span className="text-sm text-gray-600">Distributed (Normal: Scattered)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Media Coverage Risk</span>
              <span className="text-sm text-gray-600">Low (Normal: Low)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Recommended Risk Mitigation" subtitle="Proactive measures">
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900">✓ Continue Current Practices</p>
            <p className="text-sm text-blue-800 mt-1">Your current review management is excellent - maintain it</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-green-900">✓ Monthly Risk Audit</p>
            <p className="text-sm text-green-800 mt-1">Schedule monthly compliance review to stay ahead</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="font-semibold text-yellow-900">→ Crisis Response Plan</p>
            <p className="text-sm text-yellow-800 mt-1">Document procedures for handling negative review spikes</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
