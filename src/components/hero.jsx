// "use client"
// import React from 'react'
// import { useState } from "react"
// import { Calendar, Car, Briefcase, MapPin, Phone, Check } from "lucide-react"

// const Hero = () => {
//   const [tripType, setTripType] = useState("One-Way")

//   return (
//     <section className="relative w-full h-[600px] bg-black/70 text-white">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
//         style={{
//           backgroundImage: "url(/placeholder.svg?height=600&width=1200)",
//           filter: "brightness(0.4)",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 h-full flex flex-col justify-center">
//         <div className="max-w-5xl mx-auto w-full">
//           {/* Service Tabs */}
//           <div className="flex flex-wrap mb-8 border-b border-gray-700">
//             <div className="mr-8 mb-4 flex items-center text-white font-medium">
//               <Car className="h-6 w-6 mr-2" />
//               <span className="text-xl">Cabs</span>
//             </div>
//             <div className="mr-8 mb-4 flex items-center text-gray-400 font-medium">
//               <Car className="h-6 w-6 mr-2" />
//               <span className="text-xl">Taxi Packages</span>
//             </div>
//             <div className="mr-8 mb-4 flex items-center text-gray-400 font-medium">
//               <Briefcase className="h-6 w-6 mr-2" />
//               <span className="text-xl">Holiday Packages</span>
//             </div>
//           </div>

//           {/* Trip Type Selection */}
//           <div className="flex flex-wrap mb-8">
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full flex items-center ${tripType === "One-Way" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("One-Way")}
//             >
//               {tripType === "One-Way" && <Check className="h-4 w-4 mr-1" />}
//               One-Way
//             </button>
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full ${tripType === "Round Trip" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("Round Trip")}
//             >
//               Round Trip
//             </button>
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full ${tripType === "Multi City" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("Multi City")}
//             >
//               Multi City
//             </button>
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full ${tripType === "Local" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("Local")}
//             >
//               Local
//             </button>
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full ${tripType === "Airport Pickup" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("Airport Pickup")}
//             >
//               Airport Pickup
//             </button>
//             <button
//               className={`mr-4 mb-4 px-4 py-2 rounded-full ${tripType === "Airport Drop" ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
//               onClick={() => setTripType("Airport Drop")}
//             >
//               Airport Drop
//             </button>
//           </div>

//           {/* Booking Form */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <div>
//               <label className="block mb-2">Pickup City</label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="Ghaziabad"
//                   className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2">Destination City</label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="Ex: Agra"
//                   className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2">Trip Date</label>
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="DD-MM-YYYY"
//                   className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2">Enter Phone No</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="tel"
//                   placeholder="eg: 9999955712"
//                   className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>
//           </div>

//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
"use client"
import React, { useState } from "react"
import { Calendar, Car, Briefcase, MapPin, Phone, Check , ArrowRightLeft } from "lucide-react"

const Hero = () => {
  const [tripType, setTripType] = useState("One-Way")
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedCar, setSelectedCar] = useState("")
  const [fare, setFare] = useState(null)

  const carRates = {
    "Suzuki Desire": 15,
    "Suzuki Ertiga": 22,
    "Toyota Innova": 28,
    "Mahindra TUV": 18
  }

  const handleFareCalculation = async () => {
    if (!pickup || !destination || !selectedCar) return

    const origin = encodeURIComponent(pickup)
    const dest = encodeURIComponent(destination)
    const apiKey = "enter you r google api key here"
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&key=${apiKey}`

    const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`)
    const data = await response.json()

    const distanceInKm = data?.rows?.[0]?.elements?.[0]?.distance?.value / 1000
    if (!distanceInKm || !carRates[selectedCar]) return

    const calculatedFare = distanceInKm * carRates[selectedCar]
    setFare(calculatedFare.toFixed(2))
  }

  return (
    <section className="relative w-full h-[800px] bg-black/10 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/banner2.png)",
          filter: "brightness(1)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Service Tabs */}
          <div className="flex flex-wrap mb-8 border-b border-gray-700">
            <div className="mr-8 mb-4 flex items-center text-white font-medium">
              <Car className="h-6 w-6 mr-2" />
              <span className="text-xl">Cabs</span>
            </div>
            <div className="mr-8 mb-4 flex items-center text-gray-400 font-medium">
              <Car className="h-6 w-6 mr-2" />
              <span className="text-xl">Taxi Packages</span>
            </div>
            <div className="mr-8 mb-4 flex items-center text-gray-400 font-medium">
              <Briefcase className="h-6 w-6 mr-2" />
              <span className="text-xl">Holiday Packages</span>
            </div>
          </div>

          {/* Trip Type Selection */}
          <div className="flex flex-wrap mb-8">
            {["One-Way", "Round Trip", "Multi City", "Local", "Airport Pickup", "Airport Drop"].map((type) => (
              <button
                key={type}
                className={`mr-4 mb-4 px-4 py-2 rounded-full flex items-center ${tripType === type ? "bg-yellow-500 text-black" : "bg-transparent border border-gray-600"}`}
                onClick={() => setTripType(type)}
              >
                {tripType === type && <Check className="h-4 w-4 mr-1" />}
                {type}
              </button>
            ))}
          </div>

          {/* Booking Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 justify-between align-center">
            <div>
              <label className="block mb-2">Pickup City</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Ghaziabad"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                
              </div>
              
            </div>

  


            <div>
              
              <label className="block mb-2">Destination City</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Ex: Agra"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Select Car</label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full pl-4 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Car*</option>
                {Object.keys(carRates).map((car) => (
                  <option key={car} value={car}>{car}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Enter Phone No</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  placeholder="eg: 9999955712"
                  className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleFareCalculation}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors"
          >
            Search
          </button>

          {fare && (
            <div className="mt-4 text-xl font-semibold text-yellow-400">
              Estimated Fare: ₹{fare}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
