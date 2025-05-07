import React from "react"
const AnnouncementBar = () => {
    // List of cities with proper formatting
    const cities = ["Delhi", "Kotdwar", "Haridwar", "Rishikesh", "Dehradun", "Mussoorie"]
  
    // Create announcement text with proper spacing and dots
    const announcementText =
     "Chardham yatra booking is live" + "Bookmycab.co is a leading taxi service provider in "  +
      cities
        .map((city, index) => {
          if (index === cities.length - 1) {
            return city
          }
          return `${city} • `
        })
        .join("")
  
    return (
      <div className="bg-yellow-300 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-[2px]">
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText} 
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
          </div>
  
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-[2px]">
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
            <span className="text-gray-600 text-[10px] md:text-[12px] font-semibold tracking-wider mx-4">
              {announcementText}
            </span>
          </div>
        </div>
      </div>
    )
  }
  
  export default AnnouncementBar
  