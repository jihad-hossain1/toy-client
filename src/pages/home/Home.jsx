import React from "react";
import img1 from "../../assets/svg/Cloudy.svg";
// import img2 from '../../assets/svg/babyBanner-removebg-preview.png'
const Home = () => {
  return (
    <>    
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Best Kids Toys Store & Online Shop
              </h1>
              <p className="mb-5">Give The Gift Of Your Children Everyday</p>
              <button className="btn btn-primary btn-outline">Get Started</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
