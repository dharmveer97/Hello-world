import React from 'react';
import styled from 'styled-components';
const Hr = styled.hr`
  width: 10%;
  border: 1px solid red;
`;
const Section = styled.div`
  background-color: #191d34;
  height: 35rem;
`;

const Pagination = () => (
  <Section>
    <div className="container">
      <div className="all-text">
        <h1 className="text is-size-3 has-text-weight-bold has-text-light">
          Meet Experienced
        </h1>
        <h2 className="text is-size-3 has-text-weight-bold has-text-light">
          Professional
        </h2>
        <Hr />
      </div>
    </div>
  </Section>
);
export default Pagination;
