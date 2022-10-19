import React, { useContext } from "react"
import Link from "next/link"
import useDarkMode from "../hooks/UseDarkmode"

const navItems = [
  { name: "Artists", link: "artists", color: "text-red" },
  { name: "Artwork", link: "artwork", color: "text-ora" },
  { name: "Exhibitions", link: "exhibitions", color: "text-yel" },
  { name: "About Us", link: "aboutus", color: "text-gre" },
  { name: "Contact", link: "contact", color: "text-blu" },
]

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className="mx-auto px-10 mb-8 sticky top-0 z-30 transition-all duration-300 text-black bg-white dark:bg-black dark:text-gray-200">
      <div className="flex items-center justify-between border-b w-full py-2">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="fancy uppercase tracking-wider cursor-pointer text-xl">
              Think Artwork
            </span>
          </Link>
        </div>

        <div className="md:flex items-center text-right hidden md:float-left">
          {navItems.map((item) => (
            <Link key={item.name} href={`/${item.link}`}>
              <span
                className={`uppercase tracking-[.3em] text-[10px] align-middle ml-8 transition-all duration-200 hover:${item.color} dark:hover:text-${item.color} transition-all duration-300 underline-offset-4 font-semibold cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <div className="ml-4 cursor-pointer">
            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme("light")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
