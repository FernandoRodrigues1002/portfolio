"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../styles/StylePages/Contac.module.css';
import Image from 'next/image';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.title} ${isLoaded ? styles.titleAnimated : ''}`}>
          Faça contato comigo!
        </h1>
        <ul className={styles.example2}>
          {['linkedin', 'github', 'whatsapp', 'gmail'].map((social, index) => (
            <li 
              key={social} 
              className={`${styles.iconContent} ${isLoaded ? styles.iconAnimated : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                data-social={social}
                aria-label={social.charAt(0).toUpperCase() + social.slice(1)}
                href={
                  social === 'linkedin' ? 'https://www.linkedin.com/in/fernando-rodrigues-del-franco-65b94b20b/' :
                  social === 'github' ? 'https://github.com/FernandoRodrigues1002' :
                  social === 'whatsapp' ? 'https://api.whatsapp.com/send/?phone=5511997604247&text&type=phone_number&app_absent=0' :
                  'https://mail.google.com/mail/?view=cm&fs=1&to=fernanrods1002@gmail.com'
                }
                className={styles.socialLink}
              >
                <div className={styles.filled}></div>
                <Image 
                  src={`/icons/${social}.svg`}
                  alt={social.charAt(0).toUpperCase() + social.slice(1)} 
                  width={24} 
                  height={24} 
                  className={styles.svgIcon}
                />
              </a>
              <div className={styles.tooltip}>
                {social.charAt(0).toUpperCase() + social.slice(1)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;