import React, { useState } from "react"
import { Plus, Calendar, MapPin, Clock } from "lucide-react"

export default function TopSearchBar() {
  const [tripType, setTripType] = useState("outstation-one-way")
  const [from, setFrom] = useState("")
  const [stops, setStops] = useState([])
  const [to, setTo] = useState("")
  const [pickupDate, setPickupDate] = useState("2025-04-24")
  const [pickupTime, setPickupTime] = useState("10:00")

  const tripOptions = [
    { value: "outstation-one-way", label: "Outstation One-Way" },
    { value: "outstation-round", label: "Outstation Round Trip" },
    { value: "local", label: "Local" },
    { value: "airport-pickup", label: "Airport Pickup" },
    { value: "airport-drop", label: "Airport Drop" }
  ]

  return (
    <div className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-2">
        {/* Trip Type */}
        <div className="relative">
          <label className="text-xs text-gray-400">TRIP TYPE</label>
          <select
            value={tripType}
            onChange={e => setTripType(e.target.value)}
            className="w-full bg-black border border-gray-600 text-white text-sm p-2 rounded"
          >
            {tripOptions.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-black text-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* From */}
        <div className="relative">
          <label className="text-xs text-gray-400">FROM</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              value={from}
              onChange={e => setFrom(e.target.value)}
              placeholder="Mumbai"
              className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
            />
          </div>
        </div>



        {/* To */}
        <div className="relative">
          <label className="text-xs text-gray-400">TO</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              value={to}
              onChange={e => setTo(e.target.value)}
              placeholder="Pune"
              className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
            />
          
          </div>
        </div>

        {/* Pickup Date */}
        <div className="relative">
          <label className="text-xs text-gray-400">PICK - UP DATE</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="date"
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
              className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
            />
          </div>
        </div>

        {/* Pickup Time */}
        <div className="relative">
          <label className="text-xs text-gray-400">PICK - UP TIME</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="time"
              value={pickupTime}
              onChange={e => setPickupTime(e.target.value)}
              className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4">
        <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md">
          SEARCH
        </button>
      </div>
    </div>
  )
}