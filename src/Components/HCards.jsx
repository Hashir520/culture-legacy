import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules"; // Added Autoplay module
import React from "react";


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
          {/* Cards */}
          <SwiperSlide>
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400  text-xl">★★★★★</div>
              </div>
              <p className="text-white mb-4">
                Heritage Haven's workshops have inspired my art and deepened my
                understanding of cultural traditions.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_BgWdkQBD.webp"
                  alt="Emily Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Emily Johnson</h4>
                  <p className="text-white text-sm">Local Artist</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-white mb-4">
                The educational programs at Heritage Haven are invaluable for my
                students, making history come alive.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_0oOFSWvf.webp"
                  alt="Michael Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Michael Smith</h4>
                  <p className="text-white text-sm">History Teacher</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400  text-xl">★★★★★</div>
              </div>
              <p className="text-white mb-4">
                The educational programs at Heritage Haven are invaluable for my
                students, making history come alive.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_2RaUVpAi.webp"
                  alt="Michael Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Michael Smith</h4>
                  <p className="text-white text-sm">History Teacher</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400  text-xl">★★★★★</div>
              </div>
              <p className="text-white mb-4">
                Heritage Haven's workshops have inspired my art and deepened my
                understanding of cultural traditions.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_DLmG8Fel.webp"
                  alt="Emily Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Emily Johnson</h4>
                  <p className="text-white text-sm">Local Artist</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-orange-400 shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400  text-xl">★★★★★</div>
              </div>
              <p className="text-white mb-4">
                Heritage Haven's workshops have inspired my art and deepened my
                understanding of cultural traditions.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_BgWdkQBD.webp"
                  alt="Emily Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Emily Johnson</h4>
                  <p className="text-white text-sm">Local Artist</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add other slides as needed */}
        </Swiper>
      </div>
    </div>
  );
}
