import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left section with contact information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Got ideas? Let's team up!</h2>
            <p className="text-gray-600">
              Tell us more about yourself and what you've got in mind. We're here to help!
            </p>

            <div className="space-y-2">
              {/* FooterChip */}
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* Placeholder icon for email */}
                  <path d="M12 12l8-6H4l8 6z" />
                </svg>
                <span className="ml-3 text-gray-600">contact@yourcompany.com</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* Placeholder icon for phone */}
                  <path d="M6 8h12v2H6V8zm0 4h12v2H6v-2z" />
                </svg>
                <span className="ml-3 text-gray-600">+123 456 7890</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* Placeholder icon for location */}
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 7 13 7 13s7-9.13 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span className="ml-3 text-gray-600">123 Main St, Your City</span>
              </div>
            </div>
          </div>

          {/* Right section with form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-800">Tell us about your project</h3>

            <form className="mt-4 space-y-4">
              <input
                type="text"
                className="w-full p-3 border border-green-300 rounded focus:border-green-600 focus:ring-1 focus:ring-green-300 focus:outline-none"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="w-full p-3 border border-green-300 rounded focus:border-green-600 focus:ring-1 focus:ring-green-300 focus:outline-none"
                placeholder="Your Email"
              />

              <textarea
                className="w-full p-3 border border-green-300 rounded focus:border-green-600 focus:ring-1 focus:ring-green-300 focus:outline-none"
                placeholder="Your Project Idea"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-blue-800 hover:text-blue-500 transition"
            >
              <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 5 3.66 9.12 8.44 9.88v-6.99H7.89v-2.89h2.55V9.53c0-2.52 1.49-3.91 3.77-3.91 1.1 0 2.25.18 2.25.18v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.78l-.44 2.89h-2.34v6.99C18.34 21.17 22 17.05 22 12.04c0-5.52-4.5-10-10-10z" />
            </svg>
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-green-600 hover:text-green-800 transition"
            >
              <path d="M12 2.16c3.18 0 3.56.01 4.81.07 1.17.06 1.96.25 2.41.42.62.23 1.08.51 1.56.99.48.48.76.94.99 1.56.17.45.36 1.24.42 2.41.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.17-.25 1.96-.42 2.41-.23.62-.51 1.08-.99 1.56-.48.48-.94.76-1.56.99-.45.17-1.24.36-2.41.42-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.17-.06-1.96-.25-2.41-.42-.62-.23-1.08-.51-1.56-.99-.48-.48-.76-.94-.99-1.56-.17-.45-.36-1.24-.42-2.41-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.17.25-1.96.42-2.41.23-.62.51-1.08.99-1.56.48-.48.94-.76 1.56-.99.45-.17 1.24-.36 2.41-.42C8.44 2.17 8.82 2.16 12 2.16zm0-1.16C8.72 1 8.29 1.01 7.05 1.08c-1.27.07-2.39.3-3.32.62-.98.34-1.82.8-2.61 1.59C.7 3.72.24 4.56-.1 5.54c-.32.93-.55 2.05-.62 3.32-.07 1.24-.08 1.67-.08 4.95s.01 3.72.08 4.95c.07 1.27.3 2.39.62 3.32.34.98.8 1.82 1.59 2.61.78.78 1.62 1.24 2.61 1.59.93.32 2.05.55 3.32.62 1.24.07 1.67.08 4.95.08s3.72-.01 4.95-.08c1.27-.07 2.39-.3 3.32-.62.98-.34 1.82-.8 2.61-1.59.78-.78 1.24-1.62 1.59-2.61.32-.93.55-2.05.62-3.32.07-1.24.08-1.67.08-4.95s-.01-3.72-.08-4.95c-.07-1.27-.3-2.39-.62-3.32-.34-.98-.8-1.82-1.59-2.61-.78-.78-1.62-1.24-2.61-1.59-.93-.32-2.05-.55-3.32-.62C15.44 0 15.07 0 12 0zM12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.32a4.16 4.16 0 1 1 0-8.32 4.16 4.16 0 0 1 0 8.32zM18.88 5.12a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
