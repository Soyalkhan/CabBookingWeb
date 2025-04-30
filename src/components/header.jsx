// "use client";
// import React, { useState } from "react";
// import { Phone, MessageSquare, Menu, User, LogOut , CircleUser  } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

// const Header = () => {
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State to toggle profile dropdown
//   const navigate = useNavigate();

//   // Check if user is logged in by reading authToken from localStorage
//   const isLoggedIn = !!localStorage.getItem("authToken");
//   const userName = "Soyal"; // Assuming you have stored the username as well

//   const handleSignOut = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userName");
//     navigate("/"); // Redirect to the home page after sign out
//   };

//   return (
//     <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center ml-12">
//           <a href="/" className="flex items-center">
//             <img src="/logov2.png" alt="bookmyCabs" className="h-10" />
//             <span className="ml-2 text-yellow-500 font-bold text-3xl">
//               {/* Bookmy<span className="text-black">cab</span> */}
//             </span>
//           </a>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           <a href="#" className="flex items-center text-gray-700 hover:text-yellow-500">
//             <MessageSquare className="h-4 w-4 mr-2" />
//             <span>WHATSAPP</span>
//           </a>
//           <a href="tel:+919999955712" className="flex items-center text-gray-700 hover:text-yellow-500">
//             <Phone className="h-4 w-4 mr-2" />
//             <span>+91 7535 9646 12</span>
//           </a>
//           <a href="tel:+918800550676" className="flex items-center text-gray-700 hover:text-yellow-500">
//             <Phone className="h-4 w-4 mr-2" />
//             <span>+91 8650 5434 23</span>
//           </a>

//           {/* Show "SIGNUP" if the user is not logged in */}
//           {!isLoggedIn && (
//             <Link to="/login" className="flex items-center text-gray-700 hover:text-yellow-500">
//               <User className="h-4 w-4 mr-2" />
//               <span>Login</span>
//             </Link>
//           )}

//           {/* Show Profile Dropdown if the user is logged in */}
//           {isLoggedIn && (
        
//             <div className="relative z-50 cursor-pointer ">
//               <button
//                 onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//                 className="flex items-center text-gray-700 hover:text-yellow-500"
//               >
//                 <CircleUser  className="h-5 w-5 mr-2" />
//                 <span>{userName}</span>
//               </button>
//               {isProfileMenuOpen && (
//                 <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-48">
//                   <button
//                     onClick={() => navigate("/profile")}
//                     className="w-full text-left px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
//                   >
//                     <UserRoundCog className="h-4 w-4 mr-2 inline" />
//                     My Profile
//                   </button>
//                   <button
//                     onClick={handleSignOut}
//                     className="w-full text-left px-4 py-2 cursor-pointer text-red-600 hover:bg-gray-100"
//                   >
//                     <LogOut className="h-4 w-4 mr-2 inline" />
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
           
//           )}
//         </div>

//         <button className="md:hidden text-gray-700">
//           <Menu className="h-6 w-6" />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X, User, LogOut, CircleUser } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State to toggle profile dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width
  const navigate = useNavigate();


  
  // Check if user is logged in by reading authToken from localStorage
  const isLoggedIn = !!localStorage.getItem("authToken");
  const userName = localStorage.getItem("userName") || "User"; // Get the user's name from localStorage

  // Check window resize for mobile menu toggle
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const [user, setUser] = useState(null); // State to store user details

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
       
        console.log("User not logged in.");
        return; 
      } else {
      
        try {
          const response = await fetch("http://localhost:5000/api/auth/me", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`, // Send token in the header
            },
          });

          const data = await response.json();
          if (response.ok) {
            setUser(data.user); // Set user details from response
            console.log("User Details:", data.user); // Log user details
          } else {
            // Handle error if token is invalid or expired
            toast.error(data.msg || "Unable to fetch user details", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
          toast.error("An error occurred. Please try again later.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    };

    fetchUserDetails();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    toast.success("Successfully logged out!"); // Display success message
    navigate("/"); // Redirect to the home page after sign out
  };

  const handleLogin = () => {
    // You can call your login API here and based on success/failure, show toast
    toast.success("Login successful!");
    // After successful login, redirect to profile page
    navigate("/profile");
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto"; // Enable scroll when menu is closed
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden"; // Disable scroll when menu is open
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-12">
            <a href="/" className="flex items-center">
              <img src="/logov2.png" alt="bookmyCabs" className="h-10" />
              <span className="ml-2 text-yellow-500 font-bold text-3xl">
                {/* Bookmy<span className="text-black">cab</span> */}
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-yellow-500">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>WHATSAPP</span>
            </a>
            <a href="tel:+919999955712" className="flex items-center text-gray-700 hover:text-yellow-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 7535 9646 12</span>
            </a>
            <a href="tel:+918800550676" className="flex items-center text-gray-700 hover:text-yellow-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 8650 5434 23</span>
            </a>

            {/* Show "SIGNUP" if the user is not logged in */}
            {!isLoggedIn && (
              <Link to="/login" className="flex items-center text-gray-700 hover:text-yellow-500">
                <User className="h-4 w-4 mr-2" />
                <span>Login</span>
              </Link>
            )}

            {/* Show Profile Dropdown if the user is logged in */}
            {isLoggedIn && (
              <div className="relative z-50 cursor-pointer ">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center text-gray-700 hover:text-yellow-500"
                >
                  <CircleUser className="h-5 w-5 mr-2" />
                  <span>{user?.name}</span>
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-48">
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
                    >
                      <User className="h-4 w-4 mr-2 inline" />
                      My Profile
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 cursor-pointer text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2 inline" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button className="md:hidden text-gray-700" onClick={handleMobileMenuOpen}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#000000d6] bg-opacity-50 z-50">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl h-[80vh] overflow-auto transition-transform transform ">
            <div className="p-4 flex justify-between items-center">
              <div className="text-xl font-bold">Menu</div>
              <button onClick={handleMobileMenuClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 p-4">

            {!isLoggedIn && (
              <Link
                to="/login"
                onClick={handleMobileMenuClose}
                className=" bg-amber-200 rounded-3xl justify-center w-[200px] flex items-center text-gray-700 hover:text-yellow-500 border-b border-gray-200 py-3"
              >
                <User className="h-5 w-5 mr-2" />
                Login / Register
              </Link>
            )}
              <a href="#" className="flex items-center text-gray-700 hover:text-yellow-500">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>WHATSAPP</span>
            </a>
            <a href="tel:+919999955712" className="flex items-center text-gray-700 hover:text-yellow-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 7535 9646 12</span>
            </a>
            <a href="tel:+918800550676" className="flex items-center text-gray-700 hover:text-yellow-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 8650 5434 23</span>
            </a>

              {isLoggedIn && (
                <>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      handleMobileMenuClose();
                    }}
                    className="flex items-center text-gray-700 hover:text-yellow-500 border-b border-gray-200 py-3"
                  >
                    <User className="h-5 w-5 mr-2" />
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      handleMobileMenuClose();
                    }}
                    className="flex items-center text-gray-700 hover:text-yellow-500 border-b border-gray-200 py-3"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

