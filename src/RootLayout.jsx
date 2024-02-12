import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Pages/Root";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="app" element={<App />} />
    </Route>
  )
);

const RootLayout = () => {
  
  return <RouterProvider router={router} />;
};

export default RootLayout;
