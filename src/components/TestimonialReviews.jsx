import { useLoaderData } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const TestimonialReviews = () => {
  const categories = useLoaderData();
  console.log(categories);
  return <div></div>;
};

export default TestimonialReviews;
