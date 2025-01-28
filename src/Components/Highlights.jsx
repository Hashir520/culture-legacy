import React from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Highlights = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 lg:px-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_pLtNSpOU.webp"
              alt="Heritage Festival"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 ">
            <h2 className="text-2xl  lg:text-4xl font-bold mb-6">
              The Power of Community Voices
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Heritage Haven, we believe that the voices of our community are
              vital in preserving and promoting cultural heritage. Through
              testimonials, we gain insights into the impact of our programs and
              events, helping us to continuously improve and celebrate our
              diverse history together.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Heritage Haven, we believe that the voices of our community are
              vital in preserving and promoting cultural heritage. Through
              testimonials, we gain insights into the impact of our programs and
              events, helping us to continuously improve and celebrate our
              diverse history together.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Heritage Haven, we believe that the voices of our community are
              vital in preserving and promoting cultural heritage. Through
              testimonials, we gain insights into the impact of our programs and
              events, helping us to continuously improve and celebrate our
              diverse history together.
            </p>
          </div>
        </div>
      </div>

    
      <Cards />
      {/* flex big image  */}

      <div className="px-6 lg:px-20">
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-16">
    {/* Text Section */}
    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pt-10">
      <h2 className="text-2xl lg:text-start text-center lg:text-3xl font-bold mb-4">
        The Impact of Your Voice
      </h2>
      <p className="text-gray-600 mb-4 text-center text-lg lg:text-left">
        Discover how our community members have been touched  by the
        programs and events at Heritage Haven. Their voices  reflect
        the profound impact of our mission to preserve and 
        celebrate cultural heritage.
      </p>
      <p className="text-gray-600 mb-4 text-center text-lg lg:text-left">
        Discover how our community members have been touched  by the
        programs and events at Heritage Haven. Their voices  reflect
        the profound impact of our mission to preserve and 
        celebrate cultural heritage.
      </p>
      <p className="text-gray-600 mb-4 text-center text-lg lg:text-left">
        Discover how our community members have been touched  by the
        programs and events at Heritage Haven. Their voices  reflect
        the profound impact of our mission to preserve and 
        celebrate cultural heritage.
      </p>
      <div className="bg-white shadow-full p-6 rounded-lg flex items-center">
        <img
          src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_tLYrYwcB.webp"
          alt="Emily Johnson"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-800 mb-2">
            Heritage Haven's workshops have deepened my understanding of
            our local history. The events are well-organized and truly
            engaging.
          </p>
          <h4 className="font-bold text-gray-900">Emily Johnson</h4>
          <p className="text-gray-600 text-sm">Local Historian</p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 px-10">
      <img
        src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/tenweb_media_WsPqBSkj.webp"
        alt="Heritage Festival"
        className="w-full rounded-lg shadow-md"
      />
    </div>
  </div>
</div>


      {/* Footer */}

     <Footer/>
    </>
  );
};

export default Highlights;
