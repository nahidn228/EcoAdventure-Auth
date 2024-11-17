import { useLoaderData } from "react-router-dom";
import Adventure from "../components/Adventure";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <section className="mt-10">
        <SliderBanner data={data}></SliderBanner>
      </section>
      <section>
        <h4 className="text-4xl font-bold  text-center">
          Adventure Experiences
        </h4>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((card) => (
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
