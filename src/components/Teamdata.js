import React from 'react';
import Teamone from "../components/Teamone"
import styled from "styled-components"
const Wrapper=styled.div`
margin-top: -24.1rem;
`;

const Teamdata = () => (
<Wrapper>
<section className="section">
 <div className="container">   
  <div className="columns">
  <div className="column">
   <Teamone title="Andrew Flentop" img="https://colorlib.com/preview/theme/supreme/img/Professional/our_professional_1.png" />
  </div>
  <div className="column">
  <Teamone title="Andrew Flentop" img="https://colorlib.com/preview/theme/supreme/img/Professional/our_professional_2.png" />
  </div>
  <div className="column">
  <Teamone title="Andrew Flentop" img="https://colorlib.com/preview/theme/supreme/img/Professional/our_professional_3.png" />
  </div>
  <div className="column">
  <Teamone title="Andrew Flentop" img="https://colorlib.com/preview/theme/supreme/img/Professional/our_professional_4.png"/>
  </div>
</div>
</div>
</section>
</Wrapper>
 );
export default Teamdata;