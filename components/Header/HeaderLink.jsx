import Link from "next/link"
import React from "react"

const HeaderLink = ({ item }) => {
  return (
    <div className="hidden md:block">
      <Link key={item.name} href={`/${item.link}`}>
        <span
          className={`uppercase tracking-[.3em] text-[10px] align-middle ml-8 hover:${item.color} dark:hover:text-${item.color} transition-all duration-100 underline-offset-4 font-semibold cursor-pointer`}
        >
          {item.name}
        </span>
      </Link>
    </div>
  )
}

export default HeaderLink
