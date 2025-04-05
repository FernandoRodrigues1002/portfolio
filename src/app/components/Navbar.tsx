import Link from "next/link";
import styles from "../styles/StyleComponents/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`w-full h-20 flex items-center px-8 py-4 fixed top-0 bg-transparent z-50 fixed ${styles.bgnav}`}>
      <div className={`${styles.navText} ${styles.navp}`}>
        <Link href="/">Fernando Rodrigues</Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Link href="/" className={`${styles["hover-underline"]} ${styles.navText}`}>Home</Link>
        <Link href="/pages/sobre" className={`${styles["hover-underline"]} ${styles.navText}`}>Sobre</Link>
        <Link href="/pages/projects" className={`${styles["hover-underline"]} ${styles.navText}`}>Projetos</Link>
        <Link href="/pages/skills" className={`${styles["hover-underline"]} ${styles.navText}`}>Skills</Link>
        <Link href="/pages/contact" className={`${styles["hover-underline"]} ${styles.navText}`}>Contato</Link>
      </div>

      <div className="ml-auto">
        <a href="/curriculo/Curriculo_Fernando_Rodrigues.pdf" download className={styles.button}>
          Currículo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
