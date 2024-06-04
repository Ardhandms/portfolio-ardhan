import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Kenalin!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aku Ardhan Dimas Nuryadin, seorang mahasiswa Jurusan Informatika
            Fakultas Teknik di Universitas Siliwangi, Tasikmalaya. Aku mempunyai
            ketertarikan dengan bidang Networking dan Cybersecurity
            <p className="mt-4 mb-4">Senang berkenalan dengan kalian!!</p>
            <p>-Ardhan-</p>
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              My Project
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Let's be friend
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
