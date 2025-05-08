
// import React from "react"
// import { useState, useRef, useEffect } from "react"
// import {
//   User,
//   MapPin,
//   Users,
//   Calendar,
//   Phone,
//   PhoneCall,
//   FileCheck,
//   Car,
//   CheckCircle2,
//   AlertCircle,
//   X,
//   Mountain,
// } from "lucide-react"

// const carOptions = [
//   {
//     id: "suv",
//     name: "SUV (Toyota Innova/Ertiga)",
//     capacity: 6,
//     price: "9000/day/person", 
//     image: "/innova.png",
//   },
//   {
//     id: "sedan",
//     name: "Sedan (Swift Dzire/ Etios)",
//     capacity: 4,
//     price: "9000/day/person",
//     image: "/swift_desire.jpg",
//   },
//   {
//     id: "tempo",
//     name: "Tempo Traveller Force",
//     capacity: 12,
//     price: "18000/day/person",
//     image: "/tempo.png",
//   },
//   {
//     id: "luxury",
//     name: "Maruti Ertiga",
//     capacity: 6,
//     price: "9000/day/person",
//     image: "/ertiga.png",
//   },
// ]

// const CharDhamBookingForm = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     pickupAddress: "",
//     travelers: "2",
//     journeyStartDate: "",
//     journeyEndDate: "",
//     mobileNumber: "",
//     alternateNumber: "",
//     hasPasses: false,
//     selectedCar: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const modalRef = useRef(null)
//   const web3formkey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
//   console.log(web3formkey);
  
//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal()
//       }
//     }

//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside)
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [isModalOpen])

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }

//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [isModalOpen])

