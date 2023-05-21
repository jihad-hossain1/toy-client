import React, { useEffect, useState } from "react";
import SingleToyCard from "./toyCard/SingleToyCard";
import useTitle from "../../hook/useTitle";

const AllToy = () => {
  useTitle("AllToys");
  const [allToys, setAllToys] = useState([]);
  const [seeMore, setSeeMore] = useState();

  useEffect(() => {
    fetch("https://animal-kidol-server.vercel.app/usertoy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-xl text-gray-600 font-semibold">
        Total Toys : {allToys.length}
      </h3>
      {/* <form>
        <input type="search" name="" id="" />
      </form> */}

      <div className="overflow-x-auto w-full">
        {" "}
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Available Qty</th>
              <th>seller</th>
              <th>Price</th>
              <th>catetory</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.slice(0, seeMore ? allToys.length : 20).map((toy) => (
              <SingleToyCard key={toy._id} toy={toy}></SingleToyCard>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end my-4">
        {!seeMore && (
          <button
            onClick={setSeeMore}
            className="px-3 py-1 rounded-md border border-secondary hover:border-secondary hover:bg-secondary hover:font-semibold hover:text-black shadow-md"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToy;
