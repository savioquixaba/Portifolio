import styles from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      title: "Gymsys Backend",
      description: "Sistema de gestão para academias com cadastro de alunos, treinos e matrículas. API RESTful com autenticação e banco relacional.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      repo: "https://github.com/savioquixaba/Gymsys-backend",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7449916773719556096/",
      image: "https://media.licdn.com/dms/image/v2/D4E1FAQF79C5U0TaHlw/feedshare-document-cover-images_480/B4EZ2NrnvUHQBA-/0/1776198516587?e=2147483647&v=beta&t=k0ZhseD_J60ZRFIDRXe8I30OIaSpThpBwndVcIw8E_I",
    },
    {
      title: "Cadastro de Ninjas",
      description: "API RESTful para cadastro de ninjas e missões com relacionamento ManyToOne/OneToMany. CRUD completo com Spring Data JPA e Flyway.",
      tags: ["Java", "Spring Boot", "H2", "Flyway", "JPA"],
      repo: "https://github.com/savioquixaba/Cadastro_De_Ninjas",
      image: "/ninja.webp",
    },
    {
      title: "Desafio Itaú Backend",
      description: "API RESTful desenvolvida como desafio técnico, aplicando boas práticas de arquitetura e design de software com foco em performance e manutenibilidade.",
      tags: ["Java", "Spring Boot", "API REST"],
      repo: "https://github.com/savioquixaba/Desafio-itau-backend",
      image: "/itau.png",
    },
    {
      title: "Sistema de Vendas",
      description: "Sistema CRUD de vendas em C# com Windows Forms e PostgreSQL. Cadastro, listagem, atualização e exclusão de vendas com interface gráfica.",
      tags: ["C#", ".NET", "PostgreSQL", "WinForms"],
      repo: "https://github.com/savioquixaba/Sistema-de-Vendas",
      image: "/vendas.jpg",
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.cardImage} src={project.image || "https://via.placeholder.com/400x200"} alt={project.title} />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">Código</a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
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
