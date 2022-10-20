import React, { useState } from "react"
import { getArtists, getArtistDetails } from "../../services"
import { CurrentPage, Overview, Works } from "../../components"
import data from "../../components/Artist/pages.json"

const ArtistDetails = ({ artist }) => {
  console.log(artist)
  const [current, setCurrent] = useState("overview")
  const showCurrent = () => {
    switch (current) {
      case "overview":
        return <Overview artist={artist} />
      case "works":
        return <Works artist={artist} />
      default:
        return <div className="h-screen"></div>
    }
  }
  return (
    <div className="">
      {artist.featuredArt && (
        // FEATURED COMPONENT
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
        // FEATURED COMPONENT
      )}
      <div>
        <div className="px-10 md:px-24 py-10">
          {/* COMPONENT */}
          <div>
            <ul className="flex flex-wrap gap-10 uppercase tracking-[.4em] text-[10px]">
              {data.map((pages) => (
                <CurrentPage
                  key={pages}
                  current={current}
                  setCurrent={setCurrent}
                  currentPage={pages}
                />
              ))}
            </ul>
          </div>
          {/* COMPONENT */}

          {showCurrent()}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails

export async function getStaticProps({ params }) {
  const data = await getArtistDetails(params.slug)
  return {
    props: { artist: data },
  }
}
export async function getStaticPaths() {
  const artists = await getArtists()
  return {
    paths: artists.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}
