# 📋 Advanced Features Guide

## New Sections Added (v1.1)

This document covers the two powerful new sections added to your GMB Analytics Dashboard:

### 1. **Request Reviews** 📨
### 2. **Auto Responder** 🤖

---

## 1. Request Reviews Section

### 🎯 Overview
Send review requests to customers via multiple channels (Email, WhatsApp, SMS) with bulk campaign support.

### ✨ Key Features

#### Campaign Builder
- **Create Named Campaigns** - Give each campaign a meaningful name
- **Multi-Channel Support** - Send via Email, WhatsApp, or SMS
- **Customizable Messages** - Personalize your review request text
- **Template System** - Pre-populated with best practices

#### Customer Selection
- **Smart Filtering** - Show only customers without reviews
- **Bulk Selection** - Select all customers at once
- **Individual Selection** - Choose specific customers
- **Batch Mode** - Toggle between filtered and all customers
- **Customer Info Display** - See email/phone based on selected channel

#### Campaign Management
- **Track Campaigns** - See sent count and response rates
- **Active Campaigns** - Monitor ongoing review requests
- **Response Rate** - Measure campaign effectiveness
- **Campaign History** - View past campaigns and performance

### 📱 Channels Explained

#### Email Campaigns
- **Best for**: Detailed requests with links
- **Advantages**: High open rate, trackable
- **Character limit**: None
- **Response time**: 2-7 days typical

#### WhatsApp Campaigns
- **Best for**: Quick reminders and urgent requests
- **Advantages**: High engagement, real-time
- **Character limit**: 1000 chars recommended
- **Response time**: Within hours

#### SMS Campaigns
- **Best for**: Brief, concise requests
- **Advantages**: Highest open rate, personal
- **Character limit**: 160 chars (standard)
- **Response time**: Immediate or next business day

### 🚀 How to Use

1. **Click "Request Reviews"** from sidebar
2. **Enter campaign name** (e.g., "Post-Holiday Follow-up")
3. **Select channel** (Email/WhatsApp/SMS)
4. **Write message** with review request
5. **Choose mode**: "No Reviews Only" or "All Customers"
6. **Select customers** (use Select All or individual checkboxes)
7. **Click Send Campaign**
8. **View results** in Recent Campaigns panel

### 📊 Best Practices

✅ **DO's**
- Personalize messages with customer names
- Send within 24-48 hours of purchase
- Use compelling subject lines (email)
- Keep SMS under 160 characters
- Include direct review link
- Follow up after 5 days if no response

❌ **DON'Ts**
- Don't spam customers
- Don't request reviews too frequently
- Don't use aggressive language
- Don't exceed compliance limits (SMS)
- Don't send to opted-out customers
- Don't ask for positive reviews only

### 💡 Tips

- **Timing**: Best times to send are Tue-Thu, 10AM-2PM
- **Frequency**: Once per customer per month maximum
- **Length**: Keep emails under 200 words
- **CTA**: Make the review link prominent
- **Incentives**: Can offer small discounts for reviews
- **Follow-up**: Gentle reminder after 7 days

---

## 2. Auto Responder Section (Advanced)

### 🎯 Overview
Automatically respond to reviews with intelligent, condition-based rules. Supports multiple trigger types and complex logic.

### ✨ Key Features

#### Rule Creation
- **Advanced Conditions** - Combine multiple triggers
- **Priority Levels** - Set response urgency (Low/Medium/High)
- **Batch Mode** - Apply to all matching reviews
- **AI Integration** - Optional GPT-4 powered responses
- **Descriptions** - Document rule purpose

#### Multiple Trigger Types

##### 1. **Sentiment-Based** 😊😐😔
Respond based on overall sentiment analysis:
- 😊 **Positive** - Happy, satisfied customers
- 😐 **Neutral** - Mixed or unclear sentiment
- 😔 **Negative** - Unhappy, critical reviews

**Example Use Case**: Auto-thank positive reviews

---

##### 2. **Star Rating-Based** ⭐
Trigger based on number of stars:
- ⭐⭐⭐⭐⭐ **5 Stars** - Perfect reviews
- ⭐⭐⭐⭐ **4 Stars** - Good reviews
- ⭐⭐⭐ **3 Stars** - Average reviews
- ⭐⭐ **2 Stars** - Poor reviews
- ⭐ **1 Star** - Critical reviews
- **Below 3 Stars** - Any negative rating
- **4-5 Stars** - High ratings group

**Example Use Case**: Different responses for different ratings

---

##### 3. **Tags-Based** 🏷️
Respond to specific review categories:
- 🔴 **Quality Issue** - Product quality complaints
- 📦 **Delivery Issue** - Shipping/delivery problems
- 💬 **Customer Service** - Support interactions
- ⚙️ **Product Feature** - Feature requests/feedback
- 💰 **Pricing** - Price-related comments
- 👥 **Staff Friendly** - Personnel mentions
- 🚚 **Shipping Speed** - Delivery speed comments
- 📦 **Packaging** - Unboxing experience

