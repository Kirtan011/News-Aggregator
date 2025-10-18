import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="!bg-gray-900 text-white w-full py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm opacity-80">Designed & Developed by</p>
          <p className="font-bold text-lg">Kirtan Suthar</p>
          <p className="text-xs opacity-60 mt-1">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Kirtan011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/kirtan-suthar-479940264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
