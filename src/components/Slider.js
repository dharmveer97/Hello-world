import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2 className="is-size-1 has-text-weight-bold has-text-centered">Latest From Our</h2>
        <h2 className="is-size-1 has-text-weight-bold has-text-centered">Blog page</h2>
        <section className="section">
        <div className="container">
        <Slider {...settings}>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_1.png"/>
          </figure>
          </div>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_2.png"/>
          </figure>
          </div>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_3.png"/>
          </figure>
          </div>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_1.png"/>
          </figure>
          </div>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_2.png"/>
          </figure>
          </div>
          <div>
          <figure className="image is-pulled-left">
             <img src="https://colorlib.com/preview/theme/supreme/img/blog/blog_3.png"/>
          </figure>
          </div>
        </Slider>
        </div>
        </section>
      </div>
    );
  }
}