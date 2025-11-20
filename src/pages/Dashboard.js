import { jsx as _jsx } from "react/jsx-runtime";
import Overview from './sections/Overview';
import ReviewMetrics from './sections/ReviewMetrics';
import SentimentAnalysis from './sections/SentimentAnalysis';
import TrendsGrowth from './sections/TrendsGrowth';
import Engagement from './sections/Engagement';
import Competitive from './sections/Competitive';
import CustomerInsights from './sections/CustomerInsights';
import Operations from './sections/Operations';
import Predictive from './sections/Predictive';
import AdvancedAnalytics from './sections/AdvancedAnalytics';
import RiskCompliance from './sections/RiskCompliance';
import Settings from './sections/Settings';
import RequestReviews from './sections/RequestReviews';
import AutoResponder from './sections/AutoResponder';
import Leads from './sections/Leads';
import Reports from './sections/Reports';
import Inbox from './sections/Inbox';
export default function Dashboard() {
    // This component now reads the route param to decide which section to render
    // Import useParams here to map route to sections
    const params = {};
    try { /* placeholder to keep type stability */ }
    catch { }
    // We'll dynamically import inside to avoid complex prop changes
    return (_jsx("div", { children: _jsx(SectionRenderer, {}) }));
}
import { useParams } from 'react-router-dom';
function SectionRenderer() {
    const { sectionId } = useParams();
    const sections = {
        overview: _jsx(Overview, {}),
        reviews: _jsx(ReviewMetrics, {}),
        sentiment: _jsx(SentimentAnalysis, {}),
        trends: _jsx(TrendsGrowth, {}),
        engagement: _jsx(Engagement, {}),
        competitive: _jsx(Competitive, {}),
        customer: _jsx(CustomerInsights, {}),
        operational: _jsx(Operations, {}),
        predictive: _jsx(Predictive, {}),
        advanced: _jsx(AdvancedAnalytics, {}),
        reports: _jsx(Reports, {}),
        inbox: _jsx(Inbox, {}),
        leads: _jsx(Leads, {}),
        requestReviews: _jsx(RequestReviews, {}),
        autoResponder: _jsx(AutoResponder, {}),
        risks: _jsx(RiskCompliance, {}),
        settings: _jsx(Settings, {}),
    };
    return (_jsx("div", { className: "p-6 max-w-7xl mx-auto", children: sections[sectionId || 'overview'] || _jsx(Overview, {}) }));
}
