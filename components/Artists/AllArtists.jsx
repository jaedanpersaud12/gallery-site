import Link from "next/link"
import React, { useState } from "react"

const AllArtists = ({ artists }) => {
  const [featured, setFeatured] = useState(true)
  return (
    <div className="py-10 md:py-14  border-t">
      <div className="flex justify-between">
        {/* HEADER 1 h2 */}
        <h1 className="uppercase tracking-[.3em] text-sm text-black dark:text-gray-200">
          All Artists
        </h1>
        {/* HEADER 1 */}
        <button
          onClick={() => {
            setFeatured(!featured)
          }}
        ></button>
      </div>
      <div className="grid gap-x-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 py-10 md:py-14 ">
        {artists.map((artist) => (
          <div key={artist.node.name}>
            <Link href={`/artists/${artist.node.slug}`}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1100"
                className="cursor-pointer"
              >
                <div className="">
                  <img
                    className="hover:brightness-90 hover:scale-105 duration-200 aspect-square"
                    src={artist.node.image.url}
                  />
                </div>
                <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
                  {artist.node.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllArtists
