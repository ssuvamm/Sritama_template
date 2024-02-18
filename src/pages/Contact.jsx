import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed flex-grow md:bg-cover ">
      <div className="bg-purple-400 w-full   py-[2%] px-[0.8%] absolute top-[60vh]">
        <h2 className="text-center">Contact Me</h2>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Enter Message"
              rows="5"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
