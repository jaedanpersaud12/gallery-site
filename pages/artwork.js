import React from "react"
import { AllArtworks } from "../components"
import { getAllArtworks } from "../services"

const Artwork = ({ artworks }) => {
  return (
    <div className="mx-auto px-10">
      <AllArtworks artworks={artworks} />
    </div>
  )
}

export default Artwork

export async function getServerSideProps() {
  const artworks = (await getAllArtworks()) || []
  return {
    props: { artworks },
  }
}
