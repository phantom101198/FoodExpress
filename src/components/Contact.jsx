// const Contact = () => {
//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <p>This is Contact Us Page.</p>
//             <form>
//                 <input className="" placeholder="name"></input>
//                 <input className="" placeholder="message"></input>
//                 <button>Submit</button>
//             </form>

//         </div>
//     )
// }

// export default Contact;


// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    topic: "order",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log it – later you can integrate API
    console.log("Contact form data:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
      topic: "order",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions, issues with an order, or want to partner with us?
        Fill out the form below and our team will reach out to you.
      </p>

      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Topic */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What is this about?
            </label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="order">Issue with an Order</option>
              <option value="payment">Payment / Refund</option>
              <option value="partner">Restaurant Partnership</option>
              <option value="other">Something Else</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your issue or query..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2.5 rounded-full text-white font-medium bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Side info */}
      <div className="mt-6 text-sm text-gray-500">
        <p>
          You can also reach us at{" "}
          <span className="font-medium text-gray-700">
            support@foodexpress.com
          </span>
        </p>
        <p>Support hours: 9:00 AM – 11:00 PM (All days)</p>
      </div>
    </div>
  );
};

export default Contact;
