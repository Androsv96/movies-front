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

export interface MEDIADETAILS {
  mediaDetails: MediaDetails;
}

export interface MEDIASDETAILS {
  mediasDetails: MediaDetails[];
}

export interface REQUESTTOKEN {
  getRequestToken: RequestToken;
}

export interface CREATESESSION {
  createSession: CreateSession;
}

export interface USER {
  getUser: User;
}

export interface ADD_RATING_RESPONSE {
  addRating: AddRatingResponse;
}
