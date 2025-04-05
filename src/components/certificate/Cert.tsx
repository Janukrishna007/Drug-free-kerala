"use client";
import * as React from "react";
import CertImage from "./CertImage";

function Cert() {
  return (
    <section className="overflow-hidden mx-auto my-0 h-[1080px] w-[1080px] max-md:w-full max-md:h-[100vw]">
      <article className="flex flex-col justify-between items-center px-10 py-16 bg-white size-full max-md:max-w-full">
        <header>
          <h1 className="text-6xl font-bold leading-tight text-center text-green-400 max-md:max-w-full">
            Congratulations on Your Pledge!
          </h1>
          <p className="mt-1 text-2xl font-medium text-center text-black max-md:max-w-full">
            Thank you for joining the Drug Free Kerala movement.
          </p>
        </header>

        <CertImage />
      </article>
    </section>
  );
}

export default Cert;