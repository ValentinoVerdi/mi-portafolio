import AngularIcon from "./components/icons/Angular.tsx";
import LabelMeIcon from "./components/icons/Labelme.tsx";
import MinioIcon from "./components/icons/Minio.tsx";
import NestjsIcon from "./components/icons/Nestjs.tsx";
import NextjsIcon from "./components/icons/Nextjs.tsx";
import PostgreSQLIcon from "./components/icons/PostgreSQL.tsx";
import SpringIcon from "./components/icons/Spring.tsx";

export const portfolioData = {
  hero: {
    name: "Verdi Valentino",
    role: "Estudiante de Licenciatura en Informática.",
    aboutme:
      "Experiencia en tecnologías como React, Next.js, Nest.js, Node.js, Angular, Spring, Python, Java, Javascript y Kotlin. Aunque tengo un enfoque Full Stack, mi verdadera pasión está en el desarrollo de interfaces de usuario intuitivas y atractivas. Me especializo en la creación de aplicaciones escalables y eficientes, optimizando procesos y resolviendo problemas tecnológicos. Busco contribuir a proyectos que combinen diseño y funcionalidad para generar impacto positivo.",
    image: "/profile.webp",
  },
  contact: {
    email: "valentinoverdi17@gmail.com",
    github: "https://github.com/ValentinoVerdi",
    linkedin: "https://www.linkedin.com/in/valentino-verdi-2414972a5/",
    cv: "/Valentino_Verdi_CV.pdf",
  },
  projects: [
    {
      title: "MIC - Mapa Interactivo Cultural",
      date: "06/2023 - 12/2023",
      role: "Full stack",
      responsibilities: [
        "Pasantia de 6 meses",
        "Desarrollo de la aplicación MIC (PWA) utilizando NestJS para el backend, NextJS para el frontend, Postgres como base de datos y MinIO para almacenamiento.",
        "Mantenimiento de la aplicación MIC (PWA), asegurando su correcto funcionamiento y actualización continua.",
        "Gestión y despliegue de la aplicación MIC.",
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
    {
      title: "Dental AI",
      date: "09/2024 - Actualmente",
      role: "Anotación de imagenes",
      responsibilities: [
        "Anotación manual de imágenes dentales con LabelMe para entrenar modelos de IA.",
      ],
      technologies: [
        { logo: LabelMeIcon, name: "Labelme" },
      ],
      image: "/dentalai.webp",
      link: "",
      androidLink: "",
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
      ],
      technologies: [
        { logo: SpringIcon, name: "Spring" },
        { logo: AngularIcon, name: "Angular" },
        { logo: PostgreSQLIcon, name: "PostgreSQL" },
      ]
    },
  ]
};
