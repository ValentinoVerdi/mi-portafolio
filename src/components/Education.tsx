import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { portfolioData } from "../data.tsx";
import styles from "../styles/education.module.css";

// Subcomponente para manejar el carrusel en cada tarjeta de educación
const EducationCard = ({ edu }: { edu: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funciones para cambiar de imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === edu.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? edu.images.length - 1 : prevIndex - 1
    );
  };

  // Verificamos si tiene el formato de arreglo (images) o el viejo (image)
  const hasImagesArray = edu.images && edu.images.length > 0;
  const currentImgSrc = hasImagesArray ? edu.images[currentImageIndex] : edu.image;

  return (
    <div className={styles.eduItem}>
      <div className={styles.textContainer}>
        {/* Contenedor que alinea el título y la fecha */}
        <div className={styles.cardHeader}>
          <h3>{edu.degree}</h3>
          <span className={styles.date}>{edu.year}</span>
        </div>
        {/* Institución debajo del título */}
        <p>{edu.institution}</p>
        <br></br>
      </div>

      {/* Proyectos enumerados condicionalmente */}
      {edu.projects && edu.projects.length > 0 && (
        <div className={styles.roleAndResponsibilities}>
          <div className={styles.responsibilities}>
            <ul>
              {edu.projects.map((project: string, i: number) => (
                <li key={i}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tecnologías */}
      {edu.technologies && (
        <div className={styles.techStack}>
          {edu.technologies.map((tech: any, i: number) => (
            <div key={i} className={styles.techItem}>
              <div className={styles.techLogo}>{tech.logo()}</div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Imagen / Carrusel (Solo se renderiza si hay una imagen que mostrar) */}
      {currentImgSrc && (
        <div 
          className={styles.imageContainer}
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Flecha Izquierda */}
          {hasImagesArray && edu.images.length > 1 && (
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
            alt={`Imagen de ${edu.degree}`}
            className={styles.educationImage}
            style={{ width: "75%", height: "auto", borderRadius: "8px" }}
          />

          {/* Flecha Derecha */}
          {hasImagesArray && edu.images.length > 1 && (
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
      )}
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className={styles.education}>
      <h2>Formación</h2>

      {portfolioData.education.map((edu, index) => (
        <EducationCard key={index} edu={edu} />
      ))}
    </section>
  );
};

export default Education;