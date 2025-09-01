// src/lib/data.tsx

import { Icons } from '@/components/icons';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Education', hash: '#education' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    image: 'icon:bus',
    title: 'CV-Based Passenger Bus Management',
    description:
      'Smart transportation solution for real-time passenger monitoring and route optimization. Deployed on Orange Pi 5 Pro with edge computing capabilities, reducing operational costs by 30% through intelligent analytics.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Orange Pi', 'MQTT'],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:eye',
    title: 'Bus Driver Drowsiness Detection',
    description:
      'Life-saving AI system that monitors driver alertness in real-time using computer vision. Features eye aspect ratio monitoring, head pose estimation, and instant alert mechanisms with 96% detection accuracy.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'dlib', 'RPi'],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:drift',
    title: 'Concept Drift Detection of Big Data Environments',
    description:
      'Advanced machine learning system for detecting and adapting to concept drift in streaming big data environments. Implements ensemble methods and adaptive algorithms to maintain model accuracy over time, handling data distribution changes in real-time analytics pipelines.',
    technologies: ['Python', 'PySpark', 'Kafka', 'scikit-learn', 'MLflow'],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'Deep Learning–Based Image Colorization',
    description:
      'An advanced neural network system that automatically transforms black-and-white images into vivid color photos. Uses CNN architecture trained on 100K+ image pairs, achieving 95% accuracy in natural color reproduction.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    links: {
      github: 'https://github.com/Senum2001/ImageColorizer',
      githubApi: 'https://api.github.com/repos/Senum2001/ImageColorizer',
    },
  },
  {
    image: '/images/drawboard.webp',
    title: 'Drawboard with OpenCV & MediaPipe',
    description:
      'Interactive drawing app driven by hand-gesture detection using MediaPipe’s palm tracking.',
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    links: {
      github: 'https://github.com/Senum2001/DrawboardUsingOpenCV',
      githubApi: 'https://api.github.com/repos/Senum2001/DrawboardUsingOpenCV',
    },
  },
  {
    image: '/images/face-attendance.webp',
    title: 'Face Recognition Attendance System',
    description:
      'Logs attendance by detecting and recognizing faces with OpenCV and scikit-learn classifiers.',
    technologies: ['Python', 'OpenCV', 'scikit-learn'],
    links: {
      github: 'https://github.com/Senum2001/FR_Attendance_System',
      githubApi: 'https://api.github.com/repos/Senum2001/FR_Attendance_System',
    },
  },
  {
    image: 'icon:traffic',
    title: 'Automated Traffic Management System (ATMS)',
    description:
      'Intelligent traffic control system using ML algorithms for dynamic signal optimization. Processes real-time traffic data to reduce congestion by 40%, integrating vehicle detection and flow prediction models.',
    technologies: ['Python', 'OpenCV', 'Pandas', 'scikit-learn', 'YOLOv5'],
    links: {
      github:
        'https://github.com/Senum2001/Automated-Traffic-Management-System',
      githubApi:
        'https://api.github.com/repos/Senum2001/Automated-Traffic-Management-System',
    },
  },
  {
    image: '/images/battery-management.webp',
    title: 'Expandable Battery Management System',
    description:
      'IoT-based Li-ion cell BMS with master–slave architecture and protective features.',
    technologies: ['C', 'Python', 'ESP32', 'MQTT'],
    links: {
      github: 'https://github.com/Senum2001/BMS_EDR_project',
      githubApi: 'https://api.github.com/repos/Senum2001/BMS_EDR_project',
    },
  },
  {
    image: '/images/bms-webapp.webp',
    title: 'BMS Web App (React)',
    description:
      'Frontend dashboard for the IoT-based Battery Management System, built in React.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Senum2001/BMS_EDR_project',
      githubApi: 'https://api.github.com/repos/Senum2001/BMS_EDR_project',
    },
  },
  {
    image: '/images/eye-equalization.webp',
    title: 'Eye Diagrams & Equalization Analysis',
    description:
      'MATLAB analysis of PAM signaling and design of a zero-forcing equalizer for multipath channels.',
    technologies: ['MATLAB'],
    links: {
      github: 'https://github.com/Senum2001/Analysis_of_eye_diagrams',
      githubApi:
        'https://api.github.com/repos/Senum2001/Analysis_of_eye_diagrams',
    },
  },
  {
    image: '/images/medibox.webp',
    title: 'MediBox (ESP32 & Node-RED)',
    description:
      'IoT medication management app using ESP32 microcontroller and Node-RED flows.',
    technologies: ['ESP32', 'Node-RED', 'MQTT'],
    links: {
      github: 'https://github.com/Senum2001/MediBox',
      githubApi: 'https://api.github.com/repos/Senum2001/MediBox',
    },
  },
  {
    image: '/images/robotics-challenge.webp',
    title: 'Sri Lankan Robotics Challenge',
    description:
      'Designed an autonomous robot for the national challenge (Mar–Apr 2024).',
    technologies: ['C', 'STM32', 'ROS'],
    links: {
      github: 'https://github.com/SahanDissanayaka/Robot-Design-for-SLRC',
      githubApi:
        'https://api.github.com/repos/SahanDissanayaka/Robot-Design-for-SLRC',
    },
  },
  {
    image: '/images/micromouse.webp',
    title: 'Micromouse Maze Solver',
    description:
      'STM32-powered micromouse that navigates and solves a maze autonomously.',
    technologies: ['C', 'STM32', 'Algorithms'],
    links: {
      github: 'https://github.com/SahanDissanayaka/Micro-Mouse-Design',
      githubApi:
        'https://api.github.com/repos/SahanDissanayaka/Micro-Mouse-Design',
    },
  },
  {
    image: '/images/power-supply.webp',
    title: '100W Linear Power Supply',
    description:
      'Analog lab project: design and build of a robust 100W linear PSU for electronics.',
    technologies: ['Multisim', 'LTspice'],
    links: {
      github:
        'https://github.com/Senum2001/EN2091_Laboratory_Practice_and_Projects',
      githubApi:
        'https://api.github.com/repos/Senum2001/EN2091_Laboratory_Practice_and_Projects',
    },
  },
  {
    image: '/images/robot-design.webp',
    title: 'Robot Design & Competition',
    description:
      'Competition robot for line-following and object interaction tasks.',
    technologies: ['SolidWorks', 'C'],
    links: {
      github:
        'https://github.com/SahanDissanayaka/Robot-Design-for-EN2553-Module-Competition',
      githubApi:
        'https://api.github.com/repos/SahanDissanayaka/Robot-Design-for-EN2553-Module-Competition',
    },
  },
  {
    image: '/images/trashmonitor.webp',
    title: 'TrashMonitor Engineering Project',
    description:
      'Sensor-based system for monitoring and managing waste levels in bins.',
    technologies: ['Arduino', 'C++'],
    links: {
      github: 'https://github.com/LahiruCooray/TrashMonitor',
      githubApi: 'https://api.github.com/repos/LahiruCooray/TrashMonitor',
    },
  },
] as const;

