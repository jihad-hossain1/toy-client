import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/home/Home";
import AllToy from "../pages/allToy/AllToy";
import MyToy from "../pages/myToy/MyToy";
import AddToy from "../pages/addToy/AddToy";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToy",
        element: <AllToy></AllToy>,
      },
      {
        path: "myToy",
        element: <MyToy></MyToy>,
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default route;
