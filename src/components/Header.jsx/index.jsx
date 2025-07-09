import React from "react";
import { AnimeSearch } from "../Search";

export default function Header() {
  return (
    <header className="bg-[#31363F] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold title-font">Anidreo</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">Sobre</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contato</a></li>
          </ul>
          <AnimeSearch />
        </nav>
      </div>
    </header>
  );
}
