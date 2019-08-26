import React from 'react';
import styled from "styled-components"
const Body=styled.div
`
.all-text{
    font-size: 3.125rem;
}
`;

const Hr = styled.hr`
    width: 10%;
    border: 1px solid red;
`;

const Banner = () => (
<Body>
  <section className="section">
    <div className="container">
      <h1 className="all-text has-text-weight-bold has-text-black">
        Our Industries 
      </h1>
      <h2 className="all-text has-text-weight-bold has-text-black">
        Served
      </h2>
      <Hr />                             ;
    </div>
  </section>
</Body>
);
export default Banner;