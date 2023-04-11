import {
  CreateSession,
  Media,
  MediaDetails,
  RequestToken,
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
