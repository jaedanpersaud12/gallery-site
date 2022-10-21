import Link from "next/link"
import React from "react"

const HomeLink = () => {
  return (
    <Link href={"/"}>
      <span className="whitespace-nowrap fancy uppercase tracking-wider cursor-pointer text-xl">
        Think Artwork
      </span>
    </Link>
  )
}

export default HomeLink
