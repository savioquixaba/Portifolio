import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Sobre mim</h2>
        <div className={styles.grid}>
          <div className={styles.photoContainer}>
            <img
              className={styles.photo}
              src="/perfil.jpg"
              alt="Foto de perfil"
            />
          </div>
          <div>
            <p className={styles.text}>
              Desenvolvedor Back-end Java com foco em criar APIs robustas e bem estruturadas. Curioso por natureza, estou sempre buscando entender o funcionamento das tecnologias que uso e aplicar boas práticas, sou bastante ágil e gosto de fazer entregas o mais rápido possível.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>Spring Boot</span>
              <span className={styles.tag}>SQL</span>
              <span className={styles.tag}>Git</span>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
