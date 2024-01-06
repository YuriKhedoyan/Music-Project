import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from "./pages/homePage/Home";
import LoginPage from "./redux/reducers/users/loginPage/LoginPage";
import RegisterPage from "./redux/reducers/users/registerPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);


const App = () => {
  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;