import React from 'react';
import styled from "styled-components"
const Wraperr=styled.div
`
background-color: #f7f7f7;
.container{
  margin-top: 2rem;
  
}
.text-one{
  margin-top: 2rem;
}
.button{
  margin-top: 2rem;
}
.all-text{
  margin-top: 5rem;
}
.txt-one{
  font-size: 1.875rem;
}
`;
const Tabs = () => (
 <Wraperr>
 <div className="container">
   <div className="columns">
  <div className="column">
  <figure className="image is-square ">
          <img
            className="is-rounded"
            src="https://colorlib.com/preview/theme/supreme/img/about_img_1.png"
            alt="down"
          />
        </figure>
  </div>
  <div className="column">
  <section className="">
     <div className="all-text">
    
      <h1 className="txt-one has-text-weight-bold">
        We Are Committed 
      </h1>
      <h2 className="txt-one has-text-weight-bold">
       To Customer Satisfaction
      </h2>
      <h3 className="has-text-danger text-one">
      Their be void upon image lights you fifth seed wherein for very mud
      the winged his days fruitful. Stars fruit fourth.
      </h3>
      <div>
      <p className="text-one">
      Fifth darkness lights after sixth first Firmament morning and the Green saying greatn
      forth behold open said First she'd saying have any question availbla now their void
      upon image lights. You fifth seed for very the
      </p>
      <h4>
        <a className="button  is-outlined is-large is-danger is-rounded is-uppercase">read more</a>
      </h4>
      </div>
    </div>
   </section>
  </div>
 </div>
</div>
 </Wraperr>
 );
export default Tabs;