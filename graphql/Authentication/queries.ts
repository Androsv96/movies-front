import { gql } from "@apollo/client";

export const GET_REQUEST_TOKEN_QUERY = gql(/* GraphQL */ `
  query GetRequestToken {
    getRequestToken {
      success
      expires_at
      request_token
    }
  }
`);

export const GET_USER_QUERY = gql(/* GraphQL */ `
  query GetUser($sessionId: String!) {
    getUser(sessionId: $sessionId) {
      id
      name
      ratedMedia {
        id
        rating
      }
    }
  }
`);
