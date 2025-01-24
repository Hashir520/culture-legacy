import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <footer className="bg-black py-10 px-6 md:px-12 lg:px-28 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-gray-600">
          {/* Need Help Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Need Help?
            </h3>
            <p className="text-sm font-medium text-white mb-2">
              03218685617 (9am-10 pm, Mon-Sat)
            </p>
            <a
              href="mailto:hashirshahid676@gmail.com"
              className="text-sm text-white font-medium"
            >
              hashirshahid676@gmail.com
            </a>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Delivery &amp; Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Payment Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white">
                  Addresses
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-serif text-purple-600">
                  Gift Card
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-medium text-white uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center  space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/ringuard01/"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-white hover:text-gray-700">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-white hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
