import React from "react";
import Image from "next/image";
import ser1 from "../../public/ser-1.png";
import ser2 from "../../public/ser-2.png";
import ser3 from "../../public/ser-3.png";
import ser4 from "../../public/ser-4.png";
import ser5 from "../../public/ser-5.png";
const services = () => {
  return (
    <section className="services container" id="services">
      <div className="heading flex flex-col items-center text-center mt-[2rem]">
        <h2 className="text-[2.2rem] font-bold">
          Blending colture, coffee & top <br /> noth services
        </h2>
      </div>

      <div className="service-content grid justify-between grid-cols-auto-fit-minmax">
        <div className="ser-box bg-mainColor flex flex-col items-center gap rounded-[2rem] gap-y-4 py-[35px] px-[20px]">
          <Image
            className="w-[100px] h-[100px] object-contain"
            src={ser1}
            alt=""
          />
          <p className=" text-containerCOlor">Equipment</p>
        </div>
        <div className="ser-box bg-mainColor flex flex-col items-center gap rounded-[2rem] gap-y-4 py-[35px] px-[20px]">
          <Image
            className="w-[100px] h-[100px] object-contain"
            src={ser2}
            alt=""
          />
          <p className=" text-containerCOlor">Type Of Coffee</p>
        </div>
        <div className="ser-box bg-mainColor flex flex-col items-center gap rounded-[2rem] gap-y-4 py-[35px] px-[20px]">
          <Image
            className="w-[100px] h-[100px] object-contain"
            src={ser3}
            alt=""
          />
          <p className=" text-containerCOlor">Take A Way</p>
        </div>
        <div className="ser-box bg-mainColor flex flex-col items-center gap rounded-[2rem] gap-y-4 py-[35px] px-[20px]">
          <Image
            className="w-[100px] h-[100px] object-contain"
            src={ser4}
            alt=""
          />
          <p className=" text-containerCOlor">Beans Varient</p>
        </div>
        <div className="ser-box bg-mainColor flex flex-col items-center gap rounded-[2rem] gap-y-4 py-[35px] px-[20px]">
          <Image
            className="w-[100px] h-[100px] object-contain"
            src={ser5}
            alt=""
          />
          <p className=" text-containerCOlor">Pastry</p>
        </div>
      </div>
    </section>
  );
};

export default services;
