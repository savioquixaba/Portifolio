import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      period: "2025 — atual",
      role: "Agente de Suporte ao Cliente",
      company: "Vsoft",
      description:
        "Atendimento ao cliente por chat, registro e priorização de solicitações, reporte de incidentes e cooperação com equipes para resolução.",
    },
    {
      period: "2024 — 2025",
      role: "Estagiário de Suporte Técnico",
      company: "Vsoft",
      description:
        "Primeiro nível de atendimento ao cliente por chat, registro e classificação de solicitações, reporte de incidentes.",
    },
    {
      period: "2024",
      role: "Estagiário de Desenvolvimento",
      company: "Vortex Trip",
      description:
        "Componentização de interfaces, refatoração seguindo SOLID e Clean Code, testes e colaboração em equipe.",
    },
    {
      period: "2022 — 2024",
      role: "Suporte Técnico Nível 1",
      company: "Softcom Tecnologia",
      description:
        "Atendimento a clientes via chat, resolução de demandas N1/N2, diagnóstico de problemas e colaboração em melhorias de processos.",
    },
    {
      period: "2021 — 2022",
      role: "Estagiário",
      company: "Softcom Tecnologia",
      description:
        "Suporte telefônico, manutenção de softwares, instalação de sistemas e manipulação de banco de dados.",
    },
  ];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Experiência</h2>
        <p className={styles.intro}>
          Minha base foi formada no desenvolvimento e também no suporte e na operação de TI.
          Isso ajuda a construir soluções mais maduras e próximas da realidade de quem usa.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.date}>{exp.period}</span>

              <div className={styles.separator}>
                <span className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={styles.card}>
                <h3 className={styles.role}>
                  {exp.role} · <span className={styles.company}>{exp.company}</span>
                </h3>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
