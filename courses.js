const courses = [
  // AI Prompting & Tools
  { title: "AI Prompting & Tools - Beginner", category: "Tech", oldPrice: 299, price: 169, image: "Ai_prompt.png", desc: "Intro to AI prompting, ChatGPT basics, and tool navigation." },
  { title: "AI Prompting & Tools - Intermediate", category: "Tech", oldPrice: 399, price: 259, image: "aipromp1.jpg", desc: "Advanced AI prompts, multi-tool usage, and automation setup." },
  { title: "AI Prompting & Tools - Advanced", category: "Tech", oldPrice: 499, price: 299, image: "aipromp2.jpg", desc: "Expert-level AI prompting strategies & workflow optimization." },
  { title: "AI Prompting & Tools - Master", category: "Tech", oldPrice: 999, price: 399, image: "aipromp3.jpg", desc: "Full AI engineering mastery, monetization, and consulting setup." },

  // Content Writing + AI
  { title: "Content Writing + AI - Beginner", category: "Creative & Content", oldPrice: 299, price: 159, image: "conent2.jpg", desc: "Basic content creation using AI assistance." },
  { title: "Content Writing + AI - Intermediate", category: "Creative & Content", oldPrice: 399, price: 279, image: "conten1.jpg", desc: "AI-assisted blogs, social posts, and copywriting techniques." },
  { title: "Content Writing + AI - Advanced", category: "Creative & Content", oldPrice: 499, price: 299, image: "content.jpg", desc: "Advanced content strategies, SEO, and AI editing tools." },
  { title: "Content Writing + AI - Master", category: "Creative & Content", oldPrice: 999, price: 399, image: "content3.jpg", desc: "Full content marketing mastery with AI-powered systems." },

  // Graphic Design (Canva)
  { title: "Graphic Design (Canva) - Beginner", category: "Design", oldPrice: 299, price: 99, image: "graphi.jpg", desc: "Basic Canva tools & designing social posts." },
  { title: "Graphic Design (Canva) - Intermediate", category: "Design", oldPrice: 399, price: 299, image: "graphi1.jpg", desc: "Logo creation, brand identity, and Canva templates." },
  { title: "Graphic Design (Canva) - Advanced", category: "Design", oldPrice: 499, price: 339, image: "graphi3.jpg", desc: "Professional branding, client-ready designs & templates." },
  { title: "Graphic Design (Canva) - Master", category: "Design", oldPrice: 999, price: 389, image: "grapi2.jpg", desc: "Expert design workflows & portfolio building for clients." },

  // Video Editing (CapCut)
  { title: "Video Editing (CapCut) - Beginner", category: "Creative & Content", oldPrice: 299, price: 129, image: "videedit.jpg", desc: "Intro to video editing, trimming & simple effects." },
  { title: "Video Editing (CapCut) - Intermediate", category: "Creative & Content", oldPrice: 399, price: 299, image: "videoedi3.jpg", desc: "Transitions, overlays, and basic motion graphics." },
  { title: "Video Editing (CapCut) - Advanced", category: "Creative & Content", oldPrice: 499, price: 359, image: "videoedit1.jpg", desc: "Multi-layer editing, special effects, and short-form video strategies." },
  { title: "Video Editing (CapCut) - Master", category: "Creative & Content", oldPrice: 999, price: 499, image: "videoedit2.jpg", desc: "Professional video production & monetization strategies." },

  // No-Code Websites
  { title: "No-Code Websites - Beginner", category: "Tech", oldPrice: 299, price: 99, image: "nocode.png", desc: "Build your first website using no-code platforms." },
  { title: "No-Code Websites - Intermediate", category: "Tech", oldPrice: 399, price: 199, image: "nocode.png", desc: "Add dynamic features & integrations without coding." },
  { title: "No-Code Websites - Advanced", category: "Tech", oldPrice: 499, price: 299, image: "nocode.png", desc: "Custom workflows, automations, and responsive design." },
  { title: "No-Code Websites - Master", category: "Tech", oldPrice: 999, price: 399, image: "nocode.png", desc: "Complete no-code website mastery with client projects." },

  // Freelancing Basics
  { title: "Freelancing Basics - Beginner", category: "Business & Freelancing", oldPrice: 299, price: 99, image: "frelaicnh.jpg", desc: "Introduction to freelancing, platforms, and mindset." },
  { title: "Freelancing Basics - Intermediate", category: "Business & Freelancing", oldPrice: 399, price: 89, image: "freelancing2.jpg", desc: "Profile building, portfolio, and proposal writing." },
  { title: "Freelancing Basics - Advanced", category: "Business & Freelancing", oldPrice: 499, price: 99, image: "freelancing2.jpg", desc: "Client management, pricing strategies, and advanced gigs." },
  { title: "Freelancing Basics - Master", category: "Business & Freelancing", oldPrice: 999, price: 197, image: "frelaicnh.jpg", desc: "Freelance business mastery & agency setup." },

  // Social Media Management
  { title: "Social Media Management - Beginner", category: "Marketing", oldPrice: 299, price: 94, image: "socialmagne.jpg", desc: "Basics of managing social media accounts." },
  { title: "Social Media Management - Intermediate", category: "Marketing", oldPrice: 399, price: 89, image: "socialmanag.jpg", desc: "Content planning, scheduling, and engagement." },
  { title: "Social Media Management - Advanced", category: "Marketing", oldPrice: 499, price: 199, image: "socialmagne.jpg", desc: "Growth strategies and analytics tracking." },
  { title: "Social Media Management - Master", category: "Marketing", oldPrice: 999, price: 196, image: "socialmanag.jpg", desc: "Advanced campaigns, monetization, and client management." },

  // Copywriting
  { title: "Copywriting - Beginner", category: "Creative & Content", oldPrice: 299, price: 99, image: "copywritng.jpg", desc: "Basics of persuasive writing for marketing." },
  { title: "Copywriting - Intermediate", category: "Creative & Content", oldPrice: 399, price: 97, image: "copywritng.jpg2.png", desc: "Sales copy, ads, and social post copywriting." },
  { title: "Copywriting - Advanced", category: "Creative & Content", oldPrice: 499, price: 89, image: "copywritng.jpg", desc: "High-converting copy and brand voice development." },
  { title: "Copywriting - Master", category: "Creative & Content", oldPrice: 999, price: 96, image: "copywritng.jpg2.png", desc: "Expert copywriting for agencies and clients." },

  // Personal Branding
  { title: "Personal Branding - Beginner", category: "Marketing", oldPrice: 299, price: 99, image: "peronalbrnad.jpg", desc: "Introduction to building your personal brand." },
  { title: "Personal Branding - Intermediate", category: "Marketing", oldPrice: 399, price: 94, image: "personalbrnad2.png", desc: "Optimizing social profiles and content." },
  { title: "Personal Branding - Advanced", category: "Marketing", oldPrice: 499, price: 96, image: "peronalbrnad.jpg", desc: "Advanced strategies for influence and engagement." },
  { title: "Personal Branding - Master", category: "Marketing", oldPrice: 999, price: 94, image: "personalbrnad2.png", desc: "Master personal branding for business and career growth." },

  // AI Chatbot Setup
  { title: "AI Chatbot Setup - Beginner", category: "Tech", oldPrice: 299, price: 92, image: "ai cahtbot.jpg", desc: "Setup basic chatbots for websites and social media." },
  { title: "AI Chatbot Setup - Intermediate", category: "Tech", oldPrice: 399, price: 199, image: "ai chatbot2.jpg", desc: "Integrate AI chatbots with multiple platforms." },
  { title: "AI Chatbot Setup - Advanced", category: "Tech", oldPrice: 499, price: 249, image: "ai cahtbot.jpg", desc: "Custom chatbot flows and automation." },
  { title: "AI Chatbot Setup - Master", category: "Tech", oldPrice: 999, price: 399, image: "ai chatbot2.jpg", desc: "Master AI chatbots for business and monetization." },
  // AI Tool Operator (ChatGPT, Automation)
  { title: "AI Tool Operator - Beginner", category: "Tech", oldPrice: 299, price: 42, image: "ai opertor.jpg", desc: "Learn basic AI tools and ChatGPT usage." },
  { title: "AI Tool Operator - Intermediate", category: "Tech", oldPrice: 399, price: 89, image: "ai opertor.jpg", desc: "Use multiple AI tools for productivity." },
  { title: "AI Tool Operator - Advanced", category: "Tech", oldPrice: 499, price: 99, image: "aioperator2.jpg", desc: "Automation and advanced AI workflows." },
  { title: "AI Tool Operator - Master", category: "Tech", oldPrice: 999, price: 198, image: "aioperator2.jpg", desc: "Master AI tool operations for professional projects." },

  // Workflow Automation (Zapier-style)
  { title: "Workflow Automation - Beginner", category: "Tech", oldPrice: 299, price: 93, image: "automation.jpg", desc: "Intro to workflow automation tools and concepts." },
  { title: "Workflow Automation - Intermediate", category: "Tech", oldPrice: 399, price: 196, image: "automation2.jpg", desc: "Automate basic business processes and tasks." },
  { title: "Workflow Automation - Advanced", category: "Tech", oldPrice: 499, price: 196, image: "automation.jpg", desc: "Advanced automation and multi-platform integration." },
  { title: "Workflow Automation - Master", category: "Tech", oldPrice: 999, price: 297, image: "automation2.jpg", desc: "Full mastery of automation for business efficiency." },

  // Excel + AI for Data Tasks
  { title: "Excel + AI - Beginner", category: "Tech", oldPrice: 299, price: 47, image: "excell.png", desc: "Learn Excel basics with AI support for data tasks." },
  { title: "Excel + AI - Intermediate", category: "Tech", oldPrice: 399, price: 49, image: "excell.png", desc: "Use formulas and AI functions to manage data." },
  { title: "Excel + AI - Advanced", category: "Tech", oldPrice: 499, price: 100, image: "excell.png", desc: "Advanced data processing and AI-assisted analytics." },
  { title: "Excel + AI - Master", category: "Tech", oldPrice: 999, price: 98, image: "excell.png", desc: "Master data automation and AI workflows in Excel." },

  // YouTube Automation
  { title: "YouTube Automation - Beginner", category: "Creative & Content", oldPrice: 299, price: 97, image: "youtubeaot2.jpg", desc: "Basics of creating and automating YouTube channels." },
  { title: "YouTube Automation - Intermediate", category: "Creative & Content", oldPrice: 399, price: 95, image: "youtubeauto.jpg", desc: "Video scheduling and basic channel optimization." },
  { title: "YouTube Automation - Advanced", category: "Creative & Content", oldPrice: 499, price: 109, image: "youtubeauto.jpg", desc: "Advanced monetization and content strategy." },
  { title: "YouTube Automation - Master", category: "Creative & Content", oldPrice: 999, price: 98, image: "youtubeaot2.jpg", desc: "Full automation, SEO, and high earning strategies." },

  // Script Writing for Reels & Shorts
  { title: "Script Writing - Beginner", category: "Creative & Content", oldPrice: 299, price: 99, image: "script writer.jpg", desc: "Basic scripts for reels and short videos." },
  { title: "Script Writing - Intermediate", category: "Creative & Content", oldPrice: 399, price: 99, image: "scriptwriter2.jpg", desc: "Writing engaging and catchy scripts." },
  { title: "Script Writing - Advanced", category: "Creative & Content", oldPrice: 499, price: 79, image: "script writer.jpg", desc: "Advanced storyboarding and scripting techniques." },
  { title: "Script Writing - Master", category: "Creative & Content", oldPrice: 999, price: 199, image: "scriptwriter2.jpg", desc: "Master high-converting scripts for marketing videos." },

  // Thumbnail Design
  { title: "Thumbnail Design - Beginner", category: "Design", oldPrice: 299, price: 96, image: "thumbnail.jpg", desc: "Basics of creating YouTube and social thumbnails." },
  { title: "Thumbnail Design - Intermediate", category: "Design", oldPrice: 399, price: 197, image: "thumbnail.jpg", desc: "Design attractive and clickable thumbnails." },
  { title: "Thumbnail Design - Advanced", category: "Design", oldPrice: 499, price: 189, image: "thumbnail.jpg", desc: "Professional branding and style for thumbnails." },
  { title: "Thumbnail Design - Master", category: "Design", oldPrice: 999, price: 299, image: "thumbnail.jpg", desc: "Master YouTube & social media thumbnail design." },

  // Podcast Editing
  { title: "Podcast Editing - Beginner", category: "Creative & Content", oldPrice: 299, price: 97, image: "podcast.jpg", desc: "Learn basic podcast editing techniques." },
  { title: "Podcast Editing - Intermediate", category: "Creative & Content", oldPrice: 399, price: 95, image: "podcast.jpg", desc: "Improve sound quality and add effects." },
  { title: "Podcast Editing - Advanced", category: "Creative & Content", oldPrice: 499, price: 95, image: "podcast.jpg", desc: "Advanced editing, music, and branding." },
  { title: "Podcast Editing - Master", category: "Creative & Content", oldPrice: 999, price: 197, image: "podcast.jpg", desc: "Professional podcast production for monetization." },

  // Instagram Growth & Monetization
  { title: "Instagram Growth - Beginner", category: "Marketing", oldPrice: 299, price: 49, image: "instagramai.jpg", desc: "Basics of growing Instagram accounts." },
  { title: "Instagram Growth - Intermediate", category: "Marketing", oldPrice: 399, price: 49, image: "instagramai.jpg", desc: "Content strategy and engagement techniques." },
  { title: "Instagram Growth - Advanced", category: "Marketing", oldPrice: 499, price: 79, image: "instagramai.jpg", desc: "Advanced growth, ads, and monetization." },
  { title: "Instagram Growth - Master", category: "Marketing", oldPrice: 999, price: 197, image: "instagramai.jpg", desc: "Master Instagram strategy for full business impact." },

  // SEO Basics + AI
  { title: "SEO + AI - Beginner", category: "Marketing", oldPrice: 299, price: 49, image: "seo3.jpg", desc: "Introduction to SEO and AI-powered optimization." },
  { title: "SEO + AI - Intermediate", category: "Marketing", oldPrice: 399, price: 49, image: "seo mastery.jpg", desc: "Keyword research and content optimization." },
  { title: "SEO + AI - Advanced", category: "Marketing", oldPrice: 499, price: 94, image: "seo2.png", desc: "On-page, off-page, and technical SEO strategies." },
  { title: "SEO + AI - Master", category: "Marketing", oldPrice: 999, price: 149, image: "seo.png", desc: "Full SEO mastery for business and client projects." },

  // Email Marketing
  { title: "Email Marketing - Beginner", category: "Marketing", oldPrice: 299, price: 99, image: "emailmarketing.png", desc: "Learn the basics of email campaigns." },
  { title: "Email Marketing - Intermediate", category: "Marketing", oldPrice: 399, price: 99, image: "emailmarketing.png", desc: "Segment lists and optimize campaigns." },
  { title: "Email Marketing - Advanced", category: "Marketing", oldPrice: 499, price: 79, image: "emailmarketing.png", desc: "Automation, sequences, and advanced analytics." },
  { title: "Email Marketing - Master", category: "Marketing", oldPrice: 999, price: 99, image: "emailmarketing.png", desc: "Master email marketing for high conversions." },

  // Affiliate Marketing
  { title: "Affiliate Marketing - Beginner", category: "Marketing", oldPrice: 299, price: 99, image: "affiliatemarket.png", desc: "Intro to affiliate marketing and earning basics." },
  { title: "Affiliate Marketing - Intermediate", category: "Marketing", oldPrice: 399, price: 99, image: "affiliatemarket.png", desc: "Promoting products and tracking performance." },
  { title: "Affiliate Marketing - Advanced", category: "Marketing", oldPrice: 499, price: 98, image: "affiliatemarket.png", desc: "Advanced strategies for high affiliate income." },
  { title: "Affiliate Marketing - Master", category: "Marketing", oldPrice: 999, price: 94, image: "affiliatemarket.png", desc: "Full affiliate business mastery and scaling." },

  // Client Communication Skills
  { title: "Client Communication - Beginner", category: "Business & Freelancing", oldPrice: 299, price: 79, image: "client commu.jpg", desc: "Basics of communicating with clients." },
  { title: "Client Communication - Intermediate", category: "Business & Freelancing", oldPrice: 399, price: 79, image: "client commu.jpg", desc: "Handling inquiries and expectations professionally." },
  { title: "Client Communication - Advanced", category: "Business & Freelancing", oldPrice: 499, price: 79, image: "client commu.jpg", desc: "Managing projects and difficult clients." },
  { title: "Client Communication - Master", category: "Business & Freelancing", oldPrice: 999, price: 109, image: "client commu.jpg", desc: "Master professional client communication for scaling." },

  // Pricing & Proposal Writing
  { title: "Pricing & Proposals - Beginner", category: "Business & Freelancing", oldPrice: 299, price: 29, image: "pricing.jpg", desc: "Learn basics of pricing and proposal writing." },
  { title: "Pricing & Proposals - Intermediate", category: "Business & Freelancing", oldPrice: 399, price: 49, image: "pricing.jpg", desc: "Optimizing proposals and setting rates." },
  { title: "Pricing & Proposals - Advanced", category: "Business & Freelancing", oldPrice: 499, price: 79, image: "pricing.jpg", desc: "High-value proposals and client negotiation." },
  { title: "Pricing & Proposals - Master", category: "Business & Freelancing", oldPrice: 999, price: 109, image: "pricing.jpg", desc: "Master pricing strategies and proposals for agencies."},
  

 //3gency Model (Starter)  
  { title: "Agency Model - Beginner", category: "Business & Freelancing", oldPrice: 199, price: 49, image: "agency model.png", desc: "Learn how to start a small service agency." },
  { title: "Agency Model - Intermediate", category: "Business & Freelancing", oldPrice: 299, price: 49, image: "agency model.png", desc: "Managing small teams and client projects." },
  { title: "Agency Model - Advanced", category: "Business & Freelancing", oldPrice: 499, price: 79, image: "agency model.png", desc: "Scaling agency operations efficiently." },
  { title: "Agency Model - Master", category: "Business & Freelancing", oldPrice: 999, price: 99, image: "agency model.png", desc: "Full mastery of running a profitable agency." },

  // E-commerce (Low risk models)
  { title: "E-commerce - Beginner", category: "Business & Freelancing", oldPrice: 199, price: 99, image: "ecommer.jpg", desc: "Introduction to low-risk e-commerce models." },
  { title: "E-commerce - Intermediate", category: "Business & Freelancing", oldPrice: 299, price: 199, image: "e-commerce2.jpg", desc: "Product selection and store setup." },
  { title: "E-commerce - Advanced", category: "Business & Freelancing", oldPrice: 499, price: 299, image: "ecommer.jpg", desc: "Advanced marketing & sales techniques." },
  { title: "E-commerce - Master", category: "Business & Freelancing", oldPrice: 999, price: 449, image: "e-commerce2.jpg", desc: "Full mastery of running scalable e-commerce business." },

  // Online Tutoring
  { title: "Online Tutoring - Beginner", category: "Student-Friendly Skills", oldPrice: 199, price: 99, image: "onlinetutur.jpg", desc: "Basics of tutoring online effectively." },
  { title: "Online Tutoring - Intermediate", category: "Student-Friendly Skills", oldPrice: 299, price: 49, image: "onlinetutur.jpg", desc: "Organizing lessons and student engagement." },
  { title: "Online Tutoring - Advanced", category: "Student-Friendly Skills", oldPrice: 499, price: 79, image: "onlinetutur.jpg", desc: "Advanced teaching techniques online." },
  { title: "Online Tutoring - Master", category: "Student-Friendly Skills", oldPrice: 999, price: 99, image: "onlinetutur.jpg", desc: "Master online teaching and course management." },

  // Course Creation (Mini-courses)
  { title: "Course Creation - Beginner", category: "Student-Friendly Skills", oldPrice: 199, price: 29, image: "coursecreatuo.jpg", desc: "Create your first mini-course." },
  { title: "Course Creation - Intermediate", category: "Student-Friendly Skills", oldPrice: 299, price: 49, image: "coursecreatuo.jpg", desc: "Content structuring and delivery." },
  { title: "Course Creation - Advanced", category: "Student-Friendly Skills", oldPrice: 499, price: 79, image: "coursecreatuo.jpg", desc: "Advanced course building strategies." },
  { title: "Course Creation - Master", category: "Student-Friendly Skills", oldPrice: 999, price: 99, image: "coursecreatuo.jpg", desc: "Full mastery of course creation for selling online." },

  // Community Building (Telegram, Discord)
  { title: "Community Building - Beginner", category: "Student-Friendly Skills", oldPrice: 199, price: 29, image: "telgramcommuntiy.jpg", desc: "Basics of building online communities." },
  { title: "Community Building - Intermediate", category: "Student-Friendly Skills", oldPrice: 299, price: 49, image: "telgramcommuntiy.jpg", desc: "Engaging members and content strategies." },
  { title: "Community Building - Advanced", category: "Student-Friendly Skills", oldPrice: 499, price: 79, image: "telgramcommuntiy.jpg", desc: "Advanced management and growth tactics." },
  { title: "Community Building - Master", category: "Student-Friendly Skills", oldPrice: 999, price: 199, image: "telgramcommuntiy.jpg", desc: "Full mastery of managing thriving online communities." }

];

