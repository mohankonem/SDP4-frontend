import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function PageNotFound() {
  return (
    <>
      <Header></Header>
      <div
        class="tm-hero d-flex justify-content-center align-items-center"
        data-parallax="scroll"
        data-image-src="img/hero.jpg"
      >
        PageNotFound
      </div>
      <Footer></Footer>
    </>
  );
}

export default PageNotFound;
