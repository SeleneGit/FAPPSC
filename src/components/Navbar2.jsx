import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, isAuthenticated, user } = useAuth();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón del menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18m-18 6h18"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Links del menú */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/notes"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Notes
                </a>
                <a
                  href="/add-note"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Create Note
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
              {user.username}
            </h1>
          </div>
          {/* Dropdown del perfil */}
          <div className="relative ml-3">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="/"
                  onClick={() => {
                    logout();
                  }}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