const grid = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const count = document.getElementById("courseCount");

function displayCourses(data) {
  grid.innerHTML = "";
  count.textContent = data.length;

  data.forEach(course => {

    const discount = Math.round(
      ((course.oldPrice - course.price) / course.oldPrice) * 100
    );

    grid.innerHTML += `
      <div class="course-card">

        <div class="course-img">
          <img src="${course.image}" alt="${course.title}">
        </div>

        <div class="discount-badge">
          ${discount}% OFF
        </div>

        <div class="badge">Certificate</div>

        <h3>${course.title}</h3>
        <p>${course.desc}</p>

        <div class="price-wrapper">
          <span class="old-price">₹${course.oldPrice}</span>
          <span class="new-price">₹${course.price}</span>
        </div>

        <button class="buy-btn" onclick="buyCourse('${course.title}')">
          Enroll Now 🚀
        </button>

      </div>
    `;
  });
}

function filterCourses() {
  let filtered = [...courses];

  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;
  const sortValue = sortFilter.value;

  if (searchValue) {
    filtered = filtered.filter(c =>
      c.title.toLowerCase().includes(searchValue)
    );
  }

  if (categoryValue) {
    filtered = filtered.filter(c =>
      c.category === categoryValue
    );
  }

  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayCourses(filtered);
}

function buyCourse(courseTitle){
  const encodedTitle = encodeURIComponent(courseTitle);
  window.location.href = `course.html?course=${encodedTitle}`;
}


searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);
sortFilter.addEventListener("change", filterCourses);

displayCourses(courses);