**Example Use Case**: Address specific concerns with targeted responses

---

##### 4. **Text-Contains** 📝
Trigger when review text includes keywords:
- **Search Type**: Exact match or contains
- **Case-Insensitive**: Matches regardless of case
- **Multiple Keywords**: Can add multiple text triggers

**Example**: "Respond if review contains 'broke' or 'damaged'"

---

##### 5. **No Text Review** ⊘
Respond to rating-only reviews (no written comment):
- ✓ **No Text** - Only stars, no comment
- ✗ **Has Text** - Written review included

**Example Use Case**: Ask for feedback on rating-only reviews

---

##### 6. **Response Time** ⏱️
Trigger based on review age:
- **Within 24 hours** - Very recent reviews
- **Within 3 days** - Recent reviews
- **Within 7 days** - Past week
- **Older than 14 days** - Older reviews (for late responses)

**Example Use Case**: Respond faster to recent negative reviews

---

##### 7. **Language** 🌐
Respond in customer's language:
- 🇬🇧 **English** - EN
- 🇪🇸 **Spanish** - ES
- 🇫🇷 **French** - FR
- 🇩🇪 **German** - DE
- 🇮🇹 **Italian** - IT
- 🇵🇹 **Portuguese** - PT
- 🇮🇳 **Hindi** - HI
- 🇯🇵 **Japanese** - JA

**Example Use Case**: Send responses in customer's language

---

##### 8. **Keyword Match** 🔑
Similar to text-contains but optimized for specific phrases:
- **Exact Phrases** - Match complete phrases
- **Partial Match** - Contains substring
- **Case-Insensitive** - Works with any case

**Example**: "Respond to mentions of 'excellent', 'best', 'amazing'"

---

##### 9. **Reviewer Type** 👤
Target specific customer segments:
- 🆕 **First-time Customer** - New customers
- 🔄 **Repeat Customer** - Returning customers
- 👑 **VIP Customer** - High-value customers

**Example Use Case**: Special VIP treatment for long-time customers

---

#### AI-Powered Responses
Enable GPT-4 AI to auto-generate responses:
- **Tone Detection** - Understands customer sentiment
- **Context Understanding** - Recognizes specific issues
- **Personalization** - Customizes based on review content
- **Confidence Score** - Shows AI reliability (94%+ typical)
- **Review Before Sending** - Human approval recommended

### 🔧 Rule Configuration Options

#### Priority Levels
- **🔴 High** - Urgent issues (negative reviews, complaints)
- **🟡 Medium** - Standard responses
- **🔵 Low** - FYI or bulk positive reviews

#### Batch Mode
Enable to apply rule to ALL matching reviews automatically:
- ✓ **Enabled** - Auto-apply to all matches
- ✗ **Disabled** - Manual review required

#### Condition Logic
- **AND Logic** - All conditions must match
- **Multiple Conditions** - Combine for precision
- **Example**: "5 Stars AND has text AND language is English"

### 📋 Sample Rules to Create

#### Rule 1: VIP 5-Star Response
```
Name: VIP 5-Star Premium Response
Priority: HIGH
Conditions:
  - Star Rating = 5 Stars
  - Has Text = Yes (not rating-only)
  - Reviewer Type = VIP Customer
Message: "Thank you for being a valued customer! 
Your 5-star review means the world to us. 
We look forward to serving you again!"
```

#### Rule 2: Delivery Problem Handler
```
Name: Delivery Issue Auto-Response
Priority: HIGH
Conditions:
  - Tags = Delivery Issue
  - Response Time = Within 24 hours
Message: "We're sorry to hear about the delivery issue. 
Our team is investigating immediately. 
You'll hear from us within 24 hours."
```

#### Rule 3: Low Rating Priority
```
Name: Low Rating Quick Escalation
Priority: HIGH
Conditions:
  - Star Rating = Below 3 Stars
  - Response Time = Within 24 hours
Message: "We sincerely apologize for your experience. 
Our manager will contact you directly to resolve this. 
Thank you for bringing this to our attention."
```

#### Rule 4: Language-Specific
```
Name: Spanish Language Response
Priority: MEDIUM
Conditions:
  - Language = Spanish
  - Sentiment = Positive
Message: "¡Muchas gracias por tu reseña! 
Nos alegra mucho que hayas tenido una buena experiencia. 
¡Esperamos verte pronto!"
```

#### Rule 5: Late Response to Old Reviews
```
Name: Legacy Review Follow-up
Priority: LOW
Conditions:
  - Response Time = Older than 14 days
  - Has Text = Yes
Message: "We noticed your recent review. 
We'd still love to address any concerns. 
Please reply if there's anything we can improve."
```

### 🚀 How to Use Auto Responder

