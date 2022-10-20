import Link from "next/link"
import React from "react"
import { getArtworkDetails, getArtworks } from "../../services"

const ArtworkDetails = ({ artwork }) => {
  return (
    <div className="px-10 md:px-24 py-32 h-screen my-auto">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="uppercase tracking-[.4em] pt-10">
          <h2 className="text-4xl font-semibold">{artwork.artist.name}</h2>
          <h2 className="text-3xl">{artwork.name}</h2>
          <div className="py-8">
            <h3 className="text-[12px] tracking-wide">{artwork.medium}</h3>
            <h3 className="text-[12px] tracking-wide">123" x 123"</h3>
          </div>
          <button className="uppercase tracking-[.2em text-[12px] px-5 py-3 text-gray-100 bg-black dark:text-black dark:bg-gray-100">
            ENQUIRE
          </button>
        </div>
        <div className="mx-auto">
          <div className="mx-auto" key={artwork.name}>
            <Link href={`/artwork/${artwork.slug}`}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1100"
                className="cursor-pointer"
              >
                <div className="w-[400px] mx-auto">
                  <img src={artwork.image.url} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworkDetails

export async function getStaticProps({ params }) {
  const data = await getArtworkDetails(params.slug)
  return {
    props: { artwork: data },
  }
}

export async function getStaticPaths() {
  const artworks = await getArtworks()
  return {
    paths: artworks.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}
