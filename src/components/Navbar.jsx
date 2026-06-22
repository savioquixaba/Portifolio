import styles from "./Navbar.module.css";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className={styles.inner}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
        >
          Sávio Quixaba
        </a>
        <div className={styles.links}>
          <button onClick={() => scrollTo("hero")}>Home</button>
          <button onClick={() => scrollTo("about")}>Sobre</button>
          <button onClick={() => scrollTo("projects")}>Projetos</button>
          <button onClick={() => scrollTo("contact")}>Contato</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
