import React from 'react';
import styled from "styled-components"
const WRAPPER=styled.div`
.card{
  margin-top: 2rem;
}
.box{
  margin-top: 2rem;
  background-color: #191d34;
}

`;
const HR=styled.div`
width: 20%;
border: 1px solid red;
`;

const Features = () => (
<WRAPPER>
  <section className="section">   
    <div className="container">
     <div className="columns">
        <div className="column">
          <div>
            <h1 className="text is-size-2 has-text-weight-bold">
              Recent Completed
            </h1>
          </div>
          <div>
            <h2 className="text is-size-2 has-text-weight-bold">Project</h2>
            <HR/>
            <div className="card">
              <div className="card-image">
                <figure className="image image is-square">
                  <img
                    src="https://colorlib.com/preview/theme/supreme/img/gallery/gallery_item.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <figure className="image image is-square">
                  <img
                    src="https://colorlib.com/preview/theme/supreme/img/gallery/gallery_item_1.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
        <div className="card">
              <div className="card-image">
                <figure className="image image is-square">
                  <img
                    src="https://colorlib.com/preview/theme/supreme/img/gallery/gallery_item_2.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <figure className="image image is-square">
                  <img
                    src="https://colorlib.com/preview/theme/supreme/img/gallery/gallery_item_3.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>
              <div className="box has-text-centered">
                 <a className="button is-primary is-rounded has-text-link">Rounded</a>
              </div>
         </div>
      </div>
    </div>
  </section>
</WRAPPER>
 );
export default Features;