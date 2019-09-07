import React from 'react';
import styled from 'styled-components';

const Sectionstyle = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(76, 175, 80, 0.3),
      rgba(76, 175, 80, 0.3)
    ),
    url('https://colorlib.com/preview/theme/supreme/img/banner_bg.png');
  background-size: cover;

  .real {
    font-size: 5rem;
  }

  .button {
    margin-top: 2rem;
  }
`;
const Header = () => (
  <Sectionstyle className="hero is-fullheight">
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://colorlib.com/preview/theme/supreme/img/logo.png"
                alt="Logo"
                width="112"
                height="28"
              />
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroC"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active has-text-danger">HOME</a>
              <a className="navbar-item has-text-light">ABOUT</a>
              <a className="navbar-item has-text-light">PROJECT</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-light">MORE</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item ">Blog</a>
                  <a className="navbar-item ">Single Blog</a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-light">BLOG</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item ">Service</a>
                  <a className="navbar-item ">projects Details</a>
                  <a className="navbar-item ">Elements</a>
                </div>
              </div>
              <a className="navbar-item has-text-light">CONTACT</a>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="is-size-4 has-text-weight-semibold has-text-light">
          Since
          <span className="has-text-danger"> 1990</span>
        </h1>
        <h2 className="real has-text-light has-text-weight-bold">
          Real solutions!
        </h2>
        <h3 className="is-size-2 has-text-light ">
          Manufacturing Relationships Distributing Quality
        </h3>
        <h4>
          <a className="button has-text-light is-outlined is-large is-danger is-rounded">
            Learn More
          </a>
        </h4>
      </div>
    </div>
  </Sectionstyle>
);

export default Header;
