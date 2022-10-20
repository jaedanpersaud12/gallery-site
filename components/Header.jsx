import React, { useContext } from "react"
import Link from "next/link"

import HeaderLink from "./HeaderLink"
import Lightbulb from "./Lightbulb"
import HomeLink from "./HomeLink"

const navItems = [
  { name: "Artists", link: "artists", color: "text-red" },
  { name: "Artwork", link: "artwork", color: "text-ora" },
  { name: "Exhibitions", link: "exhibitions", color: "text-yel" },
  { name: "About Us", link: "aboutus", color: "text-gre" },
  { name: "Contact", link: "contact", color: "text-blu" },
]

const Header = () => {
  return (
    <div className="mx-auto px-10 sticky top-0 z-30 transition-all duration-300 text-black bg-white dark:bg-black dark:text-gray-200">
      <div className="flex items-center justify-between w-full py-2">
        <div className="md:float-left block">
          {/* COMPONENT */}
          <HomeLink />
          {/* COMPONENT */}
        </div>
        <div className="md:flex items-center text-right md:float-left">
          {navItems.map((item) => (
            <HeaderLink key={item.link} item={item} />
          ))}
          <Lightbulb />
        </div>
      </div>
    </div>
  )
}

export default Header
