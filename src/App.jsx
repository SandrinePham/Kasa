import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/layout/footer";
import "./App.scss";
import Banner from "./components/forms/banner";

const App = () => {
  return (
    <Router> {/* Garder un seul BrowserRouter ici */}
      <Banner /> {/* Navigation toujours visible */}
      <main>
        <AppRouter /> {/* Routes importées */}
      </main>
      <Footer /> {/* Footer toujours visible */}
    </Router>
  );
};

export default App;
