# ⚡ Quick Reference: New Features

## 🔗 Quick Navigation

### Request Reviews Section
- **Location**: Sidebar → "Request Reviews" (Send icon)
- **Purpose**: Send bulk review requests via Email/WhatsApp/SMS
- **Time to Create Campaign**: 2-3 minutes
- **Best For**: Growing review volume

### Auto Responder Section  
- **Location**: Sidebar → "Auto Responder" (Bot icon)
- **Purpose**: Automatically respond to reviews with conditions
- **Time to Create Rule**: 3-5 minutes
- **Best For**: 24/7 engagement & scaling

---

## 📨 Request Reviews - Quick Start

### Step-by-Step
```
1. Click "Request Reviews" in sidebar
2. Enter campaign name
3. Select channel (Email/WhatsApp/SMS)
4. Write message
5. Choose mode (No Reviews / All Customers)
6. Select customers
7. Click "Send Campaign"
```

### Channel Comparison
| Feature | Email | WhatsApp | SMS |
|---------|-------|----------|-----|
| Open Rate | 40% | 80% | 95% |
| Character Limit | Unlimited | 1000 | 160 |
| Cost | Free | Free | $$$ |
| Response Time | 2-7 days | Hours | Immediate |
| Best For | Details | Reminders | Quick asks |

### Email Template
```
Subject: We'd love your feedback!

Hi [Name],

We hope you're enjoying [Product/Service]. 
Your feedback helps us improve!

⭐ Leave Your Review:
[Review Link]

Thank you!
[Your Company]
```

### WhatsApp Template
```
Hi [Name]! 👋

We hope you loved [Product]. 
Could you share your experience? ⭐

[Review Link]

Thanks! 🙏
```

### SMS Template
```
Hi [Name]! Thanks for your purchase. 
Please rate us: [Short Link] ⭐
```

---

## 🤖 Auto Responder - Quick Start

### Step-by-Step
```
1. Click "Auto Responder" in sidebar
2. Click "Create New Rule"
3. Enter rule name & priority
4. Click "Add Condition"
5. Choose trigger type & value
6. Add more conditions if needed
7. Write response message
8. Check batch mode if desired
9. Click "Create Rule"
```

### Most Common Rules (Ready to Copy)

#### Rule 1: Thank 5-Star Reviews
```
Name: Perfect 5-Star Thank You
Conditions:
  - Star Rating = 5 Stars
Priority: HIGH
Message: 
"Thank you for the 5-star review! 
We truly appreciate your support. 
See you soon!"
```

#### Rule 2: Address Negative Reviews  
```
Name: Low Rating Priority Response
Conditions:
  - Star Rating = Below 3 Stars
Priority: HIGH
Message:
"We sincerely apologize. 
Our manager will contact you within 24 hours 
to make this right. Thank you for your patience."
```

#### Rule 3: Address Specific Issues
```
Name: Delivery Problem Handler
Conditions:
  - Tags = Delivery Issue
  - Response Time = Within 24 hours
Priority: HIGH
Message:
"We're sorry about the delivery issue. 
Our team is investigating immediately. 
We'll be in touch within 24 hours."
```

#### Rule 4: Get Feedback on Ratings-Only
```
Name: Request More Feedback
Conditions:
  - No Text Review = Yes
Priority: MEDIUM
Message:
"Thanks for the rating! 
Could you share what you liked or 
what we could improve? Your feedback helps!"
```

#### Rule 5: Positive Sentiment Generic
```
Name: General Positive Response
Conditions:
  - Sentiment = Positive
Priority: MEDIUM
Message:
"Thank you for the wonderful feedback! 
We're so glad you had a great experience. 
We look forward to serving you again!"
```

---

## 🎯 Trigger Types Cheat Sheet

| Trigger | Values | Best For |
|---------|--------|----------|
| **Sentiment** | Positive, Neutral, Negative | General response |
| **Stars** | 1-5, Below 3, 4-5 | Rating-based response |
| **Tags** | Quality, Delivery, Service, etc. | Issue-specific response |
| **Text Contains** | Any keyword | Keyword-triggered response |
| **No Text Review** | Yes/No | Requesting feedback |
| **Response Time** | 24h, 3d, 7d, 14d+ | Time-sensitive issues |
| **Language** | EN, ES, FR, DE, etc. | Localized responses |
| **Keyword Match** | Custom phrase | Specific phrase matching |
| **Reviewer Type** | First-time, Repeat, VIP | Segmented responses |

---

## 🔑 Advanced: Multi-Condition Examples

### Example 1: Premium VIP Treatment
```
Name: VIP 5-Star Experience
Conditions:
  ✓ Star Rating = 5 Stars
  ✓ Reviewer Type = VIP Customer
  ✓ Has Text = Yes
Message: "VIP, your 5-star review is invaluable! 
We'd love to offer you exclusive benefits..."
```

