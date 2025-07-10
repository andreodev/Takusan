import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomeView } from "./view/HomeView";
import AnimePage from "./view/AnimePage";
import { AnimatePresence } from "framer-motion";
import About from "./view/About";

export default function App() {

  const location = useLocation()
  return (
      <Layout>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeView />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </AnimatePresence>
      </Layout>
  );
}
