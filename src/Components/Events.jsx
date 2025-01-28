import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Events = () => {
  return (
    <>
      <header
        className="h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg")',
        }}
      >
        <Navbar />
        <main className="h-[85vh] flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
          <section>
            <div className="pt-36">
              <div className="relative overflow-hidden h-16">
                <h3
                  id="checks"
                  className="text-xl md:text-5xl  whitespace-nowrap tracking-wide drop-shadow-lg font-bold "
                >
                  Discover Cultural Wonders
                </h3>
              </div>
              <p className="text-sm md:text-lg  font-bold mb-6 md:mb-4 leading-relaxed mx-auto max-w-screen-md">
                Join us at Heritage Haven for an unforgettable journey through
                diverse cultural traditions. Our upcoming festivals offer
                immersive experiences that celebrate history and community.
                Explore, learn, and enjoy with us!
              </p>
            </div>

            <div className="space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
              <a
                href="#"
                className="px-4 py-2 md:px-6 md:py-3 rounded bg-white text-black text-xs md:text-sm font-medium uppercase tracking-wider transition duration-300 hover:bg-[#10b981] hover:text-white"
              >
                Learn More
              </a>
              <a
                href="transparent.html"
                className="px-4 py-2 md:px-6 md:py-3 rounded bg-[#10b981] text-white text-xs md:text-sm font-bold uppercase tracking-wider transition duration-300 hover:bg-white hover:text-black"
              >
                Sign Up Here
              </a>
            </div>
          </section>
        </main>
      </header>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-32 py-16">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-0 text-center lg:text-left">
          Discover Our Upcoming Cultural Events
        </h1>

        <div className="text-center lg:text-left lg:w-3/4">
          <p className="text-gray-600 text-justify">
            Join us at Heritage Haven for a series of enriching cultural events
            that celebrate our diverse heritage. From interactive workshops to
            vibrant festivals, there’s something for everyone. Mark your
            calendars and be part of our community’s journey through history and
            tradition. Don’t miss out on these unique opportunities to connect
            and learn.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="flex items-center justify-center min-h-full   bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-6xl w-full">
          <div className="bg-white  rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_CQi3jiF6.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Heritage Festivals Await
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
                Experience the richness of cultural diversity at our upcoming
                festivals. Enjoy performances, traditional foods, and engaging
                activities that bring history to life.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white  rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_Z4rDODqp.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2 ">
                Cultural Workshops
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
                Participate in our hands-on workshops where you can learn
                traditional crafts and skills. Perfect for all ages, these
                sessions foster creativity and cultural appreciation.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_PuU4u7np.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Storytelling Events
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
                Join us for storytelling sessions that explore cultural tales
                and music. These events are designed to bring the community
                together in celebration of our shared heritage.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 border-b border-black">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0  text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Annual Heritage Festival
            </h2>
            <p className="text-gray-600 mb-4 text-sm lg:text-lg ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <p className="text-gray-600 mb-4 text-sm lg:text-lg ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <p className="text-gray-600 mb-4 text-sm lg:text-lg ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm justify-center lg:justify-start">
              <span className="text-green-600 font-medium">
                # <span className="text-black">Hands-On Learning</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Creative Expression</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Cultural Appreciation</span>
              </span>
            </div>
            <a
              href="#"
              className="text-orange-500 text-lg font-semibold flex items-center hover:underline justify-center lg:justify-start"
            >
              Learn More <span className="ml-2">&#129170;</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_ZCIOgiZE.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 border-b border-black gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_s0mgCr9c.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Cultural Crafts Workshop
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="text-green-600 font-medium">
                # <span className="text-black">Community Engagement</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Interactive Workshops</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Cultural Performances</span>
              </span>
            </div>
            <a
              href="#"
              className="text-orange-500 text-lg  font-semibold flex items-center hover:underline"
            >
              Discover More <span className="ml-2">&#129170;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Community Heritage Day
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="text-green-600 font-medium">
                # <span className="text-black">Family Activities</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Live Music</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-black">Food Tasting</span>
              </span>
            </div>
            <a
              href="#"
              className="text-orange-500 text-lg font-semibold flex items-center hover:underline"
            >
              Join Us <span className="ml-2">&#129170;</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_rLhSpdEQ.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_Ixm3UwyY.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-6  text-start lg:text-lg leading-relaxed">
              Become a part of Heritage Haven’s mission to preserve cultural{" "}
              heritage. We offer various volunteer opportunities that allow you{" "}
              to engage with our community and make a difference.
            </p>
            <p className="text-gray-600 mb-6  lg:text-lg text-start leading-relaxed">
              Become a part of Heritage Haven’s mission to preserve cultural{" "}
              heritage. We offer various volunteer opportunities that allow you{" "}
              to engage with our community and make a difference.
            </p>
            <p className="text-gray-600 mb-6  lg:text-lg text-start leading-relaxed">
              Become a part of Heritage Haven’s mission to preserve cultural{" "}
              heritage. We offer various volunteer opportunities that allow you{" "}
              to engage with our community and make a difference.
            </p>
            <button className="border mt-6  border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