### Example 2: Urgent Negative Handling
```
Name: Critical Issue Escalation
Conditions:
  ✓ Star Rating = Below 3 Stars
  ✓ Response Time = Within 24 hours
  ✓ Language = English
Priority: HIGH
Message: "We sincerely apologize. 
Our manager is personally handling this. 
Expect contact within 2 hours."
```

### Example 3: Language-Specific
```
Name: Spanish Customer Care
Conditions:
  ✓ Language = Spanish
  ✓ Sentiment = Negative
Message: "Disculpe el inconveniente. 
Nuestro equipo lo contactará pronto 
para resolver esto. Gracias."
```

### Example 4: Operational Issue Pattern
```
Name: Delivery Delay Response
Conditions:
  ✓ Text Contains = "late" OR "delayed"
  ✓ Response Time = Within 3 days
Message: "We apologize for the delay. 
Our carrier has confirmed delivery 
within 24 hours. Thank you for patience."
```

### Example 5: Feedback Request
```
Name: Rating-Only Follow-up
Conditions:
  ✓ No Text Review = Yes
  ✓ Star Rating = 4-5 Stars
Message: "Thanks for the positive rating! 
Could you share what you loved? 
It helps us improve!"
```

---

## 📊 Metrics & Monitoring

### Request Reviews Metrics
- **Total Customers**: All in system
- **With Reviews**: Already reviewed
- **Without Reviews**: Haven't reviewed yet
- **Active Campaigns**: Currently running
- **Response Rate**: % who responded to campaign
- **Sent**: Total requests sent
- **Responses**: How many reviewed after request

### Auto Responder Metrics
- **Active Rules**: Enabled rules
- **Total Rules**: All rules (enabled + disabled)
- **Total Responses**: Messages sent automatically
- **Response Rate**: % of reviews getting responses
- **Responses Today**: Daily auto-responses
- **This Week**: Weekly count
- **This Month**: Monthly total

---

## 🛠️ Troubleshooting

### Request Reviews Issues
| Problem | Solution |
|---------|----------|
| No customers show | Ensure customers have phone/email |
| Can't send campaign | Select at least 1 customer |
| Message too long | Reduce for SMS (160 char limit) |
| Wrong channel selected | Verify phone numbers for WhatsApp/SMS |

### Auto Responder Issues
| Problem | Solution |
|---------|----------|
| Rule not triggering | Check condition values match reviews |
| Too many responses | Add more conditions to narrow down |
| Wrong message sent | Verify condition logic |
| Batch mode not working | Ensure "Apply to all matching" is enabled |
| AI not generating responses | Toggle AI On and ensure it's enabled |

---

## 🎓 Best Practices Summary

### Request Reviews
✅ Send within 24-48 hours of purchase
✅ Keep messages brief and compelling
✅ Use multi-channel approach
✅ Track response rates
✅ Follow up non-responders after 7 days
✅ Respect opt-out preferences

### Auto Responder
✅ Start with 1-2 simple rules
✅ Test before enabling batch mode
✅ Review AI-generated responses
✅ Prioritize negative review responses
✅ Update rules based on feedback
✅ Keep message personalization high

---

## 🚀 Getting Started Checklist

- [ ] Read ADVANCED_FEATURES_GUIDE.md (this file!)
- [ ] Create 1st Request Reviews campaign
- [ ] Send to 5-10 customers
- [ ] Monitor response rate
- [ ] Create 1st Auto Responder rule (5-star thank you)
- [ ] Create 2nd rule (low rating response)
- [ ] Test rules with real reviews
- [ ] Create 3-5 total rules
- [ ] Enable AI if needed
- [ ] Monitor activity summary
- [ ] Optimize based on metrics
- [ ] Scale up!

---

## 📞 Common Questions Answered

**Q: How long do campaigns take to send?**
A: Instant for email, within minutes for WhatsApp/SMS

**Q: Can I schedule campaigns for later?**
A: Currently immediate. Consider batch scheduling tools.

**Q: How often can I request reviews?**
A: Max 1x per customer per month recommended

**Q: Do I need GDPR consent?**
A: Yes! Ensure opt-in for email/SMS

**Q: Can I edit responses after sending?**
A: Rules are auto, manual responses can be edited

**Q: How many rules can I create?**
A: Unlimited! But aim for 5-10 focused rules

**Q: What's the best time to send campaigns?**
A: Tuesday-Thursday, 10AM-2PM typically best

**Q: Does AI replace my manual work?**
A: No - AI drafts, you review & customize

**Q: Can rules work together?**
A: Yes - multiple rules can trigger on same review

**Q: How do I know if rules are working?**
A: Check "Total Responses" in Activity Summary

---

**Last Updated**: November 19, 2025
**Version**: 1.1
**Status**: Ready to Use ✅

## 🎯 Next: Start with One Campaign!

Pick a customer segment and send your first request review campaign today! 🚀
