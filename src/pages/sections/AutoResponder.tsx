import React, { useState } from 'react'
import { MessageCircle, Star, Tag, Zap, Plus, Trash2, Edit2, ToggleLeft, ToggleRight, X } from 'lucide-react'
import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'

interface RuleCondition {
  id: string
  type: 'sentiment' | 'stars' | 'tags' | 'text-contains' | 'response-time' | 'language' | 'keyword' | 'reviewer-type' | 'no-text-review'
  value: string
  operator?: 'equals' | 'contains' | 'greater-than' | 'less-than' | 'between'
  secondValue?: string // For between operator
}

interface AutoRule {
  id: number
  name: string
  description?: string
  conditions: RuleCondition[]
  message: string
  enabled: boolean
  responseCount: number
  priority: 'low' | 'medium' | 'high'
  applyToMultiple: boolean
  excludeIfMatches?: string
}

export default function AutoResponder() {
  const [aiEnabled, setAiEnabled] = useState(false)
  const [showAddRule, setShowAddRule] = useState(false)
  const [editingRule, setEditingRule] = useState<number | null>(null)
  const [ruleName, setRuleName] = useState('')
  const [ruleDescription, setRuleDescription] = useState('')
  const [message, setMessage] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [applyToMultiple, setApplyToMultiple] = useState(true)
  const [conditions, setConditions] = useState<RuleCondition[]>([
    { id: '1', type: 'sentiment', value: 'positive' }
  ])

  const [rules, setRules] = useState<AutoRule[]>([
    {
      id: 1,
      name: 'Positive Feedback Thank You',
      description: 'Auto-reply to positive sentiment reviews',
      conditions: [{ id: '1', type: 'sentiment', value: 'positive' }],
      message: 'Thank you so much for the wonderful review! We appreciate your business.',
      enabled: true,
      responseCount: 156,
      priority: 'high',
      applyToMultiple: true,
    },
    {
      id: 2,
      name: '5-Star Premium Response',
      description: 'Special message for 5-star reviews with text',
      conditions: [
        { id: '1', type: 'stars', value: '5' },
        { id: '2', type: 'no-text-review', value: 'false' }
      ],
      message: 'Excellent! We are thrilled you had such a great experience. Your satisfaction is our priority!',
      enabled: true,
      responseCount: 89,
      priority: 'high',
      applyToMultiple: true,
    },
    {
      id: 3,
      name: 'Low Rating Quick Response',
      description: 'Priority response for low ratings',
      conditions: [
        { id: '1', type: 'stars', value: 'below-3' },
      ],
      message: 'We sincerely apologize for your experience. Please contact us directly so we can make it right.',
      enabled: true,
      responseCount: 23,
      priority: 'high',
      applyToMultiple: true,
    },
  ])

  const triggerOptions = [
    { value: 'sentiment', label: '😊 Sentiment', icon: '😊', desc: 'Based on review sentiment (positive/negative/neutral)' },
    { value: 'stars', label: '⭐ Star Rating', icon: '⭐', desc: 'Based on number of stars (1-5)' },
    { value: 'tags', label: '🏷️ Tags', icon: '🏷️', desc: 'Based on review tags or categories' },
    { value: 'text-contains', label: '📝 Text Contains', icon: '📝', desc: 'If review text contains specific keywords' },
    { value: 'no-text-review', label: '⊘ No Text Review', icon: '⊘', desc: 'Rating only without text review' },
    { value: 'response-time', label: '⏱️ Response Time', icon: '⏱️', desc: 'Based on days since review posted' },
    { value: 'language', label: '🌐 Language', icon: '🌐', desc: 'Based on review language' },
    { value: 'keyword', label: '🔑 Keyword Match', icon: '🔑', desc: 'If review mentions specific keywords' },
    { value: 'reviewer-type', label: '👤 Reviewer Type', icon: '👤', desc: 'First-time, repeat, or VIP customer' },
  ]

  const sentimentValues = [
    { value: 'positive', label: '😊 Positive' },
    { value: 'neutral', label: '😐 Neutral' },
    { value: 'negative', label: '😔 Negative' },
  ]

  const starValues = [
    { value: '5', label: '⭐⭐⭐⭐⭐ 5 Stars' },
    { value: '4', label: '⭐⭐⭐⭐ 4 Stars' },
    { value: '3', label: '⭐⭐⭐ 3 Stars' },
    { value: '2', label: '⭐⭐ 2 Stars' },
    { value: '1', label: '⭐ 1 Star' },
    { value: 'below-3', label: '⭐⭐ Below 3 Stars' },
    { value: '4-5', label: '⭐⭐⭐⭐ 4-5 Stars' },
  ]

  const tagValues = [
    { value: 'quality-issue', label: '🔴 Quality Issue' },
    { value: 'delivery-issue', label: '📦 Delivery Issue' },
    { value: 'customer-service', label: '💬 Customer Service' },
    { value: 'product-feature', label: '⚙️ Product Feature' },
    { value: 'pricing', label: '💰 Pricing' },
    { value: 'staff-friendly', label: '👥 Staff Friendly' },
    { value: 'shipping-speed', label: '🚚 Shipping Speed' },
    { value: 'packaging', label: '📦 Packaging' },
  ]

  const languageValues = [
    { value: 'en', label: '🇬🇧 English' },
    { value: 'es', label: '🇪🇸 Spanish' },
    { value: 'fr', label: '🇫🇷 French' },
    { value: 'de', label: '🇩🇪 German' },
    { value: 'it', label: '🇮🇹 Italian' },
    { value: 'pt', label: '🇵🇹 Portuguese' },
    { value: 'hi', label: '🇮🇳 Hindi' },
    { value: 'ja', label: '🇯🇵 Japanese' },
  ]

  const reviewerTypeValues = [
    { value: 'first-time', label: '🆕 First-time Customer' },
    { value: 'repeat', label: '🔄 Repeat Customer' },
    { value: 'vip', label: '👑 VIP Customer' },
  ]

  const operatorOptions = [
    { value: 'equals', label: 'Equals' },
    { value: 'contains', label: 'Contains' },
    { value: 'greater-than', label: 'Greater than' },
    { value: 'less-than', label: 'Less than' },
    { value: 'between', label: 'Between' },
  ]

  const getValuesForType = (type: string) => {
    switch(type) {
      case 'sentiment': return sentimentValues
      case 'stars': return starValues
      case 'tags': return tagValues
      case 'language': return languageValues
      case 'reviewer-type': return reviewerTypeValues
      case 'no-text-review': return [
        { value: 'true', label: '✓ No Text' },
        { value: 'false', label: '✗ Has Text' }
      ]
      case 'response-time': return [
        { value: '24', label: 'Within 24 hours' },
        { value: '3', label: 'Within 3 days' },
        { value: '7', label: 'Within 7 days' },
        { value: '14', label: 'Older than 14 days' },
      ]
      default: return []
    }
  }

  const addCondition = () => {
    const newId = Math.max(...conditions.map(c => parseInt(c.id)), 0) + 1
    setConditions([...conditions, { id: newId.toString(), type: 'sentiment', value: 'positive' }])
  }

  const removeCondition = (id: string) => {
    if (conditions.length > 1) {
      setConditions(conditions.filter(c => c.id !== id))
    }
  }

  const updateCondition = (id: string, field: string, value: any) => {
    setConditions(conditions.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    ))
  }

  const handleAddRule = () => {
    if (!ruleName || conditions.length === 0 || !message) {
      alert('Please fill in rule name, add at least one condition, and write a response message')
      return
    }

    if (editingRule !== null) {
      setRules(rules.map(r =>
        r.id === editingRule
          ? {
              ...r,
              name: ruleName,
              description: ruleDescription,
              conditions,
              message,
              priority,
              applyToMultiple
            }
          : r
      ))
      setEditingRule(null)
    } else {
      const newRule: AutoRule = {
        id: Math.max(...rules.map(r => r.id), 0) + 1,
        name: ruleName,
        description: ruleDescription,
        conditions,
        message,
        enabled: true,
        responseCount: 0,
        priority,
        applyToMultiple,
      }
      setRules([...rules, newRule])
    }

    resetForm()
  }

  const resetForm = () => {
    setRuleName('')
    setRuleDescription('')
    setMessage('')
    setPriority('medium')
    setApplyToMultiple(true)
    setConditions([{ id: '1', type: 'sentiment', value: 'positive' }])
    setShowAddRule(false)
    setEditingRule(null)
  }

  const handleEditRule = (rule: AutoRule) => {
    setEditingRule(rule.id)
    setRuleName(rule.name)
    setRuleDescription(rule.description || '')
    setConditions(rule.conditions)
    setMessage(rule.message)
    setPriority(rule.priority)
    setApplyToMultiple(rule.applyToMultiple)
    setShowAddRule(true)
  }

  const handleDeleteRule = (id: number) => {
    if (confirm('Are you sure you want to delete this rule?')) {
      setRules(rules.filter(r => r.id !== id))
    }
  }

  const handleToggleRule = (id: number) => {
    setRules(rules.map(r =>
      r.id === id ? { ...r, enabled: !r.enabled } : r
    ))
  }

  const getConditionDisplay = (condition: RuleCondition) => {
    const triggerType = triggerOptions.find(o => o.value === condition.type)
    return triggerType ? triggerType.label : condition.type
  }

  const totalResponses = rules.reduce((sum, rule) => sum + rule.responseCount, 0)
  const enabledRules = rules.filter(r => r.enabled).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Auto Responder</h1>
          <p className="text-gray-600 mt-2">Create advanced rules with multiple conditions to automatically respond to reviews</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Active Rules"
          value={enabledRules.toString()}
          icon={MessageCircle}
          backgroundColor="bg-blue-50"
        />
        <MetricCard
          title="Total Rules"
          value={rules.length.toString()}
          icon={Tag}
          backgroundColor="bg-purple-50"
        />
        <MetricCard
          title="Total Responses"
          value={totalResponses.toString()}
          icon={Zap}
          backgroundColor="bg-green-50"
        />
        <MetricCard
          title="AI Responder"
          value={aiEnabled ? 'ON' : 'OFF'}
          icon={Zap}
          backgroundColor={aiEnabled ? 'bg-green-50' : 'bg-gray-50'}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Rules Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Auto Responder */}
          <Card title="AI Auto Responder">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable AI-Powered Responses</h3>
                    <p className="text-sm text-gray-600">
                      Let our AI automatically craft personalized responses to reviews using advanced NLP
                    </p>
                  </div>
                  <button
                    onClick={() => setAiEnabled(!aiEnabled)}
                    className="flex-shrink-0"
                  >
                    {aiEnabled ? (
                      <ToggleRight className="w-12 h-12 text-green-600" />
                    ) : (
                      <ToggleLeft className="w-12 h-12 text-gray-400" />
                    )}
                  </button>
                </div>

                {aiEnabled && (
                  <div className="mt-4 pt-4 border-t border-purple-200 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      AI Model: GPT-4 (Advanced NLP)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Tone Detection: Enabled
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Context Understanding: Enabled
                    </div>
                    <div className="mt-3 bg-white rounded p-3 border border-purple-200">
                      <p className="text-xs font-semibold text-gray-700 mb-2">AI Confidence Score: 94%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">💡 Tip:</span> You can create rules with multiple conditions. For example: (5 Stars AND has text) OR (Negative sentiment AND contains keyword)
                </p>
              </div>
            </div>
          </Card>

          {/* Rules Configuration */}
          <Card title="Advanced Response Rules">
            <div className="space-y-4">
              <button
                onClick={() => {
                  resetForm()
                  setShowAddRule(!showAddRule)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
              >
                <Plus className="w-5 h-5" />
                Create New Rule
              </button>

              {/* Add/Edit Rule Form */}
              {showAddRule && (
                <div className="p-4 bg-gradient-to-b from-blue-50 to-transparent rounded-lg border-2 border-blue-200 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Rule Name *</label>
                      <input
                        type="text"
                        value={ruleName}
                        onChange={(e) => setRuleName(e.target.value)}
                        placeholder="e.g., VIP 5-Star Thank You"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Priority Level</label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as any)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="low">🔵 Low</option>
                        <option value="medium">🟡 Medium</option>
                        <option value="high">🔴 High</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description (Optional)</label>
                    <input
                      type="text"
                      value={ruleDescription}
                      onChange={(e) => setRuleDescription(e.target.value)}
                      placeholder="e.g., For VIP customers who give 5 stars with detailed feedback"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Conditions */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Conditions (AND Logic)</h4>
                      <button
                        onClick={addCondition}
                        className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" />
                        Add Condition
                      </button>
                    </div>

                    <div className="space-y-3 bg-white rounded-lg p-3 border border-gray-200">
                      {conditions.map((condition, index) => (
                        <div key={condition.id} className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            {index > 0 && (
                              <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">AND</span>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div>
                              <select
                                value={condition.type}
                                onChange={(e) => updateCondition(condition.id, 'type', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                {triggerOptions.map(opt => (
                                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                              </select>
                              <p className="text-xs text-gray-500 mt-1">{triggerOptions.find(o => o.value === condition.type)?.desc}</p>
                            </div>

                            {['text-contains', 'keyword'].includes(condition.type) && (
                              <>
                                <div>
                                  <select
                                    value={condition.operator || 'contains'}
                                    onChange={(e) => updateCondition(condition.id, 'operator', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >
                                    {operatorOptions.filter(o => ['contains', 'equals'].includes(o.value)).map(opt => (
                                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    value={condition.value}
                                    onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                                    placeholder="Enter keyword..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </>
                            )}

                            {condition.type === 'response-time' && (
                              <>
                                <div>
                                  <select
                                    value={condition.operator || 'greater-than'}
                                    onChange={(e) => updateCondition(condition.id, 'operator', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >
                                    {[
                                      { value: 'less-than', label: 'Less than' },
                                      { value: 'greater-than', label: 'Greater than' },
                                      { value: 'between', label: 'Between' }
                                    ].map(opt => (
                                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    value={condition.value}
                                    onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                                    placeholder="Days..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </>
                            )}

                            {!['text-contains', 'keyword', 'response-time'].includes(condition.type) && (
                              <div>
                                <select
                                  value={condition.value}
                                  onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="">Select value...</option>
                                  {getValuesForType(condition.type).map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                  ))}
                                </select>
                              </div>
                            )}

                            {conditions.length > 1 && (
                              <button
                                onClick={() => removeCondition(condition.id)}
                                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Response Message *</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter the automatic response message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={5}
                    />
                    <p className="text-xs text-gray-500 mt-2">{message.length} / 1000 characters</p>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={applyToMultiple}
                        onChange={(e) => setApplyToMultiple(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">Apply to all matching reviews (batch mode)</span>
                    </label>
                  </div>

                  <div className="flex gap-3 justify-end border-t pt-4">
                    <button
                      onClick={resetForm}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddRule}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
                    >
                      {editingRule ? 'Update Rule' : 'Create Rule'}
                    </button>
                  </div>
                </div>
              )}

              {/* Rules List */}
              <div className="space-y-3">
                {rules.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                    <p className="text-lg font-semibold">No rules configured yet</p>
                    <p className="text-sm">Create your first rule to start auto-responding to reviews</p>
                  </div>
                ) : (
                  rules.map((rule) => (
                    <div
                      key={rule.id}
                      className={`p-4 rounded-lg border-l-4 transition-all ${
                        rule.enabled
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-bold text-lg ${rule.enabled ? 'text-gray-900' : 'text-gray-500'}`}>
                              {rule.name}
                            </h3>
                            <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${
                              rule.priority === 'high' ? 'bg-red-100 text-red-700' :
                              rule.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {rule.priority === 'high' ? '🔴' : rule.priority === 'medium' ? '🟡' : '🔵'} {rule.priority.toUpperCase()}
                            </span>
                          </div>
                          {rule.description && (
                            <p className="text-sm text-gray-600 mb-2">{rule.description}</p>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {rule.conditions.map((cond, idx) => (
                              <span key={cond.id} className="text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700">
                                {idx > 0 && 'AND '}{getConditionDisplay(cond)}: {cond.value}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleRule(rule.id)}
                            className="p-2 hover:bg-white rounded-lg transition-all"
                          >
                            {rule.enabled ? (
                              <ToggleRight className="w-6 h-6 text-green-600" />
                            ) : (
                              <ToggleLeft className="w-6 h-6 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <p className={`text-sm mb-3 leading-relaxed border-y py-2 ${
                        rule.enabled ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {rule.message}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span><strong>{rule.responseCount}</strong> responses sent</span>
                          {rule.applyToMultiple && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Batch Mode</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditRule(rule)}
                            className="p-2 text-gray-600 hover:bg-white rounded-lg transition-all"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteRule(rule.id)}
                            className="p-2 text-red-600 hover:bg-white rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Activity Summary */}
          <Card title="Activity Summary">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-700">Response Rate</p>
                  <p className="text-lg font-bold text-blue-600">87%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Responses Today</span>
                  <span className="font-semibold text-gray-900">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-semibold text-gray-900">156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold text-gray-900">612</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Available Triggers */}
          <Card title="Available Rule Triggers">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {triggerOptions.map(opt => (
                <div key={opt.value} className="p-2 rounded bg-gray-50 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">{opt.icon} {opt.label}</p>
                  <p className="text-xs text-gray-600 mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Tips & Best Practices */}
          <Card title="Best Practices">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="text-lg">✓</span>
                <p>Combine multiple conditions for precise targeting</p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">✓</span>
                <p>Use high priority for critical customer issues</p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">✓</span>
                <p>Test rules with a few reviews first</p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">✓</span>
                <p>Personalize messages for better engagement</p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">✓</span>
                <p>Review and edit AI responses before sending</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
