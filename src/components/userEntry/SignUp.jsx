// import React from 'react'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center mt-40 gap-5' >
//       <input type='text' placeholder='Email' className='border w-72 h-12 rounded'/>
//       <input type='text' placeholder='User name' className='border w-72 h-12 rounded'/>
//       <input type='text' placeholder='Password' className='border w-72 h-12 rounded'/>
//       <button className='bg-blue-200 w-72 h-12 rounded cursor-pointer'>Sign Up</button>
//     </div>
//   )
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../core/services/api/auth"; 
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      toast.error("لطفاً همه فیلدها را پر کنید");
      return;
    }

    try {
      const res = await signUp({ name, email, password });

      if (res.success) {
        toast.success("ثبت نام موفقیت‌آمیز بود");
        navigate("/"); 
      } else {
        toast.error(res.message || "ثبت نام ناموفق بود");
      }
    } catch (err) {
      console.error("Sign up error:", err);
      toast.error("مشکلی در ثبت نام پیش آمد!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-40 gap-5">
      <input
        type="text"
        placeholder="Name"
        className="border w-72 h-12 rounded px-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border w-72 h-12 rounded px-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-72 h-12 rounded px-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignUp}
        className="bg-green-500 hover:bg-green-600 text-white w-72 h-12 rounded cursor-pointer transition"
      >
        Sign Up
      </button>

      <p className="text-gray-700">
        Already have an account?{" "}
        <Link to="/SignIn">
          <span className="text-blue-600 hover:underline cursor-pointer">Sign In</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

