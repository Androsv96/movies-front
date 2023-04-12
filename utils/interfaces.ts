import {
  AddRatingResponse,
  CreateSession,
  Media,
  MediaDetails,
  RequestToken,
  User,
} from "@/__generated__/graphql";

export interface MEDIA {
  media: Media[];
}

export interface MEDIA_DETAILS {
  mediaDetails: MediaDetails;
}

export interface MEDIAS_DETAILS {
  mediasDetails: MediaDetails[];
}

export interface REQUEST_TOKEN {
  getRequestToken: RequestToken;
}

export interface CREATE_SESSION {
  createSession: CreateSession;
}

export interface USER {
  getUser: User;
}

export interface ADD_RATING_RESPONSE {
  addRating: AddRatingResponse;
}
