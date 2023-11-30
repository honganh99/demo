import React from "react";
import "./home.scss";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* End Header */}

      <div className="homePage">
        {/* Main */}
        <div className="mainPage">
          <div className="picture1" style={{ display: "flex" }}>
            <img
              src="https://media.thewhitecompany.com/i/white/uk-hp-hero-mb-wednesdaylaunch?fmt=jpg&$mobile-image$"
              alt=""
            />
            <div className="conten_pic1" style={{ fontFamily: "revert-layer" }}>
              <h3>The White Weekend</h3>
              <h2 style={{ fontSize: "50px", fontWeight: "lighter" }}>
                20% off
              </h2>
              <h3>Everything*</h3>
              <h3>USE CODE: WHITE20</h3>
              <a href="">SHOP CHRISTMAS</a>
              <a href="">SHOP CLOTHING</a>
              <a href="">SHOP CANDLE & FRANGRANCE</a>
              <a href="">SHOP BEDROOM</a>
              <a href="">SHOP HOME</a>
              <p>Online & in store. *Terms apply.</p>
            </div>
          </div>
          <div className="picture2">
            <p>
              Gifts that’ll make her smile and ways to update your home before
              the festivities.
            </p>
            <div
              className="img_pic2"
              style={{ display: "flex", margin: "0 20px" }}
            >
              <img
                src="https://media.thewhitecompany.com/i/white/uk-hp-t1-221123?fmt=jpg&$mobile-image$"
                alt=""
                style={{ width: "55%", paddingRight: "20px" }}
              />
              <img
                src="https://media.thewhitecompany.com/i/white/uk-hp-t2-221123?fmt=jpg&$mobile-image$"
                alt=""
                style={{ width: "45%" }}
              />
            </div>
          </div>
          <div className="picture3">
            <img
              src="https://media.thewhitecompany.com/i/white/TT_BAU_giftsforplaytime_hero_DT?fmt=webp&$desktop-image$"
              alt=""
            />
            <div className="content_pic3">
              <p style={{ fontSize: "30px" }}>The Thread</p>
              <h3 style={{ fontSize: "80px", fontWeight: "lighter" }}>
                Gifts for playtime <br /> made speacial
              </h3>
              <a href="">READ THE ARTICLE</a>
              <a href="">READ THE THREAD</a>
            </div>
          </div>
        </div>
        {/* categories */}
        <div className="categories">
          <h3>Pick up where you left off...</h3>
          <button style={{ marginRight: "10px" }}>Christmas Decorations</button>
          <button>Little White Christmas Shop</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
}

export default Home;
