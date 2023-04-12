import { useEffect } from "react";

import { useRouter } from "next/router";

import { useLazyQuery, useMutation } from "@apollo/client";

import { CREATE_SESSION, REQUEST_TOKEN, USER } from "@/utils/interfaces";
import {
  getRequestTokenURL,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuth, setUser } from "@/redux/slices/user";
import {
  CREATE_SESSION_MUTATION,
  GET_REQUEST_TOKEN_QUERY,
  GET_USER_QUERY,
} from "@/graphql/Authentication/";

export const Authentication = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { approved, request_token } = router.query as {
    request_token: string;
    approved: string;
  };
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const [getRequestToken, { data }] = useLazyQuery<REQUEST_TOKEN>(
    GET_REQUEST_TOKEN_QUERY
  );
  useLazyQuery;
  const [getUser] = useLazyQuery<USER>(GET_USER_QUERY);

  const [createSession] = useMutation<CREATE_SESSION>(CREATE_SESSION_MUTATION);

  useEffect(() => {
    if (data) {
      const { request_token } = data.getRequestToken;
      location.replace(getRequestTokenURL(request_token || ""));
    }
  }, [data]);

  const authenticateUser = async () => {
    const { data: sessionData } = await createSession({
      variables: { requestToken: request_token },
    });

    if (sessionData) {
      const { session_id, success } = sessionData.createSession;
      if (success) {
        saveToLocalStorage("session_id", session_id || "");
        const { data: userData } = await getUser({
          variables: { sessionId: session_id || "" },
          fetchPolicy: "cache-and-network",
        });
        if (userData) {
          dispatch(setAuth(true));
          dispatch(
            setUser({
              id: userData.getUser.id || 0,
              name: userData.getUser.name || "",
              ratedMedia: userData.getUser.ratedMedia,
            })
          );
        }
      }
      router.replace("/", undefined, { shallow: true });
    }
  };

  useEffect(() => {
    if (approved) {
      authenticateUser();
    }
  }, [approved, request_token]);

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
