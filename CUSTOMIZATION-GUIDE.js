/**
 * CUSTOMIZATION GUIDE
 * Update this file with your personal information from your CV
 */

// TODO: Update with your actual information from CV
export const personalData = {
  name: "Bayu Tri Prayitno", // Update with your name from CV
  title: "Software Developer | Frontend Specialist", // Update with your professional title
  location: "Semarang, Indonesia", // Update with your location
  email: "treeprayitno12@gmail.com", // Update with your email
  phone: "+62 857 2504 0030", // Update with your phone number
  bio: "Mahasiswa Teknologi Rekayasa Komputer Politeknik Negeri Semarang dengan minat di bidang Pengembangan Perangkat Lunak, Jaringan, dan Sistem Tertanam. Antusias terhadap teknologi IoT dan AI, serta siap menghadapi tantangan dan proyek inovatif di dunia nyata.", // Update with your bio
  motto: "Belajar tanpa henti, berkembang tanpa batas.", // Update with your personal motto
  image: "/assets/profile/pp.jpg", // Add your profile photo to public folder
  resume: "/CV_ATS.pdf" // Add your CV PDF to public folder
};

export const socialLinks = {
  github: "https://github.com/yourusername", // Update with your GitHub
  linkedin: "https://linkedin.com/in/yourusername", // Update with your LinkedIn
  whatsapp: "https://wa.me/62XXXXXXXXX", // Update with your WhatsApp
  email: "mailto:your.email@example.com" // Update with your email
};

// TODO: Update with your actual skills and proficiency levels
export const skills = {
  technical: [
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Styling" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "Express.js", level: 75, category: "Backend" }
    // Add more skills based on your CV
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Adaptability",
    "Leadership",
    "Creative Thinking"
    // Add more soft skills from your CV
  ]
};

// TODO: Update with your actual education history from CV
export const education = [
  {
    id: 1,
    institution: "Your University Name", // Update from CV
    degree: "Bachelor of Computer Science", // Update from CV
    period: "2020 - 2024", // Update from CV
    gpa: "3.XX", // Update from CV
    description: "Focus on software development and modern web technologies", // Update from CV
    achievements: [
      "Graduate with X honor", // Update from CV
      "Active in student organizations", // Update from CV
      "Participated in programming competitions" // Update from CV
    ]
  },
  {
    id: 2,
    institution: "Your High School", // Update from CV
    degree: "Science Program", // Update from CV
    period: "2017 - 2020", // Update from CV
    gpa: "XX.XX", // Update from CV
    description: "Science program with focus on mathematics and physics", // Update from CV
    achievements: [
      "Math competition winner", // Update from CV
      "Student council member", // Update from CV
      "Graduated with honors" // Update from CV
    ]
  }
];

// TODO: Update with your actual projects from CV/GitHub
export const projects = [
  {
    id: 1,
    title: "Your Project 1", // Update with actual project
    description: "Description of your project with key features and accomplishments", // Update from CV
    technologies: ["React", "Node.js", "MongoDB"], // Update with actual tech stack
    image: "/project1.jpg", // Add project screenshot
    github: "https://github.com/yourusername/project1", // Update with actual repo
    demo: "https://your-project-demo.vercel.app", // Update with actual demo
    featured: true
  },
  {
    id: 2,
    title: "Your Project 2", // Update with actual project
    description: "Description of your second project", // Update from CV
    technologies: ["React", "TypeScript", "Firebase"], // Update with actual tech stack
    image: "/project2.jpg", // Add project screenshot
    github: "https://github.com/yourusername/project2", // Update with actual repo
    demo: "https://your-project2-demo.vercel.app", // Update with actual demo
    featured: true
  }
  // Add more projects from your CV/portfolio
];

// TODO: Update with your actual activities, competitions, certifications from CV
export const activities = [
  {
    id: 1,
    title: "Competition/Event Name", // Update from CV
    type: "Competition", // Competition, Training, Seminar, Organization
    date: "2024", // Update from CV
    description: "Description of the activity and your achievement", // Update from CV
    image: "/activity1.jpg", // Add activity photo
    certificate: "/certificates/cert1.pdf" // Add certificate if available
  },
  {
    id: 2,
    title: "Training/Workshop Name", // Update from CV
    type: "Training",
    date: "2023",
    description: "Description of the training and skills gained", // Update from CV
    image: "/activity2.jpg",
    certificate: "/certificates/cert2.pdf"
  }
  // Add more activities from your CV
];

// TODO: Add testimonials if you have any
export const testimonials = [
  {
    id: 1,
    name: "Name of Recommender", // Add if you have testimonials
    position: "Their Position",
    company: "Their Company",
    content: "Their testimonial about your work",
    image: "/testimonial1.jpg"
  }
  // Add more testimonials if available
];

/*
QUICK SETUP CHECKLIST:
□ Update personalData with your information
□ Update socialLinks with your social media profiles  
□ Add your profile photo to public/profile-photo.jpg
□ Add your CV PDF to public/CV_ATS.pdf
□ Update skills array with your actual skills
□ Update education with your academic background
□ Add your projects with screenshots and links
□ Add your activities, competitions, certifications
□ Add project screenshots to public folder
□ Add activity photos to public folder
□ Test all links and download functionality
*/
