import React, { useState } from 'react';
import { LayoutDashboard, Car, Tag, MessageSquare, Users, CreditCard, Eye, Activity, Star, Bell, Search, User, LogOut, ChevronDown, Filter, CheckCircle, XCircle, Clock, Calendar, MapPin, Phone, Mail, MoreHorizontal, Download, Trash, Edit, Plus } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Sample data for different tabs
  const bookings = [
    { 
      id: 'BK-1001', 
      customer: 'Rahul Sharma', 
      from: 'Delhi, India', 
      to: 'Agra, India', 
      date: '01-05-2023', 
      amount: '₹3,500', 
      status: 'active',
      phone: '+91 98765 43210',
      driver: 'Amit Kumar',
      carType: 'Swift'
    },
    { 
      id: 'BK-1002', 
      customer: 'Priya Singh', 
      from: 'Mumbai, India', 
      to: 'Pune, India', 
      date: '02-05-2023', 
      amount: '₹4,200', 
      status: 'completed',
      phone: '+91 87654 32109',
      driver: 'Rajesh Verma',
      carType: 'Innova'
    },
    { 
      id: 'BK-1003', 
      customer: 'Vikram Patel', 
      from: 'Bangalore, India', 
      to: 'Mysore, India', 
      date: '03-05-2023', 
      amount: '₹2,800', 
      status: 'cancelled',
      phone: '+91 76543 21098',
      driver: 'Unassigned',
      carType: 'Dzire'
    },
    { 
      id: 'BK-1004', 
      customer: 'Neha Gupta', 
      from: 'Chennai, India', 
      to: 'Pondicherry, India', 
      date: '04-05-2023', 
      amount: '₹3,200', 
      status: 'pending',
      phone: '+91 65432 10987',
      driver: 'Unassigned',
      carType: 'Ertiga'
    },
    { 
      id: 'BK-1005', 
      customer: 'Arun Joshi', 
      from: 'Jaipur, India', 
      to: 'Udaipur, India', 
      date: '05-05-2023', 
      amount: '₹5,100', 
      status: 'on-road',
      phone: '+91 54321 09876',
      driver: 'Suresh Kumar',
      carType: 'Innova'
    }
  ];

  const cabs = [
    { id: 'C-001', name: 'Swift', type: 'Hatchback', fuel: 'CNG, Petrol', seats: 4, baseRate: '₹12/km', status: 'active', count: 8 },
    { id: 'C-002', name: 'Dzire', type: 'Sedan', fuel: 'CNG, Petrol', seats: 4, baseRate: '₹14/km', status: 'active', count: 6 },
    { id: 'C-003', name: 'Innova', type: 'SUV', fuel: 'Diesel', seats: 7, baseRate: '₹18/km', status: 'active', count: 4 },
    { id: 'C-004', name: 'Ertiga', type: 'MPV', fuel: 'CNG, Petrol', seats: 6, baseRate: '₹16/km', status: 'active', count: 5 },
    { id: 'C-005', name: 'WagonR', type: 'Hatchback', fuel: 'CNG, Petrol', seats: 4, baseRate: '₹11/km', status: 'inactive', count: 3 }
  ];

  const discounts = [
    { id: 'D-001', code: 'FIRST50', type: 'Percentage', value: '10%', minAmount: '₹1,000', maxDiscount: '₹500', validTill: '31-12-2023', status: 'active', usageCount: 145 },
    { id: 'D-002', code: 'SUMMER23', type: 'Fixed', value: '₹200', minAmount: '₹1,500', maxDiscount: '₹200', validTill: '30-06-2023', status: 'active', usageCount: 87 },
    { id: 'D-003', code: 'WEEKEND', type: 'Percentage', value: '15%', minAmount: '₹2,000', maxDiscount: '₹750', validTill: '31-12-2023', status: 'active', usageCount: 203 },
    { id: 'D-004', code: 'MONSOON', type: 'Fixed', value: '₹300', minAmount: '₹2,500', maxDiscount: '₹300', validTill: '30-09-2023', status: 'inactive', usageCount: 0 }
  ];

  const enquiries = [
    { id: 'E-001', name: 'Ankit Mehta', email: 'ankit@example.com', phone: '+91 98765 12345', subject: 'Long distance booking query', message: 'I want to book a cab for a 5-day trip...', date: '01-05-2023', status: 'new' },
    { id: 'E-002', name: 'Meera Reddy', email: 'meera@example.com', phone: '+91 87654 23456', subject: 'Corporate account setup', message: 'We are interested in setting up a corporate account...', date: '02-05-2023', status: 'responded' },
    { id: 'E-003', name: 'Sanjay Kapoor', email: 'sanjay@example.com', phone: '+91 76543 34567', subject: 'Refund for cancelled booking', message: 'I cancelled my booking but haven\'t received a refund yet...', date: '03-05-2023', status: 'resolved' }
  ];

  const drivers = [
    { id: 'DR-001', name: 'Amit Kumar', phone: '+91 98765 67890', license: 'DL-0123456789', vehicle: 'Swift (DL-01-AB-1234)', rating: '4.8', status: 'active', trips: 145 },
    { id: 'DR-002', name: 'Rajesh Verma', phone: '+91 87654 78901', license: 'DL-9876543210', vehicle: 'Innova (DL-01-CD-5678)', rating: '4.7', status: 'on-trip', trips: 213 },
    { id: 'DR-003', name: 'Suresh Kumar', phone: '+91 76543 89012', license: 'DL-5678901234', vehicle: 'Innova (DL-01-EF-9012)', rating: '4.9', status: 'active', trips: 178 },
    { id: 'DR-004', name: 'Dinesh Singh', phone: '+91 65432 90123', license: 'DL-1234567890', vehicle: 'Dzire (DL-01-GH-3456)', rating: '4.6', status: 'inactive', trips: 92 }
  ];

  const payments = [
    { id: 'P-001', bookingId: 'BK-1001', customer: 'Rahul Sharma', amount: '₹3,500', method: 'Credit Card', status: 'completed', date: '01-05-2023' },
    { id: 'P-002', bookingId: 'BK-1002', customer: 'Priya Singh', amount: '₹4,200', method: 'UPI', status: 'completed', date: '02-05-2023' },
    { id: 'P-003', bookingId: 'BK-1004', customer: 'Neha Gupta', amount: '₹3,200', method: 'Debit Card', status: 'pending', date: '04-05-2023' },
    { id: 'P-004', bookingId: 'BK-1005', customer: 'Arun Joshi', amount: '₹5,100', method: 'Cash', status: 'pending', date: '05-05-2023' }
  ];

  const visitors = [
    { date: '01-05-2023', visitors: 1245, bookings: 87, conversionRate: '6.99%' },
    { date: '02-05-2023', visitors: 1356, bookings: 92, conversionRate: '6.78%' },
    { date: '03-05-2023', visitors: 1189, bookings: 79, conversionRate: '6.64%' },
    { date: '04-05-2023', visitors: 1423, bookings: 103, conversionRate: '7.24%' },
    { date: '05-05-2023', visitors: 1512, bookings: 112, conversionRate: '7.41%' }
  ];

  const apiTracking = [
    { id: 'API-001', endpoint: '/api/bookings', method: 'GET', status: 200, responseTime: '45ms', timestamp: '05-05-2023 14:23:45', ip: '192.168.1.1' },
    { id: 'API-002', endpoint: '/api/bookings', method: 'POST', status: 201, responseTime: '120ms', timestamp: '05-05-2023 14:25:12', ip: '192.168.1.1' },
    { id: 'API-003', endpoint: '/api/cabs', method: 'GET', status: 200, responseTime: '38ms', timestamp: '05-05-2023 14:26:30', ip: '192.168.1.2' },
    { id: 'API-004', endpoint: '/api/payments', method: 'GET', status: 200, responseTime: '52ms', timestamp: '05-05-2023 14:28:15', ip: '192.168.1.3' },
    { id: 'API-005', endpoint: '/api/drivers', method: 'GET', status: 403, responseTime: '41ms', timestamp: '05-05-2023 14:30:22', ip: '192.168.1.4' }
  ];

  const reviews = [
    { id: 'R-001', customer: 'Rahul Sharma', driver: 'Amit Kumar', rating: 5, comment: 'Excellent service, very punctual and polite driver', date: '01-05-2023', status: 'published' },
    { id: 'R-002', customer: 'Priya Singh', driver: 'Rajesh Verma', rating: 4, comment: 'Good service, but car was not very clean', date: '02-05-2023', status: 'published' },
    { id: 'R-003', customer: 'Vikram Patel', driver: 'Suresh Kumar', rating: 3, comment: 'Average experience, driver was late', date: '03-05-2023', status: 'hidden' },
    { id: 'R-004', customer: 'Neha Gupta', driver: 'Dinesh Singh', rating: 5, comment: 'Amazing experience, very comfortable journey', date: '04-05-2023', status: 'published' }
  ];

  // Status badge component
  const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
      switch (status.toLowerCase()) {
        case 'active':
          return 'bg-green-100 text-green-800';
        case 'completed':
          return 'bg-blue-100 text-blue-800';
        case 'on-road':
        case 'on-trip':
          return 'bg-purple-100 text-purple-800';
        case 'pending':
          return 'bg-yellow-100 text-yellow-800';
        case 'cancelled':
        case 'inactive':
          return 'bg-red-100 text-red-800';
        case 'new':
          return 'bg-indigo-100 text-indigo-800';
        case 'responded':
          return 'bg-orange-100 text-orange-800';
        case 'resolved':
          return 'bg-teal-100 text-teal-800';
        case 'published':
          return 'bg-green-100 text-green-800';
        case 'hidden':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
        {status}
      </span>
    );
  };

  // Rating component
  const Rating = ({ value }) => {
    const stars = [];
    const numericValue = parseFloat(value);
    
    for (let i = 1; i <= 5; i++) {
      if (i <= numericValue) {
        stars.push(<Star key={i} size={14} fill="#FFD700" color="#FFD700" />);
      } else if (i - 0.5 <= numericValue) {
        stars.push(<Star key={i} size={14} fill="#FFD700" color="#FFD700" />);
      } else {
        stars.push(<Star key={i} size={14} color="#D1D5DB" />);
      }
    }
    
    return <div className="flex items-center">{stars} <span className="ml-1 text-sm text-gray-600">({value})</span></div>;
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'bookings':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">All Bookings</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Download size={16} className="mr-1" /> Export
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Filter size={16} className="mr-1" /> Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{booking.customer}</div>
                        <div className="text-xs text-gray-400">{booking.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-gray-400" />
                          {booking.from}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin size={14} className="mr-1 text-gray-400" />
                          {booking.to}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.driver !== 'Unassigned' ? (
                          <div>
                            <div>{booking.driver}</div>
                            <div className="text-xs text-gray-400">{booking.carType}</div>
                          </div>
                        ) : (
                          <button className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">
                            Assign Driver
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-gray-800">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-md text-sm">Previous</button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm">1</button>
                <button className="px-3 py-1 border rounded-md text-sm">2</button>
                <button className="px-3 py-1 border rounded-md text-sm">3</button>
                <button className="px-3 py-1 border rounded-md text-sm">Next</button>
              </div>
            </div>
          </div>
        );
      
      case 'cabs':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Cab Management</h2>
              <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                <Plus size={16} className="mr-1" /> Add New Cab
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cabs.map((cab) => (
                    <tr key={cab.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cab.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.fuel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.seats}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.baseRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={cab.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cab.count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'discounts':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Discount Management</h2>
              <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                <Plus size={16} className="mr-1" /> Create New Discount
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Discount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Till</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {discounts.map((discount) => (
                    <tr key={discount.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{discount.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">{discount.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.minAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.maxDiscount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.validTill}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={discount.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{discount.usageCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'enquiries':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Customer Enquiries</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Download size={16} className="mr-1" /> Export
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Filter size={16} className="mr-1" /> Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enquiry.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={enquiry.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <MessageSquare size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'drivers':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Driver Management</h2>
              <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                <Plus size={16} className="mr-1" /> Add New Driver
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trips</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {drivers.map((driver) => (
                    <tr key={driver.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{driver.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.license}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.vehicle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Rating value={driver.rating} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={driver.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.trips}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'payments':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Payment Transactions</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Download size={16} className="mr-1" /> Export
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Filter size={16} className="mr-1" /> Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{payment.bookingId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.method}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={payment.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-gray-800">
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'visitors':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Live Visitors</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-blue-500 text-sm font-medium">CURRENT VISITORS</div>
                  <div className="text-2xl font-bold mt-2">124</div>
                  <div className="text-green-500 text-sm mt-2 flex items-center">
                    <ChevronDown className="rotate-180 h-4 w-4 mr-1" /> 12% from yesterday
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-green-500 text-sm font-medium">ACTIVE USERS</div>
                  <div className="text-2xl font-bold mt-2">87</div>
                  <div className="text-green-500 text-sm mt-2 flex items-center">
                    <ChevronDown className="rotate-180 h-4 w-4 mr-1" /> 8% from yesterday
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-yellow-500 text-sm font-medium">CONVERSION RATE</div>
                  <div className="text-2xl font-bold mt-2">7.2%</div>
                  <div className="text-red-500 text-sm mt-2 flex items-center">
                    <ChevronDown className="h-4 w-4 mr-1" /> 2% from yesterday
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-purple-500 text-sm font-medium">AVG. SESSION</div>
                  <div className="text-2xl font-bold mt-2">4m 23s</div>
                  <div className="text-green-500 text-sm mt-2 flex items-center">
                    <ChevronDown className="rotate-180 h-4 w-4 mr-1" /> 15% from yesterday
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">Visitor Analytics</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                    <Download size={16} className="mr-1" /> Export
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {visitors.map((day, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{day.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{day.visitors}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{day.bookings}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{day.conversionRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'api':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">API Tracking</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Download size={16} className="mr-1" /> Export Logs
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {apiTracking.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.endpoint}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          log.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          log.method === 'POST' ? 'bg-green-100 text-green-800' :
                          log.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          log.method === 'DELETE' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {log.method}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          log.status >= 200 && log.status < 300 ? 'bg-green-100 text-green-800' :
                          log.status >= 300 && log.status < 400 ? 'bg-blue-100 text-blue-800' :
                          log.status >= 400 && log.status < 500 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.responseTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Customer Reviews</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-md flex items-center">
                  <Filter size={16} className="mr-1" /> Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{review.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.driver}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Rating value={review.rating} />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{review.comment}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={review.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-2xl font-bold">
                  <span className="text-yellow-500">book</span>
                  <span className="text-black">my</span>
                  <span className="text-black">cab</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="ml-4 relative">
                <button
                  className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                {showNotifications && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <div className="px-4 py-2 border-b">
                        <h3 className="text-sm font-medium">Notifications</h3>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                          <div className="font-medium">New booking received</div>
                          <div className="text-xs text-gray-500">5 minutes ago</div>
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                          <div className="font-medium">Driver Amit Kumar is now online</div>
                          <div className="text-xs text-gray-500">10 minutes ago</div>
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <div className="font-medium">Payment received for booking #BK-1002</div>
                          <div className="text-xs text-gray-500">30 minutes ago</div>
                        </a>
                      </div>
                      <div className="px-4 py-2 border-t text-center">
                        <a href="#" className="text-sm text-yellow-500 font-medium">View all notifications</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="ml-4 relative">
                <button
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="ml-2 font-medium">Admin</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showUserMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help</a>
                      <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Sign out</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`${
                activeTab === 'bookings'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('bookings')}
            >
              <LayoutDashboard className="h-5 w-5 mr-2" />
              Bookings
            </button>
            <button
              className={`${
                activeTab === 'cabs'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('cabs')}
            >
              <Car className="h-5 w-5 mr-2" />
              Cabs
            </button>
            <button
              className={`${
                activeTab === 'discounts'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('discounts')}
            >
              <Tag className="h-5 w-5 mr-2" />
              Discounts
            </button>
            <button
              className={`${
                activeTab === 'enquiries'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('enquiries')}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Enquiries
            </button>
            <button
              className={`${
                activeTab === 'drivers'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('drivers')}
            >
              <Users className="h-5 w-5 mr-2" />
              Drivers
            </button>
            <button
              className={`${
                activeTab === 'payments'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('payments')}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Payments
            </button>
            <button
              className={`${
                activeTab === 'visitors'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('visitors')}
            >
              <Eye className="h-5 w-5 mr-2" />
              Visitors
            </button>
            <button
              className={`${
                activeTab === 'api'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('api')}
            >
              <Activity className="h-5 w-5 mr-2" />
              API Tracking
            </button>
            <button
              className={`${
                activeTab === 'reviews'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star className="h-5 w-5 mr-2" />
              Reviews
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminPanel;