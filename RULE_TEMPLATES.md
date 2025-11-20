# 🎨 Auto Responder Rule Templates Library

A collection of ready-to-use rule templates for the Auto Responder section.

---

## 📋 Table of Contents

1. [Customer Appreciation Rules](#customer-appreciation)
2. [Issue Management Rules](#issue-management)
3. [Engagement Rules](#engagement-rules)
4. [Segmentation Rules](#segmentation-rules)
5. [Operational Rules](#operational-rules)
6. [Multi-Language Rules](#multi-language-rules)
7. [Advanced Rules](#advanced-rules)

---

## 🎁 Customer Appreciation Rules {#customer-appreciation}

### Template 1: Perfect 5-Star Response
**When to use**: Every time someone gives 5 stars

```
Rule Name: Perfect 5-Star Thank You
Priority: HIGH
Batch Mode: ON
Conditions:
  - Star Rating = 5 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for the perfect 5-star review! ⭐

We're thrilled you had such a great experience. 
Your positive feedback motivates our entire team 
to keep delivering excellence.

We'd love to see you again soon!

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 2: 4-Star Encouragement
**When to use**: To understand what could be perfect

```
Rule Name: 4-Star Follow-up
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Star Rating = 4 Stars
  - Has Text = Yes
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for the 4-star review! 

We're glad you enjoyed your experience. 
We'd love to know what would make it 5 stars 
for next time. Your feedback helps us improve!

Reply with your suggestions anytime.

Best regards,
[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 3: VIP Customer Special
**When to use**: Recognize loyal, high-value customers

```
Rule Name: VIP Platinum Customer Thank You
Priority: HIGH
Batch Mode: ON
Conditions:
  - Star Rating = 5 Stars
  - Reviewer Type = VIP Customer
  - Has Text = Yes
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dear [Customer Name],

Your 5-star review means the world to us! 
As a valued VIP member, your loyalty 
and trust inspire everything we do.

We'd like to offer you:
✓ 20% exclusive discount code: VIP20
✓ Early access to new products
✓ Priority customer support

Thank you for being awesome!

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 4: Positive Sentiment General
**When to use**: Any positive review (catches sentiment AI detected)

```
Rule Name: General Positive Review Thank You
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Sentiment = Positive
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you so much for the positive feedback! 

We're delighted we could meet your expectations. 
Your kind words mean everything to us.

We look forward to serving you again soon!

Warmest regards,
[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔧 Issue Management Rules {#issue-management}

### Template 5: Critical Low Rating Response
**When to use**: URGENT - Address 1-2 star reviews immediately

```
Rule Name: Critical Issue - Immediate Escalation
Priority: HIGH
Batch Mode: OFF (review each one)
Conditions:
  - Star Rating = Below 3 Stars
  - Response Time = Within 24 hours
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We sincerely apologize for your experience. 

This is not the standard we maintain. 
Our manager is personally reviewing this 
and will contact you within 2 hours.

We're committed to making this right.

[Your Company Name]
Manager: [Manager Name]
Direct: [Manager Phone]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 6: Quality Issue Handler
**When to use**: Product quality complaints detected in review

```
Rule Name: Quality Issue Resolution
Priority: HIGH
Batch Mode: OFF
Conditions:
  - Tags = Quality Issue
  - Response Time = Within 24 hours
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for reporting the quality issue.

We take product quality very seriously. 
Our quality team is investigating immediately.

Please reply with:
1. Order number
2. Photos of the issue (if possible)
3. Preferred resolution

We'll make it right!

[Your Company Name]
Quality Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 7: Delivery Problem Resolution
**When to use**: Shipping or delivery delays mentioned

```
Rule Name: Delivery Issue Fast Response
Priority: HIGH
Batch Mode: OFF
Conditions:
  - Tags = Delivery Issue
  - Response Time = Within 24 hours
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We sincerely apologize for the delivery issue.

Our logistics team is investigating this right now:
- Tracking ID being checked
- Carrier contacted for status update
- Expedited resolution being arranged

You'll hear an update within 24 hours.

Thank you for your patience,
[Your Company Name] Logistics Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 8: Customer Service Issue
**When to use**: Complaints about support interactions

```
Rule Name: Customer Service Improvement
Priority: HIGH
Batch Mode: OFF
Conditions:
  - Tags = Customer Service
  - Star Rating = Below 3 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We apologize for the customer service experience.

This doesn't reflect our values. 
Your feedback is being reviewed by our Service Director
who will contact you personally.

We'd like the opportunity to do better.

[Service Director Name]
[Direct Email/Phone]
[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 9: Late Response to Old Review
**When to use**: Acknowledge reviews missed initially

```
Rule Name: Late Review Acknowledgment
Priority: MEDIUM
Batch Mode: OFF
Conditions:
  - Response Time = Older than 14 days
  - Has Text = Yes
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We noticed your review and wanted to respond.

We sincerely apologize for the delayed response. 
Your feedback is important to us, 
even if we're late in acknowledging it.

If there's anything we can still do to help,
please don't hesitate to reach out.

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 💬 Engagement Rules {#engagement-rules}

### Template 10: Request More Details
**When to use**: You need more info about the review

```
Rule Name: Ask for More Feedback
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - No Text Review = Yes
  - Star Rating = 4 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thanks for the 4-star rating! ⭐

We'd love to hear what you liked and 
what could improve for next time. 
Your detailed feedback helps us a lot!

Reply here or message us anytime.

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 11: Feature Request Acknowledgment
**When to use**: Customer suggests new feature or improvement

```
Rule Name: Feature Request Thank You
Priority: MEDIUM
Batch Mode: OFF
Conditions:
  - Tags = Product Feature
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for the feature suggestion! 

We love innovative ideas from our customers.
Your suggestion has been forwarded to 
our Product Development team.

We'll be in touch if we move forward with this.

[Your Company Name]
Product Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 12: Loyalty Reward Offer
**When to use**: Convert satisfied customers to repeat customers

```
Rule Name: Loyalty Program Invitation
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Star Rating = 4 Stars
  - Reviewer Type = Repeat Customer
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We love that you're a repeat customer! 

Join our exclusive loyalty program:
✓ Earn points on every purchase
✓ Exclusive member-only discounts
✓ Early access to sales & new products
✓ Birthday special offers

Join free here: [LINK]
Use code: LOYAL10 for 10% off your next order

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 👥 Segmentation Rules {#segmentation-rules}

### Template 13: First-Time Customer
**When to use**: Build relationship with new customers

```
Rule Name: First-Time Customer Welcome
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Reviewer Type = First-time Customer
  - Star Rating = 4 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Welcome to our [Your Company] family! 

Thank you for your first purchase and review.
We'd love to reward your loyalty with:

🎁 15% off your next order: WELCOME15
📧 Exclusive subscriber deals
💝 Birthday month specials

See you soon!

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 14: Repeat Customer Recognition
**When to use**: Appreciate loyal, returning customers

```
Rule Name: Repeat Customer Appreciation
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Star Rating = 5 Stars
  - Reviewer Type = Repeat Customer
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for being a loyal [Your Company] customer!

Your continued trust means everything.
As a valued repeat customer, you're invited to:

✓ Join our VIP tier (exclusive benefits)
✓ Get invited to member-only events
✓ Direct access to our customer care team

Let's make sure your next experience is even better!

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ⚙️ Operational Rules {#operational-rules}

### Template 15: Pricing Question Response
**When to use**: Customer comments on pricing

```
Rule Name: Pricing Inquiry Response
Priority: MEDIUM
Batch Mode: OFF
Conditions:
  - Tags = Pricing
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for your feedback on our pricing.

We believe we offer great value for the quality.
Our pricing reflects:
✓ High-quality sourcing
✓ Expert craftsmanship
✓ Excellent customer service

Have questions? Our team is happy to discuss:
[Support Email/Phone]

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 16: Shipping Speed Praise
**When to use**: Acknowledge positive shipping experience

```
Rule Name: Fast Shipping Thank You
Priority: MEDIUM
Batch Mode: ON
Conditions:
  - Tags = Shipping Speed
  - Star Rating = 5 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for the great feedback on our shipping! 

We pride ourselves on fast, reliable delivery.
Your quick review means we're doing it right!

Order again anytime - we're always ready!

[Your Company Name] Logistics Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 17: Packaging Experience
**When to use**: Comment on unboxing/packaging experience

```
Rule Name: Packaging Appreciation
Priority: LOW
Batch Mode: ON
Conditions:
  - Tags = Packaging
  - Sentiment = Positive
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We're so glad you loved the unboxing experience!

We put thought into every detail - 
from packaging materials to presentation.

Thank you for noticing the care we put in!

[Your Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🌍 Multi-Language Rules {#multi-language-rules}

### Template 18: Spanish Language Response
**When to use**: Respond to Spanish-speaking customers

```
Rule Name: Respuesta en Español
Priority: HIGH
Batch Mode: ON
Conditions:
  - Language = Spanish
  - Sentiment = Negative
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Disculpe sinceramente por su experiencia.

Esto no refleja nuestros valores. 
Nuestro equipo de servicio al cliente 
lo contactará pronto para resolver esto.

Gracias por su paciencia.

[Su Empresa]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 19: French Language Response
**When to use**: Respond to French-speaking customers

```
Rule Name: Réponse en Français
Priority: HIGH
Batch Mode: ON
Conditions:
  - Language = French
  - Star Rating = Below 3 Stars
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nous nous excusons sincèrement pour votre expérience.

Notre équipe d'assistance examine cette situation.
Nous vous recontacterons dans les 24 heures 
pour résoudre ce problème.

Merci de votre patience.

[Votre Entreprise]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🚀 Advanced Rules {#advanced-rules}

### Template 20: Multi-Condition VIP Handler
**When to use**: Premium treatment for important customers

```
Rule Name: VIP Premium Multi-Condition
Priority: HIGH
Batch Mode: OFF
Conditions:
  ✓ Reviewer Type = VIP Customer
  ✓ Star Rating = 5 Stars
  ✓ Has Text = Yes
  ✓ Response Time = Within 24 hours
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dear [VIP Customer Name],

Your 5-star review is incredibly meaningful to us.
As a valued VIP member, we want to ensure 
you continue receiving exceptional service.

Please schedule a call with our VIP concierge:
[Calendar Link]

We have exclusive perks reserved for you.

[Your Company Name]
VIP Services Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 21: Keyword-Triggered Escalation
**When to use**: Automatic escalation for serious issues

```
Rule Name: Critical Keywords Auto-Escalate
Priority: HIGH
Batch Mode: OFF
Conditions:
  ✓ Text Contains = "broken" OR "damaged" OR "defective"
  ✓ Response Time = Within 24 hours
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We're very sorry to hear about the damage.

This is being escalated immediately:
✓ Case #[AUTO-GENERATED] created
✓ Priority status assigned
✓ Manager notified

Please reply with:
- Order number
- Photos of damage
- Preferred resolution

We'll resolve this today!

[Your Company] Quality Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Template 22: Time-Based Escalation
**When to use**: Increase urgency for old unresponded reviews

```
Rule Name: Legacy Review Escalation
Priority: HIGH
Batch Mode: OFF
Conditions:
  ✓ Response Time = Older than 14 days
  ✓ Star Rating = Below 3 Stars
  ✓ Has Text = Yes
Response Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We found your review and sincerely apologize 
for the delayed response.

Your negative experience deserves immediate attention.
Our manager will contact you today to make this right.

[Manager Name]
[Direct Contact]
[Your Company]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📋 How to Use These Templates

1. **Copy the template** you want to use
2. **Customize** the company name and contact info
3. **Adjust** the message tone for your brand
4. **Modify** conditions if needed
5. **Test** with a small group first
6. **Monitor** response rates
7. **Optimize** based on results

---

## 💡 Customization Tips

### Add Personal Touches
- Include manager names
- Add direct contact info
- Reference specific products
- Use customer's name where possible

### Optimize for Channel
- **Email**: Can be longer, include links
- **WhatsApp**: Keep concise, use emojis
- **SMS**: 160 char limit, very brief

### Adjust Tone
- **Positive reviews**: Warm, enthusiastic
- **Negative reviews**: Apologetic, solution-focused
- **Neutral reviews**: Professional, helpful

### Add Call-to-Action
- Reply here
- Click this link
- Call this number
- Schedule a meeting
- Browse our products

---

## 🎯 Implementation Strategy

### Week 1
- [ ] Create Rules 1, 5, 10 (basics)
- [ ] Monitor response rates
- [ ] Gather feedback

### Week 2
- [ ] Add Rules 2, 6, 7 (issue handling)
- [ ] Refine Rule 1 messages
- [ ] Check metrics

### Week 3
- [ ] Add Rules 3, 4, 12 (engagement)
- [ ] Create custom variations
- [ ] Optimize conditions

### Week 4+
- [ ] Advanced rules & multi-conditions
- [ ] Language-specific rules
- [ ] Full automation setup

---

**Last Updated**: November 19, 2025
**Template Version**: 1.0
**Total Templates**: 22+

Use these templates as a starting point and customize for your brand! 🎨
