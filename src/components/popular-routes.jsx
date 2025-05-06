import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import CharDhamYatraFrom from "./CharDhamBookingForm";
const PopularRoutes = ({ onRouteClick }) => {
  const routes = [
    {
      id: 1,
      from: "Delhi",
      to: "Agra",
      image: "/places/agra.jpg",
      taxiCount: "100+ Taxis",
      slug: "delhi-to-agra-cabs",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Auli",
      image: "/places/auli.jpg",
      taxiCount: "100+ Taxis",
      slug: "gurgaon-taxi-service",
    },
    {
      id: 3,
      from: "Delhi",
      to: "Nainital",
      image: "/places/nainital.jpg",
      taxiCount: "100+ Taxis",
      slug: "delhi-to-nainital-cabs",
    },
    {
      id: 4,
      from: "Delhi",
      to: "Manali",
      image: "/places/manali.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 5,
      from: "Delhi",
      to: "gulmarg",
      image: "/places/gulmorg.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 6,
      from: "Delhi",
      to: "jodhpur",
      image: "/places/jodhpur.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 7,
      from: "Delhi",
      to: "lansdowne",
      image: "/places/lansdowne.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 8,
      from: "Delhi",
      to: "rishikesh",
      image: "/places/rishikesh.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 9,
      from: "Delhi",
      to: "masoorie",
      image: "/places/massorie.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
    {
      id: 10,
      from: "Delhi",
      to: "jaisalmer",
      image: "/places/jesalmer.jpg",
      taxiCount: "100+ Taxis",
      slug: "noida-to-agra-cabs",
    },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12 mt-12 p-8 text-amber-200 ">
            <h2 className="text-[30px] md:text-[40px] font-semibold mb-3">
              Best Cab Service In Gurgaon And Delhi or Kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie
            </h2>
            <marquee className="bg-yellow-300 border-1 border-black" direction="left" scrollamount="15" loop="infinite">
            <p className="text-gray-600 p-2 text-[20px] md:text-[30px] font-semibold mb-3 tracking-wider">
              

              Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •
              • Bookmycab.co is a leading taxi service provider in Delhi kotdwar and Haridwar,Rishikesh,dehradoon,and Mussoorie •

            </p>
            </marquee>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
              Popular Routes
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route) => (
              <div
                key={route.id}
                onClick={() => onRouteClick(route.slug)}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={route.image || "/placeholder.svg"}
                    alt={`${route.from} To ${route.to}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className=" absolute bottom-0 left-0 w-full bg-[#00000087] bg-opacity-50 text-white p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
                    <h3 className="text-xl font-bold mb-1">
                      {route.from} To {route.to}
                    </h3>
                    <p className="flex items-center">
                      {route.taxiCount}
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-white md:p-8 p-4 ">
        <div className="text-center mb-8">
          <span className="text-yellow-500 text-3xl">Book your cab for</span>
          <h1 className="text-[30px] md:text-[60px] font-bold mb-3">
            Char Dham Yarta{" "}
          </h1>
        </div>
        <div className="relative overflow-hidden">
          <picture>
            <source srcSet="/banner6mobile.png" media="(max-width: 767px)" />
            <img
              src="/banner6.png"
              alt="Banner"
              className=" rounded-3xl w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </picture>
        </div>
      </section>


      <section className="py-4 bg-white p-4 ">
        <div className="text-center mb-8">
        <CharDhamYatraFrom />
        </div>
      </section>
    </>
  );
};

export default PopularRoutes;
