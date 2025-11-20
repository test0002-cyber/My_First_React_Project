import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MetricCard from '../../components/MetricCard';
import Card from '../../components/Card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Smile, Frown, Meh } from 'lucide-react';
const sentimentData = [
    { name: 'Positive', value: 68, color: '#10B981' },
    { name: 'Neutral', value: 18, color: '#F59E0B' },
    { name: 'Negative', value: 14, color: '#EF4444' },
];
const sentimentTrend = [
    { month: 'Jan', positive: 62, neutral: 20, negative: 18 },
    { month: 'Feb', positive: 64, neutral: 19, negative: 17 },
    { month: 'Mar', positive: 65, neutral: 18, negative: 17 },
    { month: 'Apr', positive: 67, neutral: 17, negative: 16 },
    { month: 'May', positive: 68, neutral: 18, negative: 14 },
    { month: 'Jun', positive: 70, neutral: 16, negative: 14 },
];
const topPhrases = [
    { phrase: 'Excellent service', count: 156, sentiment: 'positive' },
    { phrase: 'Great experience', count: 142, sentiment: 'positive' },
    { phrase: 'Quick response', count: 128, sentiment: 'positive' },
    { phrase: 'Friendly staff', count: 115, sentiment: 'positive' },
    { phrase: 'Could improve', count: 87, sentiment: 'neutral' },
    { phrase: 'Long wait time', count: 62, sentiment: 'negative' },
    { phrase: 'Not satisfied', count: 45, sentiment: 'negative' },
];
export default function SentimentAnalysis() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Sentiment Analysis" }), _jsx("p", { className: "text-gray-600", children: "Deep dive into customer emotions and feedback tone" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(MetricCard, { title: "Positive Sentiment", value: "70%", change: "\u2191 2% from last month", changeType: "positive", icon: Smile, backgroundColor: "bg-green-50" }), _jsx(MetricCard, { title: "Neutral Sentiment", value: "16%", change: "\u2193 2% from last month", changeType: "negative", icon: Meh, backgroundColor: "bg-yellow-50" }), _jsx(MetricCard, { title: "Negative Sentiment", value: "14%", change: "\u2193 3% from last month", changeType: "positive", icon: Frown, backgroundColor: "bg-red-50" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(Card, { title: "Overall Sentiment Distribution", subtitle: "Current month breakdown", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: sentimentData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}%`, outerRadius: 100, fill: "#8884d8", dataKey: "value", children: sentimentData.map((entry) => (_jsx(Cell, { fill: entry.color }, `cell-${entry.name}`))) }), _jsx(Tooltip, { formatter: (value) => `${value}%` })] }) }) }), _jsx(Card, { title: "Sentiment Trend", subtitle: "Last 6 months", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: sentimentTrend, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "positive", stackId: "a", fill: "#10B981", name: "Positive" }), _jsx(Bar, { dataKey: "neutral", stackId: "a", fill: "#F59E0B", name: "Neutral" }), _jsx(Bar, { dataKey: "negative", stackId: "a", fill: "#EF4444", name: "Negative" })] }) }) })] }), _jsx(Card, { title: "Most Mentioned Phrases", subtitle: "Frequency of key phrases in reviews", children: _jsx("div", { className: "space-y-3", children: topPhrases.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsx("div", { className: `px-3 py-1 rounded-full text-xs font-semibold ${item.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                                        item.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                                            'bg-yellow-100 text-yellow-800'}`, children: item.phrase }) }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "font-bold text-gray-900", children: item.count }), _jsx("p", { className: "text-xs text-gray-500", children: "mentions" })] })] }, index))) }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200 shadow-sm", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Sentiment Momentum" }), _jsx("p", { className: "text-3xl font-bold text-green-600", children: "\u2191 Improving" }), _jsx("p", { className: "text-xs text-gray-600 mt-2", children: "+5% this quarter" })] }), _jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200 shadow-sm", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Mixed Sentiment Reviews" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "154" }), _jsx("p", { className: "text-xs text-gray-600 mt-2", children: "Both praise & criticism" })] }), _jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200 shadow-sm", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Emotion Intensity" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "7.2/10" }), _jsx("p", { className: "text-xs text-gray-600 mt-2", children: "Average strength" })] }), _jsxs("div", { className: "bg-white rounded-lg p-6 border border-gray-200 shadow-sm", children: [_jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Sarcasm Detected" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "12" }), _jsx("p", { className: "text-xs text-gray-600 mt-2", children: "Requires human review" })] })] })] }));
}
