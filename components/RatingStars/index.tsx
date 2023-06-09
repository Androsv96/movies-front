import { useLazyQuery, useMutation } from "@apollo/client";

import { MediaType } from "@/__generated__/graphql";
import { ADD_RATING } from "@/graphql/Movies/mutations";
import { getFromLocalStorage } from "@/utils/functions";
import { ADD_RATING_RESPONSE, USER } from "@/utils/interfaces";
import { GET_USER_QUERY } from "@/graphql/Authentication";
import { setAuth, setUser } from "@/redux/slices/user";
import { useAppDispatch } from "@/redux/hooks";

interface Props {
  rating: number;
  mediaID: number;
  type: MediaType;
}

const numOfStars = 10;
const stars = Array.from({ length: numOfStars }, (_, i) => i + 1);

export const RatingStars = ({ rating = 0, mediaID, type }: Props) => {
  const dispatch = useAppDispatch();

  const [getUser] = useLazyQuery<USER>(GET_USER_QUERY, {
    fetchPolicy: "network-only",
  });

  const [addMediaRating] = useMutation<ADD_RATING_RESPONSE>(ADD_RATING);

  const handleAddMediaRating = async (newRating: number = 1) => {
    const session_id = getFromLocalStorage("session_id");
    const { errors } = await addMediaRating({
      variables: {
        inputData: {
          mediaID,
          rating: newRating,
          type,
          session_id,
        },
      },
    });
    if (!errors) {
      const { data: userData } = await getUser({
        variables: { sessionId: session_id || "" },
        fetchPolicy: "network-only",
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
  };

  return (
    <div className="flex items-center mt-1">
      {stars.map((star) => (
        <svg
          key={star}
          aria-hidden="true"
          className={`w-6 h-6 hover:cursor-pointer 
          ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleAddMediaRating(star)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};
