import AndroidStudioIcon from "./components/icons/AndroidStudio.tsx";
import AngularIcon from "./components/icons/Angular.tsx";
import BinanceIcon from "./components/icons/BinanceIcon.tsx";
import CplusplusIcon from "./components/icons/Cplusplus.tsx";
import ESP32Icon from "./components/icons/ESP32.tsx";
import FirebaseIcon from "./components/icons/Firebase.tsx";
import FreeRTOSIcon from "./components/icons/FreeRTOS.tsx";
import HTMLIcon from "./components/icons/HTML.tsx";
import JetpackComposeIcon from "./components/icons/JetpackCompose.tsx";
import KotlinIcon from "./components/icons/Kotlin.tsx";
import LabelMeIcon from "./components/icons/Labelme.tsx";
import MetaIcon from "./components/icons/Meta.tsx";
import MinioIcon from "./components/icons/Minio.tsx";
import NestjsIcon from "./components/icons/Nestjs.tsx";
import NextjsIcon from "./components/icons/Nextjs.tsx";
import NodejsIcon from "./components/icons/Nodejs.tsx";
import OpenAIIcon from "./components/icons/OpenAI.tsx";
import PostgreSQLIcon from "./components/icons/PostgreSQL.tsx";
import PythonIcon from "./components/icons/Python.tsx";
import ReactIcon from "./components/icons/React.tsx";
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
      title: "El Mundo del Celular - ERP & CRM Empresarial Avanzado",
      date: "12/2025 - 06/2026",
      role: "Full Stack",
      responsibilities: [
        "Desarrollo integral de un sistema CRM para la gestión completa del negocio, con vistas diferenciadas por rol (Modo Admin / Modo Vendedor) sobre React, Node.js y Firebase.",
        "Módulo de Tareas tipo Notion para asignación y seguimiento de tareas a empleados (guiones de contenido, checklist de trabajo diario), junto con una Agenda personal para organización de turnos de los administradores.",
        "Dashboard financiero en tiempo real con métricas de ventas del día y comparativas históricas (día/semana/mes), valorización de stock, sincronizado mediante API con Binance para trazabilidad y conciliación exacta de transacciones y transferencias.",
        "Panel de Administración con seguimiento de pedidos de clientes, stock, equipos en servicio técnico, registro y reportes de gastos (personales y del local), e integración fiscal con la API de ARCA para la emisión automatizada de facturas electrónicas.",
        "Módulo de Reportes con gráficos analíticos de negocio (Top 5 productos más vendidos, costo real en regalos entregados, entre otros) para la toma de decisiones.",
        "Sistema inteligente de Comprobantes integrado con la API de Meta (WhatsApp): un bot conectado a un número recibe comprobantes de pago de cualquier banco y los parsea y almacena automáticamente.",
        "Gestión avanzada de Inventario con impresión automática de etiquetas térmicas (nombre, código de barra y precio) mediante integración con impresora térmica NexusPOS X-NX 460U.",
        "Sincronización en tiempo real con un catálogo externo (vía API): cada alta, modificación o baja de productos en el inventario (así como el descuento de stock automático tras concretar una venta) impacta y actualiza de forma directa la aplicación orientada a los clientes desarrollada por terceros.",
        "Módulo de Ventas con generación automática de facturas ARCA (ventas y compras de bienes usados) en caso de ser necesarias y lectura por pistola de código de barras para carga rápida de productos.",
        "Módulo de Presupuestos para cotizar múltiples equipos a clientes, con impresión directa mediante integración con impresora HP Smart Tank 580.",
        "Módulo de Pedidos para equipos sin stock disponible, y módulo de Proveedores y Logística con comparador inteligente de precios que recomienda a qué proveedor comprar según la lista de precios cargada de cada uno.",
        "Asistente inteligente integrado con la API de OpenAI para consultas contextuales sobre stock, clientes y métricas de ventas.",
      ],
      technologies: [
        { logo: ReactIcon, name: "React" },
        { logo: NextjsIcon, name: "Next.js" },
        { logo: NodejsIcon, name: "Node.js" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: MetaIcon, name: "Meta" },
        { logo: OpenAIIcon, name: "OpenAI" },
        { logo: BinanceIcon, name: "Binance" },
        // { logo: BinanceIcon, name: "ARCA" },
      ],
      images: [
        "/iphones1.png",
        "/iphones2.png",
        "/iphones3.png",
        "/iphones4.png",
        "/iphones5.png",
        "/iphones6.png",
        "/iphones7.png",
        "/iphones8.png",
        "/iphones9.png",
        "/iphones10.png",
        "/iphones11.png",
        "/iphones12.png",
      ],
    },
    {
      title: "El Mundo del Celular - CRM & AI Chatbot Omnicanal",
      date: "04/2026 - En desarrollo",
      role: "Full stack",
      responsibilities: [
        "Desarrollo de un CRM omnicanal y chatbot inteligente integrado con la API de Meta para la recepción centralizada de mensajes de WhatsApp e Instagram (incluyendo respuestas a historias).",
        "Implementación del motor de IA utilizando la API de OpenAI, configurado con system prompts dinámicos y sincronización en tiempo real del stock de productos para respuestas automatizadas.",
        "Desarrollo de un sistema de derivación inteligente: el bot gestiona las consultas generales y transfiere automáticamente la conversación a un operador humano ante intenciones de compra complejas.",
        "Integración con la API de Meta Ads para la extracción y visualización analítica de métricas de rendimiento, inversión, alcance y conversión de campañas publicitarias dentro del dashboard.",
        "Diseño de un panel de control adaptado para desktop y dispositivos móviles, permitiendo la gestión manual de chats, control de estados del bot y visualización de métricas de conversiones."
      ],
      technologies: [
        { logo: NextjsIcon, name: "Next.js" },
        { logo: NodejsIcon, name: "Node.js" },
        { logo: ReactIcon, name: "React" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: MetaIcon, name: "Meta" },
        { logo: OpenAIIcon, name: "Openai" },
      ],
      images: [
        "/chatbot1.png",
        "/chatbot2.png",
        "/chatbot3.png",
        "/chatbot4.png",
        //por ahi faltaria agregar imagenes en mobile
      ],
    },
    {
      title: "ARHA - Sistema de Gestión para Concesionaria",
      date: "12/2025 - 02/2026",
      role: "Full stack",
      responsibilities: [
        "Desarrollo de un CRM web integral para la gestión de una cartera de clientes y un catálogo de maquinaria agrícola y vial.",
        "Creación de un módulo de presupuestación avanzado que permite calcular cotizaciones al contado o mediante múltiples planes de financiación configurables (ej. anticipos y cheques con distintas tasas de interés).",
        "Generación automatizada de cotizaciones en formato PDF detallando el producto, características técnicas, datos del cliente y condiciones de entrega, listas para ser enviadas al comprador.",
        "Implementación de un historial de presupuestos interactivo con filtros de estado, seguimiento del cliente y accesos directos para contactar vía WhatsApp."
      ],
      technologies: [
        { logo: NextjsIcon, name: "Next.js" },
        { logo: FirebaseIcon, name: "Firebase" },
        { logo: NodejsIcon, name: "Node.js" },
        { logo: ReactIcon, name: "React" },
      ],
      images: [
        "/arha1.png",
      ],
    },
    {
      title: "Dental AI",
      date: "09/2024 - 12/2024",
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
      //ver como arreglar esta imagen porque si la pongo se ve como el orto
      images: [
        //"/padel1.png",
      ],
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
      //deberia clonar el proyecto y alta paja, de ultima crear una con antigravity
      images: [

      ],
    },
  ]
};
