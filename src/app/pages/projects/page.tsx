"use client";

import styles from "../../styles/StylePages/Projetos.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Setar visibilidade após o componente ser montado para acionar as animações
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-commerce 1",
      description: "E-commerce feito com PHP, MySQL e Bootstrap.",
      image: "/images/exemplo.png",
      link: "https://github.com/Moretto04/projeto",
    },
    {
      title: "Site de viagens",
      description:
        "Feito com JavaScript, HTML e CSS. Um site de viagens com informações sobre os destinos.",
      image: "/images/site_viagem.png",
      link: "https://github.com/FernandoRodrigues1002/Site-de-viagens",
    },
    {
      title: "E-commerce 2",
      description: "E-commerce feito com HTML e CSS.",
      image: "/images/Courtesy.png",
      link: "https://github.com/FernandoRodrigues1002/Courtesy",
    },
    {
      title: "E-commerce",
      description: "E-commerce feito com Laravel.",
      image: "/images/Loja_jogos.png",
      link: "https://github.com/FernandoRodrigues1002/Loja-de-jogos",
    },
    {
      title: "CRUD feito em Java",
      description: "CRUD completo feito em Java com Spring Boot e MySQL.",
      image: "/images/java.png",
      link: "https://github.com/FernandoRodrigues1002/CRUD-em-Java",
    },
    {
      title: "CRUD em Angular",
      description:
        "Complemento para o projeto em Java. CRUD completo feito em Angular com TypeScript e MySQL.",
      image: "/images/angular.png",
      link: "https://github.com/FernandoRodrigues1002/Projeto-Angular",
    },
  ];

  // Função para determinar as classes de animação baseadas no índice
  const getCardAnimationClass = (index: number) => {
    const delay = `delay-${index + 1}`;
    return isVisible ? `${styles["card-from-left"]} ${styles[delay]}` : "";
  };

  return (
    <section className={styles.container}>
      <h1 className={`${styles["section-title"]} ${styles["card-from-left"]}`}>Alguns Projetos</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.card} ${getCardAnimationClass(index)}`}
          >
            <div className={styles.card2}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                />
                <p className={styles.cardDescription}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButton}
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
