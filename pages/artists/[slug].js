import React, { useState } from "react"
import { getArtists, getArtistDetails } from "../../services"
import {
  CurrentPage,
  Featured,
  Loader,
  Overview,
  Works,
} from "../../components"
import data from "../../components/Artist/pages.json"
import { useRouter } from "next/router"

const ArtistDetails = ({ artist }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
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
      {artist.featuredArt && <Featured artist={artist} />}
      <div>
        <div className="px-10 md:px-24 pt-10">
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
          {showCurrent()}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails

export async function getServerSideProps({ params }) {
  const data = await getArtistDetails(params.slug)
  return {
    props: { artist: data },
  }
}
export async function getStaticPaths() {
  const artists = await getArtists()
  return {
    paths: artists.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
