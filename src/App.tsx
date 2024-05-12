import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss"
import './styles/reset.scss';
import './styles/normalize.scss';
import { Episodes } from "./pages/Episodes/Episodes";
import { Characters } from "./pages/Characters/Characters";
import { Locations } from "./pages/Locations/Locations";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div className="page">
      <Navigation />
      <Routes>
        <Route path="/" element={<Episodes />} />
        <Route path="episodes" element={<Navigate to="/" replace />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </div>
  )
};
