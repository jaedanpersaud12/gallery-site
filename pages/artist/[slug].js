import React from "react"
import Artists from "../../components/Home/Artists"

import { getArtists, getArtistDetails } from "../../services"

const ArtistDetails = ({ artist }) => {
  console.table(artist.artworks[0])
  return (
    <div className="">
      {artist.featuredArt && (
        <div className="relative">
          <img
            className="w-full h-64 object-cover brightness-75"
            src={artist.featuredArt.image.url}
            alt=""
          />
          <h1 class="uppercase tracking-[.4em] text-2xl text-center absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {artist.name}
          </h1>
        </div>
      )}
      <div>
        <div className="px-10 md:px-24 py-10">
          <div>
            <ul className="flex flex-wrap gap-10 uppercase tracking-[.4em] text-[10px]">
              <li>Overview</li>
              <li>Works</li>
              <li>Biography</li>
              <li>Exhibitions</li>
              <li>Enquire</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-[13px] tracking-wide py-14 md:py-20 pr-10">
                {artist.longBio}
              </p>
            </div>
            <div>
              <img
                className="h-full w-48 mx-auto md:ml-auto"
                src={artist.artworks[0].image.url}
                alt=""
              />
            </div>
          </div>
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
