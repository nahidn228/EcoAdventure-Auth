import { createBrowserRouter } from "react-router-dom";
import Category from "../components/TestimonialReviews";
import TestimonialReviews from "../components/TestimonialReviews";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import CardDetails from "../pages/CardDetails";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("/category.json"),
            element: <Category></Category>,
          },
          {
            path: "/",
            loader: () => fetch("/reviews.json"),
            element: <TestimonialReviews></TestimonialReviews>,
          },
        ],
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/place",
        loader: () => fetch("/data.json"),
        element: <About></About>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/experience/:id",
    loader: () => fetch("/data.json"),
    element: (
      <PrivateRoute>
        <CardDetails></CardDetails>
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
