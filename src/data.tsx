import FastaiIcon from "./components/icons/Fastai.tsx";
import FirebaseIcon from "./components/icons/Firebase.tsx";
import MinioIcon from "./components/icons/Minio.tsx";
import NestjsIcon from "./components/icons/Nestjs.tsx";
import NextjsIcon from "./components/icons/Nextjs.tsx";
import PostgreSQLIcon from "./components/icons/PostgreSQL.tsx";
import PythonIcon from "./components/icons/Python.tsx";
import PyTorchIcon from "./components/icons/PyTorch.tsx";
import ReactIcon from "./components/icons/React.tsx";

export const portfolioData = {
  hero: {
    name: "Verdi Valentino",
    role: "Estudiante de Licenciatura en Informática.",
    aboutme:
      "Experiencia en tecnologías como React, React Native, Next.js, Nest.js, Node.js y Python. Aunque tengo un enfoque Full Stack, mi verdadera pasión está en el desarrollo de interfaces de usuario intuitivas y atractivas. Me especializo en la creación de aplicaciones escalables y eficientes, optimizando procesos y resolviendo problemas tecnológicos. Busco contribuir a proyectos que combinen diseño y funcionalidad para generar impacto positivo.",
    image: "/profile.webp",
  },
  contact: {
    email: "valentinoverdi17@gmail.com",
    github: "https://github.com/ValentinoVerdi",
    linkedin: "https://www.linkedin.com/in/valentino-verdi-2414972a5/",
  },
  projects: [
    {
      title: "Dental AI",
      date: "09/2024 - Actualmente",
      role: "Full stack y IA",
      responsibilities: [
        "Gestión de proyecto y datos de aprendizaje en Firebase Firestore y Firebase Storage, con una app web en React para anotaciones.",
        "Desarrollo de modelo para detectar y segmentar piezas dentales usando Pytorch y OpenMMLab.",
        "Desarrollo de modelo para detectar patologías dentales con FastAI.",
      ],
      technologies: [
        {
          logo: PythonIcon,
          name: "Python",
        },
        { logo: PyTorchIcon, name: "PyTorch" },
        { logo: FastaiIcon, name: "FastAI" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: ReactIcon, name: "React" },
      ],
      image: "/dentalai.webp",
      link: "",
      androidLink: "",
      iosLink: "",
    },
    {
      title: "MIC - Mapa Interactivo Cultural",
      date: "06/2024 - 12/2024",
      role: "Full stack",
      responsibilities: [
        "Desarrollo de la aplicación MIC (PWA) utilizando NestJS para el backend, NextJS para el frontend, Postgres como base de datos y MinIO para almacenamiento.",
        "Mantenimiento de la aplicación MIC (PWA), asegurando su correcto funcionamiento y actualización continua.",
        "Gestión y despliegue de la aplicación MIC en Play Store.",
      ],
      technologies: [
        { logo: NestjsIcon, name: "NestJS" },
        { logo: NextjsIcon, name: "Next.js" },
        { logo: PostgreSQLIcon, name: "PostgreSQL" },
        { logo: MinioIcon, name: "MinIO" },
      ],
      image: "/mic.webp",
      link: "https://mapainteractivocultural.ar/",
      androidLink:
        "https://play.google.com/store/apps/details?id=ar.mapainteractivocultural.twa&hl=es_AR",
      iosLink: "",
    },
  ],
  education: [
    {
      degree: "Licenciatura en Informática - UNPSJB - Puerto Madryn",
      institution: "Porcentaje de la carrera: 75.76 %",
      
      year: "03/2021 - (cursando 5to)",
      projects: [
        "Sistema de gestión de pedidos, entregas y facturación para empresa logística. Permite registrar clientes y domicilios, crear pedidos, generar remitos automáticos según stock disponible y emitir facturas tras la confirmación de entrega. Incluye consultas históricas por cliente, verificación de pagos y control de stock. Desarrollado como parte de un proyecto universitario."
      ]
      
    },
  ],
};
