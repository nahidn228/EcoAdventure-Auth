/* eslint-disable react/prop-types */
const Adventure = ({ card }) => {
  console.log(card);

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="max-h-64">
        <img className="w-full" src={card.image} alt={card.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p className="text-lg font-semibold mt-6">Eco Friendly Features:</p>
        {card.ecoFriendlyFeatures.map((ecoFeature, idx) => (
          <p key={idx}>- {ecoFeature}</p>
        ))}
        <div className="card-actions ">
        <button className="btn bg-[#F9A51A]">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
