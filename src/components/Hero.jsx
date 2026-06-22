import styles from "./Hero.module.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.name}>Sávio Quixaba</h1>
        <h2 className={styles.subtitle}>Desenvolvedor Back-end Java</h2>
        <p className={styles.description}>
          Transformo ideias em soluções robustas e escaláveis
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => scrollTo("projects")}>
            Ver Projetos
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo("contact")}>
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
