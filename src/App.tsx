import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPage from "./pages/music/index";
import PortfolioPage from "./pages/portolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<MusicPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
