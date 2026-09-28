import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hook/useAuth";
import { useForm } from "react-hook-form";
import { ShoppingBag, Heart, House } from "lucide-react";

const EyeOpen = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const Register = () => {
  const { handleRegister } = useAuth();

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      contact: "",
      password: "",
      isSeller: false,
    },
  });

  const formSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      await handleRegister(data);

      reset();
    } catch (error) {
      console.error("Registration error:", error);

      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred.";

      setError("root.serverError", {
        type: "server",
        message: errorMessage,
      });
    }
  };

  // Input common classes
  const inp = (err) =>
    `w-full rounded-xl px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-[#9CA3AF] outline-none transition-all duration-500 ease-out ${
      err
        ? "bg-red-50 border border-red-300 focus:ring-2 focus:ring-red-200"
        : "bg-[#F5F5F7] border border-[#E8D5D2] focus:bg-white focus:border-[#73342E] focus:ring-2 focus:ring-[#73342E]/10"
    }`;

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center p-3"
      style={{
        background:
          "linear-gradient(160deg, #73342E 0%, #A46260 35%, #b16b65ff 100%)",
      }}
    >
      {/* Main Register Container */}
      <div className="flex flex-col w-full max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-6xl lg:flex-row h-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/40">
        
        {/* =========================
            LEFT SIDE - HERO
        ========================== */}
        <div
          className="RegisterHero relative w-full h-[580px] flex overflow-hidden rounded-t-3xl shadow-[8px_0_30px_rgba(74,35,31,0.18)] lg:w-full lg:h-auto lg:rounded-l-3xl lg:rounded-tr-none md:h-[580px]"
          style={{
            backgroundImage: "url('/images/RegisterHeroo.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#73342E]/55 via-black/25 to-[#73342E]/60" />

          {/* Hero Content */}
          <div className="Logo relative z-10 w-full h-full flex flex-col p-10 lg:p-10 lg:justify-between md:p-12">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/sf-logo.png"
                alt="Saloni Finds"
                className="w-[136px] h-[136px] drop-shadow-lg"
              />

              <div className="flex flex-col font-cormorant text-white text-3xl font-bold leading-[1.05] pt-10">
                <h2 className="text-white text-[1.5rem] uppercase font-medium mt-1">
                  Saloni Finds
                </h2>

                <p className="text-white/70 text-[1rem]">
                  Find &bull; Love &bull; Keep
                </p>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="flex flex-col font-cormorant text-white text-[3rem] pt-2 lg:text">
              <span>Beautiful</span>
              <span>Finds for a</span>
              <span>Brighter You</span>
            </div>

            {/* Features */}
            <div className="flex items-center gap-12 pt-8">

              {/* Curated */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 rounded-full flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-xs">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>

                <span className="text-[14px] text-white font-medium mt-1.5">
                  Curated
                </span>

                <span className="text-[12px] text-white/70">
                  Products
                </span>
              </div>

              {/* Honest */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 rounded-full flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-xs">
                  <Heart className="w-5 h-5 text-white" />
                </div>

                <span className="text-[14px] text-white font-medium mt-1.5">
                  Honest
                </span>

                <span className="text-[12px] text-white/70">
                  Reviews
                </span>
              </div>

              {/* Lifestyle */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 rounded-full flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-xs">
                  <House className="w-5 h-5 text-white" />
                </div>

                <span className="text-[14px] text-white font-medium mt-1.5">
                  Lifestyle
                </span>

                <span className="text-[12px] text-white/70">
                  Inspiration
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE - FORM
        ========================== */}
        <div className="w-full bg-gradient-to-br from-[#FFF9F7] via-[#F8F5F4] to-[#F1E9E7] flex flex-col justify-center px-6 py-8 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center lg:px-12 lg:py-8 md:px-12">

          <div className="w-full max-w-md mx-auto">

            {/* Form Header */}
            <div className="mb-4 sm:mb-5 flex flex-col items-center">
              <h1
                className="font-cormorant text-4xl font-bold"
                style={{ color: "#813b35ef" }}
              >
                Create an Account
              </h1>

              <p className="text-xs text-gray-500 mt-1">
                Sign up to discover exclusive finds and honest reviews.
              </p>
            </div>

            {/* Server Error */}
            {errors.root?.serverError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-600 text-sm font-medium rounded-xl text-center">
                {errors.root.serverError.message}
              </div>
            )}

            {/* =========================
                FORM
            ========================== */}
            <form
              onSubmit={handleSubmit(formSubmit)}
              autoComplete="on"
              className="flex flex-col gap-1"
            >

              {/* =========================
                  FULL NAME
              ========================== */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  <span className="text-[#A46260] text-[1rem]">
                    Full Name
                  </span>
                </label>

                <input
                  id="fullname"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Saloni"
                  className={inp(errors.fullname)}
                  {...register("fullname", {
                    required: "Full name is required",

                    minLength: {
                      value: 3,
                      message: "Must be at least 3 characters",
                    },
                  })}
                />

                <p className="text-[11px] text-red-500 mt-1 min-h-[16px]">
                  {errors.fullname?.message}
                </p>
              </div>

              {/* =========================
                  EMAIL
              ========================== */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  <span className="text-[#A46260] text-[1rem]">
                    Email Address
                  </span>
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className={inp(errors.email)}
                  {...register("email", {
                    required: "Email is required",

                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                />

                <p className="text-[11px] text-red-500 mt-1 min-h-[16px]">
                  {errors.email?.message}
                </p>
              </div>

              {/* =========================
                  CONTACT NUMBER
              ========================== */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  <span className="text-[#A46260] text-[1rem]">
                    Contact Number
                  </span>
                </label>

                <input
                  id="contact"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  placeholder="+91 00000 00000"
                  className={inp(errors.contact)}
                  {...register("contact", {
                    required: "Contact number is required",

                    pattern: {
                      value: /^\d{10}$/,
                      message: "Must be a valid 10-digit number",
                    },
                  })}
                />

                <p className="text-[11px] text-red-500 mt-1 min-h-[16px]">
                  {errors.contact?.message}
                </p>
              </div>

              {/* =========================
                  PASSWORD
              ========================== */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  <span className="text-[#A46260] text-[1rem]">
                    Password
                  </span>
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="********"
                    className={`${inp(errors.password)} pr-10`}
                    {...register("password", {
                      required: "Password is required",

                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters",
                      },
                    })}
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    aria-label={
                      showPass ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPass((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPass ? <EyeOff /> : <EyeOpen />}
                  </button>

                </div>

                <p className="text-[11px] text-red-500 mt-1 min-h-[16px]">
                  {errors.password?.message}
                </p>
              </div>

              {/* =========================
                  SELLER CHECKBOX
              ========================== */}
              <div className="flex items-center gap-2 pt-1">

                <input
                  id="isSeller"
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#73342E] accent-[#73342E] cursor-pointer"
                  {...register("isSeller")}
                />

                <label
                  htmlFor="isSeller"
                  className="text-xs text-gray-600 cursor-pointer select-none"
                >
                  Register as a Seller
                </label>

              </div>

              {/* =========================
                  SUBMIT BUTTON
              ========================== */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#73342E] hover:bg-[#5e2b26] text-white font-semibold py-3 rounded-xl transition duration-200 text-sm shadow-md mt-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500 mt-4 lg:text-[1.2rem] md:text-[1.1rem]">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-[#73342E] font-medium hover:underline"
              >
                Log in
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;