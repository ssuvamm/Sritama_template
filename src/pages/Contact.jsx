import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend or email service
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:h-[120vh] w-screen bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed flex-grow md:bg-cover ">
        <div className="flex flex-grow justify-center items-end h-screen">
          <form
            className=" max-w-[90%] w-full p-6 bg-gray-300 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="block mb-2">
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input block w-full mt-1"
                required
              />
            </label>
            <label htmlFor="email" className="block mb-2">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input block w-full mt-1"
                required
              />
            </label>
            <label htmlFor="message" className="block mb-2">
              Message
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea block w-full mt-1"
                rows="3"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
