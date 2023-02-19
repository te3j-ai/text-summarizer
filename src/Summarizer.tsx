import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UserIcon from "@/assets/user.svg";
import Loader from "@/assets/loading-white.svg";
import "./index.css";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";

type Props = {};

const Summarizer = (props: Props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light", "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summarizedText, setSummarizedText] = useState("");
  const [isInputHidden, setIsInputHidden] = useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    summarize(input);
  };

  const summarize = async (data: any) => {
    setIsLoading(true);
    const response = await fetch("https://api-inference.huggingface.co/models/google/pegasus-cnn_dailymail", {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    let text = result[0].summary_text;
    text = text.split("<n>").join(" ");
    setIsLoading(false);
    setSummarizedText(text);
    setIsInputHidden(true);
  };

  const reset = () => {
    setInput("");
    setIsLoading(false);
    setSummarizedText("");
    setIsInputHidden(false);
  };

  return (
    <div className="summarizer" data-theme={theme}>
      <div className="">
        <Sidebar onClick={reset} switchTheme={switchTheme} theme={theme === "light" ? "dark" : "light"} />
      </div>
      <div className=" py-5 w-4/5 ml-auto min-h-screen">
        <div className="w-full">
          <div className="px-10">
            <Link to="/">
              <h1 className="font-semibold text-3xl">Te3j.△i</h1>
            </Link>
          </div>

          <div className="">
            {input.length > 0 && (
              <div className="my-10 w-3/5 mx-auto">
                <div className="flex gap-10 items-start my-10">
                  <img src={UserIcon} alt="user icon" className="my-1" />

                  <p className="text-base font-normal">{input}</p>
                </div>
              </div>
            )}
            {summarizedText.length > 0 && (
              <div className="bg-[#262A36] py-5">
                <div className="my-10 w-3/5 mx-auto ">
                  <div className="flex gap-10 items-start my-10">
                    <img src={UserIcon} alt="user icon" className="my-1" />

                    <p className="text-base text-white">{summarizedText}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {!isInputHidden && (
            <div className="bottom-0 fixed w-4/5">
              <form onSubmit={handleFormSubmit} className="flex justify-center relative">
                <textarea
                  rows={6}
                  placeholder="Enter the text you want to summarize"
                  className="px-6 py-3 w-4/5 bg-[#393D48] rounded-xl text-white placeholder-[rgba(244,244,244,0.6)]"
                  onChange={(e: any) => setInput(e.target?.value)}
                ></textarea>

                <div className="absolute right-36 bottom-2">
                  <button
                    className="bg-[#5114FF] text-white drop-shadow-xl shadow-xl w-[100px] py-1 rounded inline-flex justify-center"
                    type="submit"
                  >
                    {isLoading ? <img src={Loader} alt="loading" className="w-4 h-4" /> : "Summarize"}
                  </button>
                </div>
              </form>

              <div className="summarizer py-3" data-theme={theme}>
                <p className="text-xs text-center text-[#94A3B8]">
                  Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your
                  feedback will help us improve.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
