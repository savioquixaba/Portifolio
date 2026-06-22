function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
          SQ
        </a>
        <div>
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
