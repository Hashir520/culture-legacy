import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Emily Johnson",
    description:
      "Heritage Haven's workshops have inspired my art and deepened my understanding of cultural traditions.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_1VzmqPvj.webp",
    designation: "Local Artist",
  },
  {
    id: 2,
    title: "Michael Smith",
    description:
      "The educational programs are engaging and informative, making history come alive for my students.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_Lrfa7xEw.webp",
    designation: "History Teacher",
  },
  {
    id: 3,
    title: "Sarah Lee",
    description:
      "The annual heritage festival was a fantastic experience! I loved the diverse performances and food.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_phn0HjEi.webp",
    designation: "Festival Attendee",
  },
  {
    id: 4,
    title: "Laura White",
    description:
      "The educational programs are engaging and informative, making history come alive for my students.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_qb4LJRwq.webp",
    designation: "Parent",
  },
  {
    id: 5,
    title: "James Wilson",
    description:
      "The annual heritage festival was a fantastic experience! I loved the diverse performances and food.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_vnuBl0S9.webp",
    designation: "Cultural Enthusiast",
  },
  {
    id: 6,
    title: "David Brown",
    description:
      "Heritage Haven's workshops have inspired my art and deepened my understanding of cultural traditions.",
    image:
      "https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_lwOVOgQe.webp",
    designation: "Community Volunteer",
  },
];

export default function CommunityVoicesSlider() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Community Voices
        </h2>
        <p className="text-center text-lg mb-8">
          Hear from those who cherish our cultural heritage and programs.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="w-full md:w-1/2 lg:w-1/3 px-2"
            >
              <Link to={`/card/${card.id}`}>
                <div className="bg-orange-400 shadow-md p-6 rounded-lg max-w-sm mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="text-white mb-4">{card.description}</p>
                  <div className="flex items-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{card.title}</h4>
                      <p className="text-white text-sm">{card.designation}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
