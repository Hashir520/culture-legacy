import React from 'react'

const Celeberate = () => {
  return (
    <>
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
    </>
  )
}

export default Celeberate
