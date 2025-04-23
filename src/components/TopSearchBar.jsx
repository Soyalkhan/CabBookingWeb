"use client"
import { Plus, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TopSearchBar() {
  return (
    <div className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="relative">
          <label className="text-xs text-gray-400">TRIP TYPE</label>
          <div className="relative">
            <Select defaultValue="outstation-one-way">
              <SelectTrigger className="bg-black border border-gray-600 text-white">
                <SelectValue placeholder="Outstation One-Way" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="outstation-one-way">Outstation One-Way</SelectItem>
                <SelectItem value="outstation-round">Outstation Round Trip</SelectItem>
                <SelectItem value="local">Local</SelectItem>
                <SelectItem value="airport-pickup">Airport Pickup</SelectItem>
                <SelectItem value="airport-drop">Airport Drop</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          <label className="text-xs text-gray-400">FROM</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="bg-black border border-gray-600 text-white pl-10" placeholder="Mumbai" />
          </div>
        </div>

        <div className="flex items-end">
          <Button variant="ghost" className="text-yellow-500 h-10 border border-gray-600 rounded-full">
            <Plus className="h-5 w-5 mr-1" /> ADD STOPS
          </Button>
        </div>

        <div className="relative">
          <label className="text-xs text-gray-400">TO</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="bg-black border border-gray-600 text-white pl-10" placeholder="Pune" />
            <div className="absolute top-0 right-2 bg-red-500 text-white text-xs px-1 rounded">new</div>
          </div>
        </div>

        <div className="relative">
          <label className="text-xs text-gray-400">PICK - UP DATE</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="bg-black border border-gray-600 text-white pl-10"
              type="text"
              value="Thu, 24 Apr 2025"
              readOnly
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs text-gray-400">PICK - UP TIME</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="bg-black border border-gray-600 text-white pl-10" type="text" value="10:00 AM" readOnly />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4">
        <Button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md">
          SEARCH
        </Button>
      </div>
    </div>
  )
}
