"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import React from "react"
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saloni Gupta",
      location: "New Delhi, Delhi",
      image: "/placeholder.svg?height=200&width=200",
      testimonial:
        "The driver was punctual and professional. The cab was clean and comfortable. I had a great experience and will definitely use this service again for my future travels. Highly recommended!",
    },
    {
      id: 2,
      name: "Ankita Mahawar",
      location: "Pune, Maharashtra",
      image: "/placeholder.svg?height=200&width=200",
      testimonial:
        "The service was excellent- thankyou. My driver was waiting at arrival for me with clear sign. He introduced himself, was very polite and friendly and drove me without delay. I will definitely use your service again. Your service, and reliability, made a long stressful journey end positively. Everything went perfectly! I will be pleased to recommend this service to my family and friends.",
    },
    {
      id: 3,
      name: "Harshit",
      location: "Bengaluru, Karnataka",
      image: "/placeholder.svg?height=200&width=200",
      testimonial:
        "Excellent service from booking to drop-off. The driver was knowledgeable about the routes and very courteous. The online booking process was simple and user-friendly. I appreciate the timely service and will book again.",
    },
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(1)

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index) => {
    setActiveTestimonial(index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Satisfied Customers</h2>

        {/* Customer Avatars */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                activeTestimonial === index ? "scale-110" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => handleDotClick(index)}
            >
              <div
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 ${
                  activeTestimonial === index ? "border-yellow-500" : "border-yellow-300"
                } transition-all duration-300`}
              >
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <div className="w-16 h-0.5 bg-gray-300 mx-auto mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <Quote className="absolute text-yellow-200 h-24 w-24 -top-6 -left-6 opacity-50" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500 flex-shrink-0">
                <img
                  src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-gray-700 italic mb-6 relative z-10">{testimonials[activeTestimonial].testimonial}</p>
                <div>
                  <h3 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-yellow-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-yellow-500" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-yellow-500 w-6" : "bg-gray-300 hover:bg-yellow-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-yellow-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-yellow-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
