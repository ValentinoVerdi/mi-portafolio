import React, { useState } from "react";
import { FaAndroid, FaApple, FaChevronLeft, FaChevronRight, FaGlobe } from "react-icons/fa";
import { portfolioData } from "../data.tsx";
import styles from "../styles/projects.module.css";

// Creamos un subcomponente para manejar el estado individual del carrusel
const ProjectCard = ({ project }: { project: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Verificamos si tiene el formato nuevo (arreglo) o el viejo (texto simple) por las dudas
  const hasImagesArray = project.images && project.images.length > 0;
  const currentImgSrc = hasImagesArray ? project.images[currentImageIndex] : project.image;

  return (
    <div className={styles.projectCard}>
      {/* Header con nombre - rol y fecha */}
      <div className={styles.cardHeader}>
        <h3>
          {project.title} - {project.role}
        </h3>
        <span className={styles.date}>{project.date}</span>
      </div>

      {/* Responsabilidades enumeradas */}
      <div className={styles.roleAndResponsibilities}>
        <div className={styles.responsibilities}>
          <ul>
            {project.responsibilities.map((responsibility: string, i: number) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tecnologías */}
      <div className={styles.techStack}>
        {project.technologies.map((tech: any, i: number) => (
          <div key={i} className={styles.techItem}>
            <div className={styles.techLogo}>{tech.logo()}</div>
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Imagen / Carrusel */}
      <div 
        className={styles.imageContainer} 
        style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* Flecha Izquierda (Solo se muestra si hay más de 1 imagen) */}
        {hasImagesArray && project.images.length > 1 && (
          <button 
            onClick={prevImage} 
            style={{ 
              position: "absolute", left: "10px", zIndex: 2, 
              background: "rgba(0,0,0,0.6)", color: "white", 
              border: "none", borderRadius: "50%", width: "35px", height: "35px", 
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" 
            }}
          >
            <FaChevronLeft size={16} />
          </button>
        )}

        <img
          src={currentImgSrc}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className={styles.projectImage}
        />

        {/* Flecha Derecha (Solo se muestra si hay más de 1 imagen) */}
        {hasImagesArray && project.images.length > 1 && (
          <button 
            onClick={nextImage} 
            style={{ 
              position: "absolute", right: "10px", zIndex: 2, 
              background: "rgba(0,0,0,0.6)", color: "white", 
              border: "none", borderRadius: "50%", width: "35px", height: "35px", 
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" 
            }}
          >
            <FaChevronRight size={16} />
          </button>
        )}
      </div>

      <div className={styles.projectLinks}>
        {/* Enlace al proyecto (Web) */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <FaGlobe className={styles.icon} size={30} />
            Web
          </a>
        )}

        {/* Enlace a Android, si existe */}
        {project.androidLink && (
          <a
            href={project.androidLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <FaAndroid className={styles.icon} size={30} />
            Android
          </a>
        )}

        {/* Enlace a iOS, si existe */}
        {project.iosLink && (
          <a
            href={project.iosLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <FaApple className={styles.icon} size={30} />
            iOS
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2>Proyectos</h2>
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;