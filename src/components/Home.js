import React, { Component } from "react";
import "../css/templatemo-style.css";
import "../css/bootstrap.min.css";
import "../fontawesome/css/all.min.css";
import Img5 from "../img/img-01.jpg";
import Img6 from "../img/img-02.jpg";
import Img1 from "../img/img-03.jpg";
import Img2 from "../img/img-04.jpg";
import Img4 from "../img/img-06.jpg";
import Img7 from "../img/img-07.jpg";
import Img10 from "../img/img-10.jpg";
import Img11 from "../img/img-11.jpg";
import Hero from "../img/hero.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate=useNavigate()
    return (
      <>
        <Header></Header>
        <div
          class="tm-hero d-flex justify-content-center align-items-center"
          data-parallax="scroll"
          src={Hero}
        >
          <form class="d-flex tm-search-form">
            <input
              class="form-control tm-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success tm-search-btn" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div class="container-fluid tm-container-content tm-mt-60">
          <div class="row mb-4">
            <h2 class="col-6 tm-text-primary">Latest Photos</h2>
            <div class="col-6 d-flex justify-content-end align-items-center">
              <form action="" class="tm-text-primary">
                Page{" "}
                <input
                  type="text"
                  value="1"
                  size="1"
                  class="tm-input-paging tm-text-primary"
                />{" "}
                of 200
              </form>
            </div>
          </div>
          <div class="row tm-mb-90 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img1} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Clocks</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img2} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Plants</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">14 Oct 2020</span>
                <span>16,100 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img4} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>HeadSet</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">10 Oct 2020</span>
                <span>11,402 views</span>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img5} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Hangers</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">24 Sep 2020</span>
                <span>16,008 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img6} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Perfumes</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">20 Sep 2020</span>
                <span>12,860 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img7} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Bus</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">16 Sep 2020</span>
                <span>10,900 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img10} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Flowers</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">8 Sep 2020</span>
                <span>11,402 views</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
              <figure class="effect-ming tm-video-item">
                <img src={Img11} alt="Image" class="img-fluid" />
                <figcaption class="d-flex align-items-center justify-content-center">
                  <h2>Rosy</h2>
                  <a onClick={()=>navigate('ViewProduct')}>View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">4 Sep 2020</span>
                <span>32,906 views</span>
              </div>
            </div>
          </div>
          <div class="row tm-mb-90">
            <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
              <a
                href="javascript:void(0);"
                class="btn btn-primary tm-btn-prev mb-2 disabled"
              >
                Previous
              </a>
              <div class="tm-paging d-flex">
                <a href="javascript:void(0);" class="active tm-paging-link">
                  1
                </a>
                <a href="javascript:void(0);" class="tm-paging-link">
                  2
                </a>
                <a href="javascript:void(0);" class="tm-paging-link">
                  3
                </a>
                <a href="javascript:void(0);" class="tm-paging-link">
                  4
                </a>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary tm-btn-next">
                Next Page
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
}

export default Home;
