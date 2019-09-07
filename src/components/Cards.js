import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 5rem;
  .card {
    transition: background-color 0.5s;
    :hover {
      background-color: #fe5c24;
    }
  }
`;

const Cards = () => (
  <Wrapper>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <i className="fas fa-microchip is-size-2 has-text-danger ">
                    <span className="line"></span>
                  </i>
                </div>
              </div>
              <div className="media-content ">
                <h1 className="has-text-centered  is-size-5 is-uppercase ">
                  Advance Technology
                </h1>
              </div>
              <div className="content has-text-centered has-text-weight-normal">
                All fish day af emale very appear moved seas above Fifth them
                grass gathere above male moveth whose life rule she gathering
                seas of is sea night
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <i className="fas fa-graduation-cap is-size-2 has-text-danger "></i>
                </div>
              </div>

              <div className="media-content ">
                <h1 className="has-text-centered  is-size-5 is-uppercase">
                  Advance Technology
                </h1>
              </div>
              <div className="content has-text-centered has-text-weight-normal">
                All fish day af emale very appear moved seas above Fifth them
                grass gathere above male moveth whose life rule she gathering
                seas of is sea night
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <i className="fas fa-wallet is-size-2 has-text-danger "></i>
                </div>
              </div>

              <div className="media-content ">
                <h1 className="has-text-centered  is-size-5 is-uppercase">
                  Advance Technology
                </h1>
              </div>
              <div className="content has-text-centered has-text-weight-normal">
                All fish day af emale very appear moved seas above Fifth them
                grass gathere above male moveth whose life rule she gathering
                seas of is sea night
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <i className="fas fa-headphones is-size-2 has-text-danger "></i>
                </div>
              </div>

              <div className="media-content ">
                <h1 className="has-text-centered  is-size-5 is-uppercase">
                  Advance Technology
                </h1>
              </div>
              <div className="content has-text-centered has-text-weight-normal">
                All fish day af emale very appear moved seas above Fifth them
                grass gathere above male moveth whose life rule she gathering
                seas of is sea night
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Cards;
