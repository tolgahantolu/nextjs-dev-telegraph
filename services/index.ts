import { request, gql } from "graphql-request";

const graphQLURL: any = process.env.NEXT_PUBLIC_ENDPOINT_URL;

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
        posts(orderBy: createdAt_DESC) {
          createdAt
          slug
          title
          upvoted
          featuredImage {
            url
          }
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

export const submitComment = async (obj: any) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};
