import React from "react";
import { Link } from "react-router-dom";

const SingleUserToy = ({ userToy }) => {
  const { toyName, category, price, photoUrl, seller, email, _id } = userToy;
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Name</th>
              <th>Toy Info</th>
              <th>cutomize</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={photoUrl} alt="photo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toyName}</div>
                    <p className="text-sm opacity-70">Price: ${price}</p>
                    <p className="text-sm opacity-70">Category: {category}</p>
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{seller}</span>
              </td>
              <td className="">
                <ul className="space-x-3">
                  <li className="border border-green-600 px-2 hover:shadow-md hover:font-semibold inline-block rounded shadow hover:bg-green-500 hover:text-white">
                    <Link>Update</Link>
                  </li>
                  <li className="border border-red-600 px-2 hover:shadow-md hover:font-semibold inline-block rounded shadow hover:bg-red-500 hover:text-white">
                    <Link>Delete</Link>
                  </li>
                </ul>
              </td>
              <th>
                <button className="btn btn-secondary btn-xs">
                  <Link to="">Details</Link>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleUserToy;
