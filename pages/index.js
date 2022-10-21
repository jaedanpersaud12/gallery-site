import Head from "next/head"
import { ArtistsCard, Features } from "../components"
import { getArtists } from "../services"

export default function Home({ artists }) {
  return (
    <div className="mx-auto px-10">
      <Head>
        <title>Think Artwork TT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <ArtistsCard artists={artists} />
    </div>
  )
}

export async function getStaticProps() {
  const artists = (await getArtists()) || []
  return {
    props: { artists },
  }
}
