/*import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 h-full w-48 bg-orange-600 flex flex-col justify-center items-center space-y-6">
      <Link href="/" className="text-white">Home</Link>
      <Link href="/pages/sobre" className="text-white">Sobre</Link>
      <Link href="/pages/projects" className="text-white">Projetos</Link>
      <Link href="/skills" className="text-white">Habilidades</Link>
      <Link href="/contact" className="text-white">Contato</Link>
    </nav>
  );
};

export default Navbar;
*/

import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex space-x-6">
          <Link href="/" className={styles['hover-underline']}>Home</Link>
          <Link href="/pages/sobre" className={styles['hover-underline']}>Sobre</Link>
          <Link href="/pages/projects" className={styles['hover-underline']}>Projetos</Link>
          <Link href="/skills" className={styles['hover-underline']}>Habilidades</Link>
          <Link href="/contact" className={styles['hover-underline']}>Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
