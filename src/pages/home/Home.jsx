import React, { useEffect, useState } from "react";
import img1 from "../../assets/svg/Cloudy.svg";
import GallaryCard from "../../components/gallaryCard/GallaryCard";
// import img2 from '../../assets/svg/babyBanner-removebg-preview.png'
const Home = () => {
  const [gallaries, setGallaries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toyGallary")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGallaries(data);
      });
  });
  return (
    <>
      {/* banner section  */}
      <div
        className="hero "
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
      {/* gallary section  */}
      <div className="mt-6">
        <h3 className="text-center font-extrabold text-4xl">Toys Gallary</h3>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 my-7">
          {gallaries.map((gallary) => (
            <GallaryCard key={gallary._id} gallary={gallary}></GallaryCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
