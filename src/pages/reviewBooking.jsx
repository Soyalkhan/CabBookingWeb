import React, { useState } from "react";
import { MapPin, Calendar, Clock, CheckCircle, XCircle, ChevronDown, ChevronUp, Car, Luggage, Users, Star, Info, CreditCard } from 'lucide-react';

const ReviewBooking = () => {
  const [showFareBreakup, setShowFareBreakup] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("part");
  const [couponCode, setCouponCode] = useState("");
  const [addRoofCarrier, setAddRoofCarrier] = useState(false);
  const [usePickupAsBilling, setUsePickupAsBilling] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#0a192f] text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Review Booking</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Booking Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trip Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Outstation Round Trip</div>
            
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="flex-1">
                <div className="font-semibold text-lg">
                  Delhi cantt railway Junction, Kirby Place, Delhi Cantonment, New Delhi, Delhi, India
                </div>
                <div className="text-gray-600">Delhi, India</div>
              </div>
              
              <div className="flex items-center my-2 md:my-0">
              <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div className="h-1 w-16 bg-gray-300 mx-2"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-400"></div>
              </div>
              
              <div className="flex-1 md:text-right">
                <div className="font-semibold text-lg">Mumbai</div>
                <div className="text-gray-600">Maharashtra, India</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Calendar className="h-4 w-4 mr-2" />
              <span>17 Jun, 10:00 AM - 04 Jul</span>
            </div>
          </div>

          {/* Car Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold">Indica, Swift</h2>
                  <div className="ml-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" fill="white" />
                      <span>4.2</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm">or similar</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="w-24 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Car className="h-12 w-12 text-blue-500" />
                </div>
                <div className="mt-1 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                  CNG
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-4 text-gray-700">
              <Users className="h-4 w-4 mr-2" />
              <span>4 Seats</span>
              <span className="mx-2">•</span>
              <span>AC</span>
              <span className="mx-2">•</span>
              <Luggage className="h-4 w-4 mr-2" />
              <span>1 Bag</span>
            </div>
          </div>

          {/* Inclusions/Exclusions */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Inclusions/Exclusions</h2>
              <button className="text-blue-500 text-sm">View Policies</button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Driver Allowance included</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>3530 Kms included. ₹12.5/Km will be charged beyond that</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Waiting time upto 45 mins included. ₹100.0/30 mins after that</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Free cancellation till 1 hr before ride</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Toll Charges, State Tax & Night charges excluded</span>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Cancellation Policy</h2>
              <button className="text-blue-500 text-sm">View Cancellation Policy</button>
            </div>
            
            <div className="flex items-center">
              <span className="text-green-600 font-medium">Free cancellation until</span>
              <span className="ml-1">9:00 AM, Tue 17 Jun</span>
              <span className="ml-2 text-gray-500 text-sm">| 1 hours before pick up time</span>
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Special Requests</h2>
            
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="roofCarrier"
                  checked={addRoofCarrier}
                  onChange={() => setAddRoofCarrier(!addRoofCarrier)}
                  className="h-5 w-5 text-blue-500"
                />
                <div className="ml-3">
                  <label htmlFor="roofCarrier" className="font-medium">Roof Carrier</label>
                  <p className="text-gray-500 text-sm">Car with roof carrier for adjusting extra luggage</p>
                </div>
              </div>
              <div className="font-semibold">₹158</div>
            </div>
          </div>

          {/* Traveller Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Traveller Details</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Pickup Details</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                defaultValue="Delhi cantt railway Junction, Kirby Place, Delhi Cantonment, New Delhi, Delhi, India"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Traveller Contact Details</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <select className="p-3 border border-gray-300 rounded-lg">
                  <option value="">GENDER</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="flex">
                  <div className="bg-gray-100 p-3 border border-gray-300 rounded-l-lg">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="MOBILE NO."
                    className="flex-1 p-3 border border-gray-300 rounded-r-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="EMAIL ID"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center">
                <span className="mr-2">Or</span>
                <button className="text-blue-500 font-medium flex items-center">
                  <Info className="h-4 w-4 mr-1" />
                  LOG INTO EXISTING ACCOUNT
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="usePickupLocation"
                checked={usePickupAsBilling}
                onChange={() => setUsePickupAsBilling(!usePickupAsBilling)}
                className="h-5 w-5 text-blue-500"
              />
              <label htmlFor="usePickupLocation" className="ml-2">
                Use pickup location as billing address
              </label>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              By proceeding to book, I agree to MakeMyTrip's{" "}
              <a href="#" className="text-blue-500">Privacy Policy</a>,{" "}
              <a href="#" className="text-blue-500">User Agreement</a>,{" "}
              <a href="#" className="text-blue-500">Terms of Service</a> &{" "}
              <a href="#" className="text-blue-500">Cancellation Rules</a>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Details */}
        <div className="space-y-6">
          {/* Cab Details Notification */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Cab & driver details will be shared </span>
                <span className="font-bold">30 mins </span>
                <span>before ride.</span>
              </div>
            </div>
          </div>

          {/* Coupon & Offers */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Coupon & Offers</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="ENTER A COUPON"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                APPLY
              </button>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Payment Options</h2>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="part"
                    checked={paymentMethod === "part"}
                    onChange={() => setPaymentMethod("part")}
                    className="h-4 w-4 text-blue-500"
                  />
                  <div className="ml-3">
                    <div className="font-medium">Part Pay</div>
                    <div className="text-sm text-gray-500">Pay rest to the driver</div>
                  </div>
                </div>
                <div className="font-semibold">₹9,416</div>
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="full"
                    checked={paymentMethod === "full"}
                    onChange={() => setPaymentMethod("full")}
                    className="h-4 w-4 text-blue-500"
                  />
                  <div className="ml-3">
                    <div className="font-medium">Full Pay</div>
                    <div className="text-sm text-gray-500">Full amount</div>
                  </div>
                </div>
                <div className="font-semibold">₹46,698</div>
              </label>
            </div>
            
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 font-medium">
              PAY NOW
            </button>
            
            <button 
              className="w-full flex items-center justify-between mt-4 text-blue-500 font-medium"
              onClick={() => setShowFareBreakup(!showFareBreakup)}
            >
              <span>View Fare Break up</span>
              {showFareBreakup ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            
            {showFareBreakup && (
              <div className="mt-4 space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span className="font-medium">₹39,883</span>
                </div>
                <div className="flex justify-between">
                  <span>Driver Charges</span>
                  <span className="font-medium">₹4,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span className="font-medium">₹2,315</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">₹46,698</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;