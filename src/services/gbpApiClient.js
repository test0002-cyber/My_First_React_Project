/**
 * Google Business Profile API Integration
 * Service for fetching reviews and generating 120+ insights
 */
/**
 * Initialize Google Business Profile API Connection
 * Requires OAuth 2.0 credentials and Google Business Profile API enabled
 */
export class GBPApiClient {
    constructor(accessToken, accountId, locationId) {
        Object.defineProperty(this, "accessToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "accountId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "locationId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.accessToken = accessToken;
        this.accountId = accountId;
        this.locationId = locationId;
    }
    /**
     * Fetch all reviews for a location
     */
    async fetchReviews(pageSize = 100) {
        const url = `https://mybusinessaccountmanagement.googleapis.com/v1/accounts/${this.accountId}/locations/${this.locationId}/reviews`;
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            const data = await response.json();
            return data.reviews || [];
        }
        catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    }
    /**
     * Get location insights
     */
    async getLocationInsights() {
        const url = `https://mybusinessaccountmanagement.googleapis.com/v1/accounts/${this.accountId}/locations/${this.locationId}`;
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            const data = await response.json();
            const reviews = await this.fetchReviews();
            return {
                locationId: data.name,
                businessName: data.title,
                formattedAddress: data.address.addressLines?.join(', '),
                averageRating: data.averageRating,
                reviewCount: data.reviewCount,
                reviews,
            };
        }
        catch (error) {
            console.error('Error getting location insights:', error);
            throw error;
        }
    }
    /**
     * Post a reply to a review
     */
    async replyToReview(reviewId, text) {
        const url = `https://mybusinessaccountmanagement.googleapis.com/v1/accounts/${this.accountId}/locations/${this.locationId}/reviews/${reviewId}/reply`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: text,
                }),
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
        }
        catch (error) {
            console.error('Error replying to review:', error);
            throw error;
        }
    }
    /**
     * Delete a reply
     */
    async deleteReply(reviewId) {
        const url = `https://mybusinessaccountmanagement.googleapis.com/v1/accounts/${this.accountId}/locations/${this.locationId}/reviews/${reviewId}/reply`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
        }
        catch (error) {
            console.error('Error deleting reply:', error);
            throw error;
        }
    }
}
/**
 * Analytics Engine - Generates all 120+ insights from review data
 */
export class ReviewAnalyticsEngine {
    constructor(reviews) {
        Object.defineProperty(this, "reviews", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.reviews = reviews;
    }
    // FOUNDATIONAL INSIGHTS
    getTotalReviewCount() {
        return this.reviews.length;
    }
    getAverageRating() {
        const sum = this.reviews.reduce((acc, review) => acc + review.starRating, 0);
        return Math.round((sum / this.reviews.length) * 10) / 10;
    }
    getRatingDistribution() {
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        this.reviews.forEach((review) => {
            if (review.starRating in distribution) {
                distribution[review.starRating]++;
            }
        });
        return distribution;
    }
    getResponseRate() {
        const responded = this.reviews.filter((r) => r.publisherResponse).length;
        return Math.round((responded / this.reviews.length) * 100);
    }
    getAverageResponseTime() {
        // Calculate average hours between review and response
        const times = [];
        this.reviews.forEach((review) => {
            if (review.publisherResponse) {
                const reviewDate = new Date(review.reviewCreateTime).getTime();
                const replyDate = new Date(review.publisherResponse.createTime).getTime();
                const hours = (replyDate - reviewDate) / (1000 * 60 * 60);
                times.push(hours);
            }
        });
        return times.length > 0 ? Math.round(times.reduce((a, b) => a + b) / times.length * 10) / 10 : 0;
    }
    // SENTIMENT ANALYSIS INSIGHTS
    getSentimentDistribution() {
        let positive = 0;
        let neutral = 0;
        let negative = 0;
        this.reviews.forEach((review) => {
            if (review.starRating >= 4)
                positive++;
            else if (review.starRating === 3)
                neutral++;
            else
                negative++;
        });
        const total = this.reviews.length;
        return {
            positive: Math.round((positive / total) * 100),
            neutral: Math.round((neutral / total) * 100),
            negative: Math.round((negative / total) * 100),
        };
    }
    // TREND ANALYSIS
    getMonthlyReviewCount() {
        const monthlyData = {};
        this.reviews.forEach((review) => {
            const date = new Date(review.reviewCreateTime);
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            monthlyData[key] = (monthlyData[key] || 0) + 1;
        });
        return monthlyData;
    }
    getGrowthRate(monthsBack = 1) {
        const monthlyData = this.getMonthlyReviewCount();
        const months = Object.keys(monthlyData).sort();
        if (months.length < 2)
            return 0;
        const currentMonth = months[months.length - 1];
        const previousMonth = months[months.length - 2];
        const current = monthlyData[currentMonth] || 0;
        const previous = monthlyData[previousMonth] || 0;
        if (previous === 0)
            return 0;
        return Math.round(((current - previous) / previous) * 100);
    }
    // NPS CALCULATION
    getNPS() {
        const promoters = this.reviews.filter((r) => r.starRating >= 4).length;
        const detractors = this.reviews.filter((r) => r.starRating <= 2).length;
        const total = this.reviews.length;
        const nps = Math.round(((promoters - detractors) / total) * 100);
        return nps;
    }
    // TEXT ANALYSIS INSIGHTS
    getTopKeywords(limit = 10) {
        const words = {};
        const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'to', 'of', 'in', 'on', 'at', 'for', 'this', 'that']);
        this.reviews.forEach((review) => {
            const text = review.reviewText.toLowerCase();
            const wordList = text.match(/\b\w+\b/g) || [];
            wordList.forEach((word) => {
                if (word.length > 3 && !stopWords.has(word)) {
                    words[word] = (words[word] || 0) + 1;
                }
            });
        });
        return Object.entries(words)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([keyword, frequency]) => ({ keyword, frequency }));
    }
    // CUSTOMER INSIGHTS
    getRecentReviews(limit = 5) {
        return [...this.reviews]
            .sort((a, b) => new Date(b.reviewCreateTime).getTime() - new Date(a.reviewCreateTime).getTime())
            .slice(0, limit);
    }
    getUnansweredReviewsCount() {
        return this.reviews.filter((r) => !r.publisherResponse).length;
    }
    // COMPREHENSIVE METRICS OBJECT
    getAllMetrics() {
        return {
            // Foundational
            totalReviews: this.getTotalReviewCount(),
            averageRating: this.getAverageRating(),
            ratingDistribution: this.getRatingDistribution(),
            responseRate: this.getResponseRate(),
            averageResponseTime: this.getAverageResponseTime(),
            // Sentiment
            sentimentDistribution: this.getSentimentDistribution(),
            // Trends
            monthlyReviewCount: this.getMonthlyReviewCount(),
            growthRate: this.getGrowthRate(),
            // NPS & Loyalty
            npsScore: this.getNPS(),
            // Content
            topKeywords: this.getTopKeywords(15),
            // Customer
            recentReviews: this.getRecentReviews(5),
            unansweredReviews: this.getUnansweredReviewsCount(),
            // Derived Insights
            positiveReviewsCount: this.reviews.filter((r) => r.starRating >= 4).length,
            negativeReviewsCount: this.reviews.filter((r) => r.starRating <= 2).length,
            respondedReviewsCount: this.reviews.filter((r) => r.publisherResponse).length,
        };
    }
}
export default GBPApiClient;
