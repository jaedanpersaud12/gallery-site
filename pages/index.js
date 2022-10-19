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
      <div className="grid grid-cols-5">
        <div className="w-full bg-red"></div>
        <div className="w-full bg-ora"></div>
        <div className="w-full bg-yel"></div>
        <div className="w-full bg-gre"></div>
        <div className="w-full bg-blu"></div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const artists = (await getArtists()) || []
  return {
    props: { artists },
  }
}
