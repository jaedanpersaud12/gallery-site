import React from "react"

const Featured = ({ artist }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-64 object-cover brightness-75"
        src={artist.featuredArt.image.url}
        alt=""
      />
      <h1 className="uppercase tracking-[.4em] text-2xl text-center absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {artist.name}
      </h1>
    </div>
  )
}

export default Featured
