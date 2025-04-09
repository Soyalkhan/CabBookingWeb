import { ThumbsUp, UserCheck, Home } from "lucide-react"
import React from "react"
const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "Fair prices",
      description: "Choose the best offer at your price",
    },
    {
      id: 2,
      icon: <UserCheck className="h-6 w-6" />,
      title: "Verified drivers",
      description: "Choose your driver based on their rating, reviews, and car",
    },
    {
      id: 3,
      icon: <Home className="h-6 w-6" />,
      title: "Door-to-door service",
      description: "You can be picked up and dropped off directly at your desired location",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">
          So, why choose{" "}
          <span className="relative inline-block">
            us
            <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-300 -z-10"></span>
            <span className="text-black">.</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
