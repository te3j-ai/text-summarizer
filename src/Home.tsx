import WtspImage from "@/assets/wtsp.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="container my-24">
        <h1 className="text-5xl text-center font-semibold ">
          Summarize any text with WTSP <br />
          <span> with the click of a button</span>
        </h1>
        <div className="flex justify-center my-10">
          <p className="text-center w-2/5">
            Code your own HTML form and style it, then point your form to form carry to get email notifications, upload
            files, block spam and integrate with other Homes.
          </p>
        </div>

        <div>
          <img src={WtspImage} alt="wtsp" />
        </div>
      </div>
    </div>
  );
};

export default Home;
