import React from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../../public/hero.png";
const hero = () => {
  return (
    <section
      className="home container min-h-screen justify-center grid grid-cols-2 items-center gap-6"
      id="home"
    >
      <div className="home-text">
        <h1 className="text-[3.5rem] bold text-mainColor">
          Enjoy a new blend <br /> of coffee beans
        </h1>
        <p className="max-w-[300px] text-[0.94rem] font-poopins mt-4 mb-6">
          Brew or order a Perfect Coffee based on your mood anywhere Anytime
        </p>
        <Link
          href=""
          className="btn max-w-[160px] p-4 flex items-center justify-center gap-x-2 rounded-[2rem] bg-textColor"
        >
          <span className="font-poppins text-bgColor uppercase">Shop Now</span>
          <i className="bx bx-up-arrow-alt">
            <FaArrowUp className="bg-secondColor text-[20px] text-bgColor p-1 rounded-full" />
          </i>
        </Link>
      </div>
      <Image alt="hero" className="max-w-[560px] w-full" src={heroImg} />
    </section>
  );
};

export default hero;
