import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomeView } from "./view/HomeView";
import AnimePage from "./view/AnimePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/anime/:id" element={<AnimePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
