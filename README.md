# GMB Review Analytics Dashboard

A comprehensive React dashboard for analyzing Google Business Profile reviews with **120+ advanced insights** and real-time analytics.

## 🎯 Overview

This dashboard provides deep analytics and AI-powered insights from your Google Business Profile reviews, helping you understand customer sentiment, identify trends, and drive business growth.

## 🚀 Features

### Foundational Insights (10)
- ✅ Total Reviews Count
- ✅ Average Rating & Trend
- ✅ Rating Distribution by Stars
- ✅ Response Rate & Tracking
- ✅ Average Response Time
- ✅ Unanswered Reviews Count
- ✅ Review Velocity (per month)
- ✅ Recent Reviews List
- ✅ Quick Stats Summary
- ✅ Rating Consistency

### Analytical Insights (30)
- 📊 Sentiment Analysis (Positive/Negative/Neutral%)
- 📈 Growth Rate Analysis (MoM, YoY)
- 🎯 Topic Extraction & Clustering
- 🔍 Pain Points Identification
- ⭐ Praise Points Recognition
- 💬 Key Phrases & Keywords Mining
- 📉 Trend Direction & Momentum
- 🔄 Seasonal Patterns
- 📊 Sentiment Distribution
- 🎲 Anomaly Detection

### Intelligent Insights (20)
- 🤖 Churn Risk Prediction
- 📊 Customer Segmentation
- 🏆 Competitive Benchmarking
- 👥 Customer Behavior Clustering
- 💡 High-Value Customer Traits
- 🚨 At-Risk Customer Detection
- 🌟 Brand Advocate Identification
- 📈 Satisfaction Drivers
- 🎯 Feature Request Detection
- 📊 Predictive Rating Forecast

### Strategic Insights (20)
- 💰 Revenue Attribution Analysis
- 💵 Customer Acquisition Cost (CAC)
- 💎 Customer Lifetime Value (LTV)
- 📊 Review Management ROI
- 🏭 Operational Quality Metrics
- 👨‍💼 Staff Performance Analysis
- 📍 Geographic Performance
- 🌍 Market Trend Detection
- 🚀 Expansion Opportunities
- 💡 Innovation & Product Ideas

### Risk & Compliance (15)
- ⚠️ Crisis Probability Score
- 🛡️ Reputation Health Index
- 📋 Regulatory Issue Detection
- 🔒 Data Privacy Concern Flagging
- ⚠️ Safety Alert Detection
- 📊 Sentiment Volatility Index
- 🚨 Suspicious Review Detection
- 📑 Compliance Risk Assessment
- 🔍 Policy Violation Detection
- 📈 Crisis Recovery Timeline

### Advanced Analytics (25+)
- 🧠 Natural Language Processing (NLP)
- 🏷️ Entity Recognition
- 🔗 Semantic Similarity Analysis
- 📊 Topic Modeling
- 🎭 Emotion Detection
- 🔎 Sarcasm Detection
- 🔄 Multi-Touch Attribution
- 📊 Network Analysis
- 🤖 ML Pattern Recognition
- 🔮 Anomaly Detection

## 📊 Dashboard Sections

1. **Overview** - Key metrics at a glance
2. **Review Metrics** - Detailed review analytics
3. **Sentiment Analysis** - Customer emotion insights
4. **Trends & Growth** - Business momentum tracking
5. **Engagement** - Customer interaction metrics
6. **Competitive Analysis** - Market positioning
7. **Customer Insights** - Behavior & satisfaction
8. **Operations** - Quality & efficiency metrics
9. **Predictive** - Forecast future trends
10. **Advanced Analytics** - AI-powered deep insights
11. **Risk & Compliance** - Safety & regulatory
12. **Settings** - Configuration options

## 🔧 Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Google Business Profile API credentials

### Installation

