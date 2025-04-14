import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Logement />} /> {/* Route dynamique */}

      </Route>
    </Routes>
  );
}

export default AppRouter;
