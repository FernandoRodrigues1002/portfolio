import styles from './styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <section className={styles.container}>
      
      <div className={styles.imageWrapper}>
        <Image
          src="/ft_perfil.jpeg"
          alt="Foto de Fernando Rodrigues"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>

      <div className={styles.textWrapper}>
        <h1 className={styles.description}>Olá, eu sou o <span className={styles.name}>Fernando Rodrigues</span></h1>
        <p className={styles.description}>Estudante de Sistemas para Internet no Senac</p>
      </div>
  </section>
);
}