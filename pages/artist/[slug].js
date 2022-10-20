import React from "react"
import Artists from "../../components/Home/Artists"

import { getArtists, getArtistDetails } from "../../services"

const ArtistDetails = ({ artist }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="">
      {artist.featuredArt && (
        <div className="relative">
          <img
            className="w-full h-64 object-cover brightness-75"
            src={artist.featuredArt.image.url}
            alt=""
          />
          <h1 class="uppercase tracking-[.4em] text-2xl text-center absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {artist.name}
          </h1>
        </div>
      )}
      <div>
        <div className="px-10 md:px-24 py-10">
          <div>
            <ul className="flex flex-wrap gap-10 uppercase tracking-[.4em] text-[10px]">
              <li>Overview</li>
              <li>Works</li>
              <li>Biography</li>
              <li>Exhibitions</li>
              <li>Enquire</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 items-center md:grid-cols-2 md:py-20">
            <div>
              {artist.biography && (
                <p className="text-[15px] open-sans tracking-wide py-14 md:py-20 pr-10">
                  {artist.biography.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) =>
                      getContentFragment(itemIndex, item.text, item)
                    )
                    return getContentFragment(
                      index,
                      children,
                      typeObj,
                      typeObj.type
                    )
                  })}
                </p>
              )}
            </div>
            <div>
              <img
                className="h-[500px] object-contain mx-auto md:ml-auto"
                src={artist.artworks[0].image.url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails

export async function getStaticProps({ params }) {
  const data = await getArtistDetails(params.slug)
  return {
    props: { artist: data },
  }
}
export async function getStaticPaths() {
  const artists = await getArtists()
  return {
    paths: artists.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}
