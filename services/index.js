import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getArtists = async () => {
  const query = gql`
    query GetArtists {
      artistsConnection(first: 8) {
        edges {
          node {
            name
            slug
            image {
              url(transformation: { image: { resize: { width: 1000 } } })
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)
  return results.artistsConnection.edges
}
export const getAllArtists = async () => {
  const query = gql`
    query GetArtists {
      artistsConnection {
        edges {
          node {
            name
            slug
            image {
              url(transformation: { image: { resize: { width: 1000 } } })
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)
  return results.artistsConnection.edges
}

export const getArtistDetails = async (slug) => {
  const query = gql`
    query GetArtistDetails($slug: String!) {
      artist(where: { slug: $slug }) {
        name
        image {
          url(transformation: { image: { resize: { width: 1000 } } })
        }
        artworks {
          ... on Artwork {
            id
            name
            image {
              url(transformation: { image: { resize: { width: 1000 } } })
              height
              width
            }
            slug
          }
        }
        slug
        biography {
          raw
        }
        shortBio
        featuredArt {
          image {
            url(transformation: { image: { resize: { width: 1000 } } })
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.artist
}

export const getArtworks = async () => {
  const query = gql`
    query GetArtworks {
      artworksConnection {
        edges {
          node {
            name
            slug
            image {
              url(transformation: { image: { resize: { width: 1000 } } })
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.artworksConnection.edges
}

export const getAllArtworks = async () => {
  const query = gql`
    query GetAllArtworks {
      artworksConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            name
            slug
            image {
              url
              width
              height
            }
            artist {
              name
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.artworksConnection.edges
}

export const getArtworkDetails = async (slug) => {
  const query = gql`
    query GetArtwork($slug: String!) {
      artwork(where: { slug: $slug }) {
        name
        medium
        slug
        image {
          url(transformation: { image: { resize: { height: 1000 } } })
          width
          height
        }
        artist {
          name
          slug
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.artwork
}

export const getFeaturedArtworks = async () => {
  const query = gql`
    query GetFeaturedArtworks {
      artworks(orderBy: publishedAt_DESC) {
        name
        image {
          url
          width
          height
        }
        artist {
          name
        }
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.artworks
}
