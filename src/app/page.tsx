"use client";

import styles from "./styles/StylePages/Home.module.css";
import Image from "next/image";


export default function Home() {
  return (
    
    <section className={styles.container}>
      <div className={`${styles.imageWrapper} ${styles['img-from-left']}`}>
        <Image
          src="/images/foto_perfil4.png"
          alt="Foto de Fernando Rodrigues"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>

      <div className={styles.textWrapper}>
        <h1 className={`${styles.title} ${styles.cursor} ${styles["typewriter-animation"]}`}>
          Olá, sou o <span className={styles.name}>Fernando</span>
        </h1>
        <p className={`${styles.description} ${styles.cursor} ${styles["typewriter-animation2"]}`}>
          Desenvolvedor Full Stack
        </p>
      </div>
    </section>

  );
}
