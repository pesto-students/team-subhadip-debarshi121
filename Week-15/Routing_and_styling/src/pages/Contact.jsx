import { useState } from "react";

const Contact = () => {
  const [displayMessage, setDisplayMessage] = useState(false);

  const sendMessage = () => {
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
    }, 3000);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
        <div className="lg:w-6/12 bg-gray-100 rounded flex flex-col w-full md:py-8 p-10 mt-4 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            CONTACT
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Reach out to me by filling up the form
          </p>
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="subject"
              className="leading-7 text-sm text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button
            onClick={sendMessage}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3 h-5">
            {displayMessage && "Message sent successfully!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
