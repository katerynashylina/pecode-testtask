import { Navigate, Route, Routes } from "react-router-dom";
import { Episodes } from "./pages/Episodes/Episodes";
import { Characters } from "./pages/Characters/Characters";
import { Locations } from "./pages/Locations/Locations";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./pages/NotFoundPage/NotFound";
import "./App.scss"
import './styles/reset.scss';
import './styles/normalize.scss';

export const App = () => {
  return (
    <div className="page">
      <Navigation />
      <Routes>
        <Route path="/" element={<Episodes />} />
        <Route path="episodes" element={<Navigate to="/" replace />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
};
