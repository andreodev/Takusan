import { Github, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1d24] border-t border-zinc-800 mt-16 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[#CCCCCC] text-sm">
        {/* Texto */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://andreodev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline transition"
          >
            Takusan
          </a>{" "}
          • Todos os direitos reservados.
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-4">
          <a
            href="https://andreodev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="Portfólio"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://github.com/andreodev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
