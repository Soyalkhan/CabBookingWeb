import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
const TemplatesShowcase = ({ onRouteClick }) => {

  const temples = [
    {
      id: 1,
      from: "Delhi",
      to: "Badrinath",
      image: "/temples/badarinath.jpg",
      taxiCount: "80+ Taxis",
      slug: "delhi-to-badrinath-cabs",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Dharidevi",
      image: "/temples/dharidevi.jpg",
      taxiCount: "65+ Taxis",
      slug: "delhi-to-dharidevi-cabs",
    },
    {
      id: 3,
      from: "Delhi",
      to: "Gangotri",
      image: "/temples/Gangotri.jpg",
      taxiCount: "90+ Taxis",
      slug: "delhi-to-gangotri-cabs",
    },
    {
      id: 4,
      from: "Delhi",
      to: "Haridwar",
      image: "/temples/haridwar.jpg",
      taxiCount: "120+ Taxis",
      slug: "delhi-to-haridwar-cabs",
    },
    {
      id: 5,
      from: "Delhi",
      to: "Kainchi Dham",
      image: "/temples/Kainchi Dham.jpg",
      taxiCount: "70+ Taxis",
      slug: "delhi-to-kainchi-dham-cabs",
    },
    {
      id: 6,
      from: "Delhi",
      to: "Kedarnath",
      image: "/temples/kedarnath.jpg",
      taxiCount: "95+ Taxis",
      slug: "delhi-to-kedarnath-cabs",
    },
    {
      id: 7,
      from: "Delhi",
      to: "Sidhbali Mandir",
      image: "/temples/sidhbali mandir.jpg",
      taxiCount: "60+ Taxis",
      slug: "delhi-to-sidhbali-mandir-cabs",
    },
    {
      id: 8,
      from: "Delhi",
      to: "Yamunotri",
      image: "/temples/Yamunotri.jpg",
      taxiCount: "85+ Taxis",
      slug: "delhi-to-yamunotri-cabs",
    },
  ]

  return (
    <>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 ">
  
          <div className="text-center mb-8">
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
              Plan by temple
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {temples.map((temples) => (
              <div
                key={temples.id}
                onClick={() => onRouteClick(temples.slug)}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={temples.image || "/placeholder.svg"}
                    alt={`${temples.from} To ${temples.to}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className=" absolute bottom-0 left-0 w-full bg-[#00000087] bg-opacity-50 text-white p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
                    <h3 className="text-xl font-bold mb-1">
                      {temples.from} To {temples.to}
                    </h3>
                    <p className="flex items-center">
                      {temples.taxiCount}
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default TemplatesShowcase;