//   const openModal = () => {
//     setIsModalOpen(true)
//     setIsSubmitted(false)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     // Reset form after a delay to avoid seeing the reset while closing
//     setTimeout(() => {
//       if (!isSubmitted) {
//         resetForm()
//       }
//     }, 300)
//   }

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       pickupAddress: "",
//       travelers: "2",
//       journeyStartDate: "",
//       journeyEndDate: "",
//       mobileNumber: "",
//       alternateNumber: "",
//       hasPasses: false,
//       selectedCar: "",
//     })
//     setErrors({})
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.pickupAddress.trim()) {
//       newErrors.pickupAddress = "Pickup address is required"
//     }

//     if (!formData.journeyStartDate) {
//       newErrors.journeyStartDate = "Journey start date is required"
//     }

//     if (!formData.journeyEndDate) {
//       newErrors.journeyEndDate = "Journey end date is required"
//     }

//     if (new Date(formData.journeyEndDate) <= new Date(formData.journeyStartDate)) {
//       newErrors.journeyEndDate = "End date must be after start date"
//     }

//     if (!formData.mobileNumber.trim()) {
//       newErrors.mobileNumber = "Mobile number is required"
//     } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
//       newErrors.mobileNumber = "Please enter a valid 10-digit mobile number"
//     }

//     if (formData.alternateNumber && !/^[6-9]\d{9}$/.test(formData.alternateNumber)) {
//       newErrors.alternateNumber = "Please enter a valid 10-digit mobile number"
//     }

//     if (!formData.selectedCar) {
//       newErrors.selectedCar = "Please select a car"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev }
//         delete newErrors[name]
//         return newErrors
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       return
//     }

//     setIsLoading(true)

//     // Simulate API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500))
//       setIsSubmitted(true)
//       resetForm()
//     } catch (error) {
//       console.error("Error submitting form:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex justify-center items-center w-full">
//       <button
//         className="bg-yellow-400 text-gray-800 border-none py-4 px-8 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-md hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-lg"
//         onClick={openModal}
//       >
//         <Mountain size={20} />
//         Book Your Char Dham Yatra
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4 animate-fadeIn">
//           <div
//             className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-slideUp"
//             ref={modalRef}
//           >
//             <button
//               className="absolute top-4 right-4 bg-transparent border-none text-gray-500 cursor-pointer z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 hover:text-gray-800"
//               onClick={closeModal}
//             >
//               <X size={24} />
//             </button>

//             <div className="p-8">
//               <div className="text-center mb-8">
//                 <h2 className="text-4xl text-gray-800 mb-2 font-bold">Char Dham Yatra Booking</h2>
//                 <p className="text-gray-600 text-base">
//                   Book your spiritual journey to Gangotri, Yamunotri, Kedarnath, and Badrinath
//                   <strong> 9Days/10Nights </strong> with us. Experience the divine beauty of the Uttrakhand and the sacred shrines.
//                 </p>
//               </div>

//               {isSubmitted ? (
//                 <div className="flex flex-col items-center text-center p-8 bg-yellow-50 rounded-xl border border-yellow-200">
//                   <CheckCircle2 size={48} className="text-yellow-400 mb-4" />
//                   <h3 className="text-2xl text-gray-800 mb-4 font-semibold">Booking Request Submitted!</h3>
//                   <p className="text-gray-600 mb-6">
//                     Thank you for booking with us. We will contact you shortly to confirm your Char Dham Yatra journey.
//                   </p>
//                   <button
//                     className="bg-yellow-400 text-gray-800 border-none py-3 px-6 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-md"
//                     onClick={() => setIsSubmitted(false)}
//                   >
//                     Book Another Journey
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="name" className="flex items-center gap-2 font-semibold text-gray-800">
//                       <User size={18} />
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter your full name"
//                       className={`py-3 px-4 border ${
//                         errors.name ? "border-red-500" : "border-gray-300"
//                       } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                     />
//                     {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="pickupAddress" className="flex items-center gap-2 font-semibold text-gray-800">
//                       <MapPin size={18} />
//                       Pickup Address
//                     </label>
//                     <textarea
//                       id="pickupAddress"
//                       name="pickupAddress"
//                       value={formData.pickupAddress}
//                       onChange={handleChange}
//                       placeholder="Enter your complete pickup address"
//                       className={`py-3 px-4 border ${
//                         errors.pickupAddress ? "border-red-500" : "border-gray-300"
//                       } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                       rows={3}
//                     />
//                     {errors.pickupAddress && <span className="text-red-500 text-sm mt-1">{errors.pickupAddress}</span>}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="travelers" className="flex items-center gap-2 font-semibold text-gray-800">
//                         <Users size={18} />
//                         Number of Travelers
//                       </label>
//                       <select
//                         id="travelers"
//                         name="travelers"
//                         value={formData.travelers}
//                         onChange={handleChange}
//                         className="py-3 px-4 border border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
//                       >
//                         {[...Array(15)].map((_, i) => (
//                           <option key={i} value={i + 1}>
//                             {i + 1} {i === 0 ? "Traveler" : "Travelers"}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="hasPasses" className="flex  gap-2 font-semibold text-gray-800">
//                         <FileCheck size={18} />
//                         Already registerd for Char Dham Yatra?
//                       </label>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id="hasPasses"
//                           name="hasPasses"
//                           checked={formData.hasPasses}
//                           onChange={handleChange}
//                           className="w-5 h-5 accent-yellow-400"
//                         />
//                         <span className="font-normal">Yes, I have required passes</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="journeyStartDate" className="flex items-center gap-2 font-semibold text-gray-800">
//                         <Calendar size={18} />
//                         Journey Start Date
//                       </label>
//                       <input
//                         type="date"
//                         id="journeyStartDate"
//                         name="journeyStartDate"
//                         value={formData.journeyStartDate}
//                         onChange={handleChange}
//                         min={new Date().toISOString().split("T")[0]}
//                         className={`py-3 px-4 border ${
//                           errors.journeyStartDate ? "border-red-500" : "border-gray-300"
//                         } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                       />
//                       {errors.journeyStartDate && (
//                         <span className="text-red-500 text-sm mt-1">{errors.journeyStartDate}</span>
//                       )}
//                     </div>

//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="journeyEndDate" className="flex items-center gap-2 font-semibold text-gray-800">
//                         <Calendar size={18} />
//                         Journey End Date
//                       </label>
//                       <input
//                         type="date"
//                         id="journeyEndDate"
//                         name="journeyEndDate"
//                         value={formData.journeyEndDate}
//                         onChange={handleChange}
//                         min={formData.journeyStartDate || new Date().toISOString().split("T")[0]}
//                         className={`py-3 px-4 border ${
//                           errors.journeyEndDate ? "border-red-500" : "border-gray-300"
//                         } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                       />
//                       {errors.journeyEndDate && (
//                         <span className="text-red-500 text-sm mt-1">{errors.journeyEndDate}</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="mobileNumber" className="flex items-center gap-2 font-semibold text-gray-800">
//                         <Phone size={18} />
//                         Mobile Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="mobileNumber"
//                         name="mobileNumber"
//                         value={formData.mobileNumber}
//                         onChange={handleChange}
//                         placeholder="Enter your 10-digit mobile number"
//                         maxLength={10}
//                         className={`py-3 px-4 border ${
//                           errors.mobileNumber ? "border-red-500" : "border-gray-300"
//                         } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                       />
//                       {errors.mobileNumber && <span className="text-red-500 text-sm mt-1">{errors.mobileNumber}</span>}
//                     </div>

//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="alternateNumber" className="flex items-center gap-2 font-semibold text-gray-800">
//                         <PhoneCall size={18} />
//                         Alternate Number (Optional)
//                       </label>
//                       <input
//                         type="tel"
//                         id="alternateNumber"
//                         name="alternateNumber"
//                         value={formData.alternateNumber}
//                         onChange={handleChange}
//                         placeholder="Enter alternate contact number"
//                         maxLength={10}
//                         className={`py-3 px-4 border ${
//                           errors.alternateNumber ? "border-red-500" : "border-gray-300"
//                         } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
//                       />
//                       {errors.alternateNumber && (
//                         <span className="text-red-500 text-sm mt-1">{errors.alternateNumber}</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-2 mt-2">
//                     <label className="flex items-center gap-2 font-semibold text-gray-800">
//                       <Car size={18} />
//                       Select Car
//                     </label>
//                   <p className="text-sm text-red-600">*These rates are only applicable if you are booking from (Delhi NCR,Rishikesh,Dehradun,Haridwar,Nainital,Meerut)</p>
//                     <div className="grid grid-cols-1 gap-4 mt-2">
//                       {carOptions.map((car) => (
//                         <div
//                           key={car.id}
//                           className={`grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-4 p-4 border ${
//                             formData.selectedCar === car.id
//                               ? "border-yellow-400 bg-yellow-50 shadow-md"
//                               : "border-gray-300"
//                           } rounded-lg cursor-pointer transition-all duration-300 hover:border-yellow-400 hover:shadow-md`}
//                           onClick={() => setFormData((prev) => ({ ...prev, selectedCar: car.id }))}
//                         >
//                           <div className="w-full md:w-[100px] h-[70px] overflow-hidden rounded-md">
//                             <img
//                               src={car.image || "/placeholder.svg"}
//                               alt={car.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="flex flex-col">
//                             <h4 className="text-base font-medium text-gray-800 mb-2">{car.name}</h4>
//                             <p className="text-sm text-gray-600 mb-1">Capacity: {car.capacity} passengers</p>
//                             <p className="text-sm font-semibold text-gray-800">₹{car.price.toLocaleString()}</p>
//                           </div>
//                           <div className="flex items-center justify-center">
//                             <input
//                               type="radio"
//                               id={`car-${car.id}`}
//                               name="selectedCar"
//                               value={car.id}
//                               checked={formData.selectedCar === car.id}
//                               onChange={handleChange}
//                               className="w-5 h-5 accent-yellow-400"
//                             />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     {errors.selectedCar && <span className="text-red-500 text-sm mt-1">{errors.selectedCar}</span>}
//                   </div>

//                   <div className="flex flex-col gap-6 mt-2">
//                     <div className="flex items-start gap-2 text-sm text-gray-600">
//                       <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
//                       <p>
//                         By submitting this form, you agree to our{" "}
//                         <a
//                           href="/terms-conditions"
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-yellow-500 font-semibold hover:underline"
//                         >
//                           Terms and Conditions
//                         </a>{" "}
//                         and{" "}
//                         <a
//                           href="/refund-policy"
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-yellow-500 font-semibold hover:underline"
//                         >
//                           Refund & Cancellation Policy
//                         </a>
//                       </p>
//                     </div>
//                     <button
//                       type="submit"
//                       className="bg-yellow-400 text-gray-800 border-none py-4 px-8 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 self-center hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-md disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
//                       disabled={isLoading}
//                     >
//                       {isLoading ? "Processing..." : "Book Your Yatra"}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CharDhamBookingForm



import React from "react"
import { useState, useRef, useEffect } from "react"
import {
  User,
  MapPin,
  Users,
  Calendar,
  Phone,
  PhoneCall,
  FileCheck,
  Car,
  CheckCircle2,
  AlertCircle,
  X,
  Mountain,
  Loader2,
} from "lucide-react"

const carOptions = [
  {
    id: "suv",
    name: "SUV (Toyota Innova/Ertiga)",
    capacity: 6,
    price: "9000/day/person",
    image: "/innova.png",
  },
  {
    id: "sedan",
    name: "Sedan (Swift Dzire/ Etios)",
    capacity: 4,
    price: "9000/day/person",
    image: "/swift_desire.jpg",
  },
  {
    id: "tempo",
    name: "Tempo Traveller Force",
    capacity: 12,
    price: "18000/day/person",
    image: "/tempo.png",
  },
  {
    id: "luxury",
    name: "Maruti Ertiga",
    capacity: 6,
    price: "9000/day/person",
    image: "/ertiga.png",
  },
]

const CharDhamBookingForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added email field
    pickupAddress: "",
    travelers: "2",
    journeyStartDate: "",
    journeyEndDate: "",
    mobileNumber: "",
    alternateNumber: "",
    hasPasses: false,
    selectedCar: "",
    message: "", // Added message field
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const openModal = () => {
    setIsModalOpen(true)
    setIsSubmitted(false)
    setSubmitError("")
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Reset form after a delay to avoid seeing the reset while closing
    setTimeout(() => {
      if (!isSubmitted) {
        resetForm()
      }
    }, 300)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      pickupAddress: "",
      travelers: "2",
      journeyStartDate: "",
      journeyEndDate: "",
      mobileNumber: "",
      alternateNumber: "",
      hasPasses: false,
      selectedCar: "",
      message: "",
    })
    setErrors({})
    setSubmitError("")
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.pickupAddress.trim()) {
      newErrors.pickupAddress = "Pickup address is required"
    }

    if (!formData.journeyStartDate) {
      newErrors.journeyStartDate = "Journey start date is required"
    }

    if (!formData.journeyEndDate) {
      newErrors.journeyEndDate = "Journey end date is required"
    }

    if (new Date(formData.journeyEndDate) <= new Date(formData.journeyStartDate)) {
      newErrors.journeyEndDate = "End date must be after start date"
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required"
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number"
    }

    if (formData.alternateNumber && !/^[6-9]\d{9}$/.test(formData.alternateNumber)) {
      newErrors.alternateNumber = "Please enter a valid 10-digit mobile number"
    }

    if (!formData.selectedCar) {
      newErrors.selectedCar = "Please select a car"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitError("")

    try {
      // Get selected car details
      const selectedCarDetails = carOptions.find((car) => car.id === formData.selectedCar) || {}

      // Prepare data for API
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobileNumber,
        alternateNumber: formData.alternateNumber || "",
        travelers: formData.travelers,
        pickupAddress: formData.pickupAddress,
        startDate: formData.journeyStartDate,
        endDate: formData.journeyEndDate,
        hasPasses: formData.hasPasses,
        selectedCar: selectedCarDetails.name || "",
        car_capacity: selectedCarDetails.capacity || "",
        car_price: selectedCarDetails.price || "",
        message: formData.message || "Char Dham Yatra Booking Request",
      }

      console.log("Data to send:", dataToSend)
      // Send data to your custom API
      const response = await fetch("https://cab-booking-backend.vercel.app/api/contact/chardham", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        resetForm()
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError(error.message || "Failed to submit form. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center w-full">
      <button
        className="bg-yellow-400 text-gray-800 border-none py-4 px-8 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-md hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-lg"
        onClick={openModal}
      >
        <Mountain size={20} />
        Book Your Char Dham Yatra
      </button>




      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-slideUp"
            ref={modalRef}
          >
            <button
              className="absolute top-4 right-4 bg-transparent border-none text-gray-500 cursor-pointer z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 hover:text-gray-800"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl text-gray-800 mb-2 font-bold">Char Dham Yatra Booking</h2>
                <p className="text-gray-600 text-base">
                  Book your spiritual journey to Gangotri, Yamunotri, Kedarnath, and Badrinath
                  <strong> 9Days/10Nights </strong> with us. Experience the divine beauty of the Uttrakhand and the
                  sacred shrines.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center text-center p-8 bg-yellow-50 rounded-xl border border-yellow-200">
                  <CheckCircle2 size={48} className="text-yellow-400 mb-4" />
                  <h3 className="text-2xl text-gray-800 mb-4 font-semibold">Booking Request Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking with us. We will contact you shortly to confirm your Char Dham Yatra journey.
                  </p>
                  <button
                    className="bg-yellow-400 text-gray-800 border-none py-3 px-6 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-md"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Book Another Journey
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <AlertCircle size={16} />
                        {submitError}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="flex items-center gap-2 font-semibold text-gray-800">
                      <User size={18} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`py-3 px-4 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="flex items-center gap-2 font-semibold text-gray-800">
                      <User size={18} />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`py-3 px-4 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="pickupAddress" className="flex items-center gap-2 font-semibold text-gray-800">
                      <MapPin size={18} />
                      Pickup Address
                    </label>
                    <textarea
                      id="pickupAddress"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      placeholder="Enter your complete pickup address"
                      className={`py-3 px-4 border ${
                        errors.pickupAddress ? "border-red-500" : "border-gray-300"
                      } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                      rows={3}
                    />
                    {errors.pickupAddress && <span className="text-red-500 text-sm mt-1">{errors.pickupAddress}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="travelers" className="flex items-center gap-2 font-semibold text-gray-800">
                        <Users size={18} />
                        Number of Travelers
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="py-3 px-4 border border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                      >
                        {[...Array(15)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1} {i === 0 ? "Traveler" : "Travelers"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="hasPasses" className="flex gap-2 font-semibold text-gray-800">
                        <FileCheck size={18} />
                        Already registerd for Char Dham Yatra?
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="hasPasses"
                          name="hasPasses"
                          checked={formData.hasPasses}
                          onChange={handleChange}
                          className="w-5 h-5 accent-yellow-400"
                        />
                        <span className="font-normal">Yes, I have required passes</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="journeyStartDate" className="flex items-center gap-2 font-semibold text-gray-800">
                        <Calendar size={18} />
                        Journey Start Date
                      </label>
                      <input
                        type="date"
                        id="journeyStartDate"
                        name="journeyStartDate"
                        value={formData.journeyStartDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`py-3 px-4 border ${
                          errors.journeyStartDate ? "border-red-500" : "border-gray-300"
                        } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                      />
                      {errors.journeyStartDate && (
                        <span className="text-red-500 text-sm mt-1">{errors.journeyStartDate}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="journeyEndDate" className="flex items-center gap-2 font-semibold text-gray-800">
                        <Calendar size={18} />
                        Journey End Date
                      </label>
                      <input
                        type="date"
                        id="journeyEndDate"
                        name="journeyEndDate"
                        value={formData.journeyEndDate}
                        onChange={handleChange}
                        min={formData.journeyStartDate || new Date().toISOString().split("T")[0]}
                        className={`py-3 px-4 border ${
                          errors.journeyEndDate ? "border-red-500" : "border-gray-300"
                        } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                      />
                      {errors.journeyEndDate && (
                        <span className="text-red-500 text-sm mt-1">{errors.journeyEndDate}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobileNumber" className="flex items-center gap-2 font-semibold text-gray-800">
                        <Phone size={18} />
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter your 10-digit mobile number"
                        maxLength={10}
                        className={`py-3 px-4 border ${
                          errors.mobileNumber ? "border-red-500" : "border-gray-300"
                        } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                      />
                      {errors.mobileNumber && <span className="text-red-500 text-sm mt-1">{errors.mobileNumber}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="alternateNumber" className="flex items-center gap-2 font-semibold text-gray-800">
                        <PhoneCall size={18} />
                        Alternate Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="alternateNumber"
                        name="alternateNumber"
                        value={formData.alternateNumber}
                        onChange={handleChange}
                        placeholder="Enter alternate contact number"
                        maxLength={10}
                        className={`py-3 px-4 border ${
                          errors.alternateNumber ? "border-red-500" : "border-gray-300"
                        } rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100`}
                      />
                      {errors.alternateNumber && (
                        <span className="text-red-500 text-sm mt-1">{errors.alternateNumber}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2 font-semibold text-gray-800">
                      <Car size={18} />
                      Select Car
                    </label>
                    <p className="text-sm text-red-600">
                      *These rates are only applicable if you are booking from (Delhi NCR, Rishikesh, Dehradun,
                      Haridwar, Nainital, Meerut)
                    </p>
                    <div className="grid grid-cols-1 gap-4 mt-2">
                      {carOptions.map((car) => (
                        <div
                          key={car.id}
                          className={`grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-4 p-4 border ${
                            formData.selectedCar === car.id
                              ? "border-yellow-400 bg-yellow-50 shadow-md"
                              : "border-gray-300"
                          } rounded-lg cursor-pointer transition-all duration-300 hover:border-yellow-400 hover:shadow-md`}
                          onClick={() => setFormData((prev) => ({ ...prev, selectedCar: car.id }))}
                        >
                          <div className="w-full md:w-[100px] h-[70px] overflow-hidden rounded-md">
                            <img
                              src={car.image || "/placeholder.svg"}
                              alt={car.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-base font-medium text-gray-800 mb-2">{car.name}</h4>
                            <p className="text-sm text-gray-600 mb-1">Capacity: {car.capacity} passengers</p>
                            <p className="text-sm font-semibold text-gray-800">₹{car.price}</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <input
                              type="radio"
                              id={`car-${car.id}`}
                              name="selectedCar"
                              value={car.id}
                              checked={formData.selectedCar === car.id}
                              onChange={handleChange}
                              className="w-5 h-5 accent-yellow-400"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.selectedCar && <span className="text-red-500 text-sm mt-1">{errors.selectedCar}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="flex items-center gap-2 font-semibold text-gray-800">
                      <User size={18} />
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requirements or questions?"
                      className="py-3 px-4 border border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                      rows={3}
                    />
                  </div>

                  <div className="flex flex-col gap-6 mt-2">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      <p>
                        By submitting this form, you agree to our{" "}
                        <a
                          href="/terms-conditions"
                          target="_blank"
                          rel="noreferrer"
                          className="text-yellow-500 font-semibold hover:underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/refund-policy"
                          target="_blank"
                          rel="noreferrer"
                          className="text-yellow-500 font-semibold hover:underline"
                        >
                          Refund & Cancellation Policy
                        </a>
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="bg-yellow-400 text-gray-800 border-none py-4 px-8 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 self-center hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-md disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={20} className="animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        "Book Your Yatra"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CharDhamBookingForm
