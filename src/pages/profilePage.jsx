"use client"
import React from "react";

import { useLocation } from "react-router-dom"; 
import { useState } from "react"
import {
  User,
  Shield,
  Bell,
  Trash2,
  Pencil,
  Car,
  ChevronRight,
  ToggleLeft,
  ToggleRight,
  Eye,
  EyeOff,
} from "lucide-react"

export default function ProfilePage() {
  const location = useLocation();  // Access location object
  const { user } = location.state || {};

  const [activeTab, setActiveTab] = useState("My Profile")
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    emailMarketing: true,
    whatsappMarketing: false,
    bookingEmail: true,
    bookingWhatsapp: true,
  })

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }


  const tabs = [
    { name: "My Profile", icon: <User className="w-5 h-5" /> },
    { name: "Security", icon: <Shield className="w-5 h-5" /> },
    { name: "Notifications", icon: <Bell className="w-5 h-5" /> },
    { name: "My Bookings", icon: <Car className="w-5 h-5" /> },
    { name: "Delete Account", icon: <Trash2 className="w-5 h-5" />, danger: true },
  ]

  const bookings = [
    {
      id: "B12345",
      date: "12 Apr 2023",
      cabType: "Premium Sedan",
      from: "Leeds City Center",
      to: "Manchester Airport",
      status: "Completed",
      payment: "Paid",
      amount: "£85.50",
    },
    {
      id: "B12346",
      date: "18 May 2023",
      cabType: "SUV",
      from: "Leeds Bradford Airport",
      to: "Leeds City Center",
      status: "Upcoming",
      payment: "Pending",
      amount: "£45.00",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="overflow-x-auto">
          <div className="flex whitespace-nowrap px-4 py-2 md:px-8 md:py-0">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center px-4 py-3 border-b-2 md:px-6 md:py-4 ${
                  activeTab === tab.name
                    ? tab.danger
                      ? "border-red-500 text-red-600"
                      : "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } ${tab.danger && activeTab !== tab.name ? "text-red-500" : ""}`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-8 max-w-6xl mx-auto">
        {activeTab === "My Profile" && (
          <div className="space-y-6 md:space-y-8">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden mx-auto sm:mx-0">
                  <User className="w-12 h-12 text-blue-500" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h2 className="text-xl font-semibold">{}Soyal Khan</h2>
                  <p className="text-gray-500">Team Manager</p>
                  <p className="text-gray-500 text-sm">Leeds, United Kingdom</p>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 sm:ml-auto flex items-center justify-center text-blue-600 hover:text-blue-800">
                <Pencil className="w-4 h-4 mr-1" />
                Edit
              </button>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">First Name</p>
                  <p className="font-medium">Rafiqur</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Name</p>
                  <p className="font-medium">Rahman</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email address</p>
                  <p className="font-medium">rafiqurrahman51@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">+09 345 345 45</p>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Bio</p>
                  <p className="font-medium">Team Manager</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Address</h3>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Country</p>
                  <p className="font-medium">United Kingdom</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">City/State</p>
                  <p className="font-medium">Leeds, East London</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Postal Code</p>
                  <p className="font-medium">ERT 2354</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">TAX ID</p>
                  <p className="font-medium">AS4564S756</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Security" && (
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Change Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Notifications" && (
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Marketing</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium">Email Marketing</p>
                    <p className="text-sm text-gray-500">Receive promotional emails about our services</p>
                  </div>
                  <button onClick={() => toggleNotification("emailMarketing")} className="focus:outline-none">
                    {notifications.emailMarketing ? (
                      <ToggleRight className="w-10 h-6 text-blue-600" />
                    ) : (
                      <ToggleLeft className="w-10 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium">WhatsApp Marketing</p>
                    <p className="text-sm text-gray-500">Receive promotional messages on WhatsApp</p>
                  </div>
                  <button onClick={() => toggleNotification("whatsappMarketing")} className="focus:outline-none">
                    {notifications.whatsappMarketing ? (
                      <ToggleRight className="w-10 h-6 text-blue-600" />
                    ) : (
                      <ToggleLeft className="w-10 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Booking Notifications</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive booking confirmations and updates via email</p>
                  </div>
                  <button onClick={() => toggleNotification("bookingEmail")} className="focus:outline-none">
                    {notifications.bookingEmail ? (
                      <ToggleRight className="w-10 h-6 text-blue-600" />
                    ) : (
                      <ToggleLeft className="w-10 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium">WhatsApp Notifications</p>
                    <p className="text-sm text-gray-500">Receive booking confirmations and updates via WhatsApp</p>
                  </div>
                  <button onClick={() => toggleNotification("bookingWhatsapp")} className="focus:outline-none">
                    {notifications.bookingWhatsapp ? (
                      <ToggleRight className="w-10 h-6 text-blue-600" />
                    ) : (
                      <ToggleLeft className="w-10 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "My Bookings" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Your Recent Bookings</h2>
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Car className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{booking.cabType}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{booking.date}</p>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <p className="text-sm">{booking.from}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <p className="text-sm">{booking.to}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:text-right">
                      <div className="mb-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                      <div className="mb-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.payment === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.payment}
                        </span>
                      </div>
                      <p className="font-bold text-lg">{booking.amount}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Delete Account" && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Your Account</h2>
            <p className="text-gray-600 mb-6">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <div className="bg-red-50 p-4 rounded-md mb-6">
              <p className="text-sm text-red-800">
                All of your data will be permanently removed. This action cannot be undone.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Please type "delete" to confirm</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 mb-4"
                placeholder="Type 'delete' to confirm"
              />
            </div>
            <button className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Permanently Delete Account
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
