import React from 'react';
import styled from 'styled-components';
const Hr = styled.hr`
  width: 20%;
  border: 1px solid red;
`;
const Cardcontent = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by5">
        <img src={props.img} alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-5">{props.title}</p>
        </div>
      </div>
      <Hr />

      <div className="content is-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </div>
    </div>
  </div>
);
export default Cardcontent;
