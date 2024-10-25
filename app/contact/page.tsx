'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send formData to backend or email service
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div>
        <div className="flex h-screen flex-grow items-end justify-center">
          <form
            className=" w-full max-w-[90%] rounded-lg bg-gray-300 p-6 shadow-md"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="mb-2 block">
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
                required
              />
            </label>
            <label htmlFor="email" className="mb-2 block">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
                required
              />
            </label>
            <label htmlFor="message" className="mb-2 block">
              Message
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea mt-1 block w-full"
                rows={3}
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
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
