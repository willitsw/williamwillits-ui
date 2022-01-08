import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPage from "./pages/music/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<div>Under Construction</div>} />
        <Route path="*" element={<MusicPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
