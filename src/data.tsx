import AndroidStudioIcon from "./components/icons/AndroidStudio.tsx";
import AngularIcon from "./components/icons/Angular.tsx";
import CplusplusIcon from "./components/icons/Cplusplus.tsx";
import ESP32Icon from "./components/icons/ESP32.tsx";
import FirebaseIcon from "./components/icons/Firebase.tsx";
import FreeRTOSIcon from "./components/icons/FreeRTOS.tsx";
import HTMLIcon from "./components/icons/HTML.tsx";
import JetpackComposeIcon from "./components/icons/JetpackCompose.tsx";
import KotlinIcon from "./components/icons/Kotlin.tsx";
import LabelMeIcon from "./components/icons/Labelme.tsx";
import MinioIcon from "./components/icons/Minio.tsx";
import NestjsIcon from "./components/icons/Nestjs.tsx";
import NextjsIcon from "./components/icons/Nextjs.tsx";
import PostgreSQLIcon from "./components/icons/PostgreSQL.tsx";
import PythonIcon from "./components/icons/Python.tsx";
import SpringIcon from "./components/icons/Spring.tsx";

export const portfolioData = {
  hero: {
    name: "Verdi Valentino",
    role: "Estudiante de Licenciatura en Informática.",
    aboutme:
      "Experiencia en tecnologías como React, Next.js, Nest.js, Node.js, C++, Angular, Spring, Python, Java, Javascript y Kotlin. Aunque tengo un enfoque Full Stack, mi verdadera pasión está en el desarrollo de interfaces de usuario intuitivas y atractivas. Me especializo en la creación de aplicaciones escalables y eficientes, optimizando procesos y resolviendo problemas tecnológicos. Busco contribuir a proyectos que combinen diseño y funcionalidad para generar impacto positivo.",
    image: "/profile.webp",
  },
  contact: {
    email: "valenverdi17@gmail.com",
    whatsapp: "https://wa.me/542945639278",
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
      images: [
        "/mic.webp",
      ],
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
      institution: "Porcentaje de la carrera: 84.85 %",
      year: "03/2021 - Cursada finalizada",
      projects: [],
      technologies: null
    },
    {
      degree: "Proyecto Universitario: Sistema de Logística",
      institution: "Laboratorio de Programación y Lenguajes",
      year: "03/2023 - 06/2023",
      projects: [
        "Sistema de gestión de pedidos, entregas y facturación para empresa logística. Permite registrar clientes y domicilios, crear pedidos, generar remitos automáticos según stock disponible y emitir facturas tras la confirmación de entrega. Incluye consultas históricas por cliente, verificación de pagos y control de stock."
      ],
      technologies: [
        { logo: SpringIcon, name: "Spring" },
        { logo: AngularIcon, name: "Angular" },
        { logo: PostgreSQLIcon, name: "PostgreSQL" },
        { logo: HTMLIcon, name: "HTML" },
      ],
    },
    {
      degree: "Tesina de Grado: Planificador de Tiempo Real con Slack Stealing",
      institution: "Sistemas Embebidos de Tiempo Real",
      year: "05/2026 - 12/2026",
      projects: [
        "Programación del algoritmo de Slack Stealing (SS) en lenguaje C++ utilizando el IDE de Arduino sobre un microcontrolador ESP32.",
        "Implementación de una Tarea Planificadora (ST) heterogénea orientado a eventos sobre FreeRTOS, administrando el tiempo ocioso y optimizando el tiempo de respuesta de las Tareas de No Tiempo Real (TNTR) sin comprometer los vencimientos de las Tareas de Tiempo Real (TTR).",
        "Incorporación de arribos asíncronos mediante interrupciones de hardware y optimización energética dinámica (DVFS) regulando la frecuencia del microprocesador dependiendo el Slack Disponible (SD).",
        "Desarrollo de un visualizador en HTML, CSS y JavaScript para parsear los registros y renderizar dinámicamente un Diagrama de Gantt y una tabla de evolución del SD, reemplazando la lectura plana de logs en terminal.",
        "Creación de un script de automatización en Python para descargar y procesar automáticamente los logs del sistema hacia un archivo .txt, agilizando su carga en el visualizador.",
      ],
      technologies: [
        { logo: CplusplusIcon, name: "C++" },
        { logo: FreeRTOSIcon, name: "FreeRTOS" },
        { logo: ESP32Icon, name: "ESP32" },
        { logo: PythonIcon, name: "Python" },
        { logo: HTMLIcon, name: "HTML" }
      ],
      images: [
        "/tesis1.png",
      ],
    },
    {
      degree: "Proyecto Universitario: Gestión de Torneos de Pádel",
      institution: "Taller de Nuevas Tecnologías",
      year: "03/2025 - 06/2025",
      projects: [
        "Desarrollo de un sistema compuesto por dos aplicaciones móviles nativas en Android Studio: una orientada a jugadores/aficionados y otra para la gestión exclusiva de los coordinadores.",
        "Implementación de funcionalidades para inscripción a torneos con comprobantes de pago, seguimiento de partidos en vivo, geolocalización de ofertas de sponsors y validación de códigos para asociaciones.",
        "Integración con Firebase (Auth, Firestore y Storage) para la persistencia de datos en la nube y sincronización en tiempo real mediante Live Data y Snapshots, sumado a Room para el manejo de datos locales.",
        "Implementación de notificaciones Push interactivas."
      ],
      technologies: [
        { logo: AndroidStudioIcon, name: "Android Studio" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: KotlinIcon, name: "Kotlin" },
        { logo: JetpackComposeIcon, name: "Jetpack Compose" },
      ],
      images: [
        "/padel1.png",
      ],
    },
  ]
};
