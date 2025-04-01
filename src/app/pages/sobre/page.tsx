import styles from '../../styles/Sobre.module.css';

export default function About() {
    return (
      <section className={styles['about-container']}>
      <div className={styles['about-content']}>
        <h1 className={styles['about-title']}>Sobre Mim</h1>
        <p className={styles['about-paragraph']}>
          Me chamo Fernando Rodrigues, sou desenvolvedor full-stack.
        </p>
        <p className={styles['about-paragraph']}>
          Tenho conhecimento em Java, Angular, JavaScript, PHP e React. Gosto muito de programação e hardwares e sempre busco aprender mais sobre o assunto. Ainda não possuo experiência no mercado de trabalho na área em que desejo, por isso estou estudando e procurando emprego na área de TI.
        </p>
      </div>
      
    </section>
  );
  }
  