import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AUTH_KEY = "heritageLegacyAuth";
const USER_KEY = "heritageLegacyUser";

const navItems = [
  { label: "Home", to: "/home", icon: "⌂" },
  { label: "About Us", to: "/about", icon: "◌" },
  { label: "Community", to: "/hilights", icon: "◎" },
  { label: "Events", to: "/events", icon: "✦" },
  { label: "Contact", to: "/contact", icon: "◍" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(AUTH_KEY) === "true"
  );
  const [userName, setUserName] = useState("My Account");
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const syncAuthState = () => {
    setIsAuthenticated(localStorage.getItem(AUTH_KEY) === "true");

    try {
      const storedUser = JSON.parse(localStorage.getItem(USER_KEY) || "null");
      setUserName(storedUser?.fullName || storedUser?.email || "My Account");
    } catch {
      setUserName("My Account");
    }
  };

  useEffect(() => {
    syncAuthState();

    const handleStorageChange = (event) => {
      if (event.key === AUTH_KEY || event.key === USER_KEY) {
        syncAuthState();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("heritage-auth-change", syncAuthState);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("heritage-auth-change", syncAuthState);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (to) => {
    if (to === "/home") {
      return location.pathname === "/home" || location.pathname === "/";
    }
    return location.pathname.startsWith(to);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
    setIsAuthenticated(false);
    setUserName("My Account");
    setIsMenuOpen(false);
    window.dispatchEvent(new Event("heritage-auth-change"));
    navigate("/login", { replace: true });
  };

  const authActions = isAuthenticated ? (
    <div className="flex items-center gap-2 normal-case">
      <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-orange-500 text-xs font-bold text-white">
          {userName.charAt(0).toUpperCase()}
        </span>
        <span className="max-w-[110px] truncate">{userName}</span>
      </div>
      <button
        type="button"
        onClick={handleLogout}
        className="rounded-full border border-red-200 px-3 py-2 text-xs font-bold text-red-800 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2 normal-case">
      <Link
        to="/login"
        className="rounded-full border border-red-200 px-4 py-2 text-xs font-bold text-red-800 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="rounded-full bg-gradient-to-r from-red-800 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-between items-center py-4 px-4 md:px-8 uppercase text-black">
      {/* Logo */}
      <div className="w-1/5 text-center">
        <h1 className="text-sm md:text-lg text-red-800 font-extrabold cursor-pointer whitespace-nowrap">
          Heritage <span className="text-orange-500">Legacy</span>
          <span className="text-fuchsia-800"> By AI</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:hidden lg:flex w-2/5 justify-around">
        <Link to="/home" className="font-bold text-black ">
          Home
        </Link>
        <Link to="/about" className="font-bold text-black ">
          About Us
        </Link>
        <Link to="/hilights" className="font-bold text-black ">
          Community
        </Link>
        <Link to="/events" className="font-bold text-black ">
          Events
        </Link>
        <Link to="/contact" className="font-bold text-black ">
          Contact
        </Link>
      </div>

      <div className="hidden lg:flex w-1/5 justify-end">
        {authActions}
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => {
            if (isMenuOpen) {
              setIsMenuOpen(false);
              return;
            }
            setIsMenuOpen(true);
          }}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm transition duration-200 hover:border-orange-300 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative flex h-5 w-5 flex-col justify-center">
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu backdrop and panel */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/35 backdrop-blur-[1px]"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          ref={menuRef}
          className={`absolute left-4 right-4 top-20 z-50 overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="border-b border-gray-100 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500">
              Navigate
            </p>
          </div>

          <div className="p-3">
            <ul className="space-y-2">
              {navItems.map(({ label, to, icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                      isActiveLink(to)
                        ? "bg-gradient-to-r from-orange-50 via-white to-fuchsia-50 text-black shadow-sm ring-1 ring-orange-200"
                        : "text-gray-700 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                          isActiveLink(to)
                            ? "bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-sm"
                            : "bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-600"
                        }`}
                      >
                        {icon}
                      </span>
                      {label}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isActiveLink(to) ? "bg-orange-500" : "bg-gray-200"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 p-4">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-3 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-orange-500 text-sm font-bold text-white">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                  <span className="min-w-0 truncate text-sm font-semibold normal-case text-gray-800">
                    {userName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full rounded-xl border border-red-200 px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-red-800 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-red-200 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-red-800 transition hover:bg-red-50"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-red-800 to-orange-500 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
