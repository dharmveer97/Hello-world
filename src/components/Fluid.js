import React from 'react';
import styled from 'styled-components';
const CONTAINER = styled.div`
  background-color: #f7f7f7;
  .text-two {
    margin-top: 3rem;
  }
`;

const P = styled.p`
  line-height: 2rem;
`;
const Fluid = () => (
  <CONTAINER>
    <div className="columns">
      <div className="column">
        <figure className="image is-5by4">
          <img src="https://colorlib.com/preview/theme/supreme/img/faq.png" />
        </figure>
      </div>
      <div className="column">
        <div className="text">
          <h1 className="text is-size-3 has-text-weight-bold">
            Frequently Ask Question
          </h1>
        </div>

        <div>
          <h2 className="text-two is-size-5 has-text-weight-semibold">
            Can you explain knowledge of the digital filing system?
            <span>
              <i className="fas fa-minus-circle"></i>
            </span>
          </h2>
        </div>
        <div>
          <P className="text-two">
            Forth him herb stars forth over forth that them air isn't be shall
            fourth winged man firm life a fourth to fruitful a very the unto,
            creepeth wherein place the Forth him herb stars forth over forth
            that them air isn't be shall fourth winged man
          </P>
        </div>
        <hr />
        <div>
          <h3 className="text-two is-size-5 has-text-weight-semibold">
            How do you approach a multi-step problem?
            <span>
              <i className="fas fa-plus-circle"></i>
            </span>
          </h3>
        </div>
        <hr />
        <div>
          <h4 className="text-two is-size-5 has-text-weight-semibold">
            Can you explain knowledge of the digital filing system?
            <span>
              <i className="fas fa-plus-circle"></i>
            </span>
          </h4>
        </div>
      </div>
    </div>
  </CONTAINER>
);
export default Fluid;
