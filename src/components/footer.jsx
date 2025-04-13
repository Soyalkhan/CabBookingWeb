import { Phone, Mail, Twitter, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react"
import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#232221] text-white border-t border-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919696000999" className="hover:text-yellow-400 transition-colors">
                  +919696-000-999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@bharattaxi.com" className="hover:text-yellow-400 transition-colors">
                  info@bharattaxi.com
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-bold mt-8 mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#1DA1F2] hover:opacity-80 transition-opacity p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#E1306C] hover:opacity-80 transition-opacity p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#4267B2] hover:opacity-80 transition-opacity p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#0077B5] hover:opacity-80 transition-opacity p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#E60023] hover:opacity-80 transition-opacity p-2 rounded-full"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Term Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Faqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Road Trip
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* PAY SAFELY WITH US */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">PAY SAFELY WITH US</h3>
            <p className="text-gray-300">The payment is encrypted and transmitted securely with an SSL protocol.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          Copyright © Bharat Taxi {currentYear}. All Right Reserved
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-yellow-600 hover:bg-yellow-800 text-white rounded-full p-4 shadow-lg flex items-center cursor-pointer transition-colors">
          <MessageCircle className="h-6 w-6 mr-2" />
          <span>Chat with us</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
