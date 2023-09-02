import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="row">
      <div className="card bg-dark text-white">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <div className="row">
            <div className="left  mx-5">
              <img
                src="../../images/Rectangle 10.png"
                alt="trademark"
                className="mx-"
              />
            </div>

            <div className="right">
              <h6>Bar Soaps</h6>
              <h3 className="card-title">A body care classic,</h3>
              <p className="card-text">
                Breathing new life into the humble bar soap are <br />
                Nurture, Polish and Refresh—three additions to the <br />
                range, each imparting a unique constellation of
                <br />
                benefits.
              </p>
              <button
                type="button"
                className="btn btn-outlined"
                disabled
                data-bs-toggle="button"
                autocomplete="off"
              >
                Disabled toggle button{""}
                <img
                  className="arrow h-10 w-10 mx-4"
                  src="https://th.bing.com/th/id/OIP.0sRavsC-xFm1ZttQwmzzAgAAAA?pid=ImgDet&w=178&h=178&c=7"
                  alt="image"
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="card col">
            <div className="card-body  mx-5 my-5">
              <h6 className="card-subtitle mb-2 text-muted">For the body</h6>
              <h5 className="card-title">An expression of care</h5>
              <p className="card-text my-4 mx-2">
                Aesop formulations offer the body deserving
                <br />
                care, to cleanse, replenish, and nourish skin.
                <br />
                Each product is a sensory pleasure to use with <br />
                its own delightful aroma.
              </p>
              <p className="my-3 mx-5">See all Body Care →</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
