import { request, gql } from "graphql-request";

const graphQLURL: string =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9awn2jl3cpo01uebl62cpbp/master";

export const getPostsData = async () => {
  const query = gql`
    query {
      posts {
        slug
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

export const getPostDetailData = async (slug: String) => {
  const query = gql`
    query getDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        comments {
          comment
          email
          name
          publishedAt
        }
        createdAt
        slug
        title
        content {
          raw
          text
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphQLURL, query, { slug });
  return result.post;
};

export const getCategoryPosts = async (slug: String) => {
  const query = gql`
    query getCategoryPosts($slug: String!) {
      category(where: { slug: $slug }) {
        name
        posts(orderBy: createdAt_ASC) {
          createdAt
          slug
          title
          upvoted
          excerpt
          content {
            raw
          }
          author {
            name
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphQLURL, query, { slug });
  return result.category;
};
