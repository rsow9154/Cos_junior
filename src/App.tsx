import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barab from "./components/barab";

import Keur from "./pages/keur";
import Liggey from "./pages/liggey";
import Xamxam from "./pages/xamxam";
import Nit from "./pages/nit";
import Jokkondiral from "./pages/jokkondiral";

function App() {
  return (
    <Router>
      <Barab />
      <Routes>
        <Route path="/" element={<Keur />} />
        <Route path="/projets" element={<Liggey />} />
        <Route path="/competences" element={<Xamxam />} />
        <Route path="/apropos" element={<Nit />} />
        <Route path="/contact" element={<Jokkondiral />} />
      </Routes>
    </Router>
  );
}

export default App;