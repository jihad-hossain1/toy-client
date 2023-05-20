import React from "react";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toy }) => {
  const { toyName, category, price, photoUrl, seller, quantity, _id } = toy;
  return (
    <div
      className="border shadow hover:shadow-md border-secondary hover:bg-secondary p-4 rounded-md flex flex-col"
      data-aos="zoom-in-down"
    >
      <div className="flex justify-center items-center">
        <img className="object-cover" src={photoUrl} alt="" />
      </div>
      <div className="flex justify-center items-center mt-auto space-x-4">
        <div className="space-y-1">
          <h4 className="font-semibold text-xl">{toyName}</h4>
          <p>Category : {category}</p>
          <p>Seller : {seller}</p>
          <p>Price : ${price}</p>
          <p>Available Quantity : {quantity}</p>
        </div>
        <div
          className="mt-auto"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <button className="px-3 py-1 rounded-md border border-primary hover:border-secondary hover:bg-primary hover:text-white">
            <Link to={`/allToy/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleToyCard;
