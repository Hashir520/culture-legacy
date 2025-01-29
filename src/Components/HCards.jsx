import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules"; // Added Autoplay module
import React from "react";
import { Link } from "react-router-dom"; 
const cards = [
  { id: 1, title: "Emily Johnson", description: "Heritage Haven's workshops have inspired my art and deepened my understanding of cultural traditions." },
  { id: 2, title: "Michael Smith", description: "The educational programs are engaging and informative, making history come alive for my students." },
  { id: 3, title: "Sarah Lee", description: "The annual heritage festival was a fantastic experience! I loved the diverse performances and food." },
  { id: 4, title: "Laura White", description: "The artwork has been a great inspiration for my students' art projects and has helped them develop their skills." },
  { id: 5, title: "James Wilson", description: "The local community has been incredibly supportive and welcoming, making our heritage programs a priority for our students." },
  { id: 6, title: "David Brown", description: "I've heard great things about Heritage Haven, and I'm so happy to be a part of their programs." },
  
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
          //   pagination={{ clickable: true }}
          // Pagination,
          modules={[Autoplay]} // Include Autoplay module
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/card/${card.id}`}>
                <div className="bg-orange-400 shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="text-white mb-4">{card.description}</p>
                  <div className="flex items-center">
                    <img
                      src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_BgWdkQBD.webp"
                      alt={card.title}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">{card.title}</h4>
                      <p className="text-white text-sm">Local Artist</p>
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
