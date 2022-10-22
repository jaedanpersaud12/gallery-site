import Image from "next/image"
import Link from "next/link"
import React from "react"
import ArtworkCard from "./ArtworkCard"

const AllArtworks = ({ artworks }) => {
  return (
    <div className="py-20 border-t">
      <h1 className="uppercase tracking-[.3em] text-sm text-black dark:text-gray-200">
        All Artwork
      </h1>
      <div className="grid gap-x-10 items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 py-28">
        {artworks.map((artwork) => (
          <ArtworkCard artwork={artwork} />
        ))}
      </div>
    </div>
  )
}

export default AllArtworks
