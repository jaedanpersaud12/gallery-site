import Image from "next/image"
import Link from "next/link"
import React from "react"
import Artwork from "./Artwork"

const Works = ({ artist }) => {
  return (
    <div className="grid gap-x-10 items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 py-28">
      {artist.artworks.map((artwork) => (
        <Artwork artwork={artwork} />
      ))}
    </div>
  )
}

export default Works
