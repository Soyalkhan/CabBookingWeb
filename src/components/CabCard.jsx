"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CabCard({ car }) {
  const [expandedInclusions, setExpandedInclusions] = useState(null)
  const [expandedCancellation, setExpandedCancellation] = useState(null)

  const toggleInclusions = (id) => {
    if (expandedInclusions === id) {
      setExpandedInclusions(null)
    } else {
      setExpandedInclusions(id)
      setExpandedCancellation(null)
    }
  }

  const toggleCancellation = (id) => {
    if (expandedCancellation === id) {
      setExpandedCancellation(null)
    } else {
      setExpandedCancellation(id)
      setExpandedInclusions(null)
    }
  }

  return (
    <Card className="overflow-hidden border border-gray-300 rounded-lg mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 flex items-center justify-center md:w-1/4">
          <div>
            <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-auto" />
            <div className="bg-teal-500 text-white text-center py-1 mt-2 rounded">CNG</div>
          </div>
        </div>

        <div className="p-4 md:w-2/4">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-bold">{car.name}</h3>
            <span className="ml-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">★ {car.rating}</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">or similar</p>

          <div className="flex items-center space-x-4 mb-4">
            <span>{car.seats} Seats</span>
            <span>•</span>
            <span>AC</span>
            <span>•</span>
            <span>{car.bags} Bag</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500">✨</span>
            <span className="ml-2">Roof carrier available with this car starting @ INR 158</span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 md:w-1/4 flex flex-col justify-between">
          <div>
            <div className="text-right">
              <span className="text-green-600 text-sm">{Math.floor(Math.random() * 10) + 15}% off</span>
              <span className="text-gray-400 line-through text-sm ml-2">₹{car.price + 500}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold">₹{car.price}</span>
            </div>
            <div className="text-right text-gray-500 text-sm">+ ₹{car.charges} (Taxes & Charges)</div>
          </div>

          <Button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">SELECT CAB</Button>
        </div>
      </div>

      {/* Policy and Details Dropdowns */}
      <div className="border-t border-gray-200">
        <div className="flex border-b">
          <button
            onClick={() => toggleInclusions(car.id)}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center ${
              expandedInclusions === car.id ? "bg-blue-50 text-blue-500" : "text-gray-600"
            }`}
          >
            Inclusions and Exclusions
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${expandedInclusions === car.id ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={() => toggleCancellation(car.id)}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center ${
              expandedCancellation === car.id ? "bg-blue-50 text-blue-500" : "text-gray-600"
            }`}
          >
            Cancellation Policy
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${expandedCancellation === car.id ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Inclusions and Exclusions Content */}
        {expandedInclusions === car.id && (
          <div className="p-4 bg-white">
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>State Tax, Toll Charges & Driver Allowance included</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>Only One Pickup and Drop</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>
                  <strong>149 Kms</strong> included. <strong>₹16/Km</strong> will be charged beyond that
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>
                  Waiting time upto <strong>45 mins</strong> included. <strong>₹100.0/30 mins</strong> after that
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span>
                  Free Cancellation till <strong>1 hr before ride</strong>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Cancellation Policy Content */}
        {expandedCancellation === car.id && (
          <div className="p-4 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left border border-gray-200">Time</th>
                    <th className="py-2 px-4 text-left border border-gray-200">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border border-gray-200">
                      Until <strong>9:00 AM, Thu 24 Apr</strong>
                      <br />
                      <span className="text-sm text-gray-500">1 hour before start time</span>
                    </td>
                    <td className="py-2 px-4 border border-gray-200 text-green-600 font-medium">FREE</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-200">
                      After <strong>9:00 AM, Thu 24 Apr</strong>
                    </td>
                    <td className="py-2 px-4 border border-gray-200 text-red-500 font-medium">No Refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-gray-700">
                MMT service charges are non-refundable. However, if the cab details are not shared in time, free
                cancellation will be provided.
              </p>
              <p className="text-gray-700">
                Fee is charged to compensate drivers for the time, effort and fuel spent while trying to reach the
                pickup location.
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
