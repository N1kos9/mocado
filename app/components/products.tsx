import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

import Image from "next/image";
import product1 from "../../public/product-1.png";
import product2 from "../../public/product-2.png";
import product3 from "../../public/product-3.png";
import product4 from "../../public/product-4.png";
import product5 from "../../public/product-5.png";
import product6 from "../../public/product-6.png";
const products = () => {
  return (
    <section className="products container" id="products">
      <div className="heading flex flex-col items-center text-center mt-[2rem]">
        <h2 className="text-[2.2rem]">Our top selling products</h2>
        <p className="max-w-[550px] w-full text-[0.9rem] font-poopins mt-4">
          It takes a lot of heart and hard work at every step to create the best
          coffee possible, and we know it takes a lot of grit to grind going.
        </p>
      </div>
      <div className="product-content  grid justify-between gap-[2rem] bg-[#e8d8cd] grid-cols-custom-3 rounded-[1.5rem] py-[40px] px-[60px]">
        <div className="product-box relative bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <Image
            src={product1}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2 className="text-[1.3rem] text-mainColor text-bold">
            Instant Coffee
          </h2>
          <div className="product-info">
            <span>$24</span>
          </div>
        </div>
        <div className="product-box bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <CiHeart className="heart-icon" />
          <Image
            src={product2}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2>Black Coffee</h2>
          <div className="product-info">
            <span>$14</span>
          </div>
        </div>
        <div className="product-box bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <CiHeart className="heart-icon" />
          <Image
            src={product3}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2>Latte</h2>
          <div className="product-info">
            <span>$14</span>
          </div>
        </div>
        <div className="product-box bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <CiHeart className="heart-icon" />
          <Image
            src={product4}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2>Cappuccino</h2>
          <div className="product-info">
            <span>$14</span>
          </div>
        </div>
        <div className="product-box bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <CiHeart className="heart-icon" />
          <Image
            src={product5}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2>Expresso</h2>
          <div className="product-info">
            <span>$24</span>
          </div>
        </div>
        <div className="product-box bg-[#fff8f7] p-[20px] rounded-[1.5rem] flex flex-col items-center">
          <CiHeart className="heart-icon" />
          <Image
            src={product6}
            alt=""
            className="w-[140px] h-[140px] rounded-[50%] object-cover mt-[1.5rem]"
          />
          <p className="text-[0.7rem] font-poopins py-1 px-2 border border-textAlterColor mt-4 mb-2 rounded-[1rem] bg-white ">
            4 types Available
          </p>
          <h2>Mocha</h2>
          <div className="product-info">
            <span>$24</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default products;
