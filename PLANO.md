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

### Fase 2: Estrutura e Estilos
- [x] 2.1. Criar pasta `src/styles/` e `src/components/`
- [ ] 2.2. Criar `src/styles/global.css` com variáveis CSS (cores, fontes)
- [ ] 2.3. Adicionar reset CSS básico no global.css
- [ ] 2.4. Adicionar estilos de scroll suave e fundo escuro

### Fase 3: Navbar
- [ ] 3.1. Criar componente `Navbar.jsx` (estrutura HTML)
- [ ] 3.2. Criar `Navbar.module.css` (posicionamento fixo, fundo semi-transparente)
- [ ] 3.3. Implementar links de navegação (Home, Sobre, Projetos, Contato)
- [ ] 3.4. Implementar scroll suave ao clicar nos links
- [ ] 3.5. Destacar link ativo conforme a seção visível
- [ ] 3.6. Criar menu hamburger para mobile
- [ ] 3.7. Integrar Navbar no `App.jsx`

### Fase 4: Hero (Home)
- [ ] 4.1. Criar componente `Hero.jsx` (estrutura)
- [ ] 4.2. Criar `Hero.module.css` (nome grande, subtítulo, botão)
- [ ] 4.3. Adicionar animação de entrada (fade-in)
- [ ] 4.4. Botão CTA "Ver Projetos" com scroll
- [ ] 4.5. Integrar Hero no `App.jsx`

### Fase 5: Sobre
- [ ] 5.1. Criar componente `About.jsx`
- [ ] 5.2. Criar `About.module.css`
- [ ] 5.3. Adicionar placeholder para foto (círculo)
- [ ] 5.4. Adicionar texto descritivo placeholder
- [ ] 5.5. Adicionar ícones de tecnologias
- [ ] 5.6. Integrar About no `App.jsx`

### Fase 6: Projetos
- [ ] 6.1. Criar componente `Projects.jsx`
- [ ] 6.2. Criar `Projects.module.css`
- [ ] 6.3. Criar grid de cards responsivo (3 colunas → 1)
- [ ] 6.4. Adicionar 3 projetos placeholder com imagem, título e descrição
- [ ] 6.5. Adicionar tags de tecnologia nos cards
- [ ] 6.6. Adicionar links "Código" e "Demo" (placeholder)
- [ ] 6.7. Integrar Projects no `App.jsx`

### Fase 7: Contato
- [ ] 7.1. Criar componente `Contact.jsx`
- [ ] 7.2. Criar `Contact.module.css`
- [ ] 7.3. Adicionar ícones de GitHub, LinkedIn, Email
- [ ] 7.4. Adicionar links para suas redes (placeholder)
- [ ] 7.5. Integrar Contact no `App.jsx`

### Fase 8: Footer
- [ ] 8.1. Criar componente `Footer.jsx`
- [ ] 8.2. Criar `Footer.module.css`
- [ ] 8.3. Adicionar copyright com nome placeholder
- [ ] 8.4. Integrar Footer no `App.jsx`

### Fase 9: Finalização
- [ ] 9.1. Revisar responsividade em mobile/tablet/desktop
- [ ] 9.2. Ajustar animações e detalhes finais
- [ ] 9.3. Testar completo com `npm run dev`

---

## Workflow de Git

A cada fase concluída, vou subir as alterações no GitHub:
1. `git add .`
2. `git commit -m "descrição do que foi feito"`
3. `git push`

A Fase 1 já foi concluída, então podemos iniciar o repositório e subir como primeiro commit. Depois disso, cada fase nova vira um commit separado.
