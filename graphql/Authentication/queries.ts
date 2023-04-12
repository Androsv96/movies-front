import { gql } from "@apollo/client";

export const GET_REQUEST_TOKEN = gql(/* GraphQL */ `
  query GetRequestToken {
    getRequestToken {
      success
      expires_at
      request_token
    }
  }
`);

export const GET_USER = gql(/* GraphQL */ `
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
