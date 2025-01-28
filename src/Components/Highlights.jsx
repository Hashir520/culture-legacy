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
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pt-24">
            <h2 className="text-2xl text-center lg:text-4xl font-bold mb-6">
              The Power of Community Voices
            </h2>
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

      {/* Community Cards  */}

      {/* <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">
            Community Voices
          </h2>
          <p className="text-center text-xl mb-8">
            Hear from those who cherish our cultural heritage and programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
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
                  <h4 className="font-bold text-gray-900">Emily Johnson</h4>
                  <p className="text-gray-600 text-sm">Local Artist</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
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
                  <h4 className="font-bold text-gray-900">Michael Smith</h4>
                  <p className="text-gray-600 text-sm">History Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                The Annual Heritage Festival was a fantastic experience! I loved
                the diverse performances and food.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_2RaUVpAi.webp"
                  alt="Sarah Lee"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Lee</h4>
                  <p className="text-gray-600 text-sm">Festival Attendee</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                Volunteering at Heritage Haven has been rewarding. It's great to
                see the community come together.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_9WQoy0Vp.webp"
                  alt="David Brown"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">David Brown</h4>
                  <p className="text-gray-600 text-sm">Community Volunteer</p>
                </div>
              </div>
            </div>

            <div className="bg-white  p-6 shadow-md rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                I appreciate how Heritage Haven promotes cultural understanding
                through engaging events.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_female_eQh8OPie.webp"
                  alt="Laura White"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Laura White</h4>
                  <p className="text-gray-600 text-sm">Cultural Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="text-black text-xl">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-4">
                My kids loved the cultural crafts workshop! It was a fun and
                educational experience for the whole family.
              </p>
              <div className="flex items-center">
                <img
                  src="https://demo-programmatic.10web.me/wp-content/uploads/2024/12/thumbnail_male_DLmG8Fel.webp"
                  alt="James Wilson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
