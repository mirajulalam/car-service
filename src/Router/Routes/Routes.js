import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/services",
            element:<Services></Services>
        }
      ]
    },
  ]);
  export default router;