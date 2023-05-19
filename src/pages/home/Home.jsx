import React, { useEffect, useState } from "react";
import img1 from "../../assets/svg/Cloudy.svg";
import GallaryCard from "../../components/gallaryCard/GallaryCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DragonToys from "../../components/toyCategory/DragonToys";

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

      <div className="max-w-[1200px] mx-auto">
        {/* gallary section  */}
        <div className="mt-24">
          <h3 className="text-center font-extrabold text-4xl">Toys Gallary</h3>
        </div>
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 my-7">
            {gallaries.map((gallary) => (
              <GallaryCard key={gallary._id} gallary={gallary}></GallaryCard>
            ))}
          </div>
        </div>

        {/* shop by category */}
        <div className="my-6 md:mt-24">
          <div className="py-5">
            <h4 className="text-center text-3xl font-extrabold">
              Shop By Category
            </h4>
          </div>
          <div className="flex justify-center mt-6">
            <Tabs>
              <TabList className={`text-slate-600 font-semibold `}>
                <Tab>Dragon Toys</Tab>
                <Tab>Dog Toys</Tab>
                <Tab>Cat Toys</Tab>
                <Tab>Elephant Toys</Tab>
              </TabList>

              <TabPanel></TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 4</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
