// Centralized site content for InnoLite Technologies

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

export const images = {
  hero_ai:
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',
  hero_drone:
    '/Drone-AutomationProgramming.webp',
  hero_circuit:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80',
  about_students:
    'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80',
  why_lab:
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80',
  why_coding:
    '/Assembly-Repair-and-Testing-of-Drone-Drone-Building.webp',
  why_electronics:
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
};

export const courses = [
  {
    id: 'ai',
    slug: 'ai',
    shortName: 'AI',
    icon: 'Brain',
    title: 'Artificial Intelligence (AI)',
    description:
      'Build ML models, train neural networks, and deploy AI solutions from scratch using Python and TensorFlow.',
    duration: '8 Weeks',
    tag: 'Most Popular',
  },
  {
    id: 'robotics',
    slug: 'robotics',
    shortName: 'Robotics',
    icon: 'Cpu',
    title: 'Robotics',
    description:
      'Design, program, and test autonomous robots using Arduino, sensors, and real mechanical assemblies.',
    duration: '6 Weeks',
    tag: null,
  },
  {
  id: 'ros-2',
  slug: 'ros-2',
  shortName: 'ROS 2',
  icon: 'Bot',
  title: 'ROS 2 (Robot Operating System)',
  description:
    'Build intelligent autonomous robots using ROS 2. Master robot communication, nodes, topics, services, sensors, navigation, and real-time robotic applications through hands-on projects.',
  duration: '6 Weeks',
  tag: 'New',
  },
  {
    id: 'java',
    slug: 'java',
    shortName: 'Java',
    icon: 'Coffee',
    title: 'Java Development',
    description:
      'Master Java programming, Object-Oriented Programming (OOP), data structures, and backend application development to build real-world software solutions.',
    duration: '6 Weeks',
    tag: null,
  },
  {
    id: 'python',
    slug: 'python',
    shortName: 'Python',
    icon: 'Code2',
    title: 'Python Development',
    description:
      'Automate tasks, build APIs, scrape data, and create full-stack applications with Python.',
    duration: '5 Weeks',
    tag: null,
  },
  {
    id: 'web-development',
    slug: 'web-development',
    shortName: 'Web Dev',
    icon: 'Globe',
    title: 'Website Development',
    description:
      'Build beautiful, responsive websites with HTML, CSS, React, and backend APIs.',
    duration: '6 Weeks',
    tag: null,
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app',
    shortName: 'Mobile App',
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description:
      'Create cross-platform iOS & Android apps using Flutter with real device testing.',
    duration: '6 Weeks',
    tag: null,
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    shortName: 'Power BI / Data',
    icon: 'BarChart3',
    title: 'Data Analytics & Power BI',
    description:
      'Turn raw data into decisions. Learn SQL, Excel modeling, and Power BI dashboard design.',
    duration: '4 Weeks',
    tag: null,
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux',
    shortName: 'UI/UX Design',
    icon: 'Layers',
    title: 'UI/UX Design',
    description:
      'Master Figma, design systems, and user research to create interfaces people love.',
    duration: '4 Weeks',
    tag: null,
  },
  {
    id: 'pcb-design',
    slug: 'pcb-design',
    shortName: 'PCB & Embedded',
    icon: 'CircuitBoard',
    title: 'PCB Designing & Embedded Systems',
    description:
      'Design real circuit boards, program microcontrollers, and build embedded hardware products.',
    duration: '6 Weeks',
    tag: null,
  },
  {
    id: 'drone',
    slug: 'drone',
    shortName: 'Drone Tech',
    icon: 'Plane',
    title: 'Drone Technology',
    description:
      'Build, calibrate, and fly drones. Learn flight controllers, sensors, and aerial programming.',
    duration: '4 Weeks',
    tag: null,
  },
];

export const features = [
  {
    icon: 'Briefcase',
    title: 'Industry-Oriented Curriculum',
    desc: 'Syllabi built from actual job descriptions, not outdated textbooks.',
  },
  {
    icon: 'Wrench',
    title: 'Hands-On Every Session',
    desc: 'Zero theory-only lectures. Every class has something you build or solve.',
  },
  {
    icon: 'FolderOpen',
    title: 'Real-Time Projects',
    desc: 'Graduate with a portfolio of 3–5 actual deployable projects.',
  },
  {
    icon: 'Users',
    title: 'Expert Mentorship',
    desc: 'Learn from practitioners — engineers and founders, not just instructors.',
  },
  {
    icon: 'Compass',
    title: 'Career Guidance',
    desc: 'Resume review, mock interviews, and job referral support.',
  },
  {
    icon: 'Award',
    title: 'Certification Support',
    desc: 'Official certificates recognized by hiring partners.',
  },
  {
    icon: 'Rocket',
    title: 'Startup & Innovation Focus',
    desc: 'Got a startup idea? We help you build it.',
  },
];

export const steps = [
  {
    number: '01',
    title: 'Choose Your Track',
    desc: 'Pick a course that matches your goal — beginner or advanced.',
  },
  {
    number: '02',
    title: 'Learn by Doing',
    desc: 'Attend hands-on sessions. Build real components every class.',
  },
  {
    number: '03',
    title: 'Build Your Project',
    desc: 'Complete a capstone project you can deploy and show employers.',
  },
  {
    number: '04',
    title: 'Get Certified & Placed',
    desc: 'Receive your certificate and career support from our team.',
  },
];

export const testimonials = [
  {
    name: 'Priya S.',
    role: 'Python Developer, Coimbatore Startup',
    text: "InnoLite's Python course got me my first job in 3 months. The projects we built were exactly what my interviewer asked about.",
    rating: 5,
  },
  {
    name: 'Rahul M.',
    role: 'AI Intern, Chennai MNC',
    text: 'I had zero ML knowledge before InnoLite. After 8 weeks, I was presenting a working image classifier. The mentors are phenomenal.',
    rating: 5,
  },
  {
    name: 'Kavya R.',
    role: 'UI/UX Designer, Freelancer',
    text: 'The Figma course changed my career path. I now take freelance clients and earn more than I did in my previous job.',
    rating: 5,
  },
];

export const contactInfo = [
  {
    icon: 'Phone',
    label: 'Call Us',
    values: ['+91 98421 81701'],
  },
  {
    icon: 'Mail',
    label: 'Email Us',
    values: ['innolitetechnology@gmail.com'],
  },
  {
    icon: 'MapPin',
    label: 'Visit Us',
    values: [
      'No 19, New LIG Colony, Anna Nagar,',
      'Sathamangalam, Madurai - 625020,',
      'Tamil Nadu, India',
    ],
  },
];

export const stats = [
  { end: 200, suffix: '+', label: 'Students Trained' },
  { end: 10, suffix: '', label: 'Courses' },
  { end: 100, suffix: '%', label: 'Project-Based Learning' },
  { end: 5, suffix: '★', label: 'Average Rating' },
];



// Technologies marquee (devicon CDN names + display label)
export const technologies = [
  { name: 'Python', slug: 'python' },
  { name: 'Java', slug: 'java' },
  { name: 'React', slug: 'react' },
  { name: 'Arduino', slug: 'arduino' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'Power BI', slug: 'microsoftsqlserver' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'Raspberry Pi', slug: 'raspberrypi' },
  { name: 'ROS 2', slug: 'ros' },

  // Robotics and Mechanical Technologies
  { name: 'Gazebo', slug: 'gazebo' },
  { name: 'SOLIDWORKS', logo: '/logos/solidworks.svg' },
  { name: 'SLAM', logo: '/logos/slam.svg' },
  { name: 'Nav2', logo: '/logos/nav2.png' },
];
