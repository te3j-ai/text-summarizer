import WtspImage from "@/assets/wtsp.png";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="flex py-4 px-10">
        <h1 className="text-white text-2xl font-semibold">Te3j.⟁i</h1>
      </div>

      <div className="container">
        <h1 className="text-5xl text-center font-semibold mt-[100px]">
          Summarize any text with Te3j.⟁i <br />
          <span> with the click of a button</span>
        </h1>
        <div className="flex flex-col items-center justify-center my-10">
          <p className="text-center w-3/5">
            Te3j.ai is an innovative tool that allows you to easily summarize any text with just a click of a button.
            With its advanced natural language processing algorithms, Te3j.ai can quickly identify and extract the most
            important information from any document, article, or webpage. Whether you're a student, researcher, or busy
            professional, Te3j.ai can help you save time and effort by providing concise and accurate summaries in
            seconds. Give Te3j.ai a try and experience the power of automated text summarization today!
          </p>
          <div className="my-6">
            <Link to="/summarizer">
              <button className="w-[200px] inline-flex items-center justify-center gap-3 bg-white text-[#393D48] font-semibold py-2 rounded-lg text-lg">
                Try it Out <span className="text-3xl">😉</span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src={WtspImage} alt="wtsp" />
        </div>
      </div>
    </div>
  );
};

export default Home;
