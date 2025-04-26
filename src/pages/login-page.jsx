// "use client"
// import React from 'react';
// import { useState } from "react"
// import { EyeIcon, EyeOffIcon } from "lucide-react"

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })
//   const [errors, setErrors] = useState({})
//  const [loading, setLoading] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
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
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validate form
//     const newErrors = {}

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     // Form is valid, proceed with submission
//     console.log("Form submitted:", formData)
//     // Add your login logic here
//   }

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left side - Form */}
//       <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
//         <div className="mx-auto w-full max-w-md">
//           <p className="text-sm text-gray-600">Welcome back</p>
//           <h1 className="mt-2 text-3xl font-bold text-gray-900">Sign In to Bookmycab.co</h1>

//           <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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

//             <button
//               type="submit"
//               className="w-full rounded bg-[#eca513] py-2.5 text-center font-medium text-white hover:bg-blue-600 focus:outline-none"
//             >
//               Sign In
//             </button>
//           </form>

//           <div className="mt-6 text-center text-sm text-gray-500">or sign in with</div>

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
//             Don't have an account?{" "}
//             <a href="/signup" className="font-medium text-[#4285F4]">
//               Sign Up
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
"use client";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // State to hold messages

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true); // Start loading state

    try {
      // Simulating an API call here
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage if login is successful
        localStorage.setItem("authToken", data.token);
        setMessages([{ type: "success", msg: "Login successful! Redirecting..." }]);
        setTimeout(() => {
          window.location.href = "/profile"; // Redirect after success
        }, 1500);
      } else {
        setMessages([{ type: "error", msg: data.msg || "Login failed. Please try again." }]);
      }
    } catch (err) {
      setMessages([{ type: "error", msg: "An error occurred during login. Please try again." }]);
      console.error(err);
    }

    setLoading(false); // End loading state
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <p className="text-sm text-gray-600">Welcome back</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Sign In to Bookmycab.co</h1>

          {/* Display messages */}
          {messages.length > 0 && (
            <div className="mt-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 mb-2 rounded ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {message.msg}
                </div>
              ))}
            </div>
          )}

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
                  className={`w-full rounded border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                  className={`w-full rounded border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#eca513] py-2.5 text-center font-medium text-white hover:bg-blue-600 focus:outline-none"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">or sign in with</div>

          <div className="mt-4 flex justify-center space-x-4">
            {/* Social buttons omitted for brevity */}
          </div>

          <div className="mt-8 text-center text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-[#4285F4]">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="hidden md:block md:w-1/2">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/login-banner.jpg')`,
            backgroundPosition: "center right",
          }}
        />
      </div>
    </div>
  );
}
