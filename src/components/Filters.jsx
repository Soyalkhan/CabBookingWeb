import React, { useState } from "react"

import { ChevronDown, ChevronUp, Filter, Car, ArrowUpDown } from "lucide-react"

export default function Filters({ carData, isMobile = false }) {
  const [cabTypeOpen, setCabTypeOpen] = useState(true)
  const [fuelTypeOpen, setFuelTypeOpen] = useState(true)
  const [modelTypeOpen, setModelTypeOpen] = useState(false)
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [activeTab, setActiveTab] = useState("cabType")

  // counts
  const cabTypeCounts = {
    HATCHBACK: carData.filter(c => c.type === "Hatchback").length,
    SEDAN:     carData.filter(c => c.type === "Sedan").length,
    SUV:       carData.filter(c => c.type === "SUV").length,
    MPV:       carData.filter(c => c.type === "MPV").length,
  }
  const fuelTypeCounts = {
    PETROL:   carData.filter(c => c.fuelType.includes("Petrol")).length,
    DIESEL:   carData.filter(c => c.fuelType.includes("Diesel")).length,
    ELECTRIC: carData.filter(c => c.fuelType.includes("Electric")).length,
    CNG:      carData.filter(c => c.fuelType.includes("CNG")).length,
  }

  // Desktop
  function DesktopFilters() {
    return (
      <div className="p-4 mb-4 border border-gray-300 rounded">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button className="text-blue-500 text-sm">Clear All</button>
        </div>

        {/* Cab Type */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Cab Type</h3>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 text-sm">Clear</button>
              <button onClick={() => setCabTypeOpen(v => !v)}>
                {cabTypeOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
            </div>
          </div>
          {cabTypeOpen && <>
            {Object.entries(cabTypeCounts).map(([key, count]) => (
              <div key={key} className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span className="text-sm">{key}</span>
                </label>
                <span className="text-sm text-gray-500">({count})</span>
              </div>
            ))}
          </>}
        </div>

        {/* Fuel Type */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Fuel Type</h3>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 text-sm">Clear</button>
              <button onClick={() => setFuelTypeOpen(v => !v)}>
                {fuelTypeOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
            </div>
          </div>
          {fuelTypeOpen && <>
            {Object.entries(fuelTypeCounts).map(([key, count]) => (
              <div key={key} className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span className="text-sm">{key}</span>
                </label>
                <span className="text-sm text-gray-500">({count})</span>
              </div>
            ))}
          </>}
        </div>

        {/* Model Type */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Model Type</h3>
            <button onClick={() => setModelTypeOpen(v => !v)}>
              {modelTypeOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
            </button>
          </div>
          {modelTypeOpen && (
            <p className="text-sm text-gray-500">No model filters available.</p>
          )}
        </div>
      </div>
    )
  }

  // Mobile
  // function MobileFilterButton() {
  //   return (
  //     <button
  //       onClick={() => setShowMobileFilter(true)}
  //       className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-2 rounded shadow-lg z-50"
  //     >
  //       All Filters
  //     </button>
  //   )
  // }

  function MobileFilterModal() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl h-[80vh] overflow-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold">Filters</h2>
            <div className="space-x-4">
              <button
                className="text-blue-500 text-sm"
                onClick={() => setShowMobileFilter(false)}
              >
                Cancel
              </button>
              <button className="text-blue-500 text-sm">Clear All</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="p-4">
            <div className="flex space-x-4 border-b mb-4">
              <button
                className={activeTab==="cabType"? "border-b-2 border-yellow-500 pb-1":"pb-1"}
                onClick={()=>setActiveTab("cabType")}
              >Cab Type</button>
              <button
                className={activeTab==="fuelType"? "border-b-2 border-yellow-500 pb-1":"pb-1"}
                onClick={()=>setActiveTab("fuelType")}
              >Fuel Type</button>
              <button
                className={activeTab==="modelType"? "border-b-2 border-yellow-500 pb-1":"pb-1"}
                onClick={()=>setActiveTab("modelType")}
              >Model Type</button>
            </div>

            {activeTab==="cabType" && <>
              {Object.entries(cabTypeCounts).map(([key,count])=>(
                <div key={key} className="flex justify-between items-center mb-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">{key}</span>
                  </label>
                  <span className="text-sm text-gray-500">({count})</span>
                </div>
              ))}
            </>}

            {activeTab==="fuelType" && <>
              {Object.entries(fuelTypeCounts).map(([key,count])=>(
                <div key={key} className="flex justify-between items-center mb-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">{key}</span>
                  </label>
                  <span className="text-sm text-gray-500">({count})</span>
                </div>
              ))}
            </>}

            {activeTab==="modelType" && (
              <p className="text-sm text-gray-500">No model filters available.</p>
            )}
          </div>

          <div className="p-4 border-t sticky bottom-0 bg-white">
            <button
              onClick={() => setShowMobileFilter(false)}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Mobile Bottom Nav
  function MobileBottomNav() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white border-t border-gray-700 z-40">
        <div className="grid grid-cols-3 text-center">
          <button
            className="py-3"
            onClick={() => { setActiveTab("modelType"); setShowMobileFilter(true) }}
          >
            <Car className="mx-auto mb-1" />
            <div className="text-xs">Car Model</div>
          </button>
          <button
            className="py-3 border-x border-gray-700"
            onClick={() => { setActiveTab("fuelType"); setShowMobileFilter(true) }}
          >
            <ArrowUpDown className="mx-auto mb-1" />
            <div className="text-xs">Sort</div>
          </button>
          <button
            className="py-3"
            onClick={() => { setActiveTab("cabType"); setShowMobileFilter(true) }}
          >
            <Filter className="mx-auto mb-1" />
            <div className="text-xs">All Filters</div>
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {!isMobile && <DesktopFilters />}
      {isMobile && (
        <>
          <MobileBottomNav />
          {showMobileFilter && <MobileFilterModal />}
          {/* {!showMobileFilter && <MobileFilterButton />} */}
        </>
      )}
    </>
  )
}
