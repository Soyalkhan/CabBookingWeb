// import React, { useState } from "react"
// import { Plus, Calendar, MapPin, Clock } from "lucide-react"

// export default function TopSearchBar() {
//   const [tripType, setTripType] = useState("outstation-one-way")
//   const [from, setFrom] = useState("")
//   const [stops, setStops] = useState([])
//   const [to, setTo] = useState("")
//   const [pickupDate, setPickupDate] = useState("2025-04-24")
//   const [pickupTime, setPickupTime] = useState("10:00")

//   const tripOptions = [
//     { value: "outstation-one-way", label: "Outstation One-Way" },
//     { value: "outstation-round", label: "Outstation Round Trip" },
//     { value: "local", label: "Local" },
//     { value: "airport-pickup", label: "Airport Pickup" },
//     { value: "airport-drop", label: "Airport Drop" }
//   ]

//   return (
//     <div className="bg-black text-white p-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-2">
//         {/* Trip Type */}
//         <div className="relative">
//           <label className="text-xs text-gray-400">TRIP TYPE</label>
//           <select
//             value={tripType}
//             onChange={e => setTripType(e.target.value)}
//             className="w-full bg-black border border-gray-600 text-white text-sm p-2 rounded"
//           >
//             {tripOptions.map(opt => (
//               <option key={opt.value} value={opt.value} className="bg-black text-white">
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* From */}
//         <div className="relative">
//           <label className="text-xs text-gray-400">FROM</label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="text"
//               value={from}
//               onChange={e => setFrom(e.target.value)}
//               placeholder="Mumbai"
//               className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
//             />
//           </div>
//         </div>



//         {/* To */}
//         <div className="relative">
//           <label className="text-xs text-gray-400">TO</label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="text"
//               value={to}
//               onChange={e => setTo(e.target.value)}
//               placeholder="Pune"
//               className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
//             />
          
//           </div>
//         </div>

//         {/* Pickup Date */}
//         <div className="relative">
//           <label className="text-xs text-gray-400">PICK - UP DATE</label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="date"
//               value={pickupDate}
//               onChange={e => setPickupDate(e.target.value)}
//               className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
//             />
//           </div>
//         </div>

//         {/* Pickup Time */}
//         <div className="relative">
//           <label className="text-xs text-gray-400">PICK - UP TIME</label>
//           <div className="relative">
//             <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="time"
//               value={pickupTime}
//               onChange={e => setPickupTime(e.target.value)}
//               className="w-full bg-black border border-gray-600 text-white pl-10 p-2 rounded"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-4">
//         <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md">
//           SEARCH
//         </button>
//       </div>
//     </div>
//   )
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";
import { useBooking } from "../components/BookingContext";

const libraries = ["places"];
const STORAGE_KEY = "bookingData";

// helper to get current datetime in "YYYY-MM-DDThh:mm" for datetime-local
function getCurrentDateTimeLocal() {
  const now = new Date();
  // offset for local timezone
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
}

export default function TopSearchBar() {
  const navigate = useNavigate();
  const { setBookingDetails } = useBooking();
  
  // load Google Maps JS
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const pickRef = useRef(null);
  const destRef = useRef(null);

  // form state
  const [tripType, setTripType]     = useState("one-way");
  const [from, setFrom]             = useState("");
  const [to, setTo]                 = useState("");
  const [tripStart, setTripStart]   = useState(getCurrentDateTimeLocal());
  const [tripEnd, setTripEnd]       = useState("");
  const [loading, setLoading]       = useState(false);

  // on mount, seed from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      if (data.tripType)    setTripType(data.tripType);
      if (data.pickup)      setFrom(data.pickup);
      if (data.destination) setTo(data.destination);
      if (data.tripStart)   setTripStart(data.tripStart);
      if (data.tripEnd)     setTripEnd(data.tripEnd);
    } catch (e) {
      console.warn("Invalid bookingData in localStorage");
    }
  }, []);

  // fire the route API, then save+navigate
  const handleSearch = async () => {
    if (
      !from ||
      !to ||
      !tripStart ||
      (tripType === "round-trip" && !tripEnd)
    ) {
      alert("Please fill all fields before searching.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/route/calculate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ from, to }),
        }
      );
      const data = await res.json();
      const km    = parseFloat(data.distance.replace(/[^0-9.]/g, ""));
      const tolls = data.tollSegments || 0;
      const time  = data.duration || "";

      const bookingData = {
        tripType,
        pickup: from,
        destination: to,
        distance: km,
        tolls,
        duration: time,
        tripStart,
        tripEnd: tripType === "round-trip" ? tripEnd : null,
      };

      // persist
      setBookingDetails(bookingData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingData));

      navigate("/booking-summary", { state: bookingData });
    } catch (err) {
      console.error(err);
      alert("Failed to calculate route—please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loadError) return <p>Error loading map scripts</p>;
  if (!isLoaded) return <p>Loading map autocomplete…</p>;

  return (
    <div className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Trip Type */}
        <div>
          <label className="text-xs text-gray-400">TRIP TYPE</label>
          <select
            value={tripType}
            onChange={e => setTripType(e.target.value)}
            className="w-full bg-black border border-gray-600 text-white text-sm p-2 rounded"
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
          </select>
        </div>

        {/* From */}
        <div>
          <label className="text-xs text-gray-400">FROM</label>
          <Autocomplete
            onLoad={auto => (pickRef.current = auto)}
            onPlaceChanged={() => {
              const place = pickRef.current.getPlace();
              setFrom(place.formatted_address || place.name);
            }}
          >
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={from}
                onChange={e => setFrom(e.target.value)}
                placeholder="Pickup city"
                className="w-full bg-black border border-gray-600 pl-10 p-2 rounded text-white text-sm"
              />
            </div>
          </Autocomplete>
        </div>

        {/* To */}
        <div>
          <label className="text-xs text-gray-400">TO</label>
          <Autocomplete
            onLoad={auto => (destRef.current = auto)}
            onPlaceChanged={() => {
              const place = destRef.current.getPlace();
              setTo(place.formatted_address || place.name);
            }}
          >
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={to}
                onChange={e => setTo(e.target.value)}
                placeholder="Destination city"
                className="w-full bg-black border border-gray-600 pl-10 p-2 rounded text-white text-sm"
              />
            </div>
          </Autocomplete>
        </div>

        {/* Trip Start */}
        <div>
          <label className="text-xs text-gray-400">TRIP START</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="datetime-local"
              value={tripStart}
              onChange={e => setTripStart(e.target.value)}
              min={getCurrentDateTimeLocal()}
              className="w-full bg-black border border-gray-600 pl-10 p-2 rounded text-white text-sm"
            />
          </div>
        </div>

        {/* Trip End (only for round-trip) */}
        {tripType === "round-trip" && (
          <div>
            <label className="text-xs text-gray-400">TRIP END</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="datetime-local"
                value={tripEnd}
                onChange={e => setTripEnd(e.target.value)}
                min={tripStart}
                className="w-full bg-black border border-gray-600 pl-10 p-2 rounded text-white text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-4">
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md"
        >
          {loading ? "Searching…" : "SEARCH"}
        </button>
      </div>
    </div>
  );
}
