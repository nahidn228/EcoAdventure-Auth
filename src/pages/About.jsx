import { useLoaderData } from "react-router-dom";
import Adventure from "../components/Adventure";
import { Helmet } from "react-helmet";
import Snowfall from 'react-snowfall';

const About = () => {
  const data = useLoaderData();
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Places - Eco-Adventure</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Snowfall snowflakeCount={100} />
      {data?.map((card) => (
        <Adventure key={card.id} card={card}></Adventure>
      ))}
    </div>
  );
};

export default About;
