import { useLoaderData } from "react-router-dom";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-xl">This is home {data.length} </h1>
      <SliderBanner  data={data}></SliderBanner>

      {/* {data.map((echo) => (
        <SliderBanner key={echo.id} echo={echo}></SliderBanner>
      ))} */}
    </div>
  );
};

export default Home;
