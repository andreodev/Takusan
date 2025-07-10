# Takusan

![Takusan Banner](https://i.pinimg.com/736x/3a/be/23/3abe232aa95b2bed06f5872123da746f.jpg)

Takusan é uma aplicação web para explorar animes, descobrir tendências e consultar informações detalhadas sobre suas obras favoritas. Este projeto foi desenvolvido como parte do meu portfólio de desenvolvedor front-end, com foco em UI/UX moderno, animações e integração com APIs GraphQL.

## Demonstração

![Demonstração Takusan](https://i.imgur.com/X4Ii4Zs.gif)

Acesse: [andreodev.com.br](https://andreodev.com.br)

## Funcionalidades

- Explorar animes em alta (tendências) na página inicial
- Top 100 animes mais bem avaliados, com paginação
- Busca rápida por título com sugestões instantâneas
- Páginas detalhadas de anime com informações, trailer, personagens, relações e gêneros
- Botão de favoritar (local, não persiste nem lista favoritos)
- Overlay de gêneros ao passar o mouse nos cards
- Skeletons animados durante o carregamento
- Layout responsivo para desktop, tablet e mobile
- Animações suaves com Framer Motion em cards, listas e header
- Navegação entre páginas (Home, Sobre, Detalhe do Anime) com React Router
- Links para o site oficial do anime (quando disponível)
- Header animado que esconde/mostra ao rolar a página

## Roadmap

- Sistema de reviews e notas dos usuários
- Filtros avançados por gênero, status e avaliação
- Suporte a múltiplos idiomas
- Notificações para lançamentos e atualizações
- App mobile nativo para iOS e Android
- Listagem real de animes favoritos

## Tecnologias Utilizadas

- ![React](https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg) React + Vite
- ![TailwindCSS](https://www.svgrepo.com/show/374118/tailwind.svg) TailwindCSS para estilização
- ![Framer Motion](https://cdn.worldvectorlogo.com/logos/framer-motion.svg) Framer Motion para animações
- ![GraphQL](https://icon.icepanel.io/Technology/svg/GraphQL.svg) API GraphQL do AniList

## Estrutura do Projeto

```
src/
  components/         # Componentes reutilizáveis (Header, Footer, Layout, Search)
  view/
    HomeView/         # Página inicial e cards de animes em alta/top 100
    AnimePage/        # Página de detalhes do anime
    About/            # Sobre o projeto
  services/           # Integração com API AniList
  index.css           # Estilos globais (Tailwind)
  main.jsx            # Entry point React
```

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

# Para build de produção
npm run build

# Para preview do build
npm run preview
```

Acesse http://localhost:5173 no navegador.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.

## Autor

Desenvolvido por [andreodev](https://andreodev.com.br) · [GitHub](https://github.com/andreodev)

## Licença

Este projeto é open source e está sob a licença MIT.
