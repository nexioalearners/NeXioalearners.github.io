// All Courses Data (Same as courses.js)
const courses = [
  // 1. AI Prompting & Tools
  { title: "AI Prompting & Tools - Beginner", desc: "Intro to AI prompting, ChatGPT basics, and tool navigation. Learn to create effective prompts for AI tools and build simple AI-powered workflows. Understand core AI concepts and basic applications for productivity.", level: "Beginner", parts: "6 Modules", rating: "4.6", price: "₹169", badge: "New", image: "Ai_prompt.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "AI Prompting & Tools - Intermediate", desc: "Advanced AI prompts, multi-tool usage, and automation setup. Learn integration of multiple AI platforms, intermediate workflows, and practical AI applications. Improve efficiency and output quality with AI.", level: "Intermediate", parts: "8 Modules", rating: "4.7", price: "₹259", badge: "Popular", image: "aipromp1.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "AI Prompting & Tools - Advanced", desc: "Expert-level AI prompting strategies & workflow optimization. Master prompt chaining and advanced AI techniques. Scale projects using multiple AI tools and optimize outputs for high-value tasks.", level: "Advanced", parts: "10 Modules", rating: "4.8", price: "₹299", badge: "Bestseller", image: "aipromp2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "AI Prompting & Tools - Master", desc: "Full AI engineering mastery, monetization, and consulting setup. Create high-value AI services, manage complex projects, and consult professionally. Become an AI solutions expert and build a portfolio.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹399", badge: "Top Rated", image: "aipromp3.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

  // 2. Content Writing + AI
  { title: "Content Writing + AI - Beginner", desc: "Basic content creation using AI assistance. Learn how to generate blogs, social posts, and marketing content. Understand AI tools that improve writing speed and efficiency.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹159", badge: "New", image: "conent2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Content Writing + AI - Intermediate", desc: "AI-assisted blogs, social posts, and copywriting techniques. Learn content structuring, keyword optimization, and AI editing tools. Improve content quality and consistency.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹279", badge: "Popular", image: "conten1.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Content Writing + AI - Advanced", desc: "Advanced content strategies, SEO, and AI editing tools. Create high-performing blogs, emails, and social media posts. Master AI-powered content workflows for marketing success.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹299", badge: "Bestseller", image: "content.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Content Writing + AI - Master", desc: "Full content marketing mastery with AI-powered systems. Plan, write, edit, and automate content campaigns. Build a professional content portfolio and monetize AI writing skills.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹399", badge: "Top Rated", image: "content3.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

  // 3. Graphic Design (Canva)
  { title: "Graphic Design (Canva) - Beginner", desc: "Basic Canva tools & social post design. Learn simple graphics, colors, fonts, and layout. Start creating professional-looking posts and templates quickly.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "graphi.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Graphic Design (Canva) - Intermediate", desc: "Logo creation, brand identity, and Canva templates. Make professional graphics, social media posts, and marketing materials. Apply design principles for client-ready projects.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹299", badge: "Popular", image: "graphi1.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Graphic Design (Canva) - Advanced", desc: "Professional branding, client-ready designs & templates. Learn workflows, advanced Canva tools, and portfolio development. Handle real client projects professionally.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹339", badge: "Bestseller", image: "graphi3.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Graphic Design (Canva) - Master", desc: "Expert design workflows & portfolio building for clients. Master client communication, branding projects, and advanced templates. Prepare for freelancing or agency-level work.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹389", badge: "Top Rated", image: "grapi2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

  // 4. Video Editing (CapCut)
  { title: "Video Editing (CapCut) - Beginner", desc: "Intro to video editing, trimming & simple effects. Edit short videos for social media, understand timelines, basic transitions, and exporting videos.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹129", badge: "New", image: "videedit.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Video Editing (CapCut) - Intermediate", desc: "Transitions, overlays, and basic motion graphics. Learn editing techniques for engaging videos using CapCut tools, adding effects and sound.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹299", badge: "Popular", image: "videoedi3.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Video Editing (CapCut) - Advanced", desc: "Multi-layer editing, special effects, and short-form video strategies. Learn advanced CapCut editing, motion graphics, and storytelling techniques for social platforms.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹359", badge: "Bestseller", image: "videoedit1.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "Video Editing (CapCut) - Master", desc: "Professional video production & monetization strategies. Learn advanced workflows, client projects, and monetization techniques. Build a professional video portfolio.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹499", badge: "Top Rated", image: "videoedit2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

  // 5. No-Code Websites
  { title: "No-Code Websites - Beginner", desc: "Build your first website using no-code platforms. Learn basics of pages, layouts, and simple integrations. Launch a functional site without coding.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "nocode.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "No-Code Websites - Intermediate", desc: "Add dynamic features & integrations without coding. Use databases, forms, and plugins to enhance your site. Learn intermediate site optimization techniques.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹199", badge: "Popular", image: "nocode.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "No-Code Websites - Advanced", desc: "Custom workflows, automations, and responsive design. Create professional, client-ready websites with advanced no-code tools. Optimize design and performance.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹299", badge: "Bestseller", image: "nocode.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
  { title: "No-Code Websites - Master", desc: "Complete no-code website mastery with client projects. Learn full project workflows, advanced integrations, and monetization. Deliver professional-grade websites to clients.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹399", badge: "Top Rated", image: "nocode.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

  // Continue for all remaining skills (Freelancing Basics → Community Building)
  // 6. Freelancing Basics
{ title: "Freelancing Basics - Beginner", desc: "Introduction to freelancing, platforms, and mindset. Learn how to start offering services, create profiles, and find first clients. Understand freelancing workflows and communication basics.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "frelaicnh.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Freelancing Basics - Intermediate", desc: "Profile building, portfolio, and proposal writing. Learn how to present skills professionally, attract clients, and communicate effectively. Enhance credibility and win better projects.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹89", badge: "Popular", image: "freelancing2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Freelancing Basics - Advanced", desc: "Client management, pricing strategies, and advanced gigs. Master negotiation, project planning, and delivering high-quality work. Learn to scale freelancing projects professionally.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹99", badge: "Bestseller", image: "freelancing2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Freelancing Basics - Master", desc: "Freelance business mastery & agency setup. Learn advanced freelancing workflows, agency operations, and client scaling strategies. Become a professional freelancer or start your agency.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹197", badge: "Top Rated", image: "frelaicnh.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 7. Social Media Management
{ title: "Social Media Management - Beginner", desc: "Basics of managing social media accounts. Learn posting schedules, simple content creation, and engagement. Understand tools for managing multiple accounts efficiently.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹94", badge: "New", image: "socialmagne.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Social Media Management - Intermediate", desc: "Content planning, scheduling, and engagement. Learn analytics tracking, community interaction, and basic growth strategies. Improve content quality and account performance.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹89", badge: "Popular", image: "socialmanag.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Social Media Management - Advanced", desc: "Growth strategies and analytics tracking. Master account optimization, audience analysis, and growth campaigns. Use insights to increase engagement and conversions.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹199", badge: "Bestseller", image: "socialmagne.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Social Media Management - Master", desc: "Advanced campaigns, monetization, and client management. Run professional campaigns, track ROI, and manage multiple accounts. Build a portfolio and offer services professionally.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹196", badge: "Top Rated", image: "socialmanag.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 8. Copywriting
{ title: "Copywriting - Beginner", desc: "Basics of persuasive writing for marketing. Learn headlines, calls-to-action, and social post copywriting. Understand psychology behind engaging content.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "copywritng.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Copywriting - Intermediate", desc: "Sales copy, ads, and social post copywriting. Learn to write persuasive copy for different platforms, improving conversions and engagement. Understand tone and style.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹97", badge: "Popular", image: "copywritng.jpg2.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Copywriting - Advanced", desc: "High-converting copy and brand voice development. Write persuasive content for ads, emails, and landing pages. Learn advanced techniques to boost conversions.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹89", badge: "Bestseller", image: "copywritng.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Copywriting - Master", desc: "Expert copywriting for agencies and clients. Create complete marketing campaigns, brand voice systems, and high-converting funnels. Work professionally with clients.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹96", badge: "Top Rated", image: "copywritng.jpg2.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 9. Personal Branding
{ title: "Personal Branding - Beginner", desc: "Introduction to building your personal brand. Learn social profile setup, niche definition, and basic content creation. Start sharing your story and expertise online.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "peronalbrnad.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Personal Branding - Intermediate", desc: "Optimizing social profiles and content. Learn to communicate your value, build audience engagement, and improve digital presence.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹94", badge: "Popular", image: "personalbrnad2.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Personal Branding - Advanced", desc: "Advanced strategies for influence and engagement. Grow your personal brand, partnerships, and online credibility. Plan campaigns to expand reach.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹96", badge: "Bestseller", image: "peronalbrnad.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Personal Branding - Master", desc: "Master personal branding for business and career growth. Develop authority, monetize influence, and build strong digital presence. Work with clients or start consulting.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹94", badge: "Top Rated", image: "personalbrnad2.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 10. AI Chatbot Setup
{ title: "AI Chatbot Setup - Beginner", desc: "Setup basic chatbots for websites and social media. Learn conversational flows, simple bot responses, and testing techniques. Implement functional chatbots for small projects.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹92", badge: "New", image: "ai cahtbot.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Chatbot Setup - Intermediate", desc: "Integrate AI chatbots with multiple platforms. Learn advanced flows, triggers, and responses. Connect bots with websites and messaging platforms.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹199", badge: "Popular", image: "ai chatbot2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Chatbot Setup - Advanced", desc: "Custom chatbot flows and automation. Build intelligent bots with multi-step processes, personalized messages, and triggers. Increase engagement and efficiency.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹249", badge: "Bestseller", image: "ai cahtbot.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Chatbot Setup - Master", desc: "Master AI chatbots for business and monetization. Create scalable, professional chatbots for client projects. Monetize and optimize chatbot workflows.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹399", badge: "Top Rated", image: "ai chatbot2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 11. AI Tool Operator (ChatGPT, Automation)
{ title: "AI Tool Operator - Beginner", desc: "Learn basic AI tools and ChatGPT usage. Understand how to leverage AI for everyday productivity. Create simple automated tasks using AI assistants.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹42", badge: "New", image: "ai opertor.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Tool Operator - Intermediate", desc: "Use multiple AI tools for productivity. Combine ChatGPT with other platforms, and learn intermediate workflows. Automate routine tasks efficiently.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹89", badge: "Popular", image: "ai opertor.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Tool Operator - Advanced", desc: "Automation and advanced AI workflows. Master AI integration across tools and platforms. Create complex, multi-step automated solutions.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹99", badge: "Bestseller", image: "aioperator2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "AI Tool Operator - Master", desc: "Master AI tool operations for professional projects. Lead AI automation for businesses, implement solutions for clients, and monetize advanced workflows.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹198", badge: "Top Rated", image: "aioperator2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 12. Workflow Automation (Zapier-style)
{ title: "Workflow Automation - Beginner", desc: "Intro to workflow automation tools and concepts. Learn to connect apps, automate simple tasks, and improve productivity. Understand triggers, actions, and basic integration.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹93", badge: "New", image: "automation.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Workflow Automation - Intermediate", desc: "Automate basic business processes and tasks. Build multi-step workflows with intermediate automation tools. Learn practical solutions for small business tasks.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹196", badge: "Popular", image: "automation2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Workflow Automation - Advanced", desc: "Advanced automation and multi-platform integration. Learn API integrations, error handling, and complex automation flows. Optimize business processes effectively.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹196", badge: "Bestseller", image: "automation.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Workflow Automation - Master", desc: "Full mastery of automation for business efficiency. Create scalable automated systems for clients or your own business. Monetize and consult on workflow solutions.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹297", badge: "Top Rated", image: "automation2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
// 13. Excel + AI for Data Tasks
{ title: "Excel + AI - Beginner", desc: "Learn Excel basics with AI support for data tasks. Master formulas, tables, and basic functions. Use AI to automate simple data tasks efficiently.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹47", badge: "New", image: "excell.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Excel + AI - Intermediate", desc: "Use formulas and AI functions to manage data. Learn advanced functions, pivot tables, and AI-assisted analysis. Streamline repetitive tasks with automation.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "excell.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Excel + AI - Advanced", desc: "Advanced data processing and AI-assisted analytics. Perform complex data transformations and use AI to generate insights. Learn integration with other platforms.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹100", badge: "Bestseller", image: "excell.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Excel + AI - Master", desc: "Master data automation and AI workflows in Excel. Build dashboards, automated reports, and AI-powered decision tools. Monetize skills as a data automation professional.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹98", badge: "Top Rated", image: "excell.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 14. YouTube Automation
{ title: "YouTube Automation - Beginner", desc: "Basics of creating and automating YouTube channels. Learn content planning, video uploads, and simple scheduling. Use AI tools to streamline video creation.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹97", badge: "New", image: "youtubeaot2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "YouTube Automation - Intermediate", desc: "Video scheduling and basic channel optimization. Learn thumbnails, titles, and descriptions. Use AI tools to analyze audience engagement.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹95", badge: "Popular", image: "youtubeauto.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "YouTube Automation - Advanced", desc: "Advanced monetization and content strategy. Learn analytics, ad revenue optimization, and AI-assisted content ideas. Grow a profitable channel systematically.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹109", badge: "Bestseller", image: "youtubeauto.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "YouTube Automation - Master", desc: "Full automation, SEO, and high earning strategies. Automate content pipelines, optimize revenue streams, and run multiple channels. Build a full-time YouTube business.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹98", badge: "Top Rated", image: "youtubeaot2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 15. Script Writing for Reels & Shorts
{ title: "Script Writing - Beginner", desc: "Basic scripts for reels and short videos. Learn storytelling, hooks, and concise messaging. Understand audience attention spans for social media.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "script writer.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Script Writing - Intermediate", desc: "Writing engaging and catchy scripts. Create scripts that captivate audiences and drive engagement. Use AI assistance for content ideas and refinement.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹99", badge: "Popular", image: "scriptwriter2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Script Writing - Advanced", desc: "Advanced storyboarding and scripting techniques. Craft high-converting scripts for marketing, ads, and storytelling. Integrate visuals and captions effectively.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "script writer.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Script Writing - Master", desc: "Master high-converting scripts for marketing videos. Build templates, workflow systems, and AI-assisted scripting pipelines. Monetize scriptwriting professionally.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹199", badge: "Top Rated", image: "scriptwriter2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 16. Thumbnail Design
{ title: "Thumbnail Design - Beginner", desc: "Basics of creating YouTube and social thumbnails. Learn design principles, text overlays, and colors. Make clickable that attract viewers.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹96", badge: "New", image: "thumbnail.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Thumbnail Design - Intermediate", desc: "Design attractive and clickable thumbnails. Use design software and AI tools for speed. Create consistent branding across all thumbnails.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹197", badge: "Popular", image: "thumbnail.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Thumbnail Design - Advanced", desc: "Professional branding and style for thumbnails. Learn advanced typography, image composition, and branding principles. Optimize for social media platforms.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹189", badge: "Bestseller", image: "thumbnail.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Thumbnail Design - Master", desc: "Master YouTube & social media thumbnail design. Build templates, automate designs, and create consistent high-quality visuals. Monetize as a design professional.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹299", badge: "Top Rated", image: "thumbnail.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 17. Podcast Editing
{ title: "Podcast Editing - Beginner", desc: "Learn basic podcast editing techniques. Trim, add intro/outro, and adjust volume. Understand audio formats and publishing basics.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹97", badge: "New", image: "podcast.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Podcast Editing - Intermediate", desc: "Improve sound quality and add effects. Use equalizers, noise reduction, and basic editing workflows. Learn to produce professional audio.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹95", badge: "Popular", image: "podcast.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Podcast Editing - Advanced", desc: "Advanced editing, music, and branding. Create polished podcasts, intros, and ad segments. Integrate professional audio branding techniques.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹95", badge: "Bestseller", image: "podcast.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Podcast Editing - Master", desc: "Professional podcast production for monetization. Build full podcast systems, workflow automation, and audio marketing strategies. Launch a professional podcast business.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹197", badge: "Top Rated", image: "podcast.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 18. Instagram Growth & Monetization
{ title: "Instagram Growth - Beginner", desc: "Basics of growing Instagram accounts. Learn posting schedules, hashtags, and simple engagement strategies. Understand platform rules and audience behavior.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹49", badge: "New", image: "instagramai.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Instagram Growth - Intermediate", desc: "Content strategy and engagement techniques. Plan posts, use analytics, and grow followers organically. Understand algorithm tips and trends.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "instagramai.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Instagram Growth - Advanced", desc: "Advanced growth, ads, and monetization. Use promotions, collaborations, and AI tools for audience growth. Build monetization strategies with content.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "instagramai.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Instagram Growth - Master", desc: "Master Instagram strategy for full business impact. Build campaigns, manage client accounts, and scale monetization. Become a social media growth expert.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹197", badge: "Top Rated", image: "instagramai.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 19. SEO Basics + AI
{ title: "SEO + AI - Beginner", desc: "Introduction to SEO and AI-powered optimization. Learn keyword research, on-page basics, and simple content optimization. Understand search engine fundamentals.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹49", badge: "New", image: "seo3.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "SEO + AI - Intermediate", desc: "Keyword research and content optimization. Learn meta tags, headings, and basic SEO strategy. Use AI tools to optimize website content.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "seo mastery.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "SEO + AI - Advanced", desc: "On-page, off-page, and technical SEO strategies. Learn link building, schema, and analytics. Optimize websites to rank higher on search engines.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹94", badge: "Bestseller", image: "seo2.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "SEO + AI - Master", desc: "Full SEO mastery for business and client projects. Manage advanced campaigns, SEO audits, and monetize SEO services professionally.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹149", badge: "Top Rated", image: "seo.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
// 20. Email Marketing
{ title: "Email Marketing - Beginner", desc: "Learn the basics of email campaigns. Create lists, design simple emails, and track basic metrics. Start connecting with your audience effectively.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "emailmarketing.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Email Marketing - Intermediate", desc: "Segment lists and optimize campaigns. Learn automation sequences, A/B testing, and personalization. Improve engagement and conversion rates using AI.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹99", badge: "Popular", image: "emailmarketing.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Email Marketing - Advanced", desc: "Automation, sequences, and advanced analytics. Track performance, optimize campaigns, and use AI to generate email content. Increase revenue with targeted campaigns.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "emailmarketing.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Email Marketing - Master", desc: "Master email marketing for high conversions. Build advanced workflows, funnels, and AI-assisted campaigns. Offer professional email marketing services.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹99", badge: "Top Rated", image: "emailmarketing.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 21. Affiliate Marketing
{ title: "Affiliate Marketing - Beginner", desc: "Intro to affiliate marketing and earning basics. Learn product selection, platforms, and simple promotion techniques. Start your affiliate journey easily.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "affiliatemarket.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Affiliate Marketing - Intermediate", desc: "Promoting products and tracking performance. Learn link building, content promotion, and basic analytics. Optimize affiliate campaigns for better revenue.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹99", badge: "Popular", image: "affiliatemarket.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Affiliate Marketing - Advanced", desc: "Advanced strategies for high affiliate income. Learn paid ads, funnels, and influencer collaborations. Maximize earnings with strategic promotion techniques.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹98", badge: "Bestseller", image: "affiliatemarket.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Affiliate Marketing - Master", desc: "Full affiliate business mastery and scaling. Build multiple revenue streams, manage campaigns professionally, and grow a full-time affiliate business.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹94", badge: "Top Rated", image: "affiliatemarket.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 22. Client Communication Skills
{ title: "Client Communication - Beginner", desc: "Basics of communicating with clients. Learn professional email etiquette, responses, and call management. Build trust and clarity in client interactions.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹79", badge: "New", image: "client commu.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Client Communication - Intermediate", desc: "Handling inquiries and expectations professionally. Manage timelines, feedback, and clear deliverables. Improve communication skills for client satisfaction.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹79", badge: "Popular", image: "client commu.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Client Communication - Advanced", desc: "Managing projects and difficult clients. Learn negotiation, conflict resolution, and expectation management. Build long-term professional relationships.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "client commu.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Client Communication - Master", desc: "Master professional client communication for scaling. Handle high-value clients, complex projects, and multi-team coordination. Become a sought-after freelance consultant.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹109", badge: "Top Rated", image: "client commu.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 23. Pricing & Proposal Writing
{ title: "Pricing & Proposals - Beginner", desc: "Learn basics of pricing and proposal writing. Create simple quotes, set project rates, and understand client expectations. Start your freelance journey confidently.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹29", badge: "New", image: "pricing.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Pricing & Proposals - Intermediate", desc: "Optimizing proposals and setting rates. Learn pricing strategies, contract basics, and proposal templates. Increase chances of winning clients efficiently.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "pricing.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Pricing & Proposals - Advanced", desc: "High-value proposals and client negotiation. Create professional proposals, adjust pricing for projects, and secure contracts with confidence.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "pricing.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Pricing & Proposals - Master", desc: "Master pricing strategies and proposals for agencies. Handle large projects, multiple clients, and maximize revenue with professional proposal systems.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹109", badge: "Top Rated", image: "pricing.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 24. Agency Model (Starter)
{ title: "Agency Model - Beginner", desc: "Learn how to start a small service agency. Understand structure, services, and basic client acquisition. Lay the foundation for your first agency.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹49", badge: "New", image: "agency model.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Agency Model - Intermediate", desc: "Managing small teams and client projects. Learn task allocation, client communication, and workflow management. Optimize early-stage agency operations.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "agency model.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Agency Model - Advanced", desc: "Scaling agency operations efficiently. Build systems, hire staff, and automate workflows. Increase revenue and client base effectively.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "agency model.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Agency Model - Master", desc: "Full mastery of running a profitable agency. Handle multiple teams, complex projects, and scale operations globally. Become a professional agency owner.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹99", badge: "Top Rated", image: "agency model.png", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 25. E-commerce (Low risk models)
{ title: "E-commerce - Beginner", desc: "Introduction to low-risk e-commerce models. Learn dropshipping, print-on-demand, and online product sales. Start your online store safely.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "ecommer.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "E-commerce - Intermediate", desc: "Product selection and store setup. Learn niche research, store customization, and basic marketing. Start generating initial sales online.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹199", badge: "Popular", image: "e-commerce2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "E-commerce - Advanced", desc: "Advanced marketing & sales techniques. Learn ads, email campaigns, and SEO. Scale sales and optimize conversions effectively.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹299", badge: "Bestseller", image: "ecommer.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "E-commerce - Master", desc: "Full mastery of running scalable e-commerce business. Manage multiple products, marketing channels, and automation. Build a full-time profitable online store.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹449", badge: "Top Rated", image: "e-commerce2.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 26. Online Tutoring
{ title: "Online Tutoring - Beginner", desc: "Basics of tutoring online effectively. Learn lesson planning, communication, and simple teaching methods. Start tutoring students confidently.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹99", badge: "New", image: "onlinetutur.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Online Tutoring - Intermediate", desc: "Organizing lessons and student engagement. Learn interactive teaching, tracking progress, and online tools. Improve student results and engagement.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "onlinetutur.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Online Tutoring - Advanced", desc: "Advanced teaching techniques online. Manage classes, create assignments, and use AI for personalized learning. Increase student satisfaction and retention.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "onlinetutur.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Online Tutoring - Master", desc: "Master online teaching and course management. Build your own course system, automate content delivery, and scale tutoring services professionally.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹99", badge: "Top Rated", image: "onlinetutur.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 27. Course Creation (Mini-courses)
{ title: "Course Creation - Beginner", desc: "Create your first mini-course. Learn structuring, content planning, and basic video/audio creation. Share knowledge with small groups effectively.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹29", badge: "New", image: "coursecreatuo.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Course Creation - Intermediate", desc: "Content structuring and delivery. Plan modules, lessons, and quizzes. Learn how to engage learners effectively with structured content.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "coursecreatuo.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Course Creation - Advanced", desc: "Advanced course building strategies. Incorporate multimedia, assessments, and interactive elements. Optimize courses for learner success and retention.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "coursecreatuo.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Course Creation - Master", desc: "Full mastery of course creation for selling online. Build high-quality courses, market them, and scale an online education business professionally.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹99", badge: "Top Rated", image: "coursecreatuo.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

// 28. Community Building (Telegram, Discord)
{ title: "Community Building - Beginner", desc: "Basics of building online communities. Learn engagement, moderation, and platform basics. Start small groups and encourage active participation.", level: "Beginner", parts: "6 Modules", rating: "4.5", price: "₹29", badge: "New", image: "telgramcommuntiy.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Community Building - Intermediate", desc: "Engaging members and content strategies. Plan events, discussions, and interactive posts. Increase participation and foster group loyalty.", level: "Intermediate", parts: "8 Modules", rating: "4.6", price: "₹49", badge: "Popular", image: "telgramcommuntiy.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Community Building - Advanced", desc: "Advanced management and growth tactics. Analyze engagement, manage conflicts, and optimize community structure. Build vibrant, active online groups.", level: "Advanced", parts: "10 Modules", rating: "4.7", price: "₹79", badge: "Bestseller", image: "telgramcommuntiy.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },
{ title: "Community Building - Master", desc: "Full mastery of managing thriving online communities. Scale groups, monetize communities, and create professional engagement systems. Become an expert community manager.", level: "Master", parts: "12 Modules", rating: "4.9", price: "₹199", badge: "Top Rated", image: "telgramcommuntiy.jpg", participationCert: "participation.jpg", completionCert: "complete.jpg" },

];

// Certificate mapping by level
const certificatesByLevel = {
  "Beginner": {
    participation: "sample_participation.png",
    completion: "sample_beginner.png"
  },
  "Intermediate": {
    participation: "sample_participation.png",
    completion: "sample_intermediate.png"
  },
  "Advanced": {
    participation: "sample_participation.png",
    completion: "sample_advanced.png"
  },
  "Master": { // for mixed courses
    participation: "sample_participation.png",
    completion: "sample_master.png"
  }
};

// Get course from URL
const params = new URLSearchParams(window.location.search);
const courseTitle = params.get("course");

// Decode URL text
const decodedTitle = decodeURIComponent(courseTitle);

// Find matching course
const courseData = courses.find(course => course.title === decodedTitle);

// If course found, insert data
if (courseData) {
  document.getElementById("title").textContent = courseData.title;
  document.getElementById("desc").textContent = courseData.desc;
  document.getElementById("level").textContent = courseData.level;
  document.getElementById("parts").textContent = courseData.parts;
  document.getElementById("ratingValue").textContent = courseData.rating;
  document.getElementById("price").textContent = courseData.price;
  document.getElementById("badge").textContent = courseData.badge;
  document.getElementById("image").src = courseData.image;

  // ✅ Dynamic certificates based on level
  const level = courseData.level;
  const certs = certificatesByLevel[level] || {
    participation: "participation.jpg",
    completion: "complete.jpg"
  };

  document.getElementById("Participation").src = certs.participation;
  document.getElementById("completition").src = certs.completion;
} else {
  document.getElementById("title").textContent = "Course Not Found";
}


// Accordion
const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(button=>{
  button.addEventListener("click", function(){
    const panel = this.nextElementSibling;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Enroll Function
function apply(){
  // Store selected course details in localStorage
  localStorage.setItem("selectedCourse", courseData.title);
  localStorage.setItem("NeXioa_payable_amount", courseData.price.replace("₹","")); // store number only

  // Redirect to payment page
  window.location.href = "payment.html";
}
