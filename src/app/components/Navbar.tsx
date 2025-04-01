import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-50 bg-lime-900">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/pages/sobre" className="text-white">Sobre</Link>
          <Link href="/pages/projects" className="text-white">Projetos</Link>
          <Link href="/skills" className="text-white">Habilidades</Link>
          <Link href="/contact" className="text-white">Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
