import React from "react";
import Swal from "sweetalert2";

const AddToy = () => {
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const details = form.details.value;
    const categoryId = form.categoryId.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const rating = form.rating.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const allToys = {
      toyName,
      category,
      details,
      categoryId,
      price,
      photoUrl,
      rating,
      seller,
      email,
      quantity,
    };
    console.log(allToys);

    fetch("http://localhost:5000/usertoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toys has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-extrabold text-gray-600 my-10">
        Add Your Toys
      </h2>
      <div>
        <form onSubmit={handleAddToy}>
          <div className="flex flex-col items-center space-y-5">
            <input
              type="text"
              placeholder="Toys Name"
              className="input input-bordered input-secondary w-full max-w-xs shadow"
              name="toyName"
              required
            />
            <input
              type="text"
              placeholder="Category Name"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="category"
              required
            />
            <input
              type="text"
              placeholder="Details"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="details"
              required
            />
            <input
              type="text"
              placeholder="category id"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="categoryId"
              required
            />
            <input
              type="text"
              placeholder="Price"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="price"
              required
            />

            <input
              type="text"
              placeholder="Quantity"
              className="shadow input input-bordered input-secondary w-full max-w-xs "
              name="quantity"
              required
            />
            <input
              type="text"
              placeholder="Photo Url"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="photoUrl"
              required
            />
            <input
              type="text"
              placeholder="Rating"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="rating"
              required
            />
            <input
              type="text"
              placeholder="Seller Name"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="seller"
              required
            />
            <input
              type="email"
              placeholder="Seller Email"
              className="shadow input input-bordered input-secondary w-full max-w-xs"
              name="email"
              required
            />
            <input
              type="submit"
              value="add Toys"
              className="shadow input input-bordered input-secondary w-full max-w-xs mt-5 cursor-pointer hover:bg-primary uppercase border border-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
