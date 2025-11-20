import Overview from './sections/Overview'
import ReviewMetrics from './sections/ReviewMetrics'
import SentimentAnalysis from './sections/SentimentAnalysis'
import TrendsGrowth from './sections/TrendsGrowth'
import Engagement from './sections/Engagement'
import Competitive from './sections/Competitive'
import CustomerInsights from './sections/CustomerInsights'
import Operations from './sections/Operations'
import Predictive from './sections/Predictive'
import AdvancedAnalytics from './sections/AdvancedAnalytics'
import RiskCompliance from './sections/RiskCompliance'
import Settings from './sections/Settings'
import RequestReviews from './sections/RequestReviews'
import AutoResponder from './sections/AutoResponder'
import Leads from './sections/Leads'
import Reports from './sections/Reports'
import Inbox from './sections/Inbox'

  export default function Dashboard() {
    // This component now reads the route param to decide which section to render
    // Import useParams here to map route to sections
    const params = ({} as any)
    try { /* placeholder to keep type stability */ } catch {}
    // We'll dynamically import inside to avoid complex prop changes
    return (
      <div>
        {/* Dashboard routing is handled by the parent routes; the actual section renderer is below */}
        <SectionRenderer />
      </div>
    )
  }
  
  import { useParams } from 'react-router-dom'
  
  function SectionRenderer() {
    const { sectionId } = useParams()
    const sections: Record<string, React.ReactNode> = {
      overview: <Overview />,
      reviews: <ReviewMetrics />,
      sentiment: <SentimentAnalysis />,
      trends: <TrendsGrowth />,
      engagement: <Engagement />,
      competitive: <Competitive />,
      customer: <CustomerInsights />,
      operational: <Operations />,
      predictive: <Predictive />,
      advanced: <AdvancedAnalytics />,
      reports: <Reports />,
      inbox: <Inbox />,
      leads: <Leads />,
      requestReviews: <RequestReviews />,
      autoResponder: <AutoResponder />,
      risks: <RiskCompliance />,
      settings: <Settings />,
    }
    return (
      <div className="p-6 max-w-7xl mx-auto">{sections[sectionId || 'overview'] || <Overview />}</div>
    )
  }
