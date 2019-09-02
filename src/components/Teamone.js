import React from 'react';
import styled from "styled-components"
const Wrapper=styled.div`
.card {
  transition:background-color 0.5s;
:hover {
  background-color: #fe5c24;
}
}
`;

const Teamone = (props) => (
<Wrapper> 
<div className="card">
  <div className="card-image">
    <figure className="image is-4by5">
      <img src={props.img} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
      <p className="title is-5 has-text-centered">{props.title}</p>
      <p className="content is-1 has-text-centered"> System Engineer</p>
      </div>
    </div>
    <div className="social-icons has-text-centered">
       <span className="icon ">
       <i className="fab fa-facebook"></i>
       </span>
       <span className="icon ">
       <i className="fab fa-twitter"></i>
       </span>
       <span className="icon ">
       <i className="fab fa-skype"></i>
       </span>
       <span className="icon ">
       <i className="fab fa-instagram"></i>
       </span>
      </div>
  </div>
</div>
</Wrapper>
);
export default Teamone;