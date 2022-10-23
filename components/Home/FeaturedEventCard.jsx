import React from "react"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

const FeaturedEventCard = ({ post }) => {
  return (
    <div className="relative h-96 pr-10">
      <div
        className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-96"
        style={{ backgroundImage: `url('${post.image.url}')` }}
      />
      <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-96" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full"></div>
      <Link href={`/artwork/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  )
}

export default FeaturedEventCard
