import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data.tsx";
import stylesContact from "../styles/contact.module.css";
import styles from "../styles/hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Contenedor con imagen y texto circular */}
      <div className={styles.imageContainer}>
        <img
          src={portfolioData.hero.image}
          alt="Perfil"
          className={styles.image}
        />
        <svg viewBox="0 0 200 200" className={styles.textCircle}>
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -80, 0
                 a 80,80 0 1,1 160,0
                 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="#28a745" fontSize="14" fontWeight="bold">
            <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
              Disponible para trabajar
            </textPath>
          </text>
        </svg>
      </div>

      <div className={styles.textContainer}>
        <h1>{portfolioData.hero.name}</h1>
        <h2>{portfolioData.hero.role}</h2>
      </div>

      <div className={styles.aboutMeContainer}>
        <h3>{portfolioData.hero.aboutme}</h3>
      </div>

      <section className={stylesContact.contact}>
        {/* Botones de contacto */}
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className={stylesContact.contactLink}
        >
          <FaEnvelope className={stylesContact.icon} /> Email
        </a>

        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaGithub className={stylesContact.icon} /> GitHub
        </a>

        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaLinkedin className={stylesContact.icon} /> LinkedIn
        </a>

        {/* <a
          href={portfolioData.contact.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesContact.contactLink}
        >
          <FaFileAlt className={stylesContact.icon} /> CV
        </a> */}
      </section>
    </section>
  );
};

export default Hero;
