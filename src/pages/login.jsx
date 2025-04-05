import Image from "next/image";
import "../../styles/globals.css";
import linkedInIcon from "../../public/LinkedIn_logo_initials.png";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl font-bold mb-6">Log In</h2>

        {/* Google and LinkedIn Login Buttons */}
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 mb-3 hover:bg-gray-100">
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue With Google
        </button>

        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 mb-5 hover:bg-gray-100">
          <img src={linkedInIcon} alt="LinkedIn" className="w-5 h-5 mr-2" />
          Continue With LinkedIn
        </button>

        <div className="w-full text-center text-gray-500 mb-4">or</div>

        {/* Email and Password Fields */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-3 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md p-3 mb-2"
        />

        {/* Forgot Password */}
        <div className="w-full text-right text-orange-500 mb-5 cursor-pointer">
          Forgot Password?
        </div>

        {/* Login Button */}
        
        <button className="w-full bg-orange-500 text-white py-3 rounded-md">
          Log In
        </button>

        {/* Terms & Privacy */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          By continuing, you agree to OVOU's{" "}
          <Link href="/terms" className="text-orange-500">
            Terms Of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-orange-500">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* Right Section (Image & Info) */}
      <div className="hidden md:flex w-1/2 bg-black text-white flex-col justify-center items-center px-6">
        <h2 className="text-2xl font-bold mb-4">Capture your leads effectively</h2>
        <p className="text-center text-gray-400">
          Optimize engagement through effective lead capture.
        </p>

        <img src="/lead-capture.png" alt="Lead Capture" className="mt-6 w-3/4" />
      </div>
    </div>
  );
};

export default Login;


