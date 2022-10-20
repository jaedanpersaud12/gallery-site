import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const HeaderLink = ({ item }) => {
  const router = useRouter()
  return (
    <div className="hidden md:block">
      <Link key={item.name} href={`/${item.link}`}>
        <span
          className={`uppercase tracking-[.3em] text-[10px] align-middle ml-8 ${
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
