import Link from "next/link"
import React from "react"

const Works = ({ artist }) => {
  return (
    <div className="grid gap-x-10 items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 pt-20">
      {artist.artworks.map((artwork) => (
        <div key={artwork.name}>
          <Link href={`/artwork/${artwork.slug}`}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="middle-middle"
              data-aos-duration="1100"
              className="cursor-pointer"
            >
              <div className="">
                <img
                  className="hover:brightness-90 hover:scale-105 duration-200"
                  src={artwork.image.url}
                />
              </div>
              <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
                {artwork.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Works
