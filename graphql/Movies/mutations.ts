import { gql } from "@apollo/client";

export const ADD_RATING = gql(/* GraphQL */ `
  mutation AddRating($inputData: AddRatingInput!) {
    addRating(inputData: $inputData) {
      status_code
      status_message
    }
  }
`);
