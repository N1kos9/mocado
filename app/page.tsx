import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Products from "./components/products";
import Review from "./components/review";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Review />
    </>
  );
};

export default Home;
