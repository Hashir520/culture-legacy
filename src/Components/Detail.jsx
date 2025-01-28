import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Detail = () => {
  return (
    <>
      <header
        className="h-screen bg-cover bg-no-repeat bg-center sm:bg-cover md:bg-cover lg:bg-cover"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/07/00/38/11/360_F_700381104_6CJ1BAcf8ompTm7DXinkib9PSVbSRft9.jpg")',
        }}
      >
        <Navbar />
        <main className="h-[85vh] flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
          <section>
            <div className="bg-transparent">
              <div className="relative overflow-hidden h-16">
                <h3 className="text-lg md:text-5xl whitespace-nowrap tracking-wide drop-shadow-lg font-bold transform transition-transform duration-700 ease-in-out hover:-translate-y-4">
                  Welcome to Heritage Legacy
                </h3>
              </div>
              <p className="text-sm md:text-lg font-semibold mb-6 md:mb-4 leading-relaxed mx-auto max-w-screen-md">
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

      {/* Discription */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-44 py-16">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-0 text-center lg:text-left">
          Explore Our Community Programs
        </h1>

        <div className="text-center lg:text-left lg:w-3/5">
          <p className="text-gray-600 text-justify">
            Discover a variety of engaging programs designed to celebrate and
            preserve cultural heritage. From interactive workshops to immersive
            festivals, each event offers a unique opportunity to learn and
            connect with diverse traditions.
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 pt-10">
            {/* First Workshop Section */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-3xl font-bold text-justify">Workshops</h1>
              <p className="text-gray-600 text-justify text-sm pt-4">
                Join our hands-on workshops to explore traditional crafts and
                cultural practices.
              </p>
            </div>

            {/* Second Workshop Section */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-3xl font-bold text-justify">Festivals</h1>
              <p className="text-gray-600 text-justify text-sm pt-4">
                Experience vibrant festivals that showcase performances and
                cultural diversity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-44 py-16">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-0 text-center lg:text-left">
          Explore Our Featured Workshops
        </h1>

        <div className="text-center lg:text-left lg:w-3/5">
          <p className="text-gray-600 text-justify">
            Join us at Heritage Haven for a series of engaging workshops that
            celebrate cultural diversity and creativity. Our expert-led sessions
            offer hands-on experiences in traditional crafts, storytelling, and
            more. Discover the richness of our shared heritage and connect with
            like-minded individuals in a welcoming environment. Whether you’re a
            history enthusiast or simply curious, there’s something for
            everyone.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex items-center justify-center min-h-full   bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-6xl w-full">
          <div className="bg-white  rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_EQrvN8si.webp"
              alt="Image 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2 whitespace-nowrap">
              Traditional Pottery Workshop
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
              Learn the art of pottery making with our skilled artisans. This workshop offers a hands-on experience in creating beautiful, functional pieces using traditional techniques.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white  rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_kEFbTjH3.webp"
              alt="Image 2"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2 ">
              Cultural Dance Experience
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
              Immerse yourself in the rhythms and movements of cultural dance. Our workshop provides an energetic and fun way to learn about different dance traditions.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg  overflow-hidden ">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_2jiLli1A.webp"
              alt="Image 3"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl md:text-2xl  font-bold mb-2">
              Storytelling and Folklore
              </h5>
              <p className="text-sm md:text-sm  text-gray-600">
              Dive into the world of folklore with our storytelling sessions. Discover tales from various cultures that have been passed down through generations.
              </p>
              <button className="border mt-6 border-orange-600 px-6 rounded-md py-3 text-orange-600 hover:bg-orange-700 transition ease-in-out duration-300 transform hover:scale-95 hover:text-white text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Detail;
