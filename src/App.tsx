import WtspImage from "@/assets/wtsp.png";
import Footer from "./footer";
import Home from "./Home";
import Summarizer from "@/Summarizer";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      {/* <Home /> */}
      <Summarizer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
