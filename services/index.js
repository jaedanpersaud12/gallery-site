import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getArtists = async () => {
  const query = gql`
    query GetArtists {
      artistsConnection {
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
