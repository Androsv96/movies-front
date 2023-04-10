import Image from "next/image";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";

import { Rating } from "../Rating";
import { getImgUrl } from "@/utils/functions";
import { MediaType } from "@/__generated__/graphql";
import { TrashIcon } from "../TrashIcon";
import { removeMediaID } from "@/redux/slices/favouritesMedia";

interface Props {
  id: number;
  type: MediaType;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  showDelete?: boolean;
  handleMediaClick: (id: number, type: MediaType) => void;
}

export const Card = ({
  id,
  type,
  poster_path = "",
  release_date,
  title,
  vote_average = 0,
  showDelete = false,
  handleMediaClick,
}: Props) => {
  const dispatch = useDispatch();
  const handleDeleteFromFavourites = (
    e: MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    dispatch(removeMediaID(id));
  };

  return (
    <div
      className="flex flex-col items-center bg-gray-600 rounded-md relative pb-1 max-w-[300px] text-white h-[400px] min-w-0 lg:max-w-full border border-transparent hover:cursor-pointer hover:border hover:border-blue-400"
      key={title}
      onClick={() => handleMediaClick(id, type)}
    >
      <Rating className="top-2 right-2" rating={vote_average} />
      {showDelete && (
        <TrashIcon onDeleteClick={(e) => handleDeleteFromFavourites(e, id)} />
      )}
      <Image
        src={getImgUrl(poster_path)}
        alt="media-poster"
        width={100}
        height={100}
        className="w-full object-top rounded-t-md h-[85%]"
        priority
      />
      <div className="px-4 flex flex-col justify-center items-center py-2 h-[15%]">
        <h1 className="text-sm font-bold truncate w-[270px] text-center">
          {title}
        </h1>
        <p className="text-sm">{release_date}</p>
      </div>
    </div>
  );
};
