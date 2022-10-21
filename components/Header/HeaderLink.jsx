import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const HeaderLink = ({ item }) => {
  const router = useRouter()
  return (
    <div className="md:flex items-center">
      <Link key={item.name} href={`/${item.link}`}>
        <span
          className={`flex items-center whitespace-nowrap uppercase tracking-[.3em] text-[10px]  ml-6 ${
            router.pathname.includes(item.link) && `${item.color}`
          } ${item.hoverColor} dark:hover:text-${
            item.color
          } transition-all duration-200 underline-offset-4 font-semibold cursor-pointer`}
        >
          {item.name}
        </span>
      </Link>
    </div>
  )
}

export default HeaderLink
