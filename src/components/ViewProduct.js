import React, { Component } from 'react'
import Img5 from "../img/img-01-big.jpg";
import Img1 from "../img/img-01.jpg";
import Img2 from "../img/img-02.jpg";
import Img3 from "../img/img-03.jpg";
import Img4 from "../img/img-04.jpg";
import Img9 from "../img/img-06.jpg";
import Img6 from "../img/img-07.jpg";
import Img7 from "../img/img-10.jpg";
import Img8 from "../img/img-11.jpg";
import Hero from "../img/hero.jpg";
import Header from './Header';
import Footer from './Footer';
import "../css/Feedback.css";

export class ViewProduct extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <>
      <Header></Header>
      <div class="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="img/hero.jpg">
        <form class="d-flex tm-search-form">
            <input class="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success tm-search-btn" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">Photo title goes here</h2>
        </div>
        <div class="row tm-mb-90">            
            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src={Img5} alt="Image" class="img-fluid"/>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div class="tm-bg-gray tm-video-details">
                    <p class="mb-4">
                        Please support us by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a PayPal donation</a>.
                    </p>
                    <div id="feedback-form-wrapper">
  <div id="floating-icon">
    <button type="button" class="btn btn-primary btn-sm rounded-0" data-toggle="modal" data-target="#exampleModal">
      Feedback
    </button>

  </div>
  <div id="feedback-form-modal">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Feedback Form</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">How likely you would like to recommand us to your friends?</label>
                <div class="rating-input-wrapper d-flex justify-content-between mt-2">
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">1</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">2</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">3</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">4</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">5</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">6</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">7</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">8</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">9</span></label>
                  <label><input type="radio" name="rating" /><span class="border rounded px-3 py-2">10</span></label>
                </div>
                <div class="rating-labels d-flex justify-content-between mt-1">
                  <label>Very unlikely</label>
                  <label>Very likely</label>
                </div>
              </div>
              <div class="form-group">
                <label for="input-one">What made you leave us so early?</label>
                <input type="text" class="form-control" id="input-one" placeholder=""/>
              </div>
              <div class="form-group">
                <label for="input-two">Would you like to say something?</label>
                <textarea class="form-control" id="input-two" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>                   
                    <div class="mb-4 d-flex flex-wrap">
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Dimension: </span><span class="tm-text-primary">1920x1080</span>
                        </div>
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Format: </span><span class="tm-text-primary">JPG</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">License</h3>
                        <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                    </div>
                    <div>
                        <h3 class="tm-text-gray-dark mb-3">Tags</h3>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">
                Related Photos
            </h2>
        </div>
        <div class="row mb-3 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img1} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Hangers</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">16 Oct 2020</span>
                    <span>12,460 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img2} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Perfumes</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">12 Oct 2020</span>
                    <span>11,402 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img3} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">8 Oct 2020</span>
                    <span>9,906 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img4} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Plants</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">6 Oct 2020</span>
                    <span>16,100 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img5} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>HeadSet</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">26 Sep 2020</span>
                    <span>16,008 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img6} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Bus</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">22 Sep 2020</span>
                    <span>12,860 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img7} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Flowers</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">12 Sep 2020</span>
                    <span>10,900 views</span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={Img8} alt="Image" class="img-fluid"/>
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>Rose</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">4 Sep 2020</span>
                    <span>11,300 views</span>
                </div>
            </div>        
        </div>
    </div> 
        <Footer></Footer>
      </>
    )
  }
}

export default ViewProduct