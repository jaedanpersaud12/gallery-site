import React from "react"

const Artwork = ({ artist }) => {
  return (
    <div key={artist.node.name}>
      <Link href={`/artists/${artist.node.slug}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          className="cursor-pointer"
        >
          <div className="">
            <img
              className="hover:brightness-90   hover:scale-105 duration-200 aspect-square"
              src={artist.node.image.url}
            />
          </div>
          <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
            {artist.node.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Artwork
