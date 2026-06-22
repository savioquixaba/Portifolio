# Plano do Portfólio

## Tecnologias
- **React 18** com **Vite** (inicialização rápida, hot reload)
- **CSS Modules** — estilização por componente, sem vazamento de estilo
- Sem frameworks CSS pesados (nada de Bootstrap, Tailwind, etc.)

---

## Estrutura de Seções (Navbar com scroll suave)

### 1. Header / Navbar
- Navbar fixa no topo, fundo escuro semi-transparente
- Links: Home, Sobre, Projetos, Contato
- Destaque no link da seção atual conforme o scroll
- Botão compacto em mobile (hamburger)

### 2. Home (Hero)
- Nome grande em destaque
- Subtítulo: "Desenvolvedor Back-end Java"
- Botão CTA: "Ver Projetos" ou "Contato"
- Animação de entrada suave

### 3. Sobre
- Foto sua (placeholder redondo) — você insere depois
- Parágrafo contando quem você é, o que faz, seus objetivos
- Ícones com tecnologias que você domina

### 4. Projetos
- Grid de cards (3 colunas em desktop, 1 em mobile)
- Cada card: imagem thumb, título, descrição curta, tags de tecnologia
- Links para "Ver Demo" e "Código" (GitHub)
- Inicialmente projetos placeholder para você preencher

### 5. Contato
- Ícones clicáveis: GitHub, LinkedIn, Email
- (Opcional) Formulário de contato simples

### 6. Footer
- Créditos simples: "© 2026 Sávio Quixaba"

---

## Estrutura de Arquivos

```
Portifolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── (favicon, imagens)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.module.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.module.css
    │   ├── Hero.jsx
    │   ├── Hero.module.css
    │   ├── About.jsx
    │   ├── About.module.css
    │   ├── Projects.jsx
    │   ├── Projects.module.css
    │   ├── Contact.jsx
    │   ├── Contact.module.css
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── styles/
        └── global.css
```

---

## Design System

### Cores
| Token         | Cor       | Uso                        |
|---------------|-----------|----------------------------|
| `--bg`        | `#0a0a0a` | Fundo da página            |
| `--bg-card`   | `#1a1a1a` | Cards e seções secundárias |
| `--text`      | `#e0e0e0` | Texto principal            |
| `--text-muted`| `#888`    | Texto secundário           |
| `--accent`    | `#00ff88` | Verde neon (destaques)     |
| `--accent-hover` | `#00cc6a` | Hover do accent          |
| `--border`    | `#2a2a2a` | Bordas e separadores       |

### Tipografia
- Fonte: sistema padrão (`system-ui, sans-serif`)
- Tamanhos: variáveis CSS para consistência

### Responsividade
- Desktop primeiro (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

### Animações
- Fade-in suave ao scrollar
- Hover sutil nos cards de projeto e links
- Navbar com backdrop-blur

---

## Informações que você precisa preencher

Depois que eu criar a estrutura, você vai precisar editar:
1. **Seu nome** no Hero e Footer
2. **Subtítulo** (ex: "Desenvolvedor Full Stack")
3. **Texto "Sobre"** com sua bio
4. **Foto** (colocar imagem em `public/`)
5. **Projetos** (substituir os placeholders)
6. **Links de contato** (GitHub, LinkedIn, email)

---

## Fluxo de Criação (Tarefas Detalhadas)

### Fase 1: Fundação ✅
- [x] 1.1. Instalar Node.js 22
- [x] 1.2. Criar projeto Vite + React
- [x] 1.3. Instalar dependências
- [x] 1.4. Verificar que `npm run dev` funciona
- [x] 1.5. Configurar Git e subir primeiro commit no GitHub

---

### ⚡ Primeira Passada: Esqueleto HTML/JSX (sem CSS)

Criar só a estrutura JSX de cada componente, sem estilização. O foco é montar o HTML do site.

### Fase 2: Estrutura
- [x] 2.1. Criar pasta `src/styles/` e `src/components/`

### Fase 3: JSX - Navbar
- [x] 3.1. Criar `Navbar.jsx` com links (Home, Sobre, Projetos, Contato)
- [x] 3.2. Integrar Navbar no `App.jsx`

### Fase 4: JSX - Hero
- [x] 4.1. Criar `Hero.jsx` com nome, subtítulo "Desenvolvedor Back-end Java", botão CTA
- [x] 4.2. Integrar Hero no `App.jsx`

### Fase 5: JSX - Sobre
- [x] 5.1. Criar `About.jsx` com foto placeholder, texto, ícones de tecnologias
- [x] 5.2. Integrar About no `App.jsx`

### Fase 6: JSX - Projetos
- [x] 6.1. Criar `Projects.jsx` com grid de 3 cards placeholder
- [x] 6.2. Cada card: imagem, título, descrição, tags, links
- [x] 6.3. Integrar Projects no `App.jsx`

### Fase 7: JSX - Contato
- [x] 7.1. Criar `Contact.jsx` com ícones GitHub, LinkedIn, Email
- [x] 7.2. Integrar Contact no `App.jsx`

### Fase 8: JSX - Footer
- [x] 8.1. Criar `Footer.jsx` com "© 2026 Sávio Quixaba"
- [x] 8.2. Integrar Footer no `App.jsx`

### Fase 9: Git
- [ ] 9.1. Commit: "feat: adiciona esqueleto JSX de todas as seções"

---

### 🎨 Segunda Passada: CSS + Estilização

Depois do esqueleto pronto, estilizar tudo.

### Fase 10: CSS Global
- [ ] 10.1. Criar `src/styles/global.css` com variáveis, reset, fundo escuro
- [ ] 10.2. Importar global.css no `main.jsx`

### Fase 11: CSS - Navbar
- [ ] 11.1. Criar `Navbar.module.css` (fixa, transparente, hamburger)
- [ ] 11.2. Scroll suave nos links e destaque ativo

### Fase 12: CSS - Hero
- [ ] 12.1. Criar `Hero.module.css` (nome grande, botão, animação fade-in)

### Fase 13: CSS - Sobre
- [ ] 13.1. Criar `About.module.css` (foto, texto, ícones)

### Fase 14: CSS - Projetos
- [ ] 14.1. Criar `Projects.module.css` (grid responsivo, cards com hover)

### Fase 15: CSS - Contato
- [ ] 15.1. Criar `Contact.module.css` (ícones centralizados)

### Fase 16: CSS - Footer
- [ ] 16.1. Criar `Footer.module.css`

### Fase 17: Finalização
- [ ] 17.1. Revisar responsividade mobile/tablet/desktop
- [ ] 17.2. Ajustar animações e detalhes finais
- [ ] 17.3. Testar completo com `npm run dev`
- [ ] 17.4. Commit final e tornar repositório público (opcional)

---

## Workflow de Git

A cada fase concluída, subo as alterações no GitHub:
1. `git add .`
2. `git commit -m "descrição do que foi feito"`
3. `git push`
