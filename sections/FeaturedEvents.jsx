import React, { useState, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { FeaturedEventCard } from "../components"
import { getFeaturedArtworks } from "../services"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedEvents = ({ artworks }) => {
  return (
    <div className="">
      <Carousel infinite responsive={responsive} itemClass="px-4">
        {artworks.map((post, index) => (
          <FeaturedEventCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedEvents
