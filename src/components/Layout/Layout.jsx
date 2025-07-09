import React from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx/index.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#222831] text-[#EEEEEE] text-font">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
