import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-700 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className=" text-2xl text-black uppercase font-bold hover:scale-110 hover:text-green-900 hover:shadow-lg transition-transform duration-300">
              Blog <span className='text-white  text-2xl uppercase font-bold'>Web</span></h2>
            <p className="text-sm text-gray-400">Your go-to blog for exploring tourist spots in Pakistan.</p>
          </div>

          <div className="flex space-x-6 mb-6 sm:mb-0">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-2xl hover:text-black transition-all" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-2xl hover:text-black transition-all" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-2xl hover:text-black transition-all" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="text-2xl hover:text-black transition-all" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 BlogWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
