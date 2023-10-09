import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>this is Contact page</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-xs"
      />
      <button className="btn">Submit</button>
    </div>
  );
};

export default Contact;