#### Creating a Rule
1. **Click "Create New Rule"** button
2. **Enter Rule Name** (descriptive, e.g., "5-Star Thank You")
3. **Set Priority** (High for critical, Medium for standard)
4. **Add Description** (optional but recommended)
5. **Add Conditions**:
   - Click "Add Condition" for each condition
   - Select trigger type (Sentiment, Stars, Tags, etc.)
   - Choose operator if applicable (contains, equals, etc.)
   - Select or enter value
6. **Write Response Message** (up to 1000 chars)
7. **Enable Batch Mode** if you want auto-apply
8. **Click "Create Rule"**

#### Editing a Rule
1. Click **Edit icon** (pencil) on any rule
2. Modify any settings
3. Update conditions as needed
4. Click **"Update Rule"**

#### Disabling/Enabling Rules
- Click **Toggle** icon (on/off switch)
- Green = Active, Gray = Inactive

#### Deleting a Rule
- Click **Delete icon** (trash)
- Confirm deletion

#### Testing Rules
- Create with specific conditions first
- Monitor "Total Responses" count
- Adjust if needed

### 💡 Advanced Tips

**Condition Combinations**:
- Use AND logic for precision
- Each condition narrows results
- 3+ conditions = highly targeted

**Message Best Practices**:
- Keep under 500 characters for SMS channels
- Personalize with customer name
- Include call-to-action (CTA)
- Thank them or acknowledge issue
- Provide next steps

**Priority Management**:
- HIGH: Negative reviews, complaints
- MEDIUM: Regular responses, feedback
- LOW: General positive reviews, FYI

**Batch Mode Usage**:
- ✓ Use for consistent messages
- ✗ Don't use for highly personalized
- Monitor first few before full rollout

**AI Responses**:
- Enable for brainstorming only
- Always review before sending
- Edit to add specifics
- Keep brand voice consistent

### 📊 Monitoring & Optimization

**Metrics to Track**:
- Response Count - How many times rule was triggered
- Response Rate - % of reviews getting auto-responses
- Customer Engagement - Follow-ups from responses
- Sentiment Change - How responses affect perception

**Optimization**:
- Add conditions if responses too broad
- Combine rules if overlapping
- Test message variations
- Adjust priority levels based on impact
- Review monthly performance

### ⚠️ Important Notes

- Rules use AND logic (all conditions must match)
- Higher priority rules execute first
- Batch mode applies to all matches
- AI responses should be reviewed
- Test with small group first
- Comply with local regulations
- Document rule purposes

### 🎓 Learning Resources

**Best Practices**:
- Start simple (1 condition)
- Gradually add complexity
- Monitor effectiveness
- Adjust based on results

**Common Mistakes to Avoid**:
- ❌ Too many conditions (won't trigger)
- ❌ Conflicting rules
- ❌ Generic messages (low engagement)
- ❌ Not testing first
- ❌ Ignoring compliance rules

---

## 📱 Integration with Request Reviews

The **Auto Responder** works seamlessly with **Request Reviews**:

1. **Send Request** via Request Reviews section
2. **Customer Reviews** your business
3. **Auto Responder** triggers based on rules
4. **Auto Response** sent automatically
5. **Track** in Auto Responder activity

---

## 🎯 Complete Workflow Example

### Customer Journey:
```
1. Customer makes purchase
   ↓
2. Request Reviews campaigns sent (Email/WhatsApp/SMS)
   ↓
3. Customer leaves review (3 stars, mentions "late delivery")
   ↓
4. Auto Responder triggers "Delivery Issue" rule
   ↓
5. Auto response sent (within minutes)
   ↓
6. Customer engagement increases
   ↓
7. Issue resolved → update to 5 stars
   ↓
8. Thank you response sent automatically
```

---

## 📞 Support & FAQ

**Q: Can I send campaigns to past customers?**
A: Yes! Use "All Customers" mode to include everyone

**Q: What's the maximum rule complexity?**
A: No limit - combine as many conditions as needed

**Q: Does AI replace my manual responses?**
A: No - AI is a starting point. Always review and edit

**Q: Can rules overlap/conflict?**
A: Yes. Higher priority rules execute first

**Q: Are responses tracked?**
A: Yes - see response count in Activity Summary

**Q: How often do rules check for new reviews?**
A: Real-time as reviews come in (with sync delay)

**Q: Can I schedule responses?**
A: Not yet - currently send immediately upon trigger

**Q: What about compliance (CAN-SPAM, GDPR)?**
A: Ensure opt-in consent before sending campaigns

---

## 🎓 Next Steps

1. ✅ **Start with Request Reviews** - Build customer list
2. ✅ **Create 2-3 Auto Responder rules** - Test functionality
3. ✅ **Monitor Activity** - Track effectiveness
4. ✅ **Optimize Messages** - Refine based on engagement
5. ✅ **Scale Rules** - Add more sophisticated conditions
6. ✅ **Enable AI** - Use for drafting responses

---

**Happy automating! 🚀**

---

Created: November 19, 2025
Version: 1.1
Last Updated: November 19, 2025
