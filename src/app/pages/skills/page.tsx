import styles from "../../styles/StylePages/Skills.module.css";

export default function Skills() {
  const skills = [
    { nome: "HTML", nivel: "65%" },
    { nome: "CSS", nivel: "65%" },
    { nome: "JavaScript", nivel: "50%" },
    { nome: "React", nivel: "40%" },
    { nome: "Angular", nivel: "50%" },
    { nome: "Java", nivel: "75%" },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillbox}>
            <p className={styles.skillLabel}>{skill.nome}</p>
            <p className={styles.skillSubLabel}>Básico</p>
            <p className={styles.skillPercentage}>Avançado</p>
            <div className={styles.skill}>
              <div
                className={styles.skill_level}
                style={{ width: skill.nivel }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}