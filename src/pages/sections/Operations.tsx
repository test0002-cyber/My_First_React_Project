import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { Zap, Gauge } from 'lucide-react'

export default function Operations() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Operations</h2>
        <p className="text-gray-600">Operational efficiency and quality metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard
          title="Operational Efficiency"
          value="94%"
          change="↑ 6% improvement"
          changeType="positive"
          icon={Gauge}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Quality Score"
          value="8.6/10"
          change="↑ Up from 8.2 last month"
          changeType="positive"
          icon={Zap}
          backgroundColor="bg-purple-50"
        />
      </div>

      <Card title="Quality Metrics" subtitle="Performance indicators">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Consistency Score</span>
              <span className="text-2xl font-bold text-green-600">92%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Defect Rate</span>
              <span className="text-2xl font-bold text-red-600">3.2%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Service Uptime</span>
              <span className="text-2xl font-bold text-blue-600">99.7%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Order Accuracy</span>
              <span className="text-2xl font-bold text-green-600">98.5%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Delivery Timeliness</span>
              <span className="text-2xl font-bold text-green-600">96%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Cost Efficiency</span>
              <span className="text-2xl font-bold text-blue-600">87%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Process Improvements" subtitle="Areas for optimization">
        <div className="space-y-3">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="font-semibold text-yellow-900">↑ Increase Response Speed</p>
            <p className="text-sm text-yellow-800 mt-1">Potential to reduce response time by 30% with automation</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900">→ Staff Training Program</p>
            <p className="text-sm text-blue-800 mt-1">Training needed to improve service quality to 95%</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-green-900">✓ Peak Performance Achieved</p>
            <p className="text-sm text-green-800 mt-1">Maintain current quality standards and uptime</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
