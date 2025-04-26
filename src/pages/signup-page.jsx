"use client";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Handle form submission state
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false); // State to control OTP modal visibility
  const [otp, setOtp] = useState(""); // Store OTP value
  const [isOtpSubmitting, setIsOtpSubmitting] = useState(false); // Handle OTP submit state
  const [messages, setMessages] = useState([]); // Store messages (error or success)
  const Navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    // Check password match when typing in either password field
    if (name === "password" || name === "confirmPassword") {
      if (
        name === "password" &&
        formData.confirmPassword &&
        value !== formData.confirmPassword
      ) {
        setErrors({
          ...errors,
          confirmPassword: "Passwords do not match",
        });
      } else if (name === "confirmPassword" && value !== formData.password) {
        setErrors({
          ...errors,
          confirmPassword: "Passwords do not match",
        });
      } else if (name === "confirmPassword" && value === formData.password) {
        setErrors({
          ...errors,
          confirmPassword: "",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("userData", data);

      if (response.ok) {
        setMessages([
          ...messages,
          {
            type: "success",
            msg: "Signup successful! Please verify your email.",
          },
        ]);
        setIsOtpModalVisible(true); // Show OTP modal after signup success
      } else {
        setMessages([
          ...messages,
          {
            type: "error",
            msg: data.msg || "Signup failed! Please try again.",
          },
        ]);
      }
    } catch (err) {
      setMessages([
        ...messages,
        {
          type: "error",
          msg: "An error occurred during signup. Please try again.",
        },
      ]);
    }

    setIsSubmitting(false); // Re-enable submit button
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      setMessages([
        ...messages,
        { type: "error", msg: "Please enter valid OTP" },
      ]);
      return;
    }

    setIsOtpSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await response.json();
      console.log("userData", data);

      if (response.ok) {
        setMessages([
          ...messages,
          {
            type: "success",
            msg: "OTP verified successfully! Redirecting to profile..",
          },
        ]);

        Navigate("/profile", {
            state: { user: formData },  // Pass the user data to profile page
          });
      } else {
        setMessages([
          ...messages,
          { type: "error", msg: "OTP verification failed! Please try again" },
        ]);
      }
    } catch (err) {
      setMessages([
        ...messages,
        {
          type: "error",
          msg: "An error occurred during OTP verification. Please try again",
        },
      ]);
      console.error(err);
    }

    setIsOtpSubmitting(false);
  };

  const handleRemoveMessage = (index) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <p className="text-sm text-gray-600">Start your journey</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Sign Up to Bookmycab.co
          </h1>

          {/* Display messages */}
          <div className="mt-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 mb-2 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                <span>{message.msg}</span>
                <button
                  onClick={() => handleRemoveMessage(index)}
                  className="text-white hover:text-gray-300"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs text-gray-600">
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full rounded border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs text-gray-600">
                E-mail
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-xs text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={showPassword ? "" : "••••••••"}
                  className={`w-full rounded border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="text-xs text-gray-600"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder={showConfirmPassword ? "" : "••••••••"}
                  className={`w-full rounded border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#eca513] py-2.5 text-center font-medium text-white hover:bg-blue-600 focus:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {isOtpModalVisible && (      
 <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">        
 <div className="bg-white p-6 rounded-lg w-96">          
  <h2 className="text-xl font-bold text-gray-800">Enter OTP</h2>         
   <p className="text-sm text-gray-600">          
      We have sent a 6-digit OTP to your email. Please enter it below to         
         verify your email.      
             </p  >
                     <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full mt-4 p-2 border rounded"
              placeholder="Enter 6-digit OTP"
            />
            <div className="mt-4 flex justify-between">
              <button
                className="bg-[#eca513] text-white px-4 py-2 rounded"
                onClick={handleOtpSubmit}
                disabled={isOtpSubmitting}
              >
                {isOtpSubmitting ? "Verifying..." : "Verify OTP"}
              </button>

        

              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsOtpModalVisible(false)}
              >
                Close
              </button>
            </div>
                  {/* Display messages */}
                  <div className="mt-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 mb-2 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    <span>{message.msg}</span>
                    <button
                      onClick={() => handleRemoveMessage(index)}
                      className="text-white hover:text-gray-300"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}


                    <div className="mt-6 text-center text-sm text-gray-500">or sign up with</div>
           <div className="mt-4 flex justify-center space-x-4">
             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 text-[#1877F2]">
                 <path
                   fill="currentColor"
                   d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                 />
               </svg>
             </button>
             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="h-5 w-5">
                 <path
                   fill="#4285F4"
                   d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                 />
               </svg>
             </button>
             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5 w-5">
                 <path
                   fill="currentColor"
                   d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                 />
               </svg>
             </button>
           </div>
           <div className="mt-8 text-center text-sm">
             Have an account?{" "}
             <a href="/login" className="font-medium text-[#4285F4]">
               Sign In
             </a>
           </div>
         </div>
       </div>
       {/* Right side - Background Image */}
       <div className="hidden md:block md:w-1/2">
         <div
           className="h-full w-full bg-cover bg-center"
           style={{
             backgroundImage: `url('/signup_banner.jpg')`,
             backgroundPosition: "center right",
           }}
         />
       </div>
     </div>    
          );
}

