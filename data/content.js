export const nav = [["Work", "#work"], ["Skills", "#what-i-can-do"], ["About", "#about"], ["Experience", "#experience"], ["Certifications", "#certifications"], ["Education", "#education"]]
export const projectCategories = [
  {
    "id": "web-iot",
    "label": "Web & IoT"
  },
  {
    "id": "autocad",
    "label": "AutoCAD"
  },
  {
    "id": "kicad",
    "label": "KiCad"
  }
]
export const projects = [
  {
    "title": "KAWING – IoT-Integrated Post-Harvest Coordination Platform",
    "slug": "kawing",
    "name": "KAWING",
    "subtitle": "Post-Harvest Coordination",
    "summary": "Connecting rice farmers with post-harvest services and real-time grain moisture readings.",
    "kind": "Capstone Project",
    "desc": "A platform connecting rice farmers in Magalang, Pampanga with transportation, mechanical drying, storage, and rice milling services. Integrates ESP32 grain moisture assessment, harvest listings, ranked buyer bids, production loan requests, and service tracking, with a Debian community access kiosk.",
    "stack": [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "PHP",
      "PDO",
      "MySQL / MariaDB",
      "REST API",
      "ESP32",
      "PalaySense",
      "Intel NUC"
    ],
    "img": "/images/projects/kawing.jpg",
    "href": "https://github.com/LouiseCatala/KAWING--IoT-Integrated-Post-Harvest-Coordination-Platform",
    "liveUrl": "https://github.com/LouiseCatala/KAWING--IoT-Integrated-Post-Harvest-Coordination-Platform",
    "category": "web-iot"
  },
  {
    "title": "HealthTrack – Health and Calorie Monitoring System",
    "slug": "healthtrack",
    "name": "HealthTrack",
    "subtitle": "Health & Calorie Monitoring",
    "summary": "A touch-friendly health tracker designed for rural communities in Pampanga.",
    "kind": "Academic Project",
    "desc": "A web-based health and calorie monitoring system for rural Pampanga, with a touch-oriented welcome screen, guided intake collecting names and addresses, and a Filipino language option for local accessibility.",
    "stack": [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Node.js",
      "Express.js"
      
    ],
    "img": "/images/projects/healthtrack.png",
    "href": "https://healthtrack-aug7gldn.manus.space",
    "liveUrl": "https://healthtrack-aug7gldn.manus.space",
    "category": "web-iot"
  },
  {
    "title": "Ratheuse – Real-Time PC Hardware Utilization Monitor",
    "slug": "ratheuse",
    "name": "Ratheuse",
    "subtitle": "PC Hardware Monitoring App",
    "summary": "A download website for a desktop app that monitors CPU, GPU, and RAM activity in real time.",
    "kind": "Personal Project",
    "desc": "Ratheuse is a real-time PC hardware utilization monitor with a dedicated website where users can download the desktop application. The app helps users observe CPU load, clock speeds and temperatures, GPU utilization and VRAM usage, and RAM allocation and bandwidth from one interface.",
    "stack": [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Gemini API",
      "Netlify"
    ],
    "img": "/images/projects/ratheuse.png",
    "href": "https://ratheuse.netlify.app/",
    "liveUrl": "https://ratheuse.netlify.app/",
    "category": "web-iot"
  },
  {
    "title": "e-LINGAP – Citizen Intake and Welfare Registry",
    "slug": "e-lingap",
    "name": "e-LINGAP",
    "subtitle": "Citizen Intake & Welfare Registry",
    "summary": "A self-service touchscreen kiosk that simplifies welfare applications and ID transactions.",
    "kind": "Academic Project",
    "desc": "A touch-enabled self-service kiosk for social welfare transactions for solo parents, persons with disabilities, and senior citizens. Supports ID registration, renewal and replacement, digital application forms, and document submissions, with real-time Firebase persistence and transaction verification.",
    "stack": [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Realtime Database",
      "Motion",
      "Lucide React",
      "Capacitive Touchscreen"
    ],
    "img": "/images/projects/e-lingap.jpg",
    "href": "https://github.com/LouiseCatala/e-LINGAP",
    "liveUrl": "https://github.com/LouiseCatala/e-LINGAP",
    "category": "web-iot"
  },
  {
    "title": "Smart Home Automation – Rain-Sensing Clothesline and Automatic Door",
    "slug": "smart-home-automation",
    "name": "Smart Home Automation",
    "subtitle": "Rain-Sensing Clothesline & Automatic Door",
    "summary": "An Arduino-based automation circuit using moisture and distance sensing to control two servo mechanisms.",
    "kind": "Circuitry Project",
    "desc": "A smart-home automation circuit for a rain-sensing retractable clothesline and an automatic door system. An Arduino Uno processes readings from a soil-moisture sensor and an ultrasonic distance sensor, then controls two servo motors and an audible indicator.",
    "stack": [
      "Arduino Uno",
      "Moisture Sensor",
      "Ultrasonic Sensor",
      "Servo Motors",
      "Circuit Design"
    ],
    "img": "/images/projects/matic.png",
    "href": "https://github.com/louisecatala24-hash/Smart-Home-Automation-Rain-Sensing-Retractable-Clothesline-and-Automatic-Door-System",
    "liveUrl": "https://github.com/louisecatala24-hash/Smart-Home-Automation-Rain-Sensing-Retractable-Clothesline-and-Automatic-Door-System",
    "category": "kicad"
  },
  {
    "title": "Automatic Parking System – Arduino Parking Control",
    "slug": "automatic-parking-system",
    "name": "Automatic Parking System",
    "subtitle": "Arduino Parking Control",
    "summary": "An Arduino-based parking circuit with barrier control, status indicators, and an LCD display.",
    "kind": "Circuitry Project",
    "desc": "An automatic parking system built around an Arduino Uno. The circuit coordinates input sensors, a servo-controlled parking barrier, LED status indicators, and an LCD display to support automated vehicle entry and parking-space monitoring.",
    "stack": [
      "Arduino Uno",
      "Servo Motor",
      "LCD Display",
      "Sensors",
      "LED Indicators"
    ],
    "img": "/images/projects/matic_parking.png",
    "href": "https://github.com/louisecatala24-hash/Automatic-Parking-System",
    "liveUrl": "https://github.com/louisecatala24-hash/Automatic-Parking-System",
    "category": "kicad"
  },
  {
    "title": "Sine Wave – Signal Visualization and Manual Point Analysis",
    "slug": "sine-wave",
    "name": "Sine Wave",
    "subtitle": "Signal Visualization & Analysis",
    "summary": "A plotted sine-wave signal with manually calculated points for amplitude and time analysis.",
    "kind": "Circuitry Project",
    "desc": "A sine-wave visualization based on y(t) = 12 sin(2π·7t), showing the continuous waveform alongside manually computed sample points. The project demonstrates waveform plotting, signal parameters, and verification of calculated amplitude values over time.",
    "stack": [
      "Python",
      "Matplotlib",
      "Circuit Analysis",
      "Signal Visualization"
    ],
    "img": "/images/projects/SineWave.png",
    "href": "https://github.com/louisecatala24-hash/Sine-Wave",
    "liveUrl": "https://github.com/louisecatala24-hash/Sine-Wave",
    "category": "kicad"
  },
  {
    "title": "2-to-1 Multiplexer – Digital Logic Circuit",
    "slug": "2-to-1-multiplexer",
    "name": "2-to-1 Multiplexer",
    "subtitle": "Digital Logic Circuit",
    "summary": "A gate-level multiplexer that selects one of two inputs using a single control signal.",
    "kind": "Circuitry Project",
    "desc": "A 2-to-1 multiplexer implemented with NOT, AND, and OR gates. The select input S controls whether input I0 or I1 reaches output Y, following the Boolean expression Y = (I0 AND NOT S) OR (I1 AND S).",
    "stack": [
      "Digital Logic",
      "Multiplexer",
      "Logic Gates",
      "Circuit Simulation"
    ],
    "img": "/images/projects/2to1mux.png",
    "href": "https://github.com/louisecatala24-hash/2to1mux",
    "liveUrl": "https://github.com/louisecatala24-hash/2to1mux",
    "category": "kicad"
  },
  {
    "title": "4-to-1 Multiplexer – Digital Logic Circuit",
    "slug": "4-to-1-multiplexer",
    "name": "4-to-1 Multiplexer",
    "subtitle": "Digital Logic Circuit",
    "summary": "A gate-level multiplexer that selects one of four inputs using two control signals.",
    "kind": "Circuitry Project",
    "desc": "A 4-to-1 multiplexer implemented with NOT, AND, and OR gates. Two select inputs, S1 and S0, choose which of the four data inputs—I0, I1, I2, or I3—is routed to the output.",
    "stack": [
      "Digital Logic",
      "Multiplexer",
      "Logic Gates",
      "Circuit Simulation"
    ],
    "img": "/images/projects/4to1mux.png",
    "href": "https://github.com/louisecatala24-hash/4to1mux",
    "liveUrl": "https://github.com/louisecatala24-hash/4to1mux",
    "category": "kicad"
  },
  {
    "title": "Fastest Finger Game – KiCad PCB",
    "slug": "fastest-finger-game",
    "name": "Fastest Finger Game",
    "subtitle": "Three-Player Reaction-Time PCB",
    "summary": "A three-player reaction-time game board designed in KiCad.",
    "kind": "Circuitry Project",
    "desc": "An editable KiCad PCB layout for a three-player fastest-finger game, featuring player buttons, a start and reset control, a four-digit display, LEDs, buzzer, and Tang Nano 9K FPGA board footprint.",
    "stack": [
      "KiCad",
      "PCB Design",
      "Schematic Design",
      "Tang Nano 9K",
      "7-Segment Display"
    ],
    "img": "/images/projects/fastest-finger-game.jpg",
    "href": "https://github.com/LouiseCatala/Fastest-Finger-Game/tree/main",
    "liveUrl": "https://github.com/LouiseCatala/Fastest-Finger-Game/tree/main",
    "category": "kicad"
  },
  {
    "title": "KAWING PalaySense - IoT Grain Moisture Device",
    "slug": "kawing-palaysense",
    "name": "KAWING PalaySense",
    "subtitle": "IoT Grain Moisture Assessment",
    "summary": "An ESP32-based device that assesses rice grain moisture and sends readings to the KAWING platform.",
    "kind": "Circuitry Project",
    "desc": "The IoT hardware component of KAWING, using an ESP32 and HW-390 capacitive moisture sensor to estimate grain moisture, classify readings, and transmit results to the web platform through Wi-Fi and a REST API.",
    "stack": [
      "ESP32 DevKit V1",
      "Arduino IDE",
      "C++",
      "KiCad",
      "HW-390 Moisture Sensor",
      "Wi-Fi",
      "REST API",
      "TP4056",
      "MT3608"
    ],
    "img": "/images/projects/palaysense.jpg",
    "href": "https://github.com/LouiseCatala/Kawing-PalaySense/tree/main",
    "liveUrl": "https://github.com/LouiseCatala/Kawing-PalaySense/tree/main",
    "category": "kicad"
  },
  {
    "title": "Floor Plan 2D – AutoCAD Design",
    "slug": "floor-plan-2d",
    "name": "Floor Plan 2D",
    "subtitle": "2D Architectural Floor Plan",
    "summary": "A 2D floor plan created in AutoCAD.",
    "kind": "AutoCAD Project",
    "desc": "A 2D architectural floor plan developed in AutoCAD, presenting a clear spatial layout and technical drawing details.",
    "stack": [
      "AutoCAD",
      "2D Drafting",
      "Floor Planning",
      "Technical Drawing"
    ],
    "img": "/images/projects/floorplan2.jpg",
    "images": [
      "/images/projects/floorplan1.jpg",
      "/images/projects/floorplan2.jpg"
    ],
    "href": "https://github.com/LouiseCatala/Floor-Plan-2d/tree/main",
    "liveUrl": "https://github.com/LouiseCatala/Floor-Plan-2d/tree/main",
    "category": "autocad"
  },
  {
    "title": "3D Floor Plan - AutoCAD House Models",
    "slug": "3d-floor-plan",
    "name": "3D Floor Plan",
    "subtitle": "Two-Story House Models",
    "summary": "A pair of detailed two-story house models and floor plans drafted in AutoCAD.",
    "kind": "AutoCAD Project",
    "desc": "A collection of two 3D AutoCAD house models: a realistic two-story design and a wooden shaded floor-plan model with a hip roof, covered entry, carport, driveway, walkway, and planters.",
    "stack": [
      "AutoCAD 2023",
      "3D Modeling",
      "Architectural Design",
      "Floor Planning",
      "DWG"
    ],
    "img": "/images/projects/3d-floor-plan.jpg",
    "href": "https://github.com/LouiseCatala/3D-Floor-Plan/tree/main",
    "liveUrl": "https://github.com/LouiseCatala/3D-Floor-Plan/tree/main",
    "category": "autocad"
  },
  {
    "title": "Appliances - 3D AutoCAD Models",
    "slug": "appliances-3d-dwg",
    "name": "Appliances",
    "subtitle": "Multiple 3D AutoCAD Projects",
    "summary": "A collection of 3D AutoCAD appliance and furniture projects.",
    "kind": "AutoCAD Project",
    "desc": "A collection of 3D AutoCAD projects: Bed, Desk of Books, Lamp, Storage Desk, and Table.",
    "stack": [
      "AutoCAD",
      "3D Modeling",
      "Furniture Design",
      "DWG"
    ],
    "img": "/images/projects/storage-desk.jpg",
    "href": "https://github.com/LouiseCatala/Appliances-3d-dwg-",
    "liveUrl": "https://github.com/LouiseCatala/Appliances-3d-dwg-",
    "category": "autocad"
  }
]
export const tech = ["AutoCAD", "Python", "HTML/CSS", "JavaScript", "TypeScript", "PHP", "React", "Node.js", "MySQL", "Firebase", "API's", "ESP32", "Arduino", "Circuit Design", "KiCad", "Proteus", "Soldering"]
export const tools = ["Git", "Docker", "Java", "C++"]
export const stackGroups = [
  { title: "Programming Languages", description: "Working knowledge for programming and web development.", items: ["Python", "HTML/CSS", "JavaScript", "TypeScript", "PHP"] },
  { title: "Frontend & Interfaces", description: "Tools used to build web and touchscreen project interfaces.", items: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"] },
  { title: "Backend, Databases & APIs", description: "Application services, data storage, and integrations used across my projects.", items: ["Node.js", "Express.js", "MySQL", "MariaDB", "Firebase", "Cloud Firestore", "Firebase Auth", "Firebase Security Rules", "API's"] },
  { title: "Embedded Systems & Electronics", description: "Microcontrollers, circuit tools, and components for physical prototypes.", items: ["ESP32", "Arduino", "Arduino IDE", "Circuit Design", "KiCad", "Proteus", "Soldering", "Capacitive Moisture Sensors", "Pumps", "Solenoid Valves", "Relays"] },
  { title: "Development Tools & Kiosk Platforms", description: "Build tools and platforms used in my academic projects.", items: ["Vite", "npm", "pnpm", "Debian 13", "Linux", "Chromebook", "Intel NUC", "Capacitive Touchscreen"] },
  { title: "Familiar With", description: "Additional languages and tools I’m familiar with.", items: tools },
]
export const capabilities = [
  {
    n: "01",
    label: "Web Applications & Databases",
    text: "Building web applications with accessible interfaces, connected APIs, and database workflows—from harvest coordination to health monitoring and citizen intake.",
    tags: ["React", "TypeScript", "HTML/CSS", "PHP", "Node.js", "MySQL / MariaDB", "Firebase", "API's"]
  },
  {
    n: "02",
    label: "Embedded Systems & Circuit Prototyping",
    text: "Connecting microcontrollers, sensors, and hardware controls for grain moisture assessment and automated water refilling, with working knowledge of circuit design and soldering.",
    tags: ["ESP32", "Arduino", "Sensors", "Circuit Design", "KiCad", "Proteus", "Soldering", "Hardware Automation"]
  },
  {
    n: "03",
    label: "Computer Care & Kiosk Setup",
    text: "Providing PC and laptop deep cleaning, including fans, heatsinks, and internal components. Setting up community access kiosks using Debian and developing touchscreen interfaces for self-service transactions.",
    tags: ["PC & Laptop Cleaning", "Component Cleaning", "Debian", "Kiosk Setup", "Touchscreen Interfaces", "Intel NUC"]
  },
  {
    n: "04",
    label: "Customer Service & Operations",
    text: "Communicating with customers, scheduling service appointments, and managing freelance work independently. Supporting food-service and delivery operations through teamwork, organized handling, and reliable hands-on work.",
    tags: ["Customer Service", "Communication", "Appointment Scheduling", "Service Coordination", "Teamwork", "Delivery Support"]
  }
]
export const about = {"stats": [["CV Projects", "4"], ["Degree", "BSCpE"], ["Based in", "Angeles City"]], "bio": "I’m Orland Louise Catala, a Computer Engineering student at Systems Plus College Foundation. I build web applications and embedded systems that address practical needs, from post-harvest coordination to accessible welfare kiosks and automated water refilling. Alongside my technical projects, I’ve worked as a freelance PC and laptop cleaner, Jollibee service crew member, and on-call truck porter. These experiences shaped my approach to reliable, hands-on work, customer service, and teamwork. I continue to develop my technical skills through practical projects and hands-on work.", "currently": [["Building", "Web & embedded systems"], ["Practicing", "Hands-on hardware care"], ["Focused on", "Practical projects & technical work"]], "traits": ["Computer Literacy", "Customer Service", "Communication", "Active Listening", "Leadership", "Planning", "Problem Solving", "Adaptability", "Consistency", "Ability to Work Independently or in a Team"]}
export const certifications = [
  { title: "Claude Code 101", issuer: "Anthropic", type: "Certificate of Completion", image: "/certificates/claude-code-101.png", file: "https://verify.skilljar.com/c/zbenymmamw2p" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", type: "Certificate of Course Completion", featured: true, file: "https://www.credly.com/badges/c0b514c4-818d-4358-80f9-031d4e683ec6/public_url" },
  { title: "SQL (Intermediate)", issuer: "HackerRank", type: "Certificate of Accomplishment", file: "https://www.hackerrank.com/certificates/iframe/72798c374100" },
  { title: "Software Engineer", issuer: "HackerRank", type: "Skills Certification", featured: true, file: "https://www.hackerrank.com/certificates/iframe/d69c6536ff29" },
  { title: "Gemini Certified Educator", issuer: "Google", type: "Professional Certificate", featured: true, file: "https://edu.google.accredible.com/32e85443-c7ad-409c-ba4c-7f3ef2c33105#acc.nJHMRGWg" }
]
export const education = [["Bachelor of Science in Computer Engineering", "2023 – 2026", "Systems Plus College Foundation, Balibago, Angeles City", ""], ["Senior High School, TVL – ICT", "2020 – 2023", "Systems Plus College Foundation, Balibago, Angeles City", ""], ["Junior High School", "2017 – 2020", "Angeles City National Trade School, Angeles City", ""], ["Elementary", "2011 – 2017", "M. Nepo Elementary School, Cutcut, Angeles City", ""]]
export const experience = [{"title": "Freelance PC and Laptop Cleaner", "date": "June 2026 – Present", "org": "Angeles City", "text": "Provide PC and laptop deep cleaning, including internal components, fans, and heatsinks to improve cooling and performance. Communicate with customers, schedule appointments, and manage daily service operations independently."}, {"title": "Service Crew", "date": "May 2024 – November 2025", "org": "Jollibee · Clean Edge Manpower Solution Inc.", "text": "Delivered prompt and courteous customer service, maintained dining, kitchen, and service areas, and followed procedures for order handling, food preparation, and inventory support. Collaborated with team members to keep daily operations running smoothly."}, {"title": "On-Call Extra Porter", "date": "August 2025 – December 2025", "org": "RMM Cold Storage Corp.", "text": "Supported timely product deliveries, safely loaded and unloaded goods, maintained organized truck and storage areas, and coordinated with drivers and team members."}]
export const contacts = [["01", "EMAIL", "louise.catala24@gmail.com", "mailto:louise.catala24@gmail.com", "✉"], ["02", "PHONE", "0968 238 4854", "tel:+639682384854", "↗"], ["03", "LOCATION", "Angeles City, Pampanga", "https://www.google.com/maps/search/?api=1&query=Angeles+City+Pampanga", "⌖"]]
export const resume = "/resume/OLC.CV.pdf"
