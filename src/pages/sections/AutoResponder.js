import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { MessageCircle, Tag, Zap, Plus, Trash2, Edit2, ToggleLeft, ToggleRight, X } from 'lucide-react';
import Card from '../../components/Card';
import MetricCard from '../../components/MetricCard';
export default function AutoResponder() {
    const [aiEnabled, setAiEnabled] = useState(false);
    const [showAddRule, setShowAddRule] = useState(false);
    const [editingRule, setEditingRule] = useState(null);
    const [ruleName, setRuleName] = useState('');
    const [ruleDescription, setRuleDescription] = useState('');
    const [message, setMessage] = useState('');
    const [priority, setPriority] = useState('medium');
    const [applyToMultiple, setApplyToMultiple] = useState(true);
    const [conditions, setConditions] = useState([
        { id: '1', type: 'sentiment', value: 'positive' }
    ]);
    const [rules, setRules] = useState([
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
    ]);
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
    ];
    const sentimentValues = [
        { value: 'positive', label: '😊 Positive' },
        { value: 'neutral', label: '😐 Neutral' },
        { value: 'negative', label: '😔 Negative' },
    ];
    const starValues = [
        { value: '5', label: '⭐⭐⭐⭐⭐ 5 Stars' },
        { value: '4', label: '⭐⭐⭐⭐ 4 Stars' },
        { value: '3', label: '⭐⭐⭐ 3 Stars' },
        { value: '2', label: '⭐⭐ 2 Stars' },
        { value: '1', label: '⭐ 1 Star' },
        { value: 'below-3', label: '⭐⭐ Below 3 Stars' },
        { value: '4-5', label: '⭐⭐⭐⭐ 4-5 Stars' },
    ];
    const tagValues = [
        { value: 'quality-issue', label: '🔴 Quality Issue' },
        { value: 'delivery-issue', label: '📦 Delivery Issue' },
        { value: 'customer-service', label: '💬 Customer Service' },
        { value: 'product-feature', label: '⚙️ Product Feature' },
        { value: 'pricing', label: '💰 Pricing' },
        { value: 'staff-friendly', label: '👥 Staff Friendly' },
        { value: 'shipping-speed', label: '🚚 Shipping Speed' },
        { value: 'packaging', label: '📦 Packaging' },
    ];
    const languageValues = [
        { value: 'en', label: '🇬🇧 English' },
        { value: 'es', label: '🇪🇸 Spanish' },
        { value: 'fr', label: '🇫🇷 French' },
        { value: 'de', label: '🇩🇪 German' },
        { value: 'it', label: '🇮🇹 Italian' },
        { value: 'pt', label: '🇵🇹 Portuguese' },
        { value: 'hi', label: '🇮🇳 Hindi' },
        { value: 'ja', label: '🇯🇵 Japanese' },
    ];
    const reviewerTypeValues = [
        { value: 'first-time', label: '🆕 First-time Customer' },
        { value: 'repeat', label: '🔄 Repeat Customer' },
        { value: 'vip', label: '👑 VIP Customer' },
    ];
    const operatorOptions = [
        { value: 'equals', label: 'Equals' },
        { value: 'contains', label: 'Contains' },
        { value: 'greater-than', label: 'Greater than' },
        { value: 'less-than', label: 'Less than' },
        { value: 'between', label: 'Between' },
    ];
    const getValuesForType = (type) => {
        switch (type) {
            case 'sentiment': return sentimentValues;
            case 'stars': return starValues;
            case 'tags': return tagValues;
            case 'language': return languageValues;
            case 'reviewer-type': return reviewerTypeValues;
            case 'no-text-review': return [
                { value: 'true', label: '✓ No Text' },
                { value: 'false', label: '✗ Has Text' }
            ];
            case 'response-time': return [
                { value: '24', label: 'Within 24 hours' },
                { value: '3', label: 'Within 3 days' },
                { value: '7', label: 'Within 7 days' },
                { value: '14', label: 'Older than 14 days' },
            ];
            default: return [];
        }
    };
    const addCondition = () => {
        const newId = Math.max(...conditions.map(c => parseInt(c.id)), 0) + 1;
        setConditions([...conditions, { id: newId.toString(), type: 'sentiment', value: 'positive' }]);
    };
    const removeCondition = (id) => {
        if (conditions.length > 1) {
            setConditions(conditions.filter(c => c.id !== id));
        }
    };
    const updateCondition = (id, field, value) => {
        setConditions(conditions.map(c => c.id === id ? { ...c, [field]: value } : c));
    };
    const handleAddRule = () => {
        if (!ruleName || conditions.length === 0 || !message) {
            alert('Please fill in rule name, add at least one condition, and write a response message');
            return;
        }
        if (editingRule !== null) {
            setRules(rules.map(r => r.id === editingRule
                ? {
                    ...r,
                    name: ruleName,
                    description: ruleDescription,
                    conditions,
                    message,
                    priority,
                    applyToMultiple
                }
                : r));
            setEditingRule(null);
        }
        else {
            const newRule = {
                id: Math.max(...rules.map(r => r.id), 0) + 1,
                name: ruleName,
                description: ruleDescription,
                conditions,
                message,
                enabled: true,
                responseCount: 0,
                priority,
                applyToMultiple,
            };
            setRules([...rules, newRule]);
        }
        resetForm();
    };
    const resetForm = () => {
        setRuleName('');
        setRuleDescription('');
        setMessage('');
        setPriority('medium');
        setApplyToMultiple(true);
        setConditions([{ id: '1', type: 'sentiment', value: 'positive' }]);
        setShowAddRule(false);
        setEditingRule(null);
    };
    const handleEditRule = (rule) => {
        setEditingRule(rule.id);
        setRuleName(rule.name);
        setRuleDescription(rule.description || '');
        setConditions(rule.conditions);
        setMessage(rule.message);
        setPriority(rule.priority);
        setApplyToMultiple(rule.applyToMultiple);
        setShowAddRule(true);
    };
    const handleDeleteRule = (id) => {
        if (confirm('Are you sure you want to delete this rule?')) {
            setRules(rules.filter(r => r.id !== id));
        }
    };
    const handleToggleRule = (id) => {
        setRules(rules.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
    };
    const getConditionDisplay = (condition) => {
        const triggerType = triggerOptions.find(o => o.value === condition.type);
        return triggerType ? triggerType.label : condition.type;
    };
    const totalResponses = rules.reduce((sum, rule) => sum + rule.responseCount, 0);
    const enabledRules = rules.filter(r => r.enabled).length;
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Auto Responder" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Create advanced rules with multiple conditions to automatically respond to reviews" })] }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(MetricCard, { title: "Active Rules", value: enabledRules.toString(), icon: MessageCircle, backgroundColor: "bg-blue-50" }), _jsx(MetricCard, { title: "Total Rules", value: rules.length.toString(), icon: Tag, backgroundColor: "bg-purple-50" }), _jsx(MetricCard, { title: "Total Responses", value: totalResponses.toString(), icon: Zap, backgroundColor: "bg-green-50" }), _jsx(MetricCard, { title: "AI Responder", value: aiEnabled ? 'ON' : 'OFF', icon: Zap, backgroundColor: aiEnabled ? 'bg-green-50' : 'bg-gray-50' })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsx(Card, { title: "AI Auto Responder", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Enable AI-Powered Responses" }), _jsx("p", { className: "text-sm text-gray-600", children: "Let our AI automatically craft personalized responses to reviews using advanced NLP" })] }), _jsx("button", { onClick: () => setAiEnabled(!aiEnabled), className: "flex-shrink-0", children: aiEnabled ? (_jsx(ToggleRight, { className: "w-12 h-12 text-green-600" })) : (_jsx(ToggleLeft, { className: "w-12 h-12 text-gray-400" })) })] }), aiEnabled && (_jsxs("div", { className: "mt-4 pt-4 border-t border-purple-200 space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }), "AI Model: GPT-4 (Advanced NLP)"] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }), "Tone Detection: Enabled"] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }), "Context Understanding: Enabled"] }), _jsxs("div", { className: "mt-3 bg-white rounded p-3 border border-purple-200", children: [_jsx("p", { className: "text-xs font-semibold text-gray-700 mb-2", children: "AI Confidence Score: 94%" }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: '94%' } }) })] })] }))] }), _jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: _jsxs("p", { className: "text-sm text-blue-900", children: [_jsx("span", { className: "font-semibold", children: "\uD83D\uDCA1 Tip:" }), " You can create rules with multiple conditions. For example: (5 Stars AND has text) OR (Negative sentiment AND contains keyword)"] }) })] }) }), _jsx(Card, { title: "Advanced Response Rules", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("button", { onClick: () => {
                                                resetForm();
                                                setShowAddRule(!showAddRule);
                                            }, className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold", children: [_jsx(Plus, { className: "w-5 h-5" }), "Create New Rule"] }), showAddRule && (_jsxs("div", { className: "p-4 bg-gradient-to-b from-blue-50 to-transparent rounded-lg border-2 border-blue-200 space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Rule Name *" }), _jsx("input", { type: "text", value: ruleName, onChange: (e) => setRuleName(e.target.value), placeholder: "e.g., VIP 5-Star Thank You", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Priority Level" }), _jsxs("select", { value: priority, onChange: (e) => setPriority(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "low", children: "\uD83D\uDD35 Low" }), _jsx("option", { value: "medium", children: "\uD83D\uDFE1 Medium" }), _jsx("option", { value: "high", children: "\uD83D\uDD34 High" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Description (Optional)" }), _jsx("input", { type: "text", value: ruleDescription, onChange: (e) => setRuleDescription(e.target.value), placeholder: "e.g., For VIP customers who give 5 stars with detailed feedback", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "border-t pt-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Conditions (AND Logic)" }), _jsxs("button", { onClick: addCondition, className: "text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1", children: [_jsx(Plus, { className: "w-4 h-4" }), "Add Condition"] })] }), _jsx("div", { className: "space-y-3 bg-white rounded-lg p-3 border border-gray-200", children: conditions.map((condition, index) => (_jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "flex items-center gap-2 mb-2", children: index > 0 && (_jsx("span", { className: "text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded", children: "AND" })) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: [_jsxs("div", { children: [_jsx("select", { value: condition.type, onChange: (e) => updateCondition(condition.id, 'type', e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: triggerOptions.map(opt => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: triggerOptions.find(o => o.value === condition.type)?.desc })] }), ['text-contains', 'keyword'].includes(condition.type) && (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("select", { value: condition.operator || 'contains', onChange: (e) => updateCondition(condition.id, 'operator', e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: operatorOptions.filter(o => ['contains', 'equals'].includes(o.value)).map(opt => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx("div", { children: _jsx("input", { type: "text", value: condition.value, onChange: (e) => updateCondition(condition.id, 'value', e.target.value), placeholder: "Enter keyword...", className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" }) })] })), condition.type === 'response-time' && (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("select", { value: condition.operator || 'greater-than', onChange: (e) => updateCondition(condition.id, 'operator', e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: [
                                                                                                { value: 'less-than', label: 'Less than' },
                                                                                                { value: 'greater-than', label: 'Greater than' },
                                                                                                { value: 'between', label: 'Between' }
                                                                                            ].map(opt => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx("div", { children: _jsx("input", { type: "number", value: condition.value, onChange: (e) => updateCondition(condition.id, 'value', e.target.value), placeholder: "Days...", className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" }) })] })), !['text-contains', 'keyword', 'response-time'].includes(condition.type) && (_jsx("div", { children: _jsxs("select", { value: condition.value, onChange: (e) => updateCondition(condition.id, 'value', e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "Select value..." }), getValuesForType(condition.type).map(opt => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }) })), conditions.length > 1 && (_jsx("button", { onClick: () => removeCondition(condition.id), className: "px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all", children: _jsx(X, { className: "w-4 h-4" }) }))] })] }, condition.id))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Response Message *" }), _jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Enter the automatic response message...", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none", rows: 5 }), _jsxs("p", { className: "text-xs text-gray-500 mt-2", children: [message.length, " / 1000 characters"] })] }), _jsx("div", { className: "flex items-center gap-4 p-3 bg-gray-50 rounded-lg", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: applyToMultiple, onChange: (e) => setApplyToMultiple(e.target.checked), className: "w-4 h-4 text-blue-600 rounded" }), _jsx("span", { className: "text-sm font-medium text-gray-700", children: "Apply to all matching reviews (batch mode)" })] }) }), _jsxs("div", { className: "flex gap-3 justify-end border-t pt-4", children: [_jsx("button", { onClick: resetForm, className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold", children: "Cancel" }), _jsx("button", { onClick: handleAddRule, className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold", children: editingRule ? 'Update Rule' : 'Create Rule' })] })] })), _jsx("div", { className: "space-y-3", children: rules.length === 0 ? (_jsxs("div", { className: "text-center py-12 text-gray-500 bg-gray-50 rounded-lg", children: [_jsx("p", { className: "text-lg font-semibold", children: "No rules configured yet" }), _jsx("p", { className: "text-sm", children: "Create your first rule to start auto-responding to reviews" })] })) : (rules.map((rule) => (_jsxs("div", { className: `p-4 rounded-lg border-l-4 transition-all ${rule.enabled
                                                    ? 'border-green-500 bg-green-50'
                                                    : 'border-gray-300 bg-gray-50'}`, children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h3", { className: `font-bold text-lg ${rule.enabled ? 'text-gray-900' : 'text-gray-500'}`, children: rule.name }), _jsxs("span", { className: `inline-block px-2 py-1 text-xs font-bold rounded ${rule.priority === 'high' ? 'bg-red-100 text-red-700' :
                                                                                    rule.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                                                                        'bg-blue-100 text-blue-700'}`, children: [rule.priority === 'high' ? '🔴' : rule.priority === 'medium' ? '🟡' : '🔵', " ", rule.priority.toUpperCase()] })] }), rule.description && (_jsx("p", { className: "text-sm text-gray-600 mb-2", children: rule.description })), _jsx("div", { className: "flex flex-wrap gap-2", children: rule.conditions.map((cond, idx) => (_jsxs("span", { className: "text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700", children: [idx > 0 && 'AND ', getConditionDisplay(cond), ": ", cond.value] }, cond.id))) })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx("button", { onClick: () => handleToggleRule(rule.id), className: "p-2 hover:bg-white rounded-lg transition-all", children: rule.enabled ? (_jsx(ToggleRight, { className: "w-6 h-6 text-green-600" })) : (_jsx(ToggleLeft, { className: "w-6 h-6 text-gray-400" })) }) })] }), _jsx("p", { className: `text-sm mb-3 leading-relaxed border-y py-2 ${rule.enabled ? 'text-gray-700' : 'text-gray-500'}`, children: rule.message }), _jsxs("div", { className: "flex items-center justify-between pt-2", children: [_jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [_jsxs("span", { children: [_jsx("strong", { children: rule.responseCount }), " responses sent"] }), rule.applyToMultiple && (_jsx("span", { className: "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded", children: "Batch Mode" }))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => handleEditRule(rule), className: "p-2 text-gray-600 hover:bg-white rounded-lg transition-all", children: _jsx(Edit2, { className: "w-4 h-4" }) }), _jsx("button", { onClick: () => handleDeleteRule(rule.id), className: "p-2 text-red-600 hover:bg-white rounded-lg transition-all", children: _jsx(Trash2, { className: "w-4 h-4" }) })] })] })] }, rule.id)))) })] }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(Card, { title: "Activity Summary", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("p", { className: "text-sm font-medium text-gray-700", children: "Response Rate" }), _jsx("p", { className: "text-lg font-bold text-blue-600", children: "87%" })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full", style: { width: '87%' } }) })] }), _jsxs("div", { className: "border-t pt-4 space-y-3", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Responses Today" }), _jsx("span", { className: "font-semibold text-gray-900", children: "24" })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "This Week" }), _jsx("span", { className: "font-semibold text-gray-900", children: "156" })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "This Month" }), _jsx("span", { className: "font-semibold text-gray-900", children: "612" })] })] })] }) }), _jsx(Card, { title: "Available Rule Triggers", children: _jsx("div", { className: "space-y-2 max-h-96 overflow-y-auto", children: triggerOptions.map(opt => (_jsxs("div", { className: "p-2 rounded bg-gray-50 border border-gray-200", children: [_jsxs("p", { className: "text-sm font-semibold text-gray-900", children: [opt.icon, " ", opt.label] }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: opt.desc })] }, opt.value))) }) }), _jsx(Card, { title: "Best Practices", children: _jsxs("div", { className: "space-y-3 text-sm text-gray-700", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg", children: "\u2713" }), _jsx("p", { children: "Combine multiple conditions for precise targeting" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg", children: "\u2713" }), _jsx("p", { children: "Use high priority for critical customer issues" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg", children: "\u2713" }), _jsx("p", { children: "Test rules with a few reviews first" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg", children: "\u2713" }), _jsx("p", { children: "Personalize messages for better engagement" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg", children: "\u2713" }), _jsx("p", { children: "Review and edit AI responses before sending" })] })] }) })] })] })] }));
}