// "use client"
// import React from 'react';
// import { useState } from "react"
// import { EyeIcon, EyeOffIcon } from "lucide-react"

// export default function SignupPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }

//     // Check password match when typing in either password field
//     if (name === "password" || name === "confirmPassword") {
//       if (name === "password" && formData.confirmPassword && value !== formData.confirmPassword) {
//         setErrors({
//           ...errors,
//           confirmPassword: "Passwords do not match",
//         })
//       } else if (name === "confirmPassword" && value !== formData.password) {
//         setErrors({
//           ...errors,
//           confirmPassword: "Passwords do not match",
//         })
//       } else if (name === "confirmPassword" && value === formData.password) {
//         setErrors({
//           ...errors,
//           confirmPassword: "",
//         })
//       }
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validate form
//     const newErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password"
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match"
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     // Form is valid, proceed with submission
//     console.log("Form submitted:", formData)
//     // Add your signup logic here
//   }

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left side - Form */}
//       <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
//         <div className="mx-auto w-full max-w-md">
//           <p className="text-sm text-gray-600">Start your journey</p>
//           <h1 className="mt-2 text-3xl font-bold text-gray-900">Sign Up to <span className='text-yellow-500'>bookmycab.co</span></h1>

//           <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
//             <div className="space-y-1">
//               <label htmlFor="name" className="text-xs text-gray-600">
//                 Name
//               </label>
//               <div className="relative">
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className={`w-full rounded border ${errors.name ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
//                 />
//               </div>
//               {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="email" className="text-xs text-gray-600">
//                 E-mail
//               </label>
//               <div className="relative">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="example@email.com"
//                   className={`w-full rounded border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="password" className="text-xs text-gray-600">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder={showPassword ? "" : "••••••••"}
//                   className={`w-full rounded border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 >
//                   {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="confirmPassword" className="text-xs text-gray-600">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder={showConfirmPassword ? "" : "••••••••"}
//                   className={`w-full rounded border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
//                 />
//                 <button
//                   type="button"
//                   onClick={toggleConfirmPasswordVisibility}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 >
//                   {showConfirmPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full rounded bg-[#4285F4] py-2.5 text-center font-medium text-white hover:bg-blue-600 focus:outline-none"
//             >
//               Sign Up
//             </button>
//           </form>

//           <div className="mt-6 text-center text-sm text-gray-500">or sign up with</div>

//           <div className="mt-4 flex justify-center space-x-4">
//             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 text-[#1877F2]">
//                 <path
//                   fill="currentColor"
//                   d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
//                 />
//               </svg>
//             </button>
//             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="h-5 w-5">
//                 <path
//                   fill="#4285F4"
//                   d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
//                 />
//               </svg>
//             </button>
//             <button className="flex h-10 w-16 items-center justify-center rounded border border-gray-300">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5 w-5">
//                 <path
//                   fill="currentColor"
//                   d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="mt-8 text-center text-sm">
//             Have an account?{" "}
//             <a href="/login" className="font-medium text-[#4285F4]">
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Background Image */}
//       <div className="hidden md:block md:w-1/2">
//         <div
//           className="h-full w-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J5qIffvW8VCxmcHlphoawtdL5s6YY9.png')`,
//             backgroundPosition: "center right",
//           }}
//         />
//       </div>
//     </div>
//   )
// }