export const experiencesData = [
  {
    company: 'OCTAVE – John Keells Holdings PLC',
    title: 'Machine Learning Engineer Intern',
    period: 'Dec 2024 – Present',
    description: [
      'Designed and implemented a custom model drift detection framework, capable of detecting concept drift in large-scale data environments.',
      'Collaborated cross-functionally to deliver project milestones on time, honing strong project management skills.',
      'Developed a document and signature classification system for the GenAI project at Union Assurance.',
    ],
    technologies: [
      'Python',
      'PySpark',
      'TensorFlow',
      'Keras',
      'Evidently AI',
      'Azure ML',
    ],
  },
  {
    company: 'WIWIS.AI',
    title: 'AI Engineer (Contract, Part-time)',
    period: 'Nov 2024 – Present',
    description: [
      'Designed and deployed a computer vision–based passenger bus management system on an Orange Pi 5 Pro, enabling passenger tracking, real-time monitoring, and route optimization.',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'Computer Vision',
      'Orange Pi 5 Pro',
      'TensorFlow',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.react className="size-12" />, label: 'React' },
  { icon: <Icons.typescript className="size-12" />, label: 'TypeScript' },
  { icon: <Icons.tailwind className="size-12" />, label: 'Tailwind CSS' },
  { icon: <Icons.python className="size-12" />, label: 'Python' },
  { icon: <Icons.pyspark className="size-12" />, label: 'PySpark' },
  { icon: <Icons.azure className="size-12" />, label: 'Azure' },
  { icon: <Icons.aws className="size-12" />, label: 'AWS MLflow' },
  { icon: <Icons.java className="size-12" />, label: 'Java' },
  { icon: <Icons.cpp className="size-12" />, label: 'C++' },
] as const;
