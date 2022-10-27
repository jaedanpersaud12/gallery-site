import Head from "next/head"
import { AllArtists } from "../components"
import { getAllArtists, getArtists } from "../services"

export default function Artists({ myartists }) {
  return (
    <div className="mx-auto px-10">
      <Head>
        <title>Think Artwork TT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllArtists artists={myartists} />
    </div>
  )
}

export async function getServerSideProps() {
  const myartists = (await getAllArtists()) || []
  return {
    props: { myartists },
  }
}