```bash
# Clone the repository
cd review-insights

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Google API credentials

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔐 Google Business Profile API Setup

1. **Enable the API**
   - Go to Google Cloud Console
   - Enable "My Business Account Management API"
   - Create OAuth 2.0 credentials (Desktop Application)

2. **Get Your Credentials**
   - Copy your Client ID
   - Copy your Client Secret
   - Set Redirect URI to `http://localhost:3000/callback`

3. **Configure Dashboard**
   - Add credentials to `.env`
   ```
   VITE_GOOGLE_CLIENT_ID=your_client_id
   VITE_GOOGLE_API_KEY=your_api_key
   VITE_ACCOUNT_ID=your_account_id
   VITE_LOCATION_ID=your_location_id
   ```

## 📈 Available Metrics

### Quick Reference Table

| Category | Metric | Type | Data Source |
|----------|--------|------|-------------|
| Rating | Average | Foundational | Reviews |
| Rating | Distribution | Foundational | Reviews |
| Response | Rate | Foundational | Replies |
| Response | Time | Foundational | Replies |
| Sentiment | Positive % | Analytical | NLP |
| Sentiment | Negative % | Analytical | NLP |
| Growth | Monthly | Analytical | Trends |
| Growth | YoY | Analytical | Trends |
| Churn | Risk Score | Intelligent | ML |
| Revenue | Attribution | Strategic | ML |

## 🎨 UI Features

- **Responsive Design** - Works on desktop, tablet, mobile
- **Dark Mode** - Built-in dark theme support
- **Interactive Charts** - Recharts powered visualizations
- **Real-time Updates** - Live API integration
- **Customizable Views** - Filter and drill-down capabilities
- **Export Data** - Download insights as CSV/PDF

## 📱 Mobile Optimization

The dashboard is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔌 API Integration

### Using the Analytics Engine

```typescript
import { GBPApiClient, ReviewAnalyticsEngine } from './services/gbpApiClient'

// Initialize client
const client = new GBPApiClient(accessToken, accountId, locationId)

// Fetch reviews
const reviews = await client.fetchReviews()

// Generate insights
const engine = new ReviewAnalyticsEngine(reviews)
const metrics = engine.getAllMetrics()

// Access specific insights
console.log(metrics.averageRating)        // 4.8
console.log(metrics.responseRate)         // 91%
console.log(metrics.sentimentDistribution) // { positive: 70, neutral: 16, negative: 14 }
console.log(metrics.npsScore)             // 54
```

## 📊 Data Visualization

The dashboard uses **Recharts** for interactive visualizations:
- Line Charts - Trends over time
- Bar Charts - Comparisons
- Pie Charts - Distributions
- Radar Charts - Multi-dimensional analysis
- Heat Maps - Patterns & density

## 🔄 Real-time Sync

- Auto-refresh every 2 hours
- Manual refresh option
- Webhook support for immediate updates
- Push notifications for anomalies

## 🛣️ Roadmap

- [ ] Custom KPI builder
- [ ] Automated reporting
- [ ] Team collaboration features
- [ ] Integration with CRM systems
- [ ] Advanced ML model training
- [ ] A/B testing framework
- [ ] API for custom integrations
- [ ] Mobile app

## 💡 Best Practices

1. **Regular Monitoring** - Check dashboard weekly
2. **Respond to Reviews** - Maintain high response rate
3. **Action Insights** - Implement recommended changes
4. **Track Progress** - Monitor metric improvements
5. **Share Insights** - With team and stakeholders

## 🤝 Support

For issues or questions:
- 📧 Email: support@gmbanalytics.com
- 💬 Discord: [Join Community](https://discord.gg/community)
- 📖 Docs: [Full Documentation](https://docs.gmbanalytics.com)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Built with React, Vite, and Tailwind CSS
- Charts by Recharts
- Icons by Lucide React
- API by Google Business Profile

---

**Total Insights Available: 120+** | **Categories: 10** | **Real-time Metrics: 15+**

Last Updated: November 19, 2025
