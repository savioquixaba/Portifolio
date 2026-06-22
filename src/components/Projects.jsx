function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição breve do primeiro projeto. Tecnologias usadas e problema resolvido.",
      tags: ["Java", "Spring", "PostgreSQL"],
    },
    {
      title: "Projeto 2",
      description: "Descrição breve do segundo projeto. Tecnologias usadas e problema resolvido.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Projeto 3",
      description: "Descrição breve do terceiro projeto. Tecnologias usadas e problema resolvido.",
      tags: ["Docker", "AWS", "Java"],
    },
  ];

  return (
    <section id="projects">
      <div>
        <h2>Projetos</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <img src={`https://via.placeholder.com/400x200`} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div>
                  <a href="#">Código</a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
