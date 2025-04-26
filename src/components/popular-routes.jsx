import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import React from 'react'

const PopularRoutes = ({ onRouteClick }) => {
  const routes = [
    {
      id: 1,
      from: "Delhi",
      to: "Agra",
      image: "/placeholder.svg?height=300&width=400",
      taxiCount: "100+ Taxis",
      slug: "delhi-to-agra-cabs",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Taxi Service",
      image: "/placeholder.svg?height=300&width=400",
      taxiCount: "100+ Taxis",
      slug: "gurgaon-taxi-service",
    },
    {
      id: 3,
      from: "Delhi",
      to: "Nainital",
      image: "/placeholder.svg?height=300&width=400",
      taxiCount: "100+ Taxis",
      slug: "delhi-to-nainital-cabs",
    },
    {
      id: 4,
      from: "Delhi",
      to: "Kotdwar",
      image: "/placeholder.svg?height=300&width=400",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 mt-12">
          <h2 className="text-[30px] md:text-[40px] font-bold mb-3">Best Cab Service In Gurgaon And Delhi or uttrakhand</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bookmycab.co offers city taxis, inter-city cabs, and local cabs at hourly packages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              onClick={() => onRouteClick(route.slug)}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={route.image || "/placeholder.svg"}
                  alt={`${route.from} To ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">
                    {route.from} To {route.to}
                  </h3>
                  <p className="flex items-center">
                    {route.taxiCount}
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes
