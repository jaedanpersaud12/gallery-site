import Link from "next/link"
import React from "react"
import getContentFragment from "../../utils/getContentFragment"

const Overview = ({ artist }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1100"
      className="grid grid-cols-1 items-center md:grid-cols-2 md:py-20"
    >
      <div>
        {artist.biography && (
          <p className="uppercase text-[12px] open-sans tracking-wide py-14 md:py-20 pr-10">
            {artist.biography.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              )
              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </p>
        )}
      </div>
      <div className="mx-auto md:ml-auto">
        <Link href={`/artwork/${artist.artworks[0].slug}`}>
          <div className="cursor-pointer">
            <img
              className="h-[500px] hover:scale-105 duration-200 object-contain"
              src={artist.artworks[0].image.url}
              alt=""
            />
            <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
              {artist.artworks[0].name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Overview
