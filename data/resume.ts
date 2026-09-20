export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    stackoverflow?: string;
    upwork?: string;
  };
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies?: string[];
    link?: string;
    certificates?: {
      name: string;
      url: string;
      type: "pdf" | "image";
    }[];
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    certificates?: {
      name: string;
      url: string;
      type: "pdf" | "image";
    }[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    link?: string;
    technologies: string[];
    role?: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Rajesh Nasit",
    title:
      "Senior Full-Stack & Mobile Developer | React Native, Next.js, Node.js & TypeScript",
    summary:
      "Senior full-stack and mobile developer with 15+ years of software industry experience, including 7+ years delivering production React Native applications for iOS and Android and 1+ year building full-stack web platforms. Experienced with TypeScript, React, Expo, Next.js, Node.js, NestJS, RESTful APIs, Supabase, and PostgreSQL, with hands-on expertise in mobile architecture, authentication, payments, push notifications, API integration, performance optimization, testing, code review, and Agile delivery. Open to full-time, contract, or freelance roles across mobile, web, and backend/API development; compensation is flexible based on scope and responsibilities.",
    email: "enrajesh67@gmail.com",
    phone: "+91 - 9510475846",
    location: "Surat (Permanent) / Gadhda (Current), Gujarat, India",
    linkedin: "https://www.linkedin.com/in/rajesh-n-6b8471135/",
    github: "https://github.com/rajscet",
    upwork: "https://www.upwork.com/freelancers/~018fd852dfc9164d31",
    stackoverflow: "https://stackoverflow.com/users/996787/rajesh-nasit",
  },
  experience: [
    {
      company: "Independent / Freelance",
      role: "Full-Stack & Mobile Developer",
      startDate: "Dec 2024",
      endDate: "Present",
      description: [
        "Developing StreetTeams, a full-stack influencer-marketing marketplace comprising a React Native/Expo mobile app, React business and admin dashboards, a NestJS REST API, PostgreSQL, Stripe Connect payments, and Firebase push notifications.",
        "Built responsive Next.js websites and reusable React components for service-booking and e-commerce workflows.",
        "Designed and integrated RESTful APIs with Next.js, Node.js, Supabase, and PostgreSQL, covering authentication, database operations, validation, and application data flows.",
        "Implemented shared TypeScript contracts, API client generation, GitHub Actions CI, automated type checking, and mobile end-to-end smoke testing for reliable delivery.",
        "Collaborate with clients and cross-functional teams on requirements, architecture, implementation, debugging, QA, deployment, and technical documentation.",
        "Apply AI-assisted engineering and prompt-engineering workflows to accelerate development, code review, troubleshooting, and documentation while validating all production changes.",
      ],
      technologies: [
        "React Native",
        "React.js",
        "Next.js",
        "Node.js",
        "NestJS",
        "Supabase",
        "PostgreSQL",
        "RESTful APIs",
        "TypeScript",
        "Stripe Connect",
        "Firebase",
      ],
      link: "https://www.bookingrequest.com/",
    },
    {
      company: "Tessrac",
      role: "Remote Developer (React Native + React JS)",
      startDate: "Aug 2022",
      endDate: "Nov 2024",
      description: [
        "Delivered and maintained production React Native and React.js features across multiple client applications.",
        "Refactored existing code, resolved defects, and submitted ticket-based pull requests for peer review.",
        "Partnered with QA engineers to reproduce issues, validate fixes, and perform regression testing across supported environments.",
        "Participated in daily stand-ups, sprint planning, PI planning, technical discussions, and blocker resolution with cross-functional teams.",
        "Collaborated with product, backend, QA, and project stakeholders to clarify requirements and deliver stable releases.",
        "Completed cybersecurity training and applied secure engineering practices throughout development and release workflows.",
        "Key projects delivered: [Vidyaranyam](https://play.google.com/store/apps/details?id=com.tessrac.vidyaranyam.app), [Sreshta Farm](https://play.google.com/store/apps/details?id=com.tessrac.sreshtafarm), [Craftsly](https://play.google.com/store/apps/details?id=com.tessrac.craftsly).",
      ],
      technologies: ["React Native", "React.js", "RESTful APIs", "Git", "Agile/Scrum", "QA Testing"],
      link: "https://tessrac.com/",
      certificates: [
        {
          name: "Experience Letter",
          url: "/certificates/experience/Experience Letter_Rajesh Nasit (1).pdf",
          type: "pdf",
        },
        {
          name: "Relieving Letter",
          url: "/certificates/experience/tessrac-releaving.pdf",
          type: "pdf",
        },
        {
          name: "Appointment Letter",
          url: "/certificates/experience/tessrac-appointment.pdf",
          type: "pdf",
        },
        {
          name: "Increment 2024",
          url: "/certificates/experience/RajeshKumar Balubhai Nasit-Increment-2024.pdf",
          type: "pdf",
        },
        {
          name: "Increment 2023",
          url: "/certificates/experience/RajeshKumar Balubhai Nasit-Increment-2023.pdf",
          type: "pdf",
        },
        {
          name: "Exit Letter",
          url: "/certificates/experience/tessrac-exit.pdf",
          type: "pdf",
        },
      ],
    },
    {
      company: "Full-time Freelancer",
      role: "React Native Developer",
      startDate: "Jan 2019",
      endDate: "Jun 2022",
      description: [
        "Delivered approximately 15 cross-platform React Native applications for international clients.",
        "Earned Upwork Top Rated status while maintaining a 90–100% Job Success Score.",
        "Owned mobile feature development and coordinated directly with clients, backend developers, designers, senior engineers, and QA teams.",
        "Completed an eight-month individual-developer contract with [Geeks Invention](https://www.geeksinvention.com/), delivering features with backend and QA support.",
        "Collaborated with [MBAKOP LLC](https://www.imdb.com/name/nm3543262/) for approximately 1.5 years in an Agile team environment.",
        "Participated in daily Scrum meetings, communicated progress and risks, resolved blockers, and supported application testing and release readiness.",
      ],
      technologies: ["React Native", "JavaScript", "RESTful APIs", "Firebase", "Agile/Scrum", "Upwork"],
      certificates: [
        {
          name: "Offer Letter",
          url: "/certificates/freelancing/offerDetails/offerLater.png",
          type: "image",
        },
        {
          name: "Contract Detail",
          url: "/certificates/freelancing/offerDetails/contractDetail.png",
          type: "image",
        },
        {
          name: "PayPal Statement",
          url: "/certificates/freelancing/paypalStatement/paypalStatment.PDF",
          type: "pdf",
        },
        {
          name: "Wise Statement",
          url: "/certificates/freelancing/wiseStatement/wiseStatment.png",
          type: "image",
        },
      ],
    },
    {
      company: "SRKay Consulting Group + Peacock Technologies",
      role: "Android + React Native Developer",
      startDate: "Jan 2016",
      endDate: "Dec 2018",
      description: [
        "Delivered Android and React Native applications, including event-management and diamond-commerce products.",
        "Mentored junior mobile developers, reviewed implementation work, and helped the team complete Android projects.",
        "Interviewed technical candidates and contributed to engineering hiring decisions.",
        "Led a knowledge-sharing seminar on migrating Android projects from Eclipse to Android Studio.",
        "Collaborated with clients and cross-functional teams through daily Scrum meetings, requirement discussions, testing, and delivery.",
      ],
      technologies: ["Android", "React Native", "Java", "RESTful APIs", "JSON", "Agile/Scrum"],
      link: "https://www.srkay.com/",
      certificates: [
        {
          name: "SRK Experience",
          url: "/certificates/experience/srk_exprience.pdf",
          type: "pdf",
        },
        {
          name: "SRK Relieving",
          url: "/certificates/experience/srk_leaving.pdf",
          type: "pdf",
        },
        {
          name: "SRK Appointment 1",
          url: "/certificates/experience/srkay_appoiment1.jpeg",
          type: "image",
        },
        {
          name: "SRK Appointment 2",
          url: "/certificates/experience/srkay_appoiment2.jpeg",
          type: "image",
        },
        {
          name: "Peacock Experience",
          url: "/certificates/experience/peacock_experience.jpeg",
          type: "image",
        },
        {
          name: "Peacock Appointment",
          url: "/certificates/experience/peacock_appoiment1.jpeg",
          type: "image",
        },
      ],
    },
    {
      company: "DRC Systems + DRC Techno",
      link: "https://www.drcsystems.com/",
      role: "Android Developer",
      startDate: "Mar 2011",
      endDate: "Sept 2015",
      description: [
        "Served as the sole Android developer with end-to-end ownership of mobile products, client communication, testing, troubleshooting, and deployment.",
        "Designed and delivered approximately 25 Android applications and received an Innovation and Proficiency award.",
        "Built two government solutions: a customs-duty form application for a Dutch airport and an automated SMS-based coach-cleaning application for Western Railway India.",
        "Integrated web services, JSON/XML APIs, GPS, Wi-Fi, camera, barcode scanning, social authentication, sensors, SMS, media, email, contacts, and GSM capabilities.",
        "Developed custom Android UI controls and two cross-platform PhoneGap applications for varied device requirements.",
      ],
      technologies: ["Android", "Java", "RESTful APIs", "JSON/XML", "GPS", "Camera", "Barcode Scanning", "PhoneGap"],
      certificates: [
        {
          name: "DRC Systems Experience",
          url: "/certificates/experience/drcsystems_experience.jpeg",
          type: "image",
        },
        {
          name: "DRC Systems Appointment",
          url: "/certificates/experience/drcsystems_appoiment.jpeg",
          type: "image",
        },
        {
          name: "DRC Techno Experience",
          url: "/certificates/experience/drctechno_experience.jpeg",
          type: "image",
        },
        {
          name: "DRC Techno Appointment 1",
          url: "/certificates/experience/drctechno_appoitment1.jpeg",
          type: "image",
        },
        {
          name: "DRC Techno Appointment 2",
          url: "/certificates/experience/drctechno_appoiment2.jpeg",
          type: "image",
        },
      ],
    },
    {
      company: "Promact Infotech",
      role: "Dotnet Developer",
      startDate: "Nov 2010",
      endDate: "Mar 2011",
      description: [
        "Developed a multi-tier C#/.NET client-server application for account-based business software.",
        "Integrated WCF, SOAP web services, Windows services, and database-driven workflows as part of a collaborative engineering team.",
      ],
      technologies: ["C#", ".Net", "WCF", "SQL"],
      link: "https://promactinfo.com/",
      certificates: [
        {
          name: "Promact Experience",
          url: "/certificates/experience/promact_experience.jpeg",
          type: "image",
        },
        {
          name: "Promact Appointment",
          url: "/certificates/experience/promact_appoiment.jpeg",
          type: "image",
        },
      ],
    },
  ],
  education: [
    {
      institution: "VNSGU University, Surat",
      degree: "B.E. in Computer Science",
      startDate: "2006",
      endDate: "2010",
      certificates: [
        {
          name: "Degree Certificate",
          url: "/certificates/degree.jpeg",
          type: "image",
        },
      ],
    },
    {
      institution: "Higher Secondary School",
      degree: "HSC",
      startDate: "2004",
      endDate: "2006",
      certificates: [
        {
          name: "HSC Certificate",
          url: "/certificates/hsc.jpeg",
          type: "image",
        },
      ],
    },
    {
      institution: "Secondary School",
      degree: "SSC",
      startDate: "2003",
      endDate: "2004",
      certificates: [
        {
          name: "SSC Certificate",
          url: "/certificates/ssc.jpeg",
          type: "image",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Mobile Application Development",
      items: [
        "React Native",
        "Expo",
        "Cross-Platform iOS & Android",
        "Mobile App Architecture",
        "React Navigation",
        "Firebase Cloud Messaging",
        "Push Notifications",
        "Deep Linking",
        "Maps & GPS Integration",
        "Camera & Barcode Scanning",
        "Android (Java)",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Responsive Web Development",
        "Tailwind CSS",
        "React Query",
        "Vite",
        "Reusable UI Components",
      ],
    },
    {
      category: "Backend, APIs & Databases",
      items: [
        "Node.js",
        "NestJS",
        "Next.js API Routes",
        "RESTful API Design & Integration",
        "OpenAPI / Swagger",
        "Contract-First APIs with Zod & Orval",
        "Supabase",
        "PostgreSQL / SQL",
        "Drizzle ORM",
        "MongoDB",
        "JWT, OTP, OAuth 2.0 & Passkeys",
        "RBAC & PostgreSQL Row-Level Security",
        "Server-Sent Events & Real-Time Messaging",
        "Webhook Integration",
        "Stripe Connect & Payments",
      ],
    },
    {
      category: "Architecture, State & Quality",
      items: [
        "Feature-Based Architecture",
        "State Management: Context API & Zustand",
        "Server-State Management",
        "Monorepo / Turborepo",
        "Shared TypeScript Contracts",
        "Type-Safe API Client Generation",
        "Mobile E2E Smoke Testing with Maestro",
        "API Contract Validation",
        "QA & Regression Testing",
        "Debugging & Performance Optimization",
        "Code Review & Pull Requests",
      ],
    },
    {
      category: "DevOps & Delivery",
      items: [
        "Git & GitHub",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "Vercel",
        "Railway",
        "EAS Build",
        "Agile / Scrum",
        "Sprint & PI Planning",
        "Jira",
      ],
    },
    {
      category: "AI-Assisted Engineering",
      items: [
        "Prompt Engineering",
        "AI-Assisted Software Development",
        "Agentic Development Workflows",
        "AI Code Review & Debugging",
        "Workflow Automation",
        "Technical Documentation",
        "ChatGPT, Codex, Claude, Gemini & Cursor",
      ],
    },
    {
      category: "Leadership & Collaboration",
      items: [
        "Stakeholder Management",
        "Cross-Functional Collaboration",
        "Team Leadership & Mentoring",
        "Requirements Analysis",
        "Client Communication",
        "QA Collaboration",
        "Technical Problem Solving",
        "C# / .NET, WCF & SOAP",
      ],
    },
  ],
  projects: [
    {
      title: "StreetTeams",
      description:
        "Developing a two-sided influencer-marketing SaaS marketplace where businesses create campaigns and local creators discover opportunities, negotiate collaborations, submit content, and receive payouts. The product spans an Expo/React Native creator app, React business and admin dashboards, and a NestJS/PostgreSQL backend.",
      role: "Full-stack and mobile developer implementing contract-first REST APIs with Zod, OpenAPI, and generated TanStack Query clients; JWT, OTP, OAuth 2.0, and passkey authentication; RBAC and PostgreSQL row-level security; Stripe Connect payments and webhooks; Firebase push notifications; real-time messaging; CI/CD; performance improvements; and Maestro smoke tests.",
      technologies: [
        "React Native",
        "Expo",
        "React",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Drizzle ORM",
        "Stripe Connect",
        "Firebase",
        "React Query",
        "RESTful APIs",
        "OpenAPI",
        "Zod & Orval",
        "JWT / OAuth / Passkeys",
        "RBAC / PostgreSQL RLS",
        "Real-Time Messaging",
        "GitHub Actions CI/CD",
        "Maestro E2E Testing",
        "Turborepo",
      ],
      link: "https://www.streetteams.com",
    },
    {
      title: "ScareMe Mobile",
      description:
        "Built a React Native movie discovery app for iOS and Android with OTP and passkey authentication, profile selection, home/explore tabs, search, movie details, watched/liked lists, and backend API integration.",
      role: "Lead React Native developer responsible for mobile architecture, authentication flows, navigation, API integration, UI implementation, and app testing.",
      technologies: ["React Native", "TypeScript", "Zustand", "React Navigation", "Passkeys", "REST API"],
      link: "https://scare.me/",
    },
    {
      title: "ScareMe TV",
      description:
        "Built a TV-focused ScareMe app with remote-friendly navigation, authentication, discover/explore movie browsing, movie detail pages, saved movie lists, and Vimeo/YouTube playback flows.",
      role: "React Native TV developer responsible for tvOS-focused UI, focus navigation, video player integration, API integration, and platform-specific fixes.",
      technologies: ["React Native TV", "TypeScript", "tvOS", "React Navigation", "REST API", "Video Playback"],
      link: "https://scare.me/",
    },
    {
      title: "MagicWish",
      description:
        "Built a wishlist and gifting mobile app with user authentication, wish lists, friend discovery, product capture through camera and barcode scanning, maps, store finder, push notifications, and delivery tracking.",
      role: "Lead React Native developer responsible for app architecture, Supabase/Firebase integration, camera and barcode workflows, map features, notifications, and end-to-end mobile UX.",
      technologies: ["React Native", "TypeScript", "Supabase", "Firebase", "React Query", "Maps", "Vision Camera"],
      link: "https://magicwish.com",
    },
    {
      title: "Stonex LLC (Farm Advantage & StoneX One Pro)",
      description:
        "Contributed to production financial and agricultural trading applications that help customers monitor markets, manage risk, and access advanced trading capabilities. Apps: [StoneX One](https://play.google.com/store/apps/details?id=com.stonex.one), [Farm Advantage](https://play.google.com/store/apps/details?id=intlfcstone.clientaccess).",
      role: "React Native developer responsible for implementing mobile features, integrating backend services, resolving production issues, and collaborating with backend developers and QA engineers.",
      technologies: ["React Native", "RESTful APIs", "C# / .NET", "SignalR", "Agile/Scrum"],
      link: "https://www.farmadvantage.com",
    },
    {
      title: "SRK. One",
      description:
        "Delivered a cross-platform diamond inventory, comparison, inquiry, and purchasing application for business customers, supporting a catalogue of thousands of stones.",
      role: "React Native developer who implemented mobile features, mentored junior developers, and coordinated requirements and delivery with backend, design, QA, and client stakeholders.",
      technologies: ["React Native", "Node.js", "MongoDB", "RESTful APIs", "Team Leadership"],
      link: "https://play.google.com/store/apps/details?id=com.srk",
    },
    {
      title: "Fryends",
      description:
        "Built an automated referral-network application that matches users with relevant jobs and clients, sends lead notifications, and enables three-way introductions through chat.",
      role: "Worked as one of two React Native developers, delivering mobile features and coordinating with the backend team, client, and QA through Agile/Scrum workflows.",
      technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications", "Real-Time Chat"],
      link: "https://drive.google.com/file/d/1294bBri_wetG0JKIAGEMWb-cO5tifBkF/view?usp=drive_link",
    },
    {
      title: "Fun Comp",
      description:
        "Developed a social engagement application that enables influencers, creators, and businesses to launch personalized games and prize-based competitions for their audiences.",
      role: "Worked as one of two React Native developers and collaborated with backend, client, and QA stakeholders on requirements, implementation, testing, and issue resolution.",
      technologies: ["React Native", "Node.js", "MongoDB", "RESTful APIs", "Agile/Scrum"],
    },
    {
      title: "Cast Type",
      description:
        "Built a professional networking application where actors publish portfolios, directors discover and contact talent, and advertisers promote relevant opportunities.",
      role: "Worked as one of two React Native developers, partnering with backend, client, and QA teams on feature delivery, requirements, and issue resolution.",
      technologies: ["React Native", "Node.js", "MongoDB", "RESTful APIs", "Media Uploads"],
      link: "https://drive.google.com/file/d/1QSKXVrpUuIZDT11zYJimP1-kQZkerqrq/view?usp=sharing",
    },
    {
      title: "Payment App",
      description:
        "Developed a mobile invoicing and cash-flow application supporting customizable invoices, payment reminders, card and bank payments, receipt capture, and expense tracking.",
      role: "Served as the sole React Native developer with end-to-end mobile ownership, coordinating directly with the client, backend developers, and QA team.",
      technologies: ["React Native", "Node.js", "MongoDB", "Payment Integration", "Camera / Receipt Capture"],
      link: "https://drive.google.com/file/d/1HHg6nrgP8wcgSp5r9gYh059_qBy1ds-e/view?usp=drive_link",
    },
    {
      title: "NestByte",
      description:
        "Developed a home-design marketplace where professionals publish portfolios and customers browse work, request quotes, and submit project inquiries.",
      role: "Served as the sole React Native developer, collaborating with the client, backend team, designer, and QA on requirements, implementation, and testing.",
      technologies: ["React Native", "Node.js", "MongoDB", "RESTful APIs", "Portfolio & Quote Workflows"],
      link: "https://drive.google.com/file/d/1v1V5wduy5HIttU-hNBRRBNHGjuGRptkX/view?usp=sharing",
    },
    {
      title: "TWG Retail Chatbot — \"Red\" (The Warehouse Group)",
      description:
        "Built an end-to-end conversational AI chatbot for a major NZ retail app. Features include NLP-driven product search with horizontal carousels, automated order tracking, delivery cost calculations, store finder via Google Maps, and seamless bot-to-human handoff via call/email intents.",
      role: "Sole Android developer responsible for full implementation of chatbot UI, API integrations, and custom components for FAQ, price-match, and account management flows.",
      technologies: ["Android Studio", "Java", "XML", "Google Maps API", "REST API", "Deep Linking"],
      link: "https://drive.google.com/file/d/1EnjG3MIHWH2RcUY3nQVoToFOHfhiGNRF/view?usp=drive_link",
    },
  ],
};
