import React from "react"
import Artists from "../../components/Home/Artists"

import { getArtists, getArtistDetails } from "../../services"

const ArtistDetails = ({ artist }) => {
  console.table(artist)
  return <div></div>
}

export default ArtistDetails

export async function getStaticProps({ params }) {
  const data = await getArtistDetails(params.slug)
  return {
    props: { artist: data },
  }
}
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  }
}
