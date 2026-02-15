// src/lib/data.tsx

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
    image: 'icon:drift',
    title:
      'Diffusion-Enhanced Reasoning: Integrating Continuous Diffusion with Chain-of-Thought',
    description:
      'Integrates Chain-of-Thought reasoning into a continuous diffusion language model, leveraging its parallel generation and iterative refinement capabilities.',
    technologies: [
      'Python',
      'PyTorch',
      'Transformers',
      'Diffusion Models',
      'NLP',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:eye',
    title:
      'ClinicalCore: AI-Powered Clinical Risk Assessment & Resource Forecasting',
    description:
      'A Kubernetes-orchestrated healthcare AI platform predicting surgical risk and LOS with explainable ML, Groq LLaMA, Docker containerization, and Prometheus monitoring for production healthcare deployments.',
    technologies: [
      'Python',
      'PyTorch',
      'Groq LLaMA',
      'Docker',
      'Kubernetes',
      'Prometheus',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:bus',
    title:
      'MedArchive-Rag: Medical AI Chat System with Real-Time Document Retrieval',
    description:
      'A production-ready medical AI chat platform with WebSocket streaming, conversation persistence, and RAG-powered document retrieval using Qdrant vector search, Groq LLaMA-3.3-70B, and table-aware PDF processing for zero-hallucination medical responses.',
    technologies: [
      'Python',
      'FastAPI',
      'Groq LLaMA',
      'Qdrant',
      'WebSocket',
      'LlamaParse',
      'BGE Embeddings',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:drift',
    title: 'Concept Drift Detection of Big Data Environments',
    description:
      'Advanced ML system for detecting and adapting to concept drift in streaming big data environments, with a dashboard using Next.js, RESTful APIs, and Flask.',
    technologies: [
      'Python',
      'PySpark',
      'Flask',
      'Next.js',
      'REST APIs',
      'Azure',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:bus',
    title: 'Computer Vision-Based Passenger Bus Management System',
    description:
      'Implemented face detection and recognition for automated attendance logging. Deployed on OrangePi 5 Pro for passenger tracking and route optimization.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'OrangePi'],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:eye',
    title:
      'AnomalyCore: Real-Time Industrial Defect Detection & Feedback Learning',
    description:
      'A cloud-deployed anomaly detection platform for electrical components using PatchCore ML, OpenCV classification, continuous feedback learning, and Docker containerization for real-time industrial quality control.',
    technologies: [
      'Python',
      'PyTorch',
      'PatchCore',
      'OpenCV',
      'Flask',
      'Docker',
      'Supabase',
      'Cloudinary',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:traffic',
    title:
      'PowerPulse: Full-Stack Electrical Transformer Management & Inspection',
    description:
      'A comprehensive industrial IoT platform for electrical transformer asset management featuring thermal imaging analysis, predictive inspection scheduling, real-time status monitoring, and cloud-based data analytics for power grid infrastructure optimization.',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Java 17',
      'Spring Boot',
      'PostgreSQL',
      'Supabase',
      'Cloudinary',
    ],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:eye',
    title: 'Bus Driver Drowsiness Detection and Alerting System',
    description:
      'Real-time monitoring to prevent accidents by detecting driver drowsiness using computer vision with eye aspect ratio and head pose estimation.',
    technologies: ['Python', 'OpenCV', 'Dlib'],
    links: {
      github: '',
      githubApi: '',
    },
  },
  {
    image: 'icon:traffic',
    title: 'Automated Traffic Management System (ATMS)',
    description:
      'Utilizes computer vision, data analytics, and ML for real-time traffic optimization and dynamic signal control.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Data Analytics'],
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
      'IoT-based management system for Li-ion cells with master-slave architecture and protective features.',
    technologies: ['Python', 'IoT', 'Embedded Systems', 'Microcontrollers'],
    links: {
      github: 'https://github.com/Senum2001/BMS_EDR_project',
      githubApi: 'https://api.github.com/repos/Senum2001/BMS_EDR_project',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'Deep Learning-Based Image Colorization',
    description:
      'Automatically colorized black and white images using convolutional neural networks with 95% accuracy in natural color reproduction.',
    technologies: ['Python', 'PyTorch', 'CNNs', 'OpenCV'],
    links: {
      github: 'https://github.com/Senum2001/ImageColorizer',
      githubApi: 'https://api.github.com/repos/Senum2001/ImageColorizer',
    },
  },
  {
    image: '/images/drawboard.webp',
    title: 'Drawboard using OpenCV and MediaPipe',
    description:
      'Interactive drawing application controlled by hand gestures using MediaPipe palm tracking.',
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    links: {
      github: 'https://github.com/Senum2001/DrawboardUsingOpenCV',
      githubApi: 'https://api.github.com/repos/Senum2001/DrawboardUsingOpenCV',
    },
  },
] as const;

export const experiencesData = [
  {
    company: 'OCTAVE – John Keells Holdings PLC',
    title: 'Machine Learning Engineer Intern',
    period: 'Dec 2024 – Jun 2025',
    description: [
      'Designed and implemented a custom model drift detection framework capable of detecting both data and concept drift in large-scale environments for predictive and forecasting models.',
      'Deployed the framework as a Python package on Azure, enabling automated real-time drift detection, mitigation, and reporting, with explainable reasons for drift events.',
      'Built a frontend dashboard using Next.js and integrated Azure Logic App and Azure Function App for real-time notifications.',
      'Developed a document and signature classification system for GenAI projects: document classification via noise, texture, and FFT-based analysis; signature classification using morphological operations, edge/contour analysis, and EDSR 4x super-resolution enhancement.',
      'Gained project management experience, including timeline/resource management, progress tracking, and Agile-Scrum & Extreme Projects (R&D) best practices.',
    ],
    technologies: [
      'PySpark MLLib',
      'Python',
      'Azure Databricks',
      'Next.js',
      'Flask',
      'RESTful APIs',
      'OpenCV',
    ],
  },
] as const;

export const skillsData = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    label: 'Python',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    label: 'PyTorch',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    label: 'TensorFlow',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
    label: 'Keras',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
    label: 'PySpark',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    label: 'OpenCV',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    label: 'Scikit-Learn',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    label: 'FastAPI',
  },
  {
    icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    label: 'Hugging Face',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg',
    label: 'LangChain',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mlflow/mlflow-original.svg',
    label: 'MLflow',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    label: 'Azure',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    label: 'AWS',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    label: 'Docker',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    label: 'Kubernetes',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    label: 'JavaScript',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    label: 'Next.js',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    label: 'NestJS',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    label: 'Git',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    label: 'Linux',
  },
] as const;
