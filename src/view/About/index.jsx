import { motion } from "framer-motion";
import { ExternalLink, Github, Users } from "lucide-react";

export default function About() {

    const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value.trim();
    if (searchQuery) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery);
      // Redirect to search results page or filter current animes
    }
    event.target.reset(); // Clear the input after submission
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-6 text-white "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="about-title"
    >
      <h1
        id="about-title"
        className="text-4xl font-extrabold mb-6 tracking-tight title-font flex items-center gap-4"
      >
        Sobre o Takusan
       <img src="https://i.pinimg.com/736x/3a/be/23/3abe232aa95b2bed06f5872123da746f.jpg" alt="Logo Takusan" className="h-12 w-auto" /> 
      </h1>

      <p className="mb-6 text-lg leading-relaxed text-zinc-300 flex flex-col md:flex-row md:items-center gap-4">
        <span>
          O <span className="text-blue-400 font-semibold">Takusan</span> é uma aplicação web para explorar animes, descobrir tendências e consultar informações detalhadas sobre suas obras favoritas.
        </span>
        <img src="https://i.imgur.com/X4Ii4Zs.gif" alt="Demonstração Takusan" className="rounded shadow-lg max-w-xs" /> 
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-12">Sobre este Projeto</h2>
      <p className="mb-6 text-zinc-300 leading-relaxed">
        O <span className="text-blue-400 font-semibold">Takusan</span> é um projeto pessoal desenvolvido para compor meu portfólio como desenvolvedor front-end. O objetivo é demonstrar domínio em React, animações modernas, integração com APIs GraphQL e boas práticas de UI/UX, além de proporcionar uma experiência agradável para fãs de anime.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-12">Missão e Visão</h2>
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-zinc-300 leading-relaxed flex-1">
          Nossa missão é conectar fãs de anime com uma plataforma simples, rápida e intuitiva para que possam descobrir, acompanhar e se apaixonar ainda mais por suas séries favoritas. 
          A visão é ser referência nacional e internacional em exploração e pesquisa de animes, promovendo uma comunidade ativa e engajada.
        </p>
        <img src="https://i.pinimg.com/736x/a1/f8/c7/a1f8c77dce1d6ed6569a7a4769e4472a.jpg" alt="Comunidade Anime" className="rounded shadow max-w-xs" /> 
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-12">Por que criamos o Takusan?</h2>
      <p className="mb-6 text-zinc-300 leading-relaxed">
        Percebemos que muitas plataformas existentes eram complexas, lentas ou não ofereciam informações detalhadas de forma acessível. 
        Pensando nisso, desenvolvemos o Takusan para reunir o essencial com uma interface moderna e responsiva, utilizando tecnologias atuais e a poderosa API do AniList.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-12 flex items-center gap-2">
        Funcionalidades Atuais
        <img src="https://i.imgur.com/XpLaB4P.gif" alt="Funcionalidades Takusan" className="h-8 w-auto" />
      </h2>
      <ul className="mb-8 list-disc list-inside text-zinc-400 space-y-2">
        {/* Exemplo: <li className="flex items-center gap-2"><img src="/assets/feature1.png" alt="" className="h-5 w-5" />Explorar animes em alta...</li> */}
        <li>Explorar animes em alta (tendências) na página inicial.</li>
        <li>Top 100 animes mais bem avaliados, com paginação.</li>
        <li>Busca rápida por título com sugestões instantâneas no cabeçalho.</li>
        <li>Páginas detalhadas de anime com informações, trailer, personagens, relações e gêneros.</li>
        <li>Botão de favoritar (local, não persiste nem lista favoritos).</li>
        <li>Overlay de gêneros ao passar o mouse nos cards.</li>
        <li>Skeletons animados durante o carregamento.</li>
        <li>Layout responsivo para desktop, tablet e mobile.</li>
        <li>Animações suaves com Framer Motion em cards, listas e header.</li>
        <li>Navegação entre páginas (Home, Sobre, Detalhe do Anime) com React Router.</li>
        <li>Links para o site oficial do anime (quando disponível).</li>
        <li>Header animado que esconde/mostra ao rolar a página.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-12 flex items-center gap-2">
        Roadmap
        <img src="https://i.pinimg.com/736x/30/79/27/3079277290da72f1c36fad89957c8a9d.jpg" alt="Roadmap" className="h-7 w-auto" /> 
      </h2>
      <ul className="mb-8 list-disc list-inside text-zinc-400 space-y-2">
        <li>Implementar sistema de reviews e notas dos usuários.</li>
        <li>Adicionar filtros avançados por gênero, status e avaliação.</li>
        <li>Suporte a múltiplos idiomas, começando pelo inglês.</li>
        <li>Integração com notificações para lançamentos e atualizações.</li>
        <li>Desenvolver app mobile nativo para iOS e Android.</li>
        <li>Listagem real de animes favoritos.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-12 flex items-center gap-2">
        Tecnologias Utilizadas
        <img src="https://i.imgur.com/f9br4j9.gif" alt="Tecnologias" className="h-7 w-auto" />
      </h2>
      <ul className="mb-8 list-disc list-inside text-zinc-400 space-y-2 flex flex-wrap gap-4">
        <li className="flex items-center gap-2"><img src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" alt="React" className="h-6 w-6" />React + Vite</li>
        <li className="flex items-center gap-2"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="TailwindCSS" className="h-6 w-6" />TailwindCSS para estilização</li>
        <li className="flex items-center gap-2"><img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="Framer Motion" className="h-6 w-6" />Framer Motion para animações</li>
        <li className="flex items-center gap-2"><img src="https://icon.icepanel.io/Technology/svg/GraphQL.svg" alt="GraphQL" className="h-6 w-6" />API GraphQL do AniList</li>
      </ul>

      <p className="text-zinc-400 leading-relaxed">
        Projeto desenvolvido por{" "}
        <a
          href="https://andreodev.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          andreodev <ExternalLink size={14} />
        </a>
        .<br />
        Código aberto disponível no{" "}
        <a
          href="https://github.com/andreodev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          GitHub <Github size={14} />
        </a>
        .
      </p>
    </motion.div>
  );
}
