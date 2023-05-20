import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleUserToy from "./userToy/SingleUserToy";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);

  const url = `http://localhost:5000/usertoy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserToys(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("Delete Confirm!");
        fetch(`http://localhost:5000/usertoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remining = userToys.filter((usertoy) => usertoy._id !== id);
              setUserToys(remining);
            }
          });
      }
    });
  };

  // const handleDelete = (id) => {
  //   const proceed = confirm("Are you sure you want to delete");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/usertoy/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("deleted successfull");
  //           const remaning = userToys.filter((userToy) => userToy._id !== id);
  //           setUserToys(remaning);
  //         }
  //       });
  //   }
  // };
  return (
    <div className="px-3 max-w-[1200px] mx-auto">
      <h4>
        My Total Added Toys:{" "}
        <span className="font-semibold text-primary">{userToys.length}</span>
      </h4>
      <div>
        {userToys.map((userToy) => (
          <SingleUserToy
            key={userToy._id}
            userToy={userToy}
            handleDelete={handleDelete}
          ></SingleUserToy>
        ))}
      </div>
    </div>
  );
};

export default MyToy;
