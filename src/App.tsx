import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusicPage from "./pages/music/index";
import PortfolioPage from "./pages/portolio";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MusicPage />,
    },
    {
      path: "/portfolio",
      element: <PortfolioPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
