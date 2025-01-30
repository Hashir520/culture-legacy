import React from "react";
import { Link } from "react-router-dom";
import cards from "./CardData";  // Correct path if cardsData is inside Components folder


const CardList = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-6">All Community Voices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link to={`/card/${card.id}`} key={card.id} className="block">
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <p className="text-white mb-4">{card.description}</p>
              <div className="flex items-center">
                <img src={card.image} alt={card.title} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-white">{card.title}</h4>
                  <p className="text-white text-sm">{card.designation}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
