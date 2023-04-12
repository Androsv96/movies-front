import { gql } from "@apollo/client";

export const CREATE_SESSION = gql(/* GraphQL */ `
  mutation CreateSession($requestToken: String!) {
    createSession(requestToken: $requestToken) {
      success
      session_id
    }
  }
`);
