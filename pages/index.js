import Head from "next/head"
import { Artists, Features } from "../components/Home"
import { getArtists } from "../services"

export default function Home({ artists }) {
  return (
    <div className="mx-auto px-10">
      <Head>
        <title>Think Artwork TT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <Artists artists={artists} />
      <Features />
    </div>
  )
}

export async function getStaticProps() {
  const artists = (await getArtists()) || []
  return {
    props: { artists },
  }
}
