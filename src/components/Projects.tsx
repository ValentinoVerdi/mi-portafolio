import React from "react";
import styles from "../styles/projects.module.css";
import { portfolioData } from "../data.tsx";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa"; // Importar los íconos

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2>Proyectos</h2>
      {portfolioData.projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
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
                {project.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tecnologías */}
          <div className={styles.techStack}>
            {project.technologies.map((tech, i) => (
              <div key={i} className={styles.techItem}>
                <div className={styles.techLogo}>{tech.logo()}</div>{" "}
                {/* Llamamos a la función */}
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Imagen */}
          <div className={styles.imageContainer}>
            <img
              src={project.image} // Asegúrate de tener una imagen asociada a cada proyecto
              alt={project.title}
              className={styles.projectImage}
            />
          </div>

          <div className={styles.projectLinks}>
            {/* Enlace al proyecto (Web) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink} // Cambiado a styles
              >
                <FaGlobe className={styles.icon} size={30} />
                Web
                {/* Cambiado a styles */}
              </a>
            )}

            {/* Enlace a Android, si existe */}
            {project.androidLink && (
              <a
                href={project.androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink} // Cambiado a styles
              >
                <FaAndroid className={styles.icon} size={30} />
                Android
                {/* Cambiado a styles */}
              </a>
            )}

            {/* Enlace a iOS, si existe */}
            {project.iosLink && (
              <a
                href={project.iosLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink} // Cambiado a styles
              >
                <FaApple className={styles.icon} size={30} />
                iOS
                {/* Cambiado a styles */}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
