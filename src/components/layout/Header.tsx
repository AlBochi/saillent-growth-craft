import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="text-primary text-2xl font-bold">Saillent</div>

      {/* Right Side: Contact Icons */}
      <div className="flex space-x-4">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/saillent/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary transition"
        >
          <span role="img" aria-label="LinkedIn">🔗</span>
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+16133011944"
          className="text-gray-700 hover:text-primary transition"
        >
          <span role="img" aria-label="Phone">📞</span>
        </a>

        {/* Email Icon */}
        <a
          href="mailto:albochi@saillent.com"
          className="text-gray-700 hover:text-primary transition"
        >
          <span role="img" aria-label="Email">📧</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
