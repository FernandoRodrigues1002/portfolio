"use client";

import { useEffect, useRef } from 'react';
import styles from '../styles/StarBackground.module.css';

const StarBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  // Criar as estrelas quando o componente montar
  useEffect(() => {
    if (!starsRef.current) return;
    
    // Limpar estrelas existentes
    starsRef.current.innerHTML = '';
    
    // Criar 800 estrelas com tamanhos e posições aleatórias
    for (let i = 0; i < 800; i++) {
      const star = document.createElement('div');
      star.className = styles.star;
      
      // Posição aleatória
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Tamanho aleatório (entre 1px e 3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Atraso de animação aleatório
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.animationDuration = `${Math.random() * 50 + 50}s`;
      
      starsRef.current.appendChild(star);
    }
  }, []);

  return (
    <div className={styles.starsContainer}>
      <div ref={starsRef} className={styles.stars}></div>
    </div>
  );
};

export default StarBackground;