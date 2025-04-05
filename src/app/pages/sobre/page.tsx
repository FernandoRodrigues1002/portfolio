
import styles from '../../styles/StylePages/Sobre.module.css';

export default function About() {
    return (

      <section className={`${styles['about-container']} ${styles['card-from-left']}`}>
      <div className={styles['about-content']}>
        <h1 className={styles['about-title']}>Sobre Mim</h1>
        <p className={styles['about-paragraph']}>
          Meu nome é Fernando Rodrigues, sou desenvolvedor Full-Stack com conhecimentos em Java, Angular, JavaScript, PHP e React. Tenho grande interesse por programação e hardware, e estou sempre em busca de novos aprendizados.
        </p>
        <p className={styles['about-paragraph']}>
          Embora ainda não tenha experiência profissional na área, venho me dedicando a estudos, projetos pessoais e capacitação técnica para ingressar no mercado de Tecnologia da Informação. Estou aberto a oportunidades que me permitam crescer, aplicar meus conhecimentos e evoluir como profissional.        
        </p>
      </div>
      
    </section>
  );
  }
  