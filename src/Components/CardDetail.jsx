import React from "react";
import { useParams } from "react-router-dom";
import cards from "./CardData"; 


function CardDetail() {
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <h2>Card Not Found</h2>;
  }

  return (
    <div className="py-12 px-4 md:py-20 ">
      <div className="max-w-lg md:max-w-3xl mx-auto p-6 bg-orange-400 shadow-lg rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center sm:text-left">
          {card.title}
        </h2>

        <div className="flex justify-center sm:justify-start mb-4">
          <div className="text-yellow-400 text-xl sm:text-2xl">★★★★★</div>
        </div>

        <p className="text-sm sm:text-base text-white text-center sm:text-left">
          {card.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center pt-4">
          <img
            src={card.image}
            alt={card.title}
            className="w-16 h-16 sm:w-12 sm:h-12 rounded-full mb-4 sm:mb-0 sm:mr-4 object-cover"
          />
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-lg">{card.title}</h4>
            <p className="text-white text-sm">{card.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
