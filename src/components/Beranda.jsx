import React from "react";

function Beranda() {
  return (
    <section id="beranda">
      <div className="container mx-auto flex px-12 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, aku Ardhan Dimas Nuryadin.
          </h1>
          <p>Network Engineer and Cybersecurity Enthusiast.</p>
          <p>---------------------</p>
          <p>MTCNA</p>

          <div className="flex justify-center mt-8">
            <a
              href="#about"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Siapa Aku?
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full">
          <img
            src="../assets/images/Ardhan.jpg"
            width={360}
            height={360}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Beranda;
