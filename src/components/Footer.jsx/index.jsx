import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#222831] border-t mt-8 py-4">
      <div className="container mx-auto px-4 text-center title-font text-sm text-[#EEEEEE]">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://andreodev.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Anidreo
        </a>
        . Todos os direitos reservados.
      </div>
    </footer>
  );
}
