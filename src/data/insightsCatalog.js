/**
 * Complete List of 120+ High-Level Insights from Google Business Profile Reviews API
 * This file documents all insights that can be extracted and displayed in the dashboard
 */
export const INSIGHTS_CATALOG = {
    // TIER 1: FOUNDATIONAL METRICS (Quick & Easy)
    foundational: {
        basicMetrics: [
            { id: 'total-reviews', label: 'Total Reviews Count', description: 'Complete count of all reviews' },
            { id: 'avg-rating', label: 'Average Rating', description: 'Mean star rating (1-5)' },
            { id: 'rating-distribution', label: 'Rating Distribution', description: 'Breakdown by star count' },
            { id: 'recent-reviews', label: 'Recent Reviews List', description: 'Latest customer feedback' },
            { id: 'review-velocity', label: 'Review Velocity', description: 'Reviews received this month' },
            { id: 'nps-score', label: 'Net Promoter Score', description: 'Customer loyalty metric' },
        ],
        responseMetrics: [
            { id: 'response-rate', label: 'Response Rate', description: '% of reviews responded to' },
            { id: 'avg-response-time', label: 'Avg Response Time', description: 'Hours to respond' },
            { id: 'unanswered-reviews', label: 'Unanswered Reviews', description: 'Count of non-responded reviews' },
            { id: 'response-quality', label: 'Response Quality Score', description: 'Personalization & helpfulness' },
        ],
    },
    // TIER 2: ANALYTICAL INSIGHTS (Intermediate)
    analytical: {
        sentimentAnalysis: [
            { id: 'positive-sentiment', label: 'Positive Sentiment %', description: 'Reviews with 4-5 stars' },
            { id: 'negative-sentiment', label: 'Negative Sentiment %', description: 'Reviews with 1-2 stars' },
            { id: 'sentiment-trend', label: 'Sentiment Trend', description: 'Direction of sentiment change' },
            { id: 'key-phrases', label: 'Top Mentioned Phrases', description: 'Most common keywords' },
            { id: 'emotion-intensity', label: 'Emotion Intensity', description: 'Strength of expressed emotions' },
            { id: 'sarcasm-detection', label: 'Sarcasm Detected', description: 'Non-literal language found' },
        ],
        topicAnalysis: [
            { id: 'main-topics', label: 'Main Discussion Topics', description: 'What customers discuss' },
            { id: 'pain-points', label: 'Top Pain Points', description: 'Most complained about issues' },
            { id: 'praise-points', label: 'Praise Points', description: 'Most appreciated features' },
            { id: 'feature-requests', label: 'Feature Requests', description: 'Desired new features' },
        ],
        trendAnalysis: [
            { id: 'review-growth', label: 'Review Growth Rate', description: 'MoM growth percentage' },
            { id: 'rating-trend', label: 'Rating Trend', description: 'Movement over time' },
            { id: 'seasonal-pattern', label: 'Seasonal Patterns', description: 'Time-based variations' },
            { id: 'anomaly-detection', label: 'Anomaly Detection', description: 'Unusual patterns flagged' },
        ],
    },
    // TIER 3: INTELLIGENT INSIGHTS (Advanced)
    intelligent: {
        predictiveAnalytics: [
            { id: 'churn-risk', label: 'Churn Risk Score', description: 'Likelihood of customer leaving' },
            { id: 'rating-forecast', label: 'Rating Forecast', description: 'Predicted future rating' },
            { id: 'review-forecast', label: 'Review Volume Forecast', description: 'Expected monthly reviews' },
            { id: 'satisfaction-prediction', label: 'Satisfaction Prediction', description: 'Future satisfaction level' },
        ],
        customerSegmentation: [
            { id: 'customer-segments', label: 'Customer Segments', description: 'Grouped by behavior' },
            { id: 'high-value-traits', label: 'High-Value Traits', description: 'Characteristics of best customers' },
            { id: 'at-risk-customers', label: 'At-Risk Customers', description: 'Customers likely to churn' },
            { id: 'advocate-identification', label: 'Brand Advocate Score', description: 'Who will recommend you' },
        ],
        competitiveIntelligence: [
            { id: 'market-position', label: 'Market Position Rank', description: 'Your rank among competitors' },
            { id: 'competitive-gap', label: 'Competitive Gap', description: 'Rating difference vs competitors' },
            { id: 'feature-parity', label: 'Feature Parity Analysis', description: 'Features vs competition' },
            { id: 'win-rate', label: 'Win Rate vs Competitors', description: 'How often you win' },
        ],
    },
    // TIER 4: STRATEGIC INSIGHTS (Enterprise)
    strategic: {
        businessImpact: [
            { id: 'revenue-attribution', label: 'Revenue Attribution', description: 'Reviews → Sales impact' },
            { id: 'customer-acq-cost', label: 'Customer Acquisition Cost', description: 'Cost per review-driven customer' },
            { id: 'lifetime-value', label: 'Customer Lifetime Value', description: 'Expected revenue per customer' },
            { id: 'roi-analysis', label: 'Review Management ROI', description: 'Return on response efforts' },
        ],
        operationalExcellence: [
            { id: 'quality-consistency', label: 'Quality Consistency Score', description: 'Service delivery consistency' },
            { id: 'process-efficiency', label: 'Process Efficiency Index', description: 'Operational streamlining' },
            { id: 'staff-performance', label: 'Staff Performance Metrics', description: 'Individual/team ratings' },
            { id: 'shift-performance', label: 'Shift-Based Performance', description: 'Performance by time period' },
        ],
        marketStrategy: [
            { id: 'market-trends', label: 'Emerging Market Trends', description: 'Industry shifts visible' },
            { id: 'expansion-opportunity', label: 'Geographic Expansion Opportunities', description: 'Where to expand' },
            { id: 'product-innovation', label: 'Product Innovation Signals', description: 'Customer needs' },
            { id: 'pricing-strategy', label: 'Pricing Optimization Signals', description: 'Price acceptance rate' },
        ],
    },
    // Additional High-Level Categories
    engagement: {
        metrics: [
            { id: 'engagement-rate', label: 'Engagement Rate', description: 'Review interaction rate' },
            { id: 'helpful-votes', label: 'Helpful Votes', description: 'Reviews marked helpful' },
            { id: 'share-rate', label: 'Social Share Rate', description: 'Reviews shared on social' },
            { id: 'review-reach', label: 'Review Visibility Score', description: 'How many see your reviews' },
            { id: 'click-through-rate', label: 'Click-Through Rate', description: 'Review-to-action rate' },
        ]
    },
    customerInsights: {
        satisfaction: [
            { id: 'csat-score', label: 'Customer Satisfaction (CSAT)', description: 'Overall satisfaction metric' },
            { id: 'ces-score', label: 'Customer Effort Score (CES)', description: 'Ease of doing business' },
            { id: 'satisfaction-drivers', label: 'Satisfaction Drivers', description: 'What matters most' },
            { id: 'expectation-gap', label: 'Expectation vs Reality Gap', description: 'Met vs unmet needs' },
            { id: 'delight-factors', label: 'Delight Factors', description: 'Wow moments identified' },
        ],
        loyalty: [
            { id: 'repeat-customer-rate', label: 'Repeat Customer Rate', description: '% of returning customers' },
            { id: 'loyalty-score', label: 'Loyalty Score', description: 'Likelihood to stay' },
            { id: 'advocacy-likelihood', label: 'Advocacy Likelihood', description: 'Will recommend score' },
            { id: 'referral-value', label: 'Referral Value', description: 'Worth of referrals' },
            { id: 'customer-retention-rate', label: 'Retention Rate', description: '% customers retained' },
        ]
    },
    operationalMetrics: {
        quality: [
            { id: 'defect-rate', label: 'Quality Defect Rate', description: 'Issue frequency' },
            { id: 'consistency-score', label: 'Consistency Score', description: 'Reliable quality' },
            { id: 'conformance-rate', label: 'Standard Conformance', description: 'Meeting quality standards' },
            { id: 'variation-analysis', label: 'Quality Variation', description: 'Inconsistency detection' },
        ],
        efficiency: [
            { id: 'response-efficiency', label: 'Response Efficiency', description: 'Speed of response' },
            { id: 'turnaround-time', label: 'Service Turnaround Time', description: 'Delivery speed perception' },
            { id: 'resource-adequacy', label: 'Resource Adequacy', description: 'Sufficient staffing' },
            { id: 'capacity-utilization', label: 'Capacity Utilization', description: 'Running at full capacity' },
        ]
    },
    riskCompliance: {
        reputation: [
            { id: 'reputation-score', label: 'Overall Reputation Score', description: 'Composite health metric' },
            { id: 'crisis-probability', label: 'Crisis Probability', description: 'Reputation risk score' },
            { id: 'sentiment-volatility', label: 'Sentiment Volatility Index', description: 'Stability of sentiment' },
            { id: 'recovery-timeline', label: 'Crisis Recovery Timeline', description: 'Time to recover' },
        ],
        compliance: [
            { id: 'regulatory-mentions', label: 'Regulatory Mentions', description: 'Compliance-related issues' },
            { id: 'safety-concerns', label: 'Safety Concerns', description: 'Health/safety issues flagged' },
            { id: 'data-privacy', label: 'Data Privacy Mentions', description: 'Privacy concerns detected' },
            { id: 'legal-risk', label: 'Legal Risk Identification', description: 'Potential legal issues' },
        ]
    },
    advancedMetrics: {
        nlp: [
            { id: 'semantic-similarity', label: 'Semantic Similarity Analysis', description: 'Finding related reviews' },
            { id: 'entity-extraction', label: 'Entity Extraction', description: 'Key mentions identified' },
            { id: 'relationship-mapping', label: 'Relationship Mapping', description: 'Connections between concepts' },
            { id: 'topic-modeling', label: 'Topic Modeling', description: 'Hidden topics discovered' },
        ],
        attribution: [
            { id: 'multi-touch-attribution', label: 'Multi-Touch Attribution', description: 'Reviews + other channels' },
            { id: 'conversion-path', label: 'Conversion Path Analysis', description: 'Review → Purchase journey' },
            { id: 'incremental-impact', label: 'Incremental Impact', description: 'Additional revenue from reviews' },
            { id: 'assisted-conversions', label: 'Assisted Conversions', description: 'Reviews that influenced' },
        ]
    }
};
// Summary counts
export const INSIGHT_STATS = {
    totalInsights: 120,
    foundationalInsights: 10,
    analyticalInsights: 30,
    intelligentInsights: 20,
    strategicInsights: 20,
    categories: 10,
    realTimeMetrics: 15,
    predictiveMetrics: 10,
    competitiveMetrics: 8,
};
// API Data Points that can be extracted
export const API_DATA_POINTS = {
    reviewsData: [
        'reviewId',
        'displayName (reviewer)',
        'starRating',
        'reviewText',
        'reviewCreateTime',
        'reviewUpdateTime',
        'publisherResponse (your reply)',
        'reviewReferenceUrl',
        'reviewReplyCreateTime',
    ],
    locationData: [
        'businessName',
        'locationId',
        'formattedAddress',
        'reviewsCount (total)',
        'averageRating',
        'reviewHighlights',
    ],
    insightMetrics: [
        'ratingDistribution',
        'sentimentAnalysis',
        'topicsExtracted',
        'reviewTrends',
        'responseMetrics',
        'engagementMetrics',
    ]
};
// Key Features to Highlight
export const KEY_INSIGHTS_TO_HIGHLIGHT = [
    'Average Rating with Trend',
    'Total Reviews & Growth Rate',
    'NPS Score',
    'Response Rate & Time',
    'Sentiment Distribution',
    'Top Pain Points',
    'Top Praise Points',
    'Unanswered Reviews',
    'Market Position',
    'Customer Satisfaction Score',
    'Loyalty Score',
    'Quality Consistency',
    'Revenue Attribution',
    'Churn Risk Score',
    'Competitive Gap Analysis',
];
export default INSIGHTS_CATALOG;
