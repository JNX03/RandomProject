# 💰 n8n Money-Making Automation Workflows

**5 Powerful n8n Workflows to Generate Revenue on Autopilot**

This collection contains 5 production-ready n8n automation workflows designed to help you generate income through content automation, affiliate marketing, and social media monetization.

---

## 📋 Table of Contents

- [Workflows Overview](#workflows-overview)
- [Revenue Potential](#revenue-potential)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Workflow Details](#workflow-details)
- [Configuration Guide](#configuration-guide)
- [Monetization Strategies](#monetization-strategies)
- [Legal & Compliance](#legal--compliance)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Workflows Overview

### 1. **Thailand News & Drama Auto-Poster to Facebook**
`1-thailand-news-drama-facebook-autoposter.json`

Automatically scrapes Thailand news and entertainment content from RSS feeds and posts to your Facebook page with optimized hashtags and formatting.

**Revenue Model:** Facebook ad revenue, sponsored posts, brand partnerships
**Runs:** Every 2 hours
**Target Audience:** Thai drama fans, Thailand news followers

---

### 2. **AI Video Generator & Multi-Platform Publisher**
`2-ai-video-generator-multi-platform-publisher.json`

Generates AI videos using Sora 2 or Veo 3, then automatically publishes to TikTok, YouTube Shorts, and Instagram Reels.

**Revenue Model:** Ad revenue, sponsorships, brand deals, Creator Fund
**Runs:** Every 6 hours
**Platforms:** TikTok, YouTube Shorts, Instagram Reels

---

### 3. **Trending Products Affiliate Marketing Promoter**
`3-trending-products-affiliate-promoter.json`

Monitors trending products from Amazon and other retailers, generates compelling promotional content, and posts to multiple social platforms with affiliate links.

**Revenue Model:** Affiliate commissions (4-10% per sale)
**Runs:** Every 4 hours
**Platforms:** Twitter/X, Facebook, Telegram

---

### 4. **Viral Content to YouTube Shorts Creator**
`4-viral-content-youtube-shorts-creator.json`

Finds viral content from Reddit (5000+ upvotes), converts it to YouTube Shorts format, and auto-uploads with optimized titles and descriptions.

**Revenue Model:** YouTube ad revenue, YouTube Shorts Fund
**Runs:** Every 3 hours
**Platform:** YouTube Shorts

---

### 5. **Price Drop Monitor & Social Media Alert System**
`5-price-drop-monitor-social-alerts.json`

Tracks product prices, detects significant price drops, and sends multi-channel alerts with affiliate links to your audience.

**Revenue Model:** Affiliate commissions from deal alerts
**Runs:** Every 1 hour
**Platforms:** Twitter/X, Facebook, Telegram, Email, Discord

---

## 💵 Revenue Potential

| Workflow | Estimated Monthly Revenue | Difficulty | Setup Time |
|----------|---------------------------|------------|------------|
| Thailand News Auto-Poster | $200-$1,000 | Easy | 30 min |
| AI Video Multi-Publisher | $500-$5,000 | Medium | 1 hour |
| Affiliate Product Promoter | $300-$3,000 | Easy | 45 min |
| Viral YouTube Shorts | $500-$10,000+ | Medium | 1 hour |
| Price Drop Alerts | $200-$2,000 | Easy | 45 min |

**Total Potential: $1,700 - $21,000+/month** (assuming optimization and audience growth)

*Note: Revenue depends on audience size, engagement, niche, and optimization.*

---

## 📦 Prerequisites

### Required Software
- **n8n** (self-hosted or n8n Cloud) - [Install Guide](https://docs.n8n.io/hosting/)
- **Node.js** v18+ (for self-hosted)
- **PostgreSQL or SQLite** (for n8n database)

### Required API Keys & Accounts

#### Essential (Free Tier Available)
- [ ] **OpenAI API** - For Sora 2 video generation ([Get API Key](https://platform.openai.com/api-keys))
- [ ] **Rainforest API** - For Amazon product data ([Get API Key](https://www.rainforestapi.com/))
- [ ] **Facebook/Meta Developer** - For Facebook/Instagram posting ([Create App](https://developers.facebook.com/))
- [ ] **YouTube Data API** - For YouTube uploads ([Enable API](https://console.cloud.google.com/apis/library/youtube.googleapis.com))
- [ ] **Twitter/X API** - For Twitter posting ([Developer Portal](https://developer.twitter.com/))

#### Optional but Recommended
- [ ] **Wavespeed API** - For Veo 3 video generation ([Sign Up](https://wavespeed.io/))
- [ ] **TikTok Developer** - For TikTok posting ([Apply](https://developers.tiktok.com/))
- [ ] **Telegram Bot Token** - For Telegram alerts ([Create Bot](https://t.me/botfather))
- [ ] **Discord Webhook** - For Discord alerts ([Webhook Guide](https://support.discord.com/hc/en-us/articles/228383668))
- [ ] **SMTP Server** - For email alerts (Gmail, SendGrid, etc.)

#### Affiliate Programs
- [ ] **Amazon Associates** - ([Join](https://affiliate-program.amazon.com/))
- [ ] **ShareASale** - ([Join](https://www.shareasale.com/))
- [ ] **CJ Affiliate** - ([Join](https://www.cj.com/))

---

## 🔧 Installation

### Step 1: Import Workflows into n8n

1. Open your n8n instance
2. Go to **Workflows** → **Import from File**
3. Select one of the workflow JSON files
4. Click **Import**
5. Repeat for all 5 workflows

**OR** use the n8n CLI:

```bash
# Import all workflows at once
n8n import:workflow --input=./n8n-workflows/
```

### Step 2: Set Up Environment Variables

Add these to your `.env` file or n8n environment settings:

```bash
# OpenAI (for Sora 2 video generation)
OPENAI_API_KEY=sk-...

# Wavespeed (for Veo 3 video generation)
WAVESPEED_API_KEY=ws_...

# Facebook/Instagram
FACEBOOK_PAGE_ID=your-page-id

# Amazon Affiliate
AMAZON_AFFILIATE_TAG=yourtag-20

# Rainforest API (for Amazon data)
RAINFOREST_API_KEY=...

# Best Buy API (optional)
BESTBUY_API_KEY=...

# Telegram
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHANNEL_ID=@yourchannel

# Discord
DISCORD_WEBHOOK_ID=...
DISCORD_WEBHOOK_TOKEN=...

# Email
EMAIL_FROM=alerts@yourdomain.com
EMAIL_SUBSCRIBERS=subscriber1@email.com,subscriber2@email.com
```

### Step 3: Configure Credentials in n8n

For each workflow, configure the OAuth2 credentials:

1. **Facebook Graph API**
   - Go to Credentials → Add New → Facebook Graph API
   - Follow OAuth2 flow
   - Grant permissions: `pages_manage_posts`, `pages_read_engagement`

2. **YouTube OAuth2**
   - Add YouTube OAuth2 credential
   - Grant permissions: `youtube.upload`, `youtube.readonly`

3. **Twitter OAuth2**
   - Add Twitter OAuth2 credential
   - Grant permissions: `tweet.read`, `tweet.write`

4. **OpenAI API**
   - Add OpenAI credential
   - Paste your API key

5. **TikTok OAuth2** (optional)
   - Add TikTok credential
   - Complete OAuth flow

---

## 📖 Workflow Details

### Workflow 1: Thailand News & Drama Auto-Poster

**How It Works:**
1. Fetches RSS feeds from Bangkok Post (News + Entertainment)
2. Filters posts from last 3 hours (avoids duplicates)
3. Formats content with Thai hashtags
4. Posts to Facebook page every 5 minutes

**Customization:**
- Change RSS sources in nodes `rss-bangkokpost` and `rss-entertainment`
- Modify hashtags in the `Format Post Content` code node
- Adjust posting frequency in `Schedule Trigger`

**Monetization Tips:**
- Build audience to 10K+ followers
- Enable Facebook ad breaks
- Partner with Thai brands for sponsored posts
- Sell advertising space in posts

---

### Workflow 2: AI Video Generator & Multi-Platform Publisher

**How It Works:**
1. Generates trending video ideas
2. Creates videos using Sora 2 or Veo 3 AI
3. Downloads generated videos
4. Uploads to TikTok, YouTube Shorts, and Instagram Reels simultaneously

**Customization:**
- Edit video prompts in `Generate Video Idea` node
- Change video duration/aspect ratio
- Modify hashtags for each platform
- Add watermark/branding (requires video editing node)

**Monetization Tips:**
- Join YouTube Partner Program (1K subs + 10M Shorts views in 90 days)
- Apply for TikTok Creator Fund
- Reach Instagram Reels Bonus eligibility
- Sponsored content once you hit 100K+ followers
- **Expected**: $2-5 RPM (revenue per 1000 views)

---

### Workflow 3: Trending Products Affiliate Promoter

**How It Works:**
1. Fetches trending/bestselling products from Amazon & Best Buy
2. Scores products based on price, rating, reviews
3. Generates affiliate links with your tag
4. Creates promotional posts
5. Posts to Twitter, Facebook, Telegram

**Customization:**
- Add more product sources (Walmart, Target, etc.)
- Modify scoring algorithm in `Filter Best Products` node
- Customize promotional text templates
- Add your own product watchlist

**Monetization Tips:**
- Focus on high-commission categories (Electronics: 4%, Luxury Beauty: 10%)
- Build email list for exclusive deals
- Create "Deal of the Day" content series
- Use Amazon OneLink for international commissions

---

### Workflow 4: Viral Content to YouTube Shorts

**How It Works:**
1. Scrapes r/videos, r/funny, r/Damnthatsinteresting
2. Filters posts with 5000+ upvotes and high engagement
3. Downloads existing videos or generates new ones from images/text
4. Adds captions and optimizes for YouTube Shorts
5. Auto-uploads with viral-optimized titles

**Customization:**
- Add more subreddits in trigger nodes
- Adjust viral threshold (currently 5000+ score)
- Modify title/description templates
- Add text-to-speech for text posts

**Monetization Tips:**
- Focus on trending topics for maximum views
- Upload 3-5 Shorts daily for algorithm boost
- Add mid-roll ads once eligible
- Cross-promote affiliate products in description
- **Revenue**: $0.01-0.05 per view on average

---

### Workflow 5: Price Drop Monitor & Social Media Alert System

**How It Works:**
1. Loads product watchlist with target prices
2. Checks current prices every hour via API
3. Detects price drops below target or 20%+ discounts
4. Generates alert messages with affiliate links
5. Sends alerts to Twitter, Facebook, Telegram, Email, Discord

**Customization:**
- Edit watchlist in `Load Tracked Products` node
- Add more products to monitor
- Customize alert thresholds
- Add SMS alerts via Twilio
- Store price history in database

**Monetization Tips:**
- Build audience of deal hunters
- Focus on high-ticket items ($100-$500 range) for bigger commissions
- Send daily digest emails
- Create "Price Drop" Discord server with premium tier
- Partner with cashback services for dual commissions

---

## ⚙️ Configuration Guide

### Setting Up Facebook Auto-Posting

1. Create a Facebook Page (if you don't have one)
2. Go to [Meta for Developers](https://developers.facebook.com/)
3. Create a new app → Business → Connected Experiences
4. Add **Facebook Login** product
5. Get your Page Access Token:
   - Tools → Graph API Explorer
   - Select your page → Generate Access Token
   - Grant permissions: `pages_manage_posts`, `pages_read_engagement`
6. Copy Page ID from your page settings
7. Add to n8n credentials

### Setting Up YouTube API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable **YouTube Data API v3**
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://your-n8n-instance.com/rest/oauth2-credential/callback`
6. Download JSON credentials
7. Add to n8n YouTube OAuth2 credential

### Setting Up OpenAI for Sora 2

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create API key
3. Add billing information (Sora requires paid plan)
4. Note: As of early 2025, Sora API access may be limited. Check [current status](https://platform.openai.com/docs/guides/video-generation)

### Setting Up Affiliate Links

**Amazon Associates:**
1. Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com/)
2. Complete application (need website/social media with content)
3. Get your affiliate tag (format: `yourname-20`)
4. Add to environment variable `AMAZON_AFFILIATE_TAG`

**Important:** You must generate 3 sales within 180 days or account will close.

---

## 💡 Monetization Strategies

### Quick Wins (Week 1-4)
- [ ] Set up all 5 workflows
- [ ] Post 3-5 times daily on each platform
- [ ] Join all relevant affiliate programs
- [ ] Create social media profiles if needed
- [ ] Enable monetization on YouTube/TikTok

### Growth Phase (Month 2-6)
- [ ] Reach 1,000 YouTube subscribers
- [ ] Grow Facebook page to 10K followers
- [ ] Build email list to 500+ subscribers
- [ ] Get first affiliate sales
- [ ] Apply for TikTok Creator Fund

### Scaling (Month 6+)
- [ ] Add more workflows for other niches
- [ ] Hire VA for workflow monitoring
- [ ] Create premium Discord/Telegram channels
- [ ] Launch sponsored content campaigns
- [ ] Diversify to more affiliate networks

### Revenue Breakdown Example

**Month 6 (Conservative Estimate):**
- YouTube Shorts ad revenue: $300 (500K views)
- TikTok Creator Fund: $150 (1M views)
- Amazon Affiliate: $800 (40 sales @ $20 avg commission)
- Facebook ad revenue: $200 (10K followers, good engagement)
- Sponsored posts: $500 (2 posts @ $250)
- **Total: $1,950/month**

**Month 12 (Optimized):**
- YouTube: $1,500 (2M+ views)
- TikTok: $400 (2M+ views)
- Affiliate: $3,000 (150 sales)
- Facebook: $800 (50K followers)
- Sponsored content: $2,000 (4 posts @ $500)
- Email list monetization: $500
- **Total: $8,200/month**

---

## ⚖️ Legal & Compliance

### ⚠️ Important Disclaimers

1. **Copyright Compliance**
   - Ensure you have rights to all content
   - Give proper attribution for Reddit content
   - Don't steal watermarked videos
   - Follow Fair Use guidelines

2. **Platform Terms of Service**
   - Don't spam or over-post
   - Follow each platform's automation policies
   - Disclose automated content where required
   - Respect rate limits

3. **Affiliate Disclosure**
   - Always disclose affiliate links
   - Follow FTC guidelines
   - Add disclaimers: "This post contains affiliate links. We may earn a commission from qualifying purchases."

4. **Data Privacy**
   - Don't collect personal data without consent
   - Follow GDPR/CCPA if applicable
   - Have a privacy policy

5. **AI Content Disclosure**
   - Disclose AI-generated videos where required
   - Some platforms require labeling synthetic media

### Recommended Disclaimers

**For Affiliate Posts:**
```
⚠️ Disclosure: This post contains affiliate links. We may earn a commission
from qualifying purchases at no additional cost to you. We only recommend
products we believe will add value to our audience.
```

**For AI-Generated Content:**
```
🤖 This video was generated using AI technology (Sora/Veo).
Content may not represent real events.
```

---

## 🛠 Troubleshooting

### Common Issues

**Issue: "Rate limit exceeded" error**
- Solution: Reduce posting frequency in Schedule Trigger
- Add delays between posts using Wait nodes
- Use exponential backoff

**Issue: Videos not uploading to TikTok**
- TikTok API access is limited - may need to apply for developer access
- Alternative: Use Zapier/Make.com as bridge
- Or manually upload using TikTok app

**Issue: OpenAI Sora API not available**
- Sora API access is rolling out gradually
- Alternative: Use Veo 3 via Wavespeed
- Or use free alternatives like [Runway](https://runwayml.com/)

**Issue: No affiliate sales**
- Check affiliate links are correctly formatted
- Ensure proper attribution tracking
- Focus on high-intent keywords
- Improve audience targeting

**Issue: Low engagement on posts**
- Improve content quality
- Post at optimal times (check analytics)
- Use trending hashtags
- Engage with comments

### Getting Help

- **n8n Community**: [community.n8n.io](https://community.n8n.io/)
- **n8n Documentation**: [docs.n8n.io](https://docs.n8n.io/)
- **Issues/Questions**: Open an issue in this repository

---

## 📈 Performance Optimization

### Best Practices

1. **Start with 1-2 workflows** and master them before adding more
2. **Monitor execution logs** in n8n for errors
3. **A/B test** different posting times and content styles
4. **Track metrics**: clicks, conversions, revenue per workflow
5. **Iterate**: Pause underperforming workflows, double down on winners

### Scaling Tips

- Use n8n's **queue mode** for high-volume workflows
- Set up **error notifications** via Slack/Discord
- Create **backup workflows** for critical automations
- Use **caching** for API responses where possible
- Monitor **API quota usage** to avoid overages

---

## 🎯 Next Steps

1. ✅ Import all 5 workflows into n8n
2. ✅ Set up required API keys and credentials
3. ✅ Configure environment variables
4. ✅ Test each workflow manually (Execute Workflow button)
5. ✅ Activate workflows one by one
6. ✅ Monitor execution logs for first 24 hours
7. ✅ Optimize based on performance data
8. ✅ Scale successful workflows

---

## 📚 Additional Resources

### Learning Resources
- [n8n Workflow Templates](https://n8n.io/workflows/)
- [Affiliate Marketing Guide](https://www.authorityhacker.com/affiliate-marketing/)
- [YouTube Shorts Best Practices](https://www.youtube.com/creators/shorts/)
- [Social Media Automation Ethics](https://buffer.com/resources/social-media-automation/)

### Tools & Services
- **Canva** - Create thumbnails and graphics
- **CapCut** - Edit videos before upload
- **Buffer/Hootsuite** - Social media management (backup)
- **Google Analytics** - Track website traffic
- **Bitly** - Link shortening and tracking

---

## 📄 License

These workflows are provided as-is for educational and commercial use.

⚠️ **Use Responsibly:**
- Follow all platform terms of service
- Don't spam or create fake engagement
- Provide value to your audience
- Be ethical with automation

---

## 🙏 Credits

- Workflow designs by [Your Name]
- Powered by [n8n.io](https://n8n.io/)
- AI video generation: OpenAI Sora & Google Veo
- Data sources: Bangkok Post, Reddit, Rainforest API

---

## 💬 Support

Found these workflows helpful?

- ⭐ Star this repository
- 🐛 Report issues
- 💡 Suggest improvements
- 🤝 Contribute your own workflows

**Happy Automating! 💰🚀**

---

*Last Updated: November 2025*
*Compatible with n8n v1.0+*
