import { useState } from "react";
import React from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      service: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., send the data to an API)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#372a45] text-white p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl md:text-3xl font-medium mb-8">
          LET'S GET IN TOUCH
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-white/30 rounded text-white placeholder:text-white/70 px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-white/30 rounded text-white placeholder:text-white/70 px-4 py-2"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent border border-white/30 rounded text-white placeholder:text-white/70 px-4 py-2"
          />

          <select
            onChange={handleServiceChange}
            value={formData.service}
            className="bg-transparent border border-white/30 rounded text-white placeholder:text-white/70 px-4 py-2 w-full"
          >
            <option value="" disabled>
              Select Services
            </option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="ui-design">UI/UX Design</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border border-white/30 rounded text-white placeholder:text-white/70 min-h-[120px] w-full px-4 py-2"
          />

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-white text-[#372a45] hover:bg-white/90 px-8 py-2 font-medium rounded-md"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
