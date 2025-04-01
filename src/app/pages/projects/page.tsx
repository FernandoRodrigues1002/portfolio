import styles from '../../styles/Projetos.module.css';

export default function Projects() {
  const projects = [
    {
        title: "E-commerce",
        description: "E-commerce feito com PHP, MySQL e Bootstrap.",
        image: "", 
        link: "https://github.com/Moretto04/projeto",
      },
      {
        title: "Site de viagens",
        description: "Feito com JavaScript, HTML e CSS. Um site de viagens com informações sobre os destinos.",
        image: "", 
        link: "https://github.com/FernandoRodrigues1002/Site-de-viagens",
      },
      {
        title: "E-commerce",
        description: "E-commerce feito com HTML e CSS.",
        image: "", 
        link: "https://github.com/FernandoRodrigues1002/Courtesy",
      },
      {
        title: "E-commerce",
        description: "E-commerce feito com Laravel.",
        image: "", 
        link: "https://github.com/FernandoRodrigues1002/Loja-de-jogos",
      },
        {
          title: "CRUD feito em Java",
          description: "CRUD completo feito em Java com Spring Boot e MySQL.",
          image: "", 
          link: "https://github.com/FernandoRodrigues1002/CRUD-em-Java",
        },
        {
          title: "CRUD em Angular",
          description: "Complemento para o projeto em Java. CRUD completo feito em Angular com TypeScript e MySQL.",
          image: "", 
          link: "https://github.com/FernandoRodrigues1002/Projeto-Angular",
        },
  ];

  return (
    <section className={styles.container}>
    <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
          >
            Ver Projeto
          </a>
        </div>
      ))}
    </div>
  </section>
  );
}
