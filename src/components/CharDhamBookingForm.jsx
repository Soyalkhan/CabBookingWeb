
import React from "react";
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
} from "lucide-react"
import "./CharDhamBookingForm.css"

const carOptions = [
  {
    id: "suv",
    name: "SUV (Toyota Innova/Ertiga)",
    capacity: 6,
    price: 25000,
    image: "/images/suv.jpg",
  },
  {
    id: "sedan",
    name: "Sedan (Swift Dzire/Toyota Etios)",
    capacity: 4,
    price: 18000,
    image: "/images/sedan.jpg",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    capacity: 12,
    price: 35000,
    image: "/images/tempo.jpg",
  },
  {
    id: "luxury",
    name: "Luxury Car (Toyota Fortuner)",
    capacity: 6,
    price: 40000,
    image: "/images/luxury.jpg",
  },
]

const CharDhamBookingForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    pickupAddress: "",
    travelers: "2",
    journeyStartDate: "",
    journeyEndDate: "",
    mobileNumber: "",
    alternateNumber: "",
    hasPasses: false,
    selectedCar: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
      pickupAddress: "",
      travelers: "2",
      journeyStartDate: "",
      journeyEndDate: "",
      mobileNumber: "",
      alternateNumber: "",
      hasPasses: false,
      selectedCar: "",
    })
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
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

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      resetForm()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="char-dham-booking-wrapper">
      <button className="book-now-btn" onClick={openModal}>
        <Mountain size={20} />
        Book Your Char Dham Yatra
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container" ref={modalRef}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="char-dham-booking-container">
              <div className="booking-header">
                <h2>Char Dham Yatra Booking</h2>
                <p>Book your spiritual journey to Gangotri, Yamunotri, Kedarnath, and Badrinath</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle2 size={48} />
                  <h3>Booking Request Submitted!</h3>
                  <p>
                    Thank you for booking with us. We will contact you shortly to confirm your Char Dham Yatra journey.
                  </p>
                  <button className="book-again-btn" onClick={() => setIsSubmitted(false)}>
                    Book Another Journey
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label htmlFor="name">
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
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pickupAddress">
                      <MapPin size={18} />
                      Pickup Address
                    </label>
                    <textarea
                      id="pickupAddress"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      placeholder="Enter your complete pickup address"
                      className={errors.pickupAddress ? "error" : ""}
                      rows={3}
                    />
                    {errors.pickupAddress && <span className="error-message">{errors.pickupAddress}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="travelers">
                        <Users size={18} />
                        Number of Travelers
                      </label>
                      <select id="travelers" name="travelers" value={formData.travelers} onChange={handleChange}>
                        {[...Array(15)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1} {i === 0 ? "Traveler" : "Travelers"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="hasPasses">
                        <FileCheck size={18} />
                        Do you have passes?
                      </label>
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          id="hasPasses"
                          name="hasPasses"
                          checked={formData.hasPasses}
                          onChange={handleChange}
                        />
                        <span className="checkbox-label">Yes, I have the required passes</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="journeyStartDate">
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
                        className={errors.journeyStartDate ? "error" : ""}
                      />
                      {errors.journeyStartDate && <span className="error-message">{errors.journeyStartDate}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="journeyEndDate">
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
                        className={errors.journeyEndDate ? "error" : ""}
                      />
                      {errors.journeyEndDate && <span className="error-message">{errors.journeyEndDate}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="mobileNumber">
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
                        className={errors.mobileNumber ? "error" : ""}
                      />
                      {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="alternateNumber">
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
                        className={errors.alternateNumber ? "error" : ""}
                      />
                      {errors.alternateNumber && <span className="error-message">{errors.alternateNumber}</span>}
                    </div>
                  </div>

                  <div className="form-group car-selection">
                    <label>
                      <Car size={18} />
                      Select Car
                    </label>
                    <div className="car-options">
                      {carOptions.map((car) => (
                        <div
                          key={car.id}
                          className={`car-option ${formData.selectedCar === car.id ? "selected" : ""}`}
                          onClick={() => setFormData((prev) => ({ ...prev, selectedCar: car.id }))}
                        >
                          <div className="car-image">
                            <img src={car.image || "/placeholder.svg"} alt={car.name} />
                          </div>
                          <div className="car-details">
                            <h4>{car.name}</h4>
                            <p>Capacity: {car.capacity} passengers</p>
                            <p className="car-price">₹{car.price.toLocaleString()}</p>
                          </div>
                          <div className="car-select">
                            <input
                              type="radio"
                              id={`car-${car.id}`}
                              name="selectedCar"
                              value={car.id}
                              checked={formData.selectedCar === car.id}
                              onChange={handleChange}
                            />
                            <label htmlFor={`car-${car.id}`}>Select</label>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.selectedCar && <span className="error-message">{errors.selectedCar}</span>}
                  </div>

                  <div className="form-footer">
                    <div className="terms-container">
                      <AlertCircle size={16} />
                      <p>
                        By submitting this form, you agree to our{" "}
                        <a href="/terms-conditions" target="_blank" rel="noreferrer">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/refund-policy" target="_blank" rel="noreferrer">
                          Refund & Cancellation Policy
                        </a>
                      </p>
                    </div>
                    <button type="submit" className="submit-btn" disabled={isLoading}>
                      {isLoading ? "Processing..." : "Book Your Yatra"}
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
