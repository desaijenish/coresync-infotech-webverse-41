export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  tagline: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  email?: string;
  projects?: string[];
}


export const teamData: TeamMember[] = [
  {
    id: "t1",
    name: "Tirth Bhingradiya",
    role: "Sr. Backend Developer",
    photo: "/assets/team/em_TirthBhingradiya.png",
    tagline: "Architecting scalable systems",
    bio: "Aisha leads our engineering team with 10+ years of experience building enterprise applications. She specializes in React, Node.js, and cloud architecture, ensuring our solutions are both scalable and maintainable.",
    skills: ["Java Spring Boot", "Hiber-Net", "MySQL", "", ""],
    linkedin: "",
    email: "",
    projects: [
      "Led development of enterprise CRM serving 100K+ users",
      "Architected microservices infrastructure reducing costs by 40%",
      "Mentored 15+ junior developers"
    ]
  },
  {
    id: "t2",
    name: "Avnit Kukadiya",
    role: "Sr. Android Developer",
    photo: "/assets/team/em_AvnitKukadiya.jpeg",
    tagline: "Bridging vision and execution",
    bio: "Marcus transforms complex business requirements into user-friendly products. With his background in both technology and business strategy, he ensures every feature delivers real value to our clients.",
    skills: ["Android", "Java/Kotlin", "Project Management", "Analytics", "Stakeholder Management"],
    linkedin: "https://linkedin.com/in/marcus-chen",
    email: "marcus@coresync.com",
    projects: [
      "Launched mobile app with 95% user satisfaction",
      "Increased client retention by 35% through UX improvements",
      "Managed product roadmap for $2M+ revenue stream"
    ]
  },
  {
    id: "t3",
    name: "Dhruvisha Khunt",
    role: "Sr. UI/UX Designer",
    photo: "/assets/team/em_DhruvishaKhunt.jpg",
    tagline: "Crafting delightful experiences",
    bio: "Priya creates intuitive and beautiful interfaces that users love. Her design philosophy combines aesthetic appeal with usability, ensuring every interaction feels natural and purposeful.",
    skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Design Systems"],
    linkedin: "https://linkedin.com/in/priya-sharma",
    email: "priya@coresync.com",
    projects: [
      "Redesigned e-commerce platform increasing conversions by 28%",
      "Created design system used across 12+ applications",
      "Won 'Best UI Design' at TechDesign Awards 2023"
    ]
  },
  {
    id: "t4",
    name: "David Rodriguez",
    role: "Mobile Development Lead",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    tagline: "Mobile-first innovation",
    bio: "David specializes in creating high-performance mobile applications for iOS and Android. His expertise in React Native and native development ensures seamless user experiences across all platforms.",
    skills: ["React Native", "iOS", "Android", "Flutter", "Mobile Architecture"],
    linkedin: "https://linkedin.com/in/david-rodriguez",
    email: "david@coresync.com",
    projects: [
      "Built fintech app with 500K+ downloads",
      "Optimized app performance reducing load time by 60%",
      "Led mobile team on 8 successful app launches"
    ]
  },
  {
    id: "t5",
    name: "Isha Thummar",
    role: "UI/UX Designer",
    photo: "/assets/team/em_IshaThummar.jpg",
    tagline: "Intelligence meets innovation",
    bio: "Sarah integrates artificial intelligence and machine learning into our solutions, creating smarter applications that learn and adapt. Her work helps clients automate processes and gain valuable insights from their data.",
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Science", "AI Integration"],
    linkedin: "https://linkedin.com/in/sarah-johnson",
    email: "sarah@coresync.com",
    projects: [
      "Developed recommendation engine increasing sales by 22%",
      "Built predictive analytics dashboard for supply chain",
      "Implemented chatbot reducing support tickets by 45%"
    ]
  },
  {
    id: "t6",
    name: "Tirth Bhingradiya",
    role: "Sr. Backend Developer",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    tagline: "Ensuring excellence in every release",
    bio: "Alex maintains the highest quality standards across all our projects. With expertise in both manual and automated testing, he ensures our applications are reliable, secure, and performant before they reach our clients.",
    skills: ["Java Spring Boot", "Hiber-Net", "MySQL", "Security Testing", "CI/CD"],
    linkedin: "https://linkedin.com/in/alex-thompson",
    email: "alex@coresync.com",
    projects: [
      "Implemented automated testing reducing bugs by 70%",
      "Led security audit uncovering critical vulnerabilities",
      "Established QA processes for agile development teams"
    ]
  }
];