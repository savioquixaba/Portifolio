import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Contato</h2>
        <p className={styles.subtitle}>Vamos conversar? Me encontre nas redes abaixo:</p>
        <div className={styles.links}>
          <a className={styles.link} href="https://github.com/savioquixaba" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className={styles.link} href="https://linkedin.com/in/savioquixaba" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className={styles.link} href="mailto:savioquixabaone@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
