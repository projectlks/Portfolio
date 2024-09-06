import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact-me" className="p-8 bg-gradient-to-r ">
      <h2 className="text-3xl font-semibold text-center mb-4">Contact Me</h2>
      <p className="text-lg text-center mb-6">Feel free to reach out via email or through the contact form below.</p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your form handling URL
          method="POST"
          className="flex flex-col space-y-4"
        >
          <label className="flex flex-col">
            <span className="font-medium">Name:</span>
            <input
              type="text"
              name="name"
              required
              className="border border-gray-300 p-2 rounded-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Email:</span>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 p-2 rounded-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Message:</span>
            <textarea
              name="message"
              rows={4}
              required
              className="border border-gray-300 p-2 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="bg-[#100259] text-white py-2 px-4 rounded-lg hover:bg-[#08002b] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
