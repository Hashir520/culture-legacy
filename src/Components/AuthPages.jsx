import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AUTH_KEY = "heritageLegacyAuth";
const USER_KEY = "heritageLegacyUser";

const heritageImage =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80";

const SharedAuthLayout = ({
  title,
  subtitle,
  children,
  accentLabel,
  highlightText,
  detailText,
  compact = false,
}) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eee9e5] px-4 py-6 sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8 auth-fade">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-[#342d40] bg-[#282232] shadow-[0_30px_80px_rgba(31,24,42,0.28)] lg:h-[560px] lg:min-h-0 lg:max-w-[900px] lg:flex-row">
        <section
          className={`relative order-2 flex w-full flex-col justify-center bg-white px-5 py-8 sm:px-8 lg:w-[52%] lg:px-10 lg:py-8 xl:px-12 ${
            compact ? "overflow-visible lg:overflow-hidden" : "overflow-y-auto"
          }`}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-800 to-orange-500 text-sm font-bold text-white shadow-md shadow-orange-200">
              HL
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-red-800">
                Heritage Legacy
              </p>
              <p className="text-xs font-medium text-gray-500">By AI</p>
            </div>
          </div>

          <div className="mb-5">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-700">
              {accentLabel}
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
              {subtitle}
            </p>
          </div>

          <div className="w-full auth-form">{children}</div>
        </section>

        <aside className="auth-visual relative order-1 block h-52 w-full overflow-hidden bg-[#1d1d1d] lg:h-auto lg:w-[48%]">
          <img
            src={heritageImage}
            alt="Heritage architecture and cultural heritage"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d1d]/80 via-[#1d1d1d]/55 to-red-900/40" />
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,transparent,transparent_18px,rgba(255,255,255,0.18)_19px,transparent_20px)]" />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-orange-100/80">
              Heritage Legacy By AI
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
              {highlightText}
            </h2>
            <p className="mt-3 hidden max-w-md text-sm leading-6 text-white/80 sm:block">
              {detailText}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  if (localStorage.getItem(AUTH_KEY) === "true") {
    return <Navigate to="/home" replace />;
  }

  const validateForm = () => {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(
      USER_KEY,
      JSON.stringify({ email: form.email.trim(), remember: form.remember })
    );

    window.dispatchEvent(new Event("heritage-auth-change"));
    navigate("/", { replace: true });
  };

  return (
    <SharedAuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your heritage journey."
      accentLabel="Member access"
      highlightText="Reconnect with the stories of our shared heritage."
      detailText="Celebrate culture, preserve tradition, and continue learning through immersive experiences designed for a connected community."
      compact
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
              errors.email ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="rounded-md p-1 text-red-700 transition hover:bg-orange-50 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full rounded-2xl border bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
                errors.password ? "border-red-300" : "border-gray-200"
              }`}
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-red-700 accent-red-700 focus:ring-orange-200"
            />
            Remember me
          </label>

          <Link to="/signup" className="text-sm font-medium text-red-700 transition hover:text-red-800">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-800 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-100"
        >
          Login
        </button>

        <div className="flex items-center gap-4 pt-2">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-gray-400">
            or
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-red-200 hover:text-red-700"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-red-700">
            G
          </span>
          Continue with Google
        </button>

        <p className="pt-2 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold text-red-700 transition hover:text-red-800">
            Sign Up
          </Link>
        </p>
      </form>
    </SharedAuthLayout>
  );
};

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (localStorage.getItem(AUTH_KEY) === "true") {
    return <Navigate to="/" replace />;
  }

  const validateForm = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!form.agree) {
      nextErrors.agree = "You must accept the terms and conditions.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    localStorage.setItem(USER_KEY, JSON.stringify({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
    }));

    navigate("/login", { replace: true });
  };

  return (
    <SharedAuthLayout
      title="Create an Account"
      subtitle="Join us in preserving and celebrating our heritage."
      accentLabel="New membership"
      highlightText="Become part of a living cultural story."
      detailText="Access heritage events, workshops, and stories that help sustain traditions while inspiring the next generation to connect with the past."
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
              errors.fullName ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
              errors.email ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="rounded-md p-1 text-red-700 transition hover:bg-orange-50 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          <input
            id="signup-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
              errors.password ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.password && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? "Hide confirmed password" : "Show confirmed password"}
              className="rounded-md p-1 text-red-700 transition hover:bg-orange-50 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-orange-100 ${
              errors.confirmPassword ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 transition-all duration-200">{errors.confirmPassword}</p>
          )}
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-red-700 accent-red-700 focus:ring-orange-200"
          />
          <span>
            I agree to the Terms &amp; Conditions and Privacy Policy.
          </span>
        </label>
        {errors.agree && (
          <p className="text-sm text-red-600 transition-all duration-200">{errors.agree}</p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-red-800 to-fuchsia-700 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
        >
          Create account
        </button>

        <p className="pt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-red-700 transition hover:text-red-800">
            Login
          </Link>
        </p>
      </form>
    </SharedAuthLayout>
  );
};
