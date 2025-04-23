"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter, Car, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Filters({ carData, isMobile = false }) {
  const [cabTypeOpen, setCabTypeOpen] = useState(true)
  const [fuelTypeOpen, setFuelTypeOpen] = useState(true)
  const [modelTypeOpen, setModelTypeOpen] = useState(false)
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [activeTab, setActiveTab] = useState("cabType")

  // Filter counts
  const cabTypeCounts = {
    HATCHBACK: carData.filter((car) => car.type === "Hatchback").length,
    SEDAN: carData.filter((car) => car.type === "Sedan").length,
    SUV: carData.filter((car) => car.type === "SUV").length,
    MPV: carData.filter((car) => car.type === "MPV").length,
  }

  const fuelTypeCounts = {
    PETROL: carData.filter((car) => car.fuelType.includes("Petrol")).length,
    DIESEL: carData.filter((car) => car.fuelType.includes("Diesel")).length,
    ELECTRIC: carData.filter((car) => car.fuelType.includes("Electric")).length,
    CNG: carData.filter((car) => car.fuelType.includes("CNG")).length,
  }

  // Desktop Filters
  const DesktopFilters = () => (
    <Card className="p-4 mb-4 border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <button className="text-blue-500 text-sm">CLEAR ALL</button>
      </div>

      {/* Cab Type Filter */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Cab Type</h3>
          <div className="flex items-center">
            <button className="text-gray-400 text-sm mr-2">CLEAR</button>
            <button onClick={() => setCabTypeOpen(!cabTypeOpen)}>
              {cabTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {cabTypeOpen && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="hatchback" />
                <label htmlFor="hatchback" className="text-sm">
                  HATCHBACK
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.HATCHBACK})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="sedan" />
                <label htmlFor="sedan" className="text-sm">
                  SEDAN
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.SEDAN})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="suv" />
                <label htmlFor="suv" className="text-sm">
                  SUV
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.SUV})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mpv" />
                <label htmlFor="mpv" className="text-sm">
                  MPV
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.MPV})</span>
            </div>
          </div>
        )}
      </div>

      {/* Fuel Type Filter */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Fuel Type</h3>
          <div className="flex items-center">
            <button className="text-gray-400 text-sm mr-2">CLEAR</button>
            <button onClick={() => setFuelTypeOpen(!fuelTypeOpen)}>
              {fuelTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {fuelTypeOpen && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="petrol" />
                <label htmlFor="petrol" className="text-sm">
                  PETROL
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.PETROL})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="diesel" />
                <label htmlFor="diesel" className="text-sm">
                  DIESEL
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.DIESEL})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="electric" />
                <label htmlFor="electric" className="text-sm">
                  ELECTRIC
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.ELECTRIC})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="cng" />
                <label htmlFor="cng" className="text-sm">
                  CNG
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.CNG})</span>
            </div>
          </div>
        )}
      </div>

      {/* Model Type Filter */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Model Type</h3>
          <div className="flex items-center">
            <button className="text-gray-400 text-sm mr-2">CLEAR</button>
            <button onClick={() => setModelTypeOpen(!modelTypeOpen)}>
              {modelTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </Card>
  )

  // Mobile Filter Button
  const MobileFilterButton = () => (
    <Button
      onClick={() => setShowMobileFilter(true)}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-none px-8 py-2 shadow-lg"
    >
      All Filters
    </Button>
  )

  // Mobile Filter Modal
  const MobileFilterModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${showMobileFilter ? "block" : "hidden"}`}>
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl h-[80vh] overflow-auto">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Filters</h2>
            <div className="flex space-x-4">
              <button className="text-blue-500 text-sm" onClick={() => setShowMobileFilter(false)}>
                Cancel
              </button>
              <button className="text-blue-500 text-sm">Clear All</button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="p-4">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="cabType">Cab Type</TabsTrigger>
            <TabsTrigger value="fuelType">Fuel Type</TabsTrigger>
            <TabsTrigger value="modelType">Model Type</TabsTrigger>
          </TabsList>

          <TabsContent value="cabType" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-hatchback" />
                <label htmlFor="mobile-hatchback" className="text-sm">
                  HATCHBACK
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.HATCHBACK})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-sedan" />
                <label htmlFor="mobile-sedan" className="text-sm">
                  SEDAN
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.SEDAN})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-suv" />
                <label htmlFor="mobile-suv" className="text-sm">
                  SUV
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.SUV})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-mpv" />
                <label htmlFor="mobile-mpv" className="text-sm">
                  MPV
                </label>
              </div>
              <span className="text-sm text-gray-500">({cabTypeCounts.MPV})</span>
            </div>
          </TabsContent>

          <TabsContent value="fuelType" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-petrol" />
                <label htmlFor="mobile-petrol" className="text-sm">
                  PETROL
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.PETROL})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-diesel" />
                <label htmlFor="mobile-diesel" className="text-sm">
                  DIESEL
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.DIESEL})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-electric" />
                <label htmlFor="mobile-electric" className="text-sm">
                  ELECTRIC
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.ELECTRIC})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-cng" />
                <label htmlFor="mobile-cng" className="text-sm">
                  CNG
                </label>
              </div>
              <span className="text-sm text-gray-500">({fuelTypeCounts.CNG})</span>
            </div>
          </TabsContent>

          <TabsContent value="modelType">
            <p className="text-sm text-gray-500">No model type filters available</p>
          </TabsContent>
        </Tabs>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <Button
            onClick={() => setShowMobileFilter(false)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )

  // Mobile Bottom Navigation
  const MobileBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white border-t border-gray-700 z-40">
      <div className="grid grid-cols-3 text-center">
        <button
          className="py-3 flex flex-col items-center justify-center w-full"
          onClick={() => {
            setActiveTab("modelType")
            setShowMobileFilter(true)
          }}
        >
          <Car className="h-5 w-5 mb-1" />
          <span className="text-xs">Car Model</span>
        </button>

        <button
          className="py-3 flex flex-col items-center justify-center w-full border-x border-gray-700"
          onClick={() => {
            setActiveTab("sort")
            setShowMobileFilter(true)
          }}
        >
          <ArrowUpDown className="h-5 w-5 mb-1" />
          <span className="text-xs">Sort</span>
        </button>

        <button
          className="py-3 flex flex-col items-center justify-center w-full"
          onClick={() => {
            setActiveTab("cabType")
            setShowMobileFilter(true)
          }}
        >
          <Filter className="h-5 w-5 mb-1" />
          <span className="text-xs">All Filters</span>
        </button>
      </div>
    </div>
  )

  return (
    <>
      {!isMobile && <DesktopFilters />}
      {isMobile && (
        <>
          <MobileBottomNav />
          {showMobileFilter && <MobileFilterModal />}
        </>
      )}
    </>
  )
}
