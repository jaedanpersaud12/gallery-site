import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { getArtworkDetails, getArtworks } from "../../services"
import { Loader } from "../../components"

const ArtworkDetails = ({ artwork }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="px-10 lg:px-48 py-10 md:py-20 my-auto">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="uppercase tracking-[.4em] pb-10 md:py-20">
          <Link href={`/artists/${artwork.artist.slug}`}>
            <a>
              <h2 className="text-4xl font-semibold">{artwork.artist.name}</h2>
            </a>
          </Link>
          <h2 className="text-3xl">{artwork.name}</h2>
          <div className="py-8">
            <h3 className="text-[12px] tracking-wide">{artwork.medium}</h3>
            <h3 className="text-[12px] tracking-wide">123" x 123"</h3>
          </div>
          <button className="uppercase tracking-[.2em text-[12px] px-5 py-3 text-gray-100 bg-black dark:text-black dark:bg-gray-100">
            ENQUIRE
          </button>
        </div>
        <div className="pb-20 md:pb-0 mx-auto" key={artwork.name}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-middle"
            data-aos-duration="1100"
          >
            <div className="mx-auto">
              <Image
                className=""
                src={artwork.image.url}
                width={artwork.image.width}
                height={artwork.image.height}
              />
            </div>
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
    fallback: true,
  }
}
