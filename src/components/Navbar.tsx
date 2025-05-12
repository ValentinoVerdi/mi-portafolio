import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "education", "projects"];
      let newActiveSection = ""; // Inicialmente no hay ninguna sección activa

      // Recorremos las secciones para ver cuál está completamente dentro de la ventana
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Solo marca la sección como activa si su parte superior y su parte inferior están dentro de la ventana
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.2
          ) {
            newActiveSection = `#${section}`;
            break; // Sale del ciclo después de encontrar la primera sección visible
          }
        }
      }

      // Solo actualiza el estado si la sección activa ha cambiado y no estamos en un proceso de scrolling
      if (newActiveSection && newActiveSection !== activeLink) {
        setActiveLink(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]); // Dependencia de activeLink y isScrolling

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      // Evita que el fragmento se muestre en la URL
      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navList}>
          <li>
            <a
              href="#hero"
              onClick={(e) => handleClick(e, "hero")}
              className={
                activeLink === "#hero" ? styles.active : styles.desactive
              }
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => handleClick(e, "education")}
              className={
                activeLink === "#education" ? styles.active : styles.desactive
              }
            >
              Formación
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className={
                activeLink === "#projects" ? styles.active : styles.desactive
              }
            >
              Proyectos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
