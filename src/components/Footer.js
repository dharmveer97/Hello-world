import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
.main {
  background-color: #0e2737;
  margin-top: 3rem;
}
.search {
  margin-top: 2rem;
}
.icon-text {
  margin-left: 1rem;
}
`;
const Footer = () => (
  <Wrapper>
  <div className="main">
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src="https://colorlib.com/preview/theme/supreme/img/footer-logo.png" />

            <h2 className="subtitle is-size-4 has-text-primary has-text-weight-semibold">
              +12 345-678-9999
            </h2>
            <p className="subtitle is-size-6 has-text-light">
              Info.colorlib@gmail.com
            </p>
            <p className="subtitle is-size-6 has-text-light">
              856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa
            </p>
          </div>

          <div className="column">
            <h2 className="title is-size-4 has-text-weight-semibold has-text-light">
              Our Blog
            </h2>
            <a href="trick" className="post-title">
              <p className="subtitle is-size-6 has-text-light">
                Freelance Design Tricks How
              </p>
            </a>
            <p className="subtitle is-size-6 has-text-light">
              {" "}
              <i className="far fa-clock" />
              Jan 02, 2019{" "}
            </p>

            <a href="trick" className="post-title">
              <p className="subtitle is-size-6 has-text-light">
                Free Advertising For Your Online
              </p>
            </a>
            <p className="subtitle is-size-6 has-text-light">
              {" "}
              <i className="far fa-clock" />
              Jan 02, 2019{" "}
            </p>
          </div>

          <div className="column">
            <h2 className="subtitle is-size-4 has-text-primary has-text-weight-semibold">
              Links
            </h2>
            <ul>
              <a href="link" className="link-one has-text-light">
                <span className="icon has-text-light">
                  <i className="fas fa-chevron-right" />
                </span>
                About us
              </a>
            </ul>
            <ul>
              <a href="link" className="link-one has-text-light">
                <span className="icon has-text-light">
                  <i className="fas fa-chevron-right" />
                </span>
                Our Room
              </a>
            </ul>
            <ul>
              <a href="link" className="link-one has-text-light">
                <span className="icon has-text-light">
                  <i className="fas fa-chevron-right" />
                </span>
                Career
              </a>
            </ul>
            <ul>
              <a href="link" className="link-one has-text-light">
                <span className="icon has-text-light">
                  <i className="fas fa-chevron-right" />
                </span>
                FAQs
              </a>
            </ul>
          </div>

          <div className="column">
            <h2 className="title is-size-4 has-text-weight-semibold has-text-light">
              Subscribe Newsletter
            </h2>

            <div className="text-two">
              <p className="subtitle is-size-6 has-text-light">
                Subscribe our newsletter gor get notification about new updates.
              </p>
            </div>

            <div className="search">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium is-rounded"
                  type="email"
                  placeholder="Enter your email..."
                />
                <span className="icon is-right">
                  <i className="far fa-paper-plane" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p className="left-text has-text-left">
                  <strong>Copyright ©</strong>2019
                  <i className="far fa-heart" />
                  by
                  <a href="https://uuuu0.sse.codesandbox.io/">Dharmveer</a>.
                </p>
              </div>

              <div className="column has-text-right">
                <div className="social-info ">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f icon-text" />
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter icon-text" />
                  </a>

                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram icon-text" />
                  </a>

                  <a href="https://in.linkedin.com/ ">
                    <i className="fab fa-linkedin-in icon-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
  </Wrapper>
);

export default Footer;
