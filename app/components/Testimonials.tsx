"use client";
import React, { useState } from "react";

const data = [
  "Lnobis itaque sequi harum minima natus quam dignissimos. Vero exneque provident, ",
  " codolor quo,at aperiam nobis itaque sequi harum minima natus quam dignissimos. Vero exneque provident,, doloremque?",
  "Lorem ipsum dolor sit amet,,at aperiam nobis itaquam dignissimos. Vero exneque provident, ducimus fugit molestias. Eos, doloremque?",
  " ipsum dolor sit amt aperiam nobis itaissimos. Vero exneque provident, ducimus fugit molestias. Eos, doloremque?",
  " ipsum dolor sit amet, consectetur ",
  "dolor  amet, consectetur adipisicing elit. Quae dolor quo,at aperiam nobis itaque sequi harng elit. Quae dolor quo,at aperiam nobis itaque sequi harum minima natus quam dignissimos. Vero exemque?",
  "Lorem ipsum dolor sit amet,,at aperiam nobis itaquam dignissimos. Vero exneque provident, ducimus fugit molestias. Eos, doloremque?",
  " ipsum dolor sit amt aperiam nobis itaissimos. Vero exneque provident, ducimus fugit molestias. Eos, doloremque?",
  " ipsum dolor sit amet, consectetur ",
];
function Testimonials() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="container flex flex-col items-center justify-center gap-20 py-32 mx-auto bg-black dark:bg-blue-200 rounded-xl">
      <h1 className="text-4xl font-bold text-center text-black">
        Join the hundreds of studios creating <br /> 3D assets on-demand with
        Kaedim
      </h1>
      {counter}
      <div className="flex flex-row items-center h-44 gap-14">
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="w-10 h-10 text-lg font-bold text-gray-500 bg-gray-200 rounded-full"
        >
          {"<"}
        </button>
        <div className="w-[600px] h-full overflow-hidden">
          <div
            className={`relative flex h-full gap-2 translate-x-[calc(-${4}*600px)] transition-all duration-700`}
          >
            {data.map((data, index) => (
              <div
                className={`p-6 shrink-0 flex items-center justify-center w-full h-full bg-gray-50/70 backdrop-blur-sm rounded-xl transition-all ${
                  counter === index ? `z-10 ` : "z-0 bg-gray-900"
                }`}
                key={index}
              >
                <h1 className="text-xl font-semibold text-center text-black">
                  {data}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="w-10 h-10 text-lg font-bold text-gray-500 bg-gray-200 rounded-full"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
