import Image from "next/image"
import Link from "next/link"
import React from "react"

const AllArtworks = ({ artworks }) => {
  console.log(artworks)
  return (
    <div className="py-20 border-t">
      <h1 className="uppercase tracking-[.3em] text-sm text-black dark:text-gray-200">
        All Artwork
      </h1>
      <div className="grid gap-x-10 items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 py-28">
        {artworks.map((artwork) => (
          <div key={artwork.node.name}>
            <Link href={`/artwork/${artwork.node.slug}`}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="middle-middle"
                data-aos-duration="1100"
                className="cursor-pointer"
              >
                <div
                  className={`hover:scale-105 transition-all duration-200 relative`}
                >
                  <Image
                    className="hover:brightness-90 transition-all duration-200"
                    src={artwork.node.image.url}
                    width={artwork.node.image.width}
                    height={artwork.node.image.height}
                  />
                </div>
                <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
                  {artwork.node.name}
                </p>
                <p className="uppercase tracking-[.3em] text-[10px] text-gray-600 dark:text-gray-400">
                  {artwork.node.artist.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllArtworks
