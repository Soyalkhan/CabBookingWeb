import React, { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

// Rewritten CabCard without Next-specific UI components
export default function CabCard({ car }) {
  const [expandedInclusions, setExpandedInclusions] = useState(false)
  const [expandedCancellation, setExpandedCancellation] = useState(false)

  const toggleInclusions = () => {
    setExpandedInclusions(prev => !prev)
    if (expandedCancellation) setExpandedCancellation(false)
  }

  const toggleCancellation = () => {
    setExpandedCancellation(prev => !prev)
    if (expandedInclusions) setExpandedInclusions(false)
  }

  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg mb-4">
      <div className="flex flex-col md:flex-row">
        {/* Image & Fuel Badge */}
        <div className="p-4 flex items-center justify-center md:w-1/4">
          <div>
            <img
              src={car.image || "/placeholder.svg"}
              alt={car.name}
              className="w-full h-auto rounded"
            />
            <div className="mt-2 bg-teal-500 text-white text-center py-1 rounded">
              {car.fuelType.join(", ")}
            </div>
          </div>
        </div>

        {/* Car Details */}
        <div className="p-4 md:w-2/4">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-bold">{car.name}</h3>
            <span className="ml-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">
              ★ {car.rating}
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-4">or similar</p>

          <div className="flex items-center space-x-4 mb-4 text-sm">
            <span>{car.seats} Seats</span>
            <span>•</span>
            <span>{car.ac ? "AC" : "Non-AC"}</span>
            <span>•</span>
            <span>{car.bags} Bag{car.bags > 1 ? "s" : ""}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500">✨</span>
            <span className="ml-2">
              Roof carrier available starting @ INR 158
            </span>
          </div>
        </div>

        {/* Pricing & Action */}
        <div className="p-4 bg-gray-50 md:w-1/4 flex flex-col justify-between">
          <div>
            <div className="text-right mb-1">
              <span className="text-green-600 text-sm">
                {Math.floor(Math.random() * 10) + 15}% off
              </span>
              <span className="text-gray-400 line-through text-sm ml-2">
                ₹{car.price + car.charges}
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold">₹{car.price}</span>
            </div>
            <div className="text-right text-gray-500 text-sm">
              + ₹{car.charges} (Taxes & Charges)
            </div>
          </div>

          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded">
            SELECT CAB
          </button>
        </div>
      </div>

      {/* Policy Dropdowns */}
      <div className="border-t border-gray-200">
        <div className="flex border-b">
          <button
            onClick={toggleInclusions}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center ${
              expandedInclusions ? "bg-blue-50 text-blue-500" : "text-gray-600"
            }`}
          >
            Inclusions & Exclusions
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${expandedInclusions ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={toggleCancellation}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center ${
              expandedCancellation ? "bg-blue-50 text-blue-500" : "text-gray-600"
            }`}
          >
            Cancellation Policy
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${expandedCancellation ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Inclusions Content */}
        {expandedInclusions && (
          <div className="p-4 bg-white space-y-3">
            {[
              "State Tax, Toll Charges & Driver Allowance included",
              "Only One Pickup and Drop",
              "149 Kms included. ₹16/Km beyond that",
              "Waiting time up to 45 mins included. ₹100/30 mins after that",
              "Free Cancellation till 1 hr before ride"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Cancellation Content */}
        {expandedCancellation && (
          <div className="p-4 bg-white space-y-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-200">Time</th>
                  <th className="py-2 px-4 border border-gray-200">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">
                    Until 1 hour before start time
                  </td>
                  <td className="py-2 px-4 border border-gray-200 text-green-600 font-medium">
                    FREE
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">
                    After 1 hour before start time
                  </td>
                  <td className="py-2 px-4 border border-gray-200 text-red-500 font-medium">
                    No Refund
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-700">
              MMT service charges are non-refundable.
            </p>
            <p className="text-gray-700">
              Fee compensates drivers for time, effort, and fuel spent reaching the pickup.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
