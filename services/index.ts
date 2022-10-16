import { request, gql } from "graphql-request";

const graphQLURL: string =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9awn2jl3cpo01uebl62cpbp/master";

export const getPostsData = async () => {
  const query = gql`
    query {
      posts {
        author {
          photo {
            url
          }
          name
        }
        title
        featuredImage {
          url
        }
        upvoted
        createdAt
      }
    }
  `;

  const result = await request(graphQLURL, query);
  return result.posts;
};
