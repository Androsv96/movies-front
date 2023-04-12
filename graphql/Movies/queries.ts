import { gql } from "@apollo/client";

export const GET_TOP_MEDIA = gql(/* GraphQL */ `
  query GetTopMedia($page: Int!) {
    media(page: $page) {
      id
      title
      poster_path
      release_date
      vote_average
      type
      genres
    }
  }
`);

export const GET_MEDIA_DETAILS = gql(/* GraphQL */ `
  query GetMediaDetails($id: Int!, $type: String!) {
    mediaDetails(id: $id, type: $type) {
      title
      genres {
        id
        name
      }
      overview
      vote_average
      release_date
      poster_path
      production_companies {
        id
        name
      }
    }
  }
`);

export const GET_MEDIAS_DETAILS = gql(/* GraphQL */ `
  query GetMediasDetails($items: [VariousMediaDetails!]!) {
    mediasDetails(items: $items) {
      id
      type
      title
      genres {
        id
        name
      }
      overview
      vote_average
      release_date
      poster_path
      production_companies {
        id
        name
      }
    }
  }
`);
