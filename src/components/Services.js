import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-image: url(https://colorlib.com/preview/theme/supreme/img/footer_overlay.png);
  a:hover {
    color: red;
  }
`;

const Input = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <a href="">
              <img src="https://colorlib.com/preview/theme/supreme/img/footer-logo.png" />
            </a>
            <p className="has-text-light">
              So seed seed green that winged cattle in Gahesd thing made fly
              you're no divided deep move lan Gathering thing us land years
              living on floor me the cavaty do buty fresh
            </p>
          </div>
          <div className="column has-text-light	">
            <h4 className="is-size-3">Best Services</h4>
            <ul>
              <li className="car">
                <a href="#" className="has-text-light">
                  Car accident
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  Personal injury
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  Family law
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  Bank and financial
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  Capital market
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  Employment Law
                </a>
              </li>
            </ul>
          </div>

          <div className="column has-text-light">
            <h5 className="is-size-3">our Gallery</h5>
            <figure className="image is-48x48">
              <img src="https://colorlib.com/preview/theme/supreme/img/footer_img/footer_img_1.png" />
            </figure>
          </div>
          <div className="column has-text-light">
            <h6 className="is-size-3">contact info</h6>
            <p>
              4361 Morningview Lane Artland , Pall Street Latimer, IA 50452 /
              23654
            </p>
            <ul>
              <li>
                <a href="#" className="has-text-light">
                  <i className="fas fa-mobile has-text-light" />
                  +02 - 32 365 2654
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  <i className="fas fa-envelope-square" />
                  ariclaw@law.com
                </a>
              </li>
              <li>
                <a href="#" className="has-text-light">
                  <i className="fas fa-globe" />
                  ariclawyerfirm.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Input;
