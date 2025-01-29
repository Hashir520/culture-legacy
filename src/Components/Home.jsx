import React from "react";
import Navbar from "./Navbar";
import HCards from "./HCards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header
        className="h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/0/09/Badshahi_Mosque_Sunset.jpg")',
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
                  Welcome to Heritage Legacy
                </h3>
              </div>
              <p
                // ref={textRef}
                id="chck"
                className="text-sm md:text-lg mb-6 md:mb-4 leading-relaxed mx-auto max-w-screen-md"
              >
                Discover the beauty of our diverse cultural heritage through
                engaging programs and events. Join us in celebrating traditions
                that connect us all. Explore our mission and be part of our
                vibrant community.
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
      <div className="flex flex-col-reverse md:flex-row px-6 md:px-16 space-y-10 md:space-y-0 md:space-x-5 my-10 md:my-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Heritage, Our Mission
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            At Heritage Haven, we are dedicated to preserving cultural
            traditions through community's engagement and education. Our
            passionate team works tirelessly to create inclusive experiences
            that celebrate our diverse history and foster appreciation for
            cultural heritage.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">2024 years</p>
              <p className="text-gray-600 text-base">
                Since our founding, we have been committed to cultural
                preservation.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">150 events</p>
              <p className="text-gray-600 text-base">
                We have organized over 150 events that bring the community
                together to celebrate cultural diversity.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                5000 participants
              </p>
              <p className="text-gray-600 text-base">
                Our programs have engaged more than 5,000 participants,
                fostering a love for cultural heritage.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4 core values</p>
              <p className="text-gray-600 text-base">
                Our core values include Inclusivity, Community Engagement,
                Cultural Preservation, and Education.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
          <img
            src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_keNqAta1.webp"
            alt=""
            className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-32 py-16">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-0 text-center lg:text-left">
          Explore Our Engaging Community Programs
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
      <div className="flex items-center justify-center min-h-full pt-10  bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_BYZmNiKS.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Traditional Crafts Workshop
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Participants immerse themselves in creating traditional crafts,
                fostering creativity and cultural appreciation. This hands-on
                experience is perfect for all ages, promoting cultural
                understanding.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_HOApCtLm.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Annual Heritage Festival
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Experience the vibrant celebration of cultural diversity at our
                Annual Heritage Festival. Enjoy performances, food stalls, and
                workshops that highlight various cultural traditions.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_pHNsdKIk.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Cultural History Workshop
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Our Cultural History Workshop offers an engaging learning
                experience, where participants gain insights into diverse
                cultural traditions and their historical significance.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-start lg:justify-between px-6 lg:px-32 py-16 gap-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
          Upcoming Heritage Festivals and Events
        </h1>

        <div className="text-center lg:text-left lg:w-3/4">
          <p className="text-gray-600 text-justify leading-relaxed">
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
      
     <div className="flex items-center justify-center bg-white py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-7xl w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_UZLhnXSA.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Experience Cultural Diversity
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Immerse yourself in the lively atmosphere of our heritage
                festivals, where cultural diversity is celebrated through music,
                dance, and art. A perfect family outing!
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_178SwVYS.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Hands-On Cultural Workshops
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Engage in interactive workshops that teach traditional crafts
                and skills. Perfect for all ages, these sessions foster
                creativity and cultural understanding.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_MFpxSKDL.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
                Taste the World
              </h5>
              <p className="text-sm md:text-base  text-gray-600">
                Savor the flavors of diverse cultures at our food stalls, where
                traditional dishes are prepared with love and authenticity. A
                culinary journey awaits!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Festivals */}
<div className="bg-neutral-800 text-white">
      <div className="flex flex-col  items-start lg:justify-between px-6 lg:px-32 py-16 gap-8">
        <h1 className="text-2xl lg:text-4xl  font-bold text-center lg:text-left">
          Celebrate Our Heritage
        </h1>

        <div className="text-center lg:text-left lg:w-3/4">
          <p className=" text-white text-justify leading-relaxed">
            Join us in celebrating our rich cultural heritage through engaging
            festivals and workshops that bring communities together.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 ">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0  text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Annual Heritage Festival
            </h2>
            <p className=" text-white mb-4 text-base  ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <p className=" mb-4 text-white text-base  ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <p className=" mb-4 text-white text-base  ">
              This festival featured traditional performances, delicious food
              stalls, and engaging workshops that celebrated our diverse
              cultural traditions.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm justify-center lg:justify-start">
              <span className="text-green-600 font-medium">
                # <span className="text-white">Hands-On Learning</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Creative Expression</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Cultural Appreciation</span>
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
          <div className="lg:w-2/5">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_cx4qbG0D.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16  gap-8">
          {/* Image Section */}
          <div className="lg:w-2/5">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_T9V3J88j.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              Cultural Crafts Workshop
            </h2>
            <p className=" mb-6 text-base leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <p className=" mb-6 text-base leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <p className=" mb-6 text-base leading-relaxed">
              Participants enjoyed hands-on experiences creating traditional
              crafts, fostering creativity and a deeper appreciation for
              cultural heritage.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="text-green-600 font-medium">
                # <span className="text-white">Community Engagement</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Interactive Workshops</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Cultural Performances</span>
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
      <div className="px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Community Heritage Day
            </h2>
            <p className=" mb-4 text-base">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <p className=" mb-4 text-base">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <p className=" mb-4 text-base">
              A day filled with activities, performances, and food that brought
              together families to celebrate our rich cultural history.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="text-green-600 font-medium">
                # <span className="text-white">Family Activities</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Live Music</span>
              </span>
              <span className="text-green-600 font-medium">
                # <span className="text-white">Food Tasting</span>
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
          <div className="lg:w-2/5">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_PwLgcLNI.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      </div>
      <HCards />
      <Footer />
    </>
  );
};

export default Home;