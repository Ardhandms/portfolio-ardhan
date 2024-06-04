import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

function Tentang() {
  return (
    <section id="tentang">
      <div className="container px-5 py-1 mx-auto text-center lg:px-40">
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
        </div>
      </div>
    </section>
  );
}

export default Tentang;
