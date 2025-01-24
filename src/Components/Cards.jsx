import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hashir Shahid",
      role: "Local Artist",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid", // Replace with actual image URLs
      text: "Heritage Haven's workshops have inspired my art and deepened my understanding of cultural traditions.",
    },
    {
      name: "Michael Smith",
      role: "History Teacher",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid",
      text: "The educational programs are engaging and informative, making history come alive for my students.",
    },
    {
      name: "Sarah Lee",
      role: "Festival Attendee",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid",
      text: "The annual heritage festival was a fantastic experience! I loved the diverse performances and food.",
    },
    {
      name: "David Brown",
      role: "Community Volunteer",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid",
      text: "Volunteering at Heritage Haven has been rewarding. The team is passionate and dedicated to cultural preservation.",
    },
    {
      name: "Laura White",
      role: "Parent",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid",
      text: "My kids loved the cultural crafts workshop! It was a fun way to learn about different cultures.",
    },
    {
      name: "James Wilson",
      role: "Cultural Enthusiast",
      img: "https://img.freepik.com/premium-photo/girl-red-shirt-is-holding-american-flag_1277842-22556.jpg?semt=ais_hybrid",
      text: "Heritage Haven is a gem in our community, offering rich experiences that celebrate our diverse heritage.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-orange-400 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center mb-4 ">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm">{item.role}</p>
              </div>
            </div>
            <p className="mb-4">{item.text}</p>
            <div className="flex space-x-1">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.513 8.332 1.151-6.001 5.856 1.417 8.267L12 18.896l-7.416 4.478L5.999 15.11 0 9.254l8.332-1.151z" />
                  </svg>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
