import React from 'react';
import Cardcontent from "../components/Cardcontent"
const Carddata = () => (
<section class="section">
 <div className="container">   
  <div class="columns">
  <div class="column">
   <Cardcontent title=" Mechanical Engineering" img="https://colorlib.com/preview/theme/supreme/img/ind/industries_1.png"/>
  </div>
  <div class="column">
  <Cardcontent title="Chemical Research" img="https://colorlib.com/preview/theme/supreme/img/ind/industries_2.png"/>
  </div>
  <div class="column">
  <Cardcontent title="Industrial construction" img="https://colorlib.com/preview/theme/supreme/img/ind/industries_3.png"/>
  </div>
</div>
</div>
</section>

 );
export default Carddata;