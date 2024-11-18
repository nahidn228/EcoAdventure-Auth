import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-5">
          {/* Logo and Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-green-300"
              >
                <path d="M12 2C7.031 2 3 6.032 3 11s4.031 9 9 9 9-4.032 9-9-4.031-9-9-9zm1.003 14.97l-.004.002c-.032.01-.065.027-.097.042-1.187.523-2.65-.175-3.045-1.417-.312-1.01.032-2.178.856-2.891.683-.577 1.572-.867 2.358-.716.867.167 1.514.844 1.624 1.735.112.917-.339 1.826-1.023 2.298.062.198.111.41.111.628 0 .823-.671 1.494-1.495 1.494zm-3.526-7.05c-.507 0-.919-.412-.919-.918 0-.507.412-.918.919-.918s.918.411.918.918-.411.918-.918.918zm5.037 0c-.506 0-.918-.412-.918-.918 0-.507.412-.918.918-.918.507 0 .918.411.918.918 0 .506-.411.918-.918.918z" />
              </svg>
              <span className="text-2xl font-bold">EcoAdventure</span>
            </div>
            <p className="text-sm text-gray-200">
              Your ultimate guide to exploring the wonders of nature while
              promoting sustainability and eco-friendly practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="footer-title text-lg font-semibold mb-4">
              Quick Links
            </h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a className="hover:underline">Destinations</a>
              </li>
              <li>
                <a className="hover:underline">About Us</a>
              </li>
              <li>
                <a className="hover:underline">Blog</a>
              </li>
              <li>
                <a className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Explore Categories */}
          <div>
            <h6 className="footer-title text-lg font-semibold mb-4">Explore</h6>
            <ul className="space-y-3">
              <li>
                <a className="hover:underline">Eco-Friendly Tours</a>
              </li>
              <li>
                <a className="hover:underline">Sustainable Living</a>
              </li>
              <li>
                <a className="hover:underline">Nature Guides</a>
              </li>
              <li>
                <a className="hover:underline">Adventure Gear</a>
              </li>
              <li>
                <a className="hover:underline">Community Projects</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="footer-title text-lg font-semibold mb-4">
              Follow Us
            </h6>
            <p className="text-sm text-gray-200 mb-4">
              Stay connected and follow our journey on social media:
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="p-2 bg-white text-green-600 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white text-green-600 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white text-green-600 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-300">
          © {new Date().getFullYear()} EcoAdventure. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
