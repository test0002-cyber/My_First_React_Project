import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MetricCard({ title, value, change, changeType = 'neutral', icon: Icon, backgroundColor = 'bg-blue-50' }) {
    return (_jsx("div", { className: `${backgroundColor} rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow`, children: _jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600 font-medium", children: title }), _jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: value }), change && (_jsx("p", { className: `text-sm mt-2 ${changeType === 'positive' ? 'text-green-600' :
                                changeType === 'negative' ? 'text-red-600' :
                                    'text-gray-600'}`, children: change }))] }), Icon && _jsx(Icon, { size: 28, className: "text-blue-600" })] }) }));
}
