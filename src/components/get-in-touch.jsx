"use client"

import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import React from "react"
const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    helpType: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    receiveUpdates: false,
  })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success message or redirect
    alert("Thank you for contacting us! We'll get back to you soon.")
    closeModal()

    // Reset form
    setFormData({
      helpType: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      receiveUpdates: false,
    })
  }

  return (
    <>
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-800">
            Let's discuss how we can provide the best taxi service for your travel needs.
          </p>
          <button
            onClick={openModal}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact us</h2>
                <p className="text-gray-700 mb-6">
                  Learn more about our taxi services and how we can help you with your transportation needs. Please fill
                  out the form and one of our representatives will contact you shortly.
                </p>
                <p className="text-sm text-gray-600">
                  *Required field. We will use your information according to our{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="helpType" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help you? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="helpType"
                      name="helpType"
                      value={formData.helpType}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 appearance-none"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="booking">Book a taxi</option>
                      <option value="inquiry">General inquiry</option>
                      <option value="feedback">Provide feedback</option>
                      <option value="complaint">File a complaint</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country/territory <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 appearance-none"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="receiveUpdates"
                      name="receiveUpdates"
                      type="checkbox"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="receiveUpdates" className="font-medium text-gray-700">
                      I would like to receive relevant updates from our company by email.
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-8 rounded-md transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GetInTouch
