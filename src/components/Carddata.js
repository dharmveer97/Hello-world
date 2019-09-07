import React from 'react';
import Cardcontent from '../components/Cardcontent';
const Carddata = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Cardcontent
            title=" Mechanical Engineering"
            img="https://colorlib.com/preview/theme/supreme/img/ind/industries_1.png"
          />
        </div>
        <div className="column">
          <Cardcontent
            title="Chemical Research"
            img="https://colorlib.com/preview/theme/supreme/img/ind/industries_2.png"
          />
        </div>
        <div className="column">
          <Cardcontent
            title="Industrial construction"
            img="https://colorlib.com/preview/theme/supreme/img/ind/industries_3.png"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Carddata;
