function Hero() {
  return (
    <section id="hero">
      <div>
        <p>Olá, eu sou</p>
        <h1>Sávio Quixaba</h1>
        <h2>Desenvolvedor Back-end Java</h2>
        <p>
          Transformo ideias em soluções robustas e escaláveis
        </p>
        <div>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Ver Projetos
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
