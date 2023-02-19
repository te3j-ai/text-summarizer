import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#5A498B]">
      <div className="container min-h-[200px]">
        <div className="flex justify-between py-10">
          <div>
            <h1 className="text-white text-2xl font-semibold">WTSP</h1>

            <div className="flex gap-5">
              <p>Examples</p>
              <p>About</p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold">Subscribe</p>
            <div className="flex gap-4 items-center">
              <input type="text" className="bg-white p-3 w-[300px] rounded-full" placeholder="enter your email" />
              <button className="rounded-full w-[100px] bg-[#161522] p-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
