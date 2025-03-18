import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      {" "}
      {}
      <Header /> {}
      <main>
        <AppRouter /> {}
      </main>
      <Footer /> {}
    </Router>
  );
};

export default App;
