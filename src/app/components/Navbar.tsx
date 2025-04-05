"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/StyleComponents/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`w-full h-20 flex items-center px-8 py-4 fixed top-0 z-50 ${styles.bgnav}`}>
      <div className={`${styles.navText} ${styles.navp}`}>
        <Link href="/" onClick={closeMenu}>Fernando Rodrigues</Link>
      </div>

      {/* Desktop Links */}
      <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6`}>
        <Link href="/" className={`${styles["hover-underline"]} ${styles.navText}`}>Home</Link>
        <Link href="/pages/sobre" className={`${styles["hover-underline"]} ${styles.navText}`}>Sobre</Link>
        <Link href="/pages/projects" className={`${styles["hover-underline"]} ${styles.navText}`}>Projetos</Link>
        <Link href="/pages/skills" className={`${styles["hover-underline"]} ${styles.navText}`}>Skills</Link>
        <Link href="/pages/contact" className={`${styles["hover-underline"]} ${styles.navText}`}>Contato</Link>
      </div>

      {/* Botão do Currículo (Desktop) */}
      <div className="ml-auto hidden md:block">
        <a href="/curriculo/Curriculo_Fernando_Rodrigues.pdf" download className={styles.button}>
          Currículo
        </a>
      </div>

      {/* Ícone Hamburguer */}
      <div className="ml-auto md:hidden z-50" onClick={toggleMenu}>
        <div className={styles.hamburger}>
          <span className={`${menuOpen ? styles.open : ""}`}></span>
          <span className={`${menuOpen ? styles.open : ""}`}></span>
          <span className={`${menuOpen ? styles.open : ""}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <Link href="/" onClick={closeMenu} className={styles.navText}>Home</Link>
        <Link href="/pages/sobre" onClick={closeMenu} className={styles.navText}>Sobre</Link>
        <Link href="/pages/projects" onClick={closeMenu} className={styles.navText}>Projetos</Link>
        <Link href="/pages/skills" onClick={closeMenu} className={styles.navText}>Skills</Link>
        <Link href="/pages/contact" onClick={closeMenu} className={styles.navText}>Contato</Link>
        <a href="/curriculo/Curriculo_Fernando_Rodrigues.pdf" download className={styles.button}>
          Currículo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
