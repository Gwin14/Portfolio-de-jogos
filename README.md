# 🎮 Portfólio de Jogos

Um portfólio interativo e moderno para exibir jogos desenvolvidos, com animações fluidas, cursor customizado e integração com GitHub e itch.io.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=flat&logo=greensock)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF0055?style=flat&logo=framer)

## ✨ Características

- 🎯 **Cursor Customizado**: Cursor interativo em formato de mira que reage aos elementos da página
- 🌊 **Grid Dinâmico**: Fundo animado com pontos que respondem aos movimentos do mouse
- 📱 **Responsivo**: Design adaptável para dispositivos móveis e desktop
- 🚀 **Animações Suaves**: Transições fluidas entre páginas usando Framer Motion
- 📝 **Renderização de Markdown**: Exibição automática de READMEs dos repositórios
- 🔗 **Integração GitHub**: Busca automática de informações dos repositórios
- 🎨 **SEO Otimizado**: Meta tags dinâmicas para cada jogo

## 🛠️ Tecnologias

- **React 19** - Biblioteca para construção da interface
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento de páginas
- **GSAP** - Animações de alta performance
- **Framer Motion** - Animações declarativas para React
- **React Markdown** - Renderização de arquivos Markdown
- **React Helmet Async** - Gerenciamento de meta tags

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfoliojogos.git

# Entre na pasta do projeto
cd portfoliojogos

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
portfoliojogos/
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes reutilizáveis
│   │   ├── DotGrid.jsx      # Grid animado de fundo
│   │   ├── GameCard.jsx     # Card de apresentação do jogo
│   │   ├── GithubButton.jsx # Botão para repositório GitHub
│   │   ├── SocialLinks.jsx  # Links das redes sociais
│   │   └── TargetCursor.jsx # Cursor customizado
│   ├── screens/          # Páginas da aplicação
│   │   └── GameScreen.jsx   # Página de detalhes do jogo
│   ├── services/         # Serviços e integrações
│   │   └── githubServices.js # API do GitHub
│   ├── App.jsx           # Componente principal
│   ├── games.json        # Dados dos jogos
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos públicos
└── index.html           # HTML principal
```

## 🎮 Adicionando Novos Jogos

Para adicionar um novo jogo ao portfólio, edite o arquivo `src/games.json`:

```json
{
  "name": "Nome do Jogo",
  "image": "URL_da_imagem",
  "repo": "https://github.com/usuario/repositorio",
  "releases": "https://api.github.com/repos/usuario/repositorio/releases",
  "readme": "https://raw.githubusercontent.com/usuario/repositorio/main/README.md",
  "widget": "<iframe>...</iframe>"
}
```

### Campos Obrigatórios:

- **name**: Nome do jogo
- **image**: URL da imagem de capa
- **repo**: Link do repositório no GitHub
- **releases**: Endpoint da API para releases
- **readme**: URL do README.md do repositório
- **widget**: Widget de incorporação do itch.io (opcional)

## 🎨 Componentes Principais

### DotGrid
Grid animado de pontos no fundo que reage ao movimento do mouse e cliques.

**Props:**
- `dotSize`: Tamanho dos pontos (padrão: 2)
- `gap`: Espaçamento entre pontos (padrão: 15)
- `baseColor`: Cor base dos pontos (padrão: "#5227FF")
- `activeColor`: Cor quando próximo ao cursor (padrão: "#5227FF")
- `proximity`: Raio de ativação (padrão: 120)
- `shockRadius`: Raio do efeito de click (padrão: 250)

### TargetCursor
Cursor customizado em formato de mira que interage com elementos marcados.

**Props:**
- `targetSelector`: Seletor CSS dos elementos-alvo (padrão: ".cursor-target")
- `spinDuration`: Duração da rotação em segundos (padrão: 2)
- `hideDefaultCursor`: Ocultar cursor padrão (padrão: true)

**Uso:**
Adicione a classe `cursor-target` a qualquer elemento que deve interagir com o cursor:

```jsx
<button className="cursor-target">Clique aqui</button>
```

### GameCard
Card clicável que exibe informações básicas do jogo.

**Props:**
- `game`: Objeto com dados do jogo (name, image, description)

## 🔌 Integrações

### GitHub API
O projeto utiliza a API do GitHub para buscar informações dos repositórios:

```javascript
// Buscar README
const readme = await getReadme(repoUrl);

// Buscar releases
const releases = await getReleases(repoUrl);
```

### itch.io
Suporta incorporação de widgets do itch.io para permitir downloads diretos dos jogos.

## 🎯 SEO e Meta Tags

Cada página de jogo possui meta tags dinâmicas configuradas com React Helmet:

- Título personalizado
- Descrição do jogo
- Open Graph tags para redes sociais
- Favicon dinâmico baseado na imagem do jogo

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:

- **Desktop**: Layout com grid de cards
- **Mobile** (< 768px): Layout em coluna única
- Cursor customizado desabilitado em dispositivos móveis

## 🎨 Customização

### Cores
As cores principais podem ser alteradas nos arquivos CSS de cada componente.

### Animações
Ajuste as animações modificando os parâmetros do GSAP e Framer Motion nos componentes.

### Fontes
A fonte principal é **Pixelify Sans**, importada do Google Fonts no `App.css`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Fábio Santos**

- GitHub: [@Gwin14](https://github.com/Gwin14)
- LinkedIn: [Fábio Santos](https://www.linkedin.com/in/fabio-santos14/)
- itch.io: [gwin-14](https://gwin-14.itch.io/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## ⭐ Mostre seu Apoio

Se este projeto foi útil para você, considere dar uma ⭐!

---

Feito com ❤️ e ☕ por [Fábio Santos](https://github.com/Gwin14)