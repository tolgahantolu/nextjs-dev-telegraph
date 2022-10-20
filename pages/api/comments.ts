import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql } from "graphql-request";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLURL: any = process.env.NEXT_PUBLIC_ENDPOINT_URL;

  const graphQlClient = new GraphQLClient(graphQLURL, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $email: String!
      $name: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          email: $email
          name: $name
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQlClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};
