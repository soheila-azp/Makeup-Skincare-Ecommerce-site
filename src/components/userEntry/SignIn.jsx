// import React from 'react'
// import { Link } from 'react-router-dom'
// import SignUp from './SignUp'

// const SignIn = () => {
//   return (
//     <div className='flex flex-col items-center mt-40 gap-5' >
//       <input type='text' placeholder='Email' className='border w-72 h-12 rounded'/>
//       <input type='text' placeholder='Password' className='border w-72 h-12 rounded'/>
//       <button className='bg-blue-200 w-72 h-12 rounded cursor-pointer'>Sign In</button>
//       <p>If you dont have an acount,<Link to="/SignUp"><span class="cursor-pointer">Sign Up</span></Link></p>
//     </div>
//   )
// }

// export default SignIn
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../core/services/api/auth"; // مسیر درست فایل api رو تنظیم کن
import { setItem } from "../../core/services/common/storage.services"; // برای ذخیره توکن
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("لطفاً ایمیل و رمز عبور را وارد کنید");
      return;
    }

    try {
      const res = await signIn({ email, password });

      // بررسی موفقیت ورود
      if (res.success) {
        toast.success("ورود موفقیت‌آمیز بود 🌸");

        // ذخیره‌ی توکن در localStorage (با تابع کمکی)
        setItem("token", res.token);

        // هدایت به داشبورد یا صفحه اصلی
        navigate("/panel");
      } else {
        toast.error(res.message || "ورود ناموفق بود");
      }
    } catch (err) {
      console.error("Sign in error:", err);
      toast.error("ایمیل یا رمز عبور اشتباه است!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-40 gap-5">
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
        onClick={handleSignIn}
        className="bg-blue-500 hover:bg-blue-600 text-white w-72 h-12 rounded cursor-pointer transition"
      >
        Sign In
      </button>

      <p className="text-gray-700">
        If you don't have an account,{" "}
        <Link to="/SignUp">
          <span className="text-blue-600 hover:underline cursor-pointer">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
