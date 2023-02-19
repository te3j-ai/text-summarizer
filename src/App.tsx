import WtspImage from "@/assets/wtsp.png";
import Footer from "./footer";
import Home from "./Home";
import Summarizer from "@/Summarizer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/summarizer",
    element: <Summarizer />,
  },
]);

const App = (props: Props) => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
