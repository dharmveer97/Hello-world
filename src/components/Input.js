import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  .container {
    background-image: url(https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
  }
`;
const Input = () => (
  <Wrapper>
    <div className="container">
      <section className="section">
        <div className="">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title has-text-light is-size-2">
                  Contact us now!
                </h1>
                <h2 className="subtitle has-text-light is-size-6 has-text-weight-semibold">
                  Contact (+12) 345-678-9999 to book directly or for advice
                </h2>
              </div>
              <div className="column">
                <a className="button is-primary is-outlined button is-large is-pulled-right">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default Input;
