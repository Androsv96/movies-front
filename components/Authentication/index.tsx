import { useEffect } from "react";

import { useRouter } from "next/router";

import { useLazyQuery, useMutation } from "@apollo/client";

import { CREATE_SESSION, GET_REQUEST_TOKEN } from "@/graphql/Movies/querys";
import { CREATESESSION, REQUESTTOKEN } from "@/utils/interfaces";
import {
  getRequestTokenURL,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuth } from "@/redux/slices/user";

export const Authentication = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { approved, request_token } = router.query as {
    request_token: string;
    approved: string;
  };
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const [getRequestToken, { data }] =
    useLazyQuery<REQUESTTOKEN>(GET_REQUEST_TOKEN);
  const [createSession, { data: sessionData, loading: loadingSessionData }] =
    useMutation<CREATESESSION>(CREATE_SESSION);

  useEffect(() => {
    if (data) {
      const { request_token } = data.getRequestToken;
      location.replace(getRequestTokenURL(request_token || ""));
    }
  }, [data]);

  useEffect(() => {
    if (approved) {
      createSession({ variables: { requestToken: request_token } });
    }
  }, [approved, request_token]);

  useEffect(() => {
    if (sessionData && !loadingSessionData) {
      const { session_id, success } = sessionData.createSession;
      if (success) {
        router.replace("/", undefined, { shallow: true });
        saveToLocalStorage("session_id", session_id || "");
        dispatch(setAuth(true));
      }
    }
  }, [sessionData, loadingSessionData]);

  const handleToogleSession = () => {
    if (isAuthenticated) {
      removeFromLocalStorage("session_id");
      dispatch(setAuth(false));
    } else {
      getRequestToken();
    }
  };

  return (
    <div className="flex justify-end items-center p-4">
      <p
        className="text-sm text-white hover:cursor-pointer"
        onClick={handleToogleSession}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </p>
    </div>
  );
};
