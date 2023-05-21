import React from "react";
import { Link } from "react-router-dom";

const SinglgeCard = ({ categorie }) => {

  return (
    <div
      className="border shadow hover:shadow-md rounded-md p-4 hover:bg-secondary"
      data-aos="fade-down-right"
    >
      <div key={categorie._id}>
        <img src={categorie.photoUrl} alt="" />
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-xl">{categorie.toyName}</h2>
            <p>price: ${categorie.price}</p>
            <p>price: {categorie.rating}</p>
          </div>
          <div>
            <button className="btn btn-sm btn-primary btn-outline">
                          <Link to={`/allToy/${categorie._id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglgeCard;
