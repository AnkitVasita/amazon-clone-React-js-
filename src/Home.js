import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={11231533}
            title="Headphones"
            price={11.96}
            rating={5}
            image="images/headphone.jpg"
          />

          <Product
            id={55523666}
            title="Poster"
            price={9.88}
            rating={4}
            image="images/messi.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={44451121}
            title="football"
            price={8.66}
            rating={5}
            image="images/cr7.jpg"
          />

          <Product
            id={88894447}
            title="legend"
            price={7.55}
            rating={5}
            image="images/ronaldo.jpg"
          />
          <Product
            id={77795554}
            title="Art"
            price={12.99}
            rating={4}
            image="images/ms10.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={33362228}
            title="wallpaper"
            price={5.33}
            rating={5}
            image="images/wallpaper.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

//
