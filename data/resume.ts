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
      "React Native Expert | Freelancer & Consultant | ReactJS / Next JS / Node JS Developer | 15+ Years of experience in Software Industry",
    summary: "",
    email: "enrajesh67@gmail.com",
    phone: "+91 - 9510475846",
    location: "Surat (Permanent) / Gadhda (Current), Gujarat, India",
    linkedin: "https://www.linkedin.com/in/rajesh-n-6b8471135/",
    github: "https://github.com/rajscet",
    upwork: "https://www.upwork.com/freelancers/~018fd852dfc9164d31",
    stackoverflow: "https://stackoverﬂow.com/users/996787/rajesh-nasit",
  },
  experience: [
    {
      company: "Full-time Freelancer",
      role: "React Native + React JS Developer",
      startDate: "Dec 2024",
      endDate: "Present",
      description: [
        "Developed Leads app for e-commerce app for local users.",
        "Working on creating web using Next JS and mobile app for service booking app.",
        "Created API using Supabase Database.",
      ],
      technologies: ["React Native", "React.js", "Next.js", "Supabase"],
      link: "https://www.bookingrequest.com/",
    },
    {
      company: "Tessrac",
      role: "Remote Developer (React Native + React JS)",
      startDate: "Aug 2022",
      endDate: "Nov 2024",
      description: [
        "Attending meeting with Team for daily follow up, upcoming goals and resolving queries.",
        "Code cleans up.",
        "Work with testers to check the issues and resolve their queries.",
        "Testing whole app for both environments to make sure app is not break if something major implement or integrated.",
        "Attending cyber security training for safety.",
        "Send PR for each ticket for review after completing each task.",
        "Attending Sprint and PI planning meeting for future goals.",
        "Attending one to one or group call for local queries and solve conflicts.",
        "Key projects delivered: [Vidyaranyam](https://play.google.com/store/apps/details?id=com.tessrac.vidyaranyam.app), [Sreshta Farm](https://play.google.com/store/apps/details?id=com.tessrac.sreshtafarm), [Craftsly](https://play.google.com/store/apps/details?id=com.tessrac.craftsly).",
      ],
      technologies: ["React Native", "React.js"],
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
        "Learned about how to work with Upwork client.",
        "Attended daily scrum with team to show progress and find solution of blocker and queries.",
        "Developed around 15 React Native apps.",
        "Worked with QA team and Sr team to manage and test projects.",
        "Got Upwork top rated bagged with Job success rate between 90% to 100%.",
        "Work with [Geeks Invention company](https://www.geeksinvention.com/) (Noida - India) for 8 months contract as Individual developer work with backend, QA team to finish projects.",
        "Work with [MBAKOP LLC](https://www.imdb.com/name/nm3543262/) since last 1.5 year with Team.",
      ],
      technologies: ["React Native", "Upwork"],
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
        "Given seminar about migrating from Eclipse to Android Studio to Jr Team.",
        "Managed and helped to Jr Team to complete Android projects.",
        "Taken interview for new hiring.",
        "Got training from company about English, React native and industry standards from profession trainer.",
        "Worked on outsource project as company employee and attend daily scrum for it.",
        "Worked on Event manage app using React Native.",
      ],
      technologies: ["Android", "React Native", "Java"],
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
        "Worked as a single android developer for a company with all responsibility for all products and projects.",
        "Got an award for Innovation and Proficiency.",
        "Developed around 25 android apps.",
        "Worked on two government projects. One is to fill up a custom duty form at the Dutch airport. And second is to clean the train’s coach using an automatic SMS app for Western Railway India.",
        "Communicated with the client for queries and further enhancement.",
        "Worked with Web Services, JSON, XML, API of GPS, WI-FI, Screen Lock, Accelerometer, Battery, Camera, Social networking Authentication, Barcode scanner, proximity, SMS, JAVA – mail, Audio recorder and Player, Video Player, Keyboard and, Call Logs, Contact Book and GSM.",
        "Developed 2 android apps in the Phone gap platform.",
        "Got the ability to develop unique, cutting-edge applications for the different handset and user requirements.",
        "Got Knowledge of application testing, debugging, troubleshooting and Deployment.",
        "Got the ability to create custom controls.",
      ],
      technologies: ["Android", "Java", "PhoneGap"],
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
        "Worked as a team member in C# .Net client-server desktop app.",
        "Developed skills to create projects in multi-tier.",
        "Worked with WCF, Soap web service, and window service.",
        "Got experience analyzing databases for account-based software.",
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
      category: "Frontend & Mobile",
      items: [
        "React Native",
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Supabase", "MongoDB", "C# .Net"],
    },
    {
      category: "Native Development",
      items: ["Android (Java)", "Gradle"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "VS Code", "Jira", "Slack", "Skype", "Zoom"],
    },
    {
      category: "AI Tools & Skills",
      items: ["Prompt Engineering", "ChatGPT", "Gemini", "Gravity", "Cursor"],
    },
  ],
  projects: [
    {
      title: "Stonex LLC (Farm Advantage & StoneX One Pro)",
      description:
        "Farm Advantage arms row crops farmers, dairy farms, and livestock operations with tools to market produce, manage risk and maximize margins. StoneX One Pro gives professional trades access to algorithmic trading, white glove support, and advanced account types. Apps: [StoneX One](https://play.google.com/store/apps/details?id=com.stonex.one), [Farm Advantage](https://play.google.com/store/apps/details?id=intlfcstone.clientaccess).",
      role: "Working as Frontend developer.",
      technologies: ["React Native", "C# Dot Net", "Signal R"],
      link: "https://www.farmadvantage.com",
    },
    {
      title: "SRK. One",
      description:
        "For Diamond purchase and Inquiry. Need a quick and easy way to buy your diamonds at ease? The srk. One application is one of the best and most reliable to help you purchase diamonds on the go. Trusted by businesses everywhere, srk. one displays our inventory of over 3000+ stones of 3.00 to 4.99 carat and 1000+ stones of 5.00+ carat. The srk. one for Android/iOS has a user-friendly interface that allows a quick comparison of multiple diamonds whenever you need it.",
      role: "Worked with a big team and managed Jr mobile developers and I communicated with the backend team, client, QA, and Designer via skype scrum to show progress, requirement gathering and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
      link: "https://play.google.com/store/apps/details?id=com.srk",
    },
    {
      title: "Fryends",
      description:
        "Automated Referral Network. Auto Referrals: Fryends constantly scour your network looking for jobs that match your skills. Leads: The system then notifies you of all potential jobs and clients that match you. Introduction: Your mutual friend will proceed to make the proper introductions in a new three-way chat room.",
      role: "We are 2 react native developers working together and communicating with the backend team, client, and QA via scrum to show progress and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
      link: "https://drive.google.com/file/d/1294bBri_wetG0JKIAGEMWb-cO5tifBkF/view?usp=drive_link",
    },
    {
      title: "Fun Comp",
      description:
        "Fun Comp is a social media accessory that empowers influencers, artists, content creators, businesses, organizations and ordinary people with a new way to engage, entertain and expand their followers with personalized games that allow the host and players an opportunity to earn thousands of dollars.",
      role: "We are 2 react native developers working together and communicating with the backend team, client, and QA via scrum google meet and slack to show progress, gathering requirements and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
    },
    {
      title: "Cast Type",
      description:
        "Network for Actor, Director and Advertiser. Actor can put their portfolio and discuss with director if director is interested on it to play role of his movie, etc and can see requirement of director. Director can see portfolio of all actors and can contact if he is interested of actor. Advertise will prompt his ads on this app.",
      role: "We are two react native developers working together and communicating with the backend team, client, and QA via scrum google meet and slack to show progress, gathering requirements and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
      link: "https://drive.google.com/file/d/1QSKXVrpUuIZDT11zYJimP1-kQZkerqrq/view?usp=sharing",
    },
    {
      title: "Payment App",
      description:
        "Send out invoices and track cashflow. Invoicing: Our Invoicing tool is easy-to-use, allowing you to create customizable invoices and automatically send reminders to ensure your customers do not forget to pay. Payments: Getting paid using Payments by Peymynt is effortless, too. You can enable our functionality to accept bank and credit card payments with processing fees as low as 1%. Receipts: Tracking your expenses like never before, our Receipts tool allows you to import receipts to have an accurate picture of your business expenses.",
      role: "MySelf only single react native developer in this project and I communicated with the backend team, client, and QA via zoom scrum and skype to show progress, requirement gathering and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
      link: "https://drive.google.com/file/d/1HHg6nrgP8wcgSp5r9gYh059_qBy1ds-e/view?usp=drive_link",
    },
    {
      title: "NestByte",
      description:
        "Home design/decorating ideas. NestByte is for professionals of home decor and designer like https://www.houzz.in/. Professionals will put their portfolios and from those portfolios, end users will inquire for orders and quote.",
      role: "MySelf only single react native developer in this project and I communicated with the backend team, client, and QA, Designer via scrum zoom meet and skype to show progress and queries' resolution.",
      technologies: ["React Native", "Node JS", "MongoDB"],
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
