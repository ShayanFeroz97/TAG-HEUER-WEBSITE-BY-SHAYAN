import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Section from "./Section";
import Slider from "./Slider";
import History from "./History";
import Cards from "./Cards";
import Footer from "./Footer";
import Video from "./Video";
import Featured from "./Featured";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import axios from "axios";
import ProductIn from "./pages/Product/ProductIn";
import Cart from "./Cart";


function App() {


  const [myData, setMyData] = useState(null);

  // useEffect(() => {
  //   axios
  //   .get(`https://fakestoreapi.com/products`)
  //   .then((res) => {
  //     console.log(res);
  //     setMyData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  function Home() {
    return (
      <>
        <Video />
        <Section />
        <Cards />
        <Slider />
        <History />
        <Featured />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home()} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product myData={myData} />} />
        <Route exact path="/ProductIn" element={<ProductIn  myData={myData} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Cart" element={<Cart myData={myData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
