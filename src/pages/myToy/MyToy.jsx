import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleUserToy from "./userToy/SingleUserToy";

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
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/usertoy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfull");
            const remaning = userToys.filter((userToy) => userToy._id !== id);
            setUserToys(remaning);
          }
        });
    }
  };
  return (
    <div>
      <h4>my toy here....</h4>
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
