import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Adventure from "../components/Adventure";
import SliderB from "../components/SliderB";

const Home = () => {
  const data = useLoaderData();

  const [experience, setExperience] = useState(data);
  useEffect(() => {
    setExperience(data);
  }, [data]);

  console.log(experience);
  return (
    <div>
      <section className="mt-10">
        {/* <SliderBanner data={data}></SliderBanner> */}
        <SliderB data={data}></SliderB>
      </section>
      <section>
        <div className='py-6'>
        <h4 className="text-4xl font-bold  text-center">
          Adventure Experiences
        </h4>
        <p className="text-2xl  italic font-semibold text-center mb-4">
          Explore breathtaking landscapes, wildlife, and more!
        </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {experience?.map((card) => (
            <Adventure key={card.id} card={card}></Adventure>
          ))}
        </div>
      </section>

      {/* {data.map((echo) => (
        <SliderBanner key={echo.id} echo={echo}></SliderBanner>
      ))} */}
    </div>
  );
};

export default Home;
