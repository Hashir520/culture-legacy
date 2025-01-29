import React from "react";
import { useParams } from "react-router-dom";

const cards = [
  { id: 1, title: "Emily Johnson", description: "Heritage Haven's workshops have inspired my art and deepened my understanding of cultural traditions." },
  { id: 2, title: "Card 2", description: "This is card 2 description" },
  { id: 3, title: "Card 3", description: "This is card 3 description" },
  { id: 4, title: "Card 3", description: "This is card 3 description" },
  { id: 5, title: "Card 5", description: "This is card 5 description" },
  { id: 6, title: "Card 6", description: "This is card 6 description" },
  
];

function CardDetail() {
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <h2>Card Not Found</h2>;
  }

  return (
    <div className=" py-56">
      <div className="max-w-3xl mx-auto p-6 bg-orange-400 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
        <p className="text-lg">{card.description}</p>
        
      </div>
    </div>
  );
}

export default CardDetail;
