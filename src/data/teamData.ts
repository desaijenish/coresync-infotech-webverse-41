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
    bio: "Tirth is a skilled Senior Backend Developer specializing in Java Spring Boot, Hibernate, and MySQL. He builds scalable, high-performance systems with a strong focus on clean code and reliable architecture.",
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
  bio: "Avnit is an experienced Senior Android Developer skilled in building high-performance, user-centric mobile applications. With strong expertise in Java and Kotlin, he focuses on creating smooth, reliable, and scalable app experiences that turn ideas into impactful digital solutions.",
  skills: ["Android", "Java/Kotlin", "Project Management", "Analytics", "Stakeholder Management"],
  linkedin: "https://linkedin.com/in/marcus-chen",
  email: "marcus@Coresyncro.com",
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
  bio: "Dhruvisha is a senior UI/UX designer dedicated to creating visually appealing and intuitive digital experiences. She blends creativity with deep user research, ensuring every design decision enhances usability, accessibility, and overall product satisfaction.",
  skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Design Systems"],
  linkedin: "https://linkedin.com/in/priya-sharma",
  email: "priya@Coresyncro.com",
  projects: [
    "Redesigned e-commerce platform increasing conversions by 28%",
    "Created design system used across 12+ applications",
    "Won 'Best UI Design' at TechDesign Awards 2023"
  ]
},
{
  id: "t4",
  name: "Isha Thummar",
  role: "UI/UX Designer",
  photo: "/assets/team/em_IshaThummar.jpg",
  tagline: "Intelligence meets innovation",
  bio: "Isha is a creative UI/UX Designer who focuses on crafting modern, user-friendly interfaces. Her work emphasizes clean aesthetics, thoughtful interaction design, and seamless user flows that elevate the overall product experience.",
  skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Design Systems"],
  linkedin: "https://linkedin.com/in/sarah-johnson",
  email: "sarah@Coresyncro.com",
  projects: [
    "Designed intuitive mobile interfaces improving task completion rates",
    "Created interactive prototypes enhancing client presentations",
    "Collaborated on cross-functional design sprints for product enhancements"
  ]
}

];