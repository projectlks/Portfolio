import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact-me"
      className={`p-8 min-h-screen overflow-hidden flex flex-col justify-center bg-transparent ${
        theme === 'light' ? ' text-gray-900' : ' text-gray-100'
      }`}
    >
  
      <h1 className="text-4xl text-center xl:text-5xl font-semibold mb-4">
      Contact Me
          </h1>
      <p
        className={`text-lg text-center mb-6 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}
      >
        Feel free to reach out via email or through the contact form below.
      </p>
      <div className={` mx-auto w-full md:w-[400px] p-6 rounded-lg shadow-md ${theme === 'light' ? 'bg-red-600' : 'bg-green-500'}`}>
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your form handling URL
          method="POST"
          className="flex flex-col space-y-4"
        >
          <label className="flex flex-col">
            <span
          
            >
              Name:
            </span>
            <input
              type="text"
              name="name"
              required
              className={`border p-2 rounded-lg ${
                theme === 'light'
                  ? 'border-gray-300 bg-white text-gray-900'
                  : 'border-gray-600 bg-gray-700 text-gray-200'
              }`}
            />
          </label>
          <label className="flex flex-col">
            <span
           
            >
              Email:
            </span>
            <input
              type="email"
              name="email"
              required
              className={`border p-2 rounded-lg ${
                theme === 'light'
                  ? 'border-gray-300 bg-white text-gray-900'
                  : 'border-gray-600 bg-gray-700 text-gray-200'
              }`}
            />
          </label>
          <label className="flex flex-col">
            <span
           
            >
              Message:
            </span>
            <textarea
              name="message"
              rows={4}
              required
              className={`border p-2 rounded-lg ${
                theme === 'light'
                  ? 'border-gray-300 bg-white text-gray-900'
                  : 'border-gray-600 bg-gray-700 text-gray-200'
              }`}
            />
          </label>
          <button
            type="submit"
            className={`py-2 px-4 rounded-lg transition-all  ${
              theme === 'light'
                ? 'bg-[#100259] text-white hover:bg-[#08002b]'
                : 'bg-[#f0f0f0] text-gray-900 hover:bg-gray-300'
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
