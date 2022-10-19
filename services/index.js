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
              url(
                transformation: {
                  image: { resize: { height: 1000, width: 1000 } }
                }
              )
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
          url(
            transformation: { image: { resize: { height: 1000, width: 1000 } } }
          )
        }
        artworks {
          ... on Artwork {
            id
            name
            image {
              url
            }
            slug
          }
        }
        slug
        longBio
        shortBio
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.artist
}
