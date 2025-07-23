// Data portfolio berdasarkan CV
export const personalData = {
  name: "Bayu Tri Prayitno", // Akan diupdate berdasarkan CV
  title: "Mahasiswa Teknologi Rekayasa Komputer", // Akan diupdate berdasarkan CV
  location: "Indonesia",
  email: "treeprayitno12@gmail.com",
  phone: "+62 857 2504 0030",
  bio: "Mahasiswa Teknologi Rekayasa Komputer Politeknik Negeri Semarang dengan minat di bidang Pengembangan Perangkat Lunak, Jaringan, dan Sistem Tertanam. Antusias terhadap teknologi IoT dan AI, serta siap menghadapi tantangan dan proyek inovatif di dunia nyata.",
  motto: "Belajar tanpa henti, berkembang tanpa batas.",
  image: "/assets/profile/pp.jpg", // Placeholder
  resume: "/CV_ATS.pdf",
};

export const socialLinks = {
  github: "https://github.com/bayu3prayitno",
  linkedin: "https://linkedin.com/in/bayu3prayitno",
  whatsapp: "https://wa.me/6285725040030",
  email: "mailto:treeprayitno12@gmail.com",
};

export const skills = {
  technical: [
    { name: "JavaScript", category: "Programming" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Programming" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Backend" },
    { name: "Flutter", category: "Programming" },
    { name: "IOT", category: "Programming" },
  ],
  soft: [
    "Problem Solving",
    "Kolaborasi Tim",
    "Komunikasi",
    "Manajemen Waktu",
    "Pemikiran Kritis",
    "Adaptabilitas",
    "Kepemimpinan",
    "Pemikiran Kreatif",
  ],
};

export const education = [
  {
    id: 1,
    institution: "POLITEKNIK NEGERI SEMARANG",
    degree: "Program Studi Teknologi Rekayasa Komputer",
    period: "2022 - Sekarang",
    IPK: "3.74 / 4.00",
  },
  {
    id: 2,
    institution: "SMK Negeri 1 Batang",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 - 2022",
  },
];

export const projects = [
  {
    id: 1,
    title: "Psikotes Online",
    description:
      "Berkontribusi dalam pengembangan halaman web yang dinamis, terstruktur dengan baik, dan responsif menggunakan HTML, CSS, dan JavaScript.",
    technologies: ["Laravel", "html", "css", "javascript", "filament"],
    image: "/assets/Projects/pbl/1.png",
    github: "https://github.com/Farhnzzz/pbl-psikotes.git",
    featured: true,
  },
  {
    id: 2,
    title: "Futsal field booking system",
    description:
      "Merancang dan mengembangkan aplikasi menggunakan Flutter yang terintegrasi dengan Firebase sebagai basis data backend.",
    technologies: ["Flutter", "Firebase", "Dart"],
    image: "/assets/Projects/mobile/1.png",
    github: "https://github.com/bayu3prayitno/flutter_booking_app-1.git",
    featured: true,
  },
  {
    id: 3,
    title: "Solar System AR Aplication",
    description:
      "Aplikasi edukasi berbasis AR yang menawarkan cara belajar tentang tata surya secara imersif dan interaktif.",
    technologies: ["Unity", "C#", "AR Foundation"],
    image: "/assets/Projects/mobile/2.png",
    github: "https://drive.google.com/file/d/1ZQBZBwXx3HdBY06S-HpBTiwDrcD-VkVd/view?usp=drive_link",
    featured: true,
  },
  {
    id: 4,
    title: "Game Adventure Pangeran Cedric",
    description:
      "Game PC yang menggabungkan elemen petualangan dan pemecahan teka-teki untuk menghadirkan pengalaman bermain yang menarik, Berkontribusi dalam pengembangan level 3 pada game, termasuk desain tantangan, alur permainan, dan penyesuaian tingkat kesulitan.",
    technologies: ["Unity", "C#", "AR Foundation"],
    image: "/assets/Projects/mobile/3.png",
    github: "https://github.com/username/weather-dashboard",
    featured: true,
  },
  {
    id: 5,
    title: "Air Quality Monitoring System",
    description:
      "Pengembangan sistem pemantauan kualitas udara dalam ruangan berbasis IoT menggunakan sensor MQ135 dan DHT11, Berkontribusi dalam perancangan alat dan pembuatan tampilan dashboard untuk memantau kualitas udara secara real-time.",
    technologies: ["ESP8266", "C++", "Flutter", "Firebase"],
    image: "/assets/Projects/mobile/4.jpg",
    github: "https://github.com/bayu3prayitno/airquality_monitoring.git",
    featured: true,
  },
  {
    id: 6,
    title: "Desain UI/UX Company Profile Chanael - Chocolate And Pudding",
    description:
      "Melakukan desain UI/UX menggunakan Figma untuk menciptakan antarmuka yang intuitif, estetis, dan user-friendly.",
    technologies: ["Figma", "UI/UX Design"],
    image: "/assets/Projects/mobile/5.png",
    github: "https://www.figma.com/design/SX6Yda2HrEQNDhNvBgn6rh/Cloud-Pudding?node-id=31-397&t=k6zEOAB6WpkeHBOm-1",
    featured: true,
  },
];

export const activities = [
  {
    id: 1,
    title: "TECHCOMFEST 2025",
    type: "Voulenteer",
    date: "2025",
    description:
      "Menjadi panitia dalam acara tahunan TECHCOMFEST 2025 sebagai Sie Publikasi, Dokumentasi, dan Dekorasi.",
    image: "/assets/kegiatan/TECHCOMFEST2025.jpg",
    certificate: "/assets/doc/TECHCOMFEST2025.pdf",
  },
  {
    id: 2,
    title: "Web Development Bootcamp | Python Django Web Course",
    type: "Training",
    date: "2025",
    description:
      "Mengikuti pelatihan online Web Development Bootcamp | Python Django Web Course yang diselenggarakan oleh Udemy.",
    image: "/assets/kegiatan/udemy.png",
    certificate: "/assets/doc/Dev-Python-Django.pdf",
  },
  {
    id: 3,
    title: "Pimpinan Ranting IPNU Tragung",
    type: "Organisasi",
    date: "2020-2022",
    description: "Aktif dalm organisasi pelajar IPNU di tingkat ranting sebagai Sekertaris.",
    image: "/assets/kegiatan/ipnu.jpg",
    certificate: null,
  },
  {
    id: 4,
    title: "Pengembangan Sistem Monitoring Kualitas Udara Ruangan Berbasis Iot Menggunakan Sensor Mq135 Dan Dht11.",
    type: "JOURNAL PUBLICATION",
    date: "2024",
    description: "Merupakan publikasi jurnal ilmiah tentang sistem monitoring kualitas udara berbasis IoT.",
    image: "/assets/kegiatan/jurnal.png",
    certificate: null,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Developer",
    company: "Tech Company",
    content:
      "Excellent developer with strong problem-solving skills and great attention to detail.",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    company: "Digital Agency",
    content:
      "Very reliable and delivers high-quality work on time. Great team player!",
    image: "/testimonial2.jpg",
  },
];
