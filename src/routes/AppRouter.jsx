import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import ErrorPage from "../pages/errorPage";
import Logement from "../pages/logement";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} /> {/* Route dynamique */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
