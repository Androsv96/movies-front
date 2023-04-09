import Image from "next/image";

import { useQuery } from "@apollo/client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GET_MEDIA_DETAILS } from "@/graphql/Movies/querys";
import { MEDIADETAILS } from "@/utils/interfaces";
import { getImgUrl, getLoaderImg } from "@/utils/functions";
import { Favourite, Loader, MainLayout, Rating } from "@/components";
import { addMediaID, removeMediaID } from "@/redux/slices/favouritesMedia";
import { useMemo } from "react";
import { MediaType } from "@/__generated__/graphql";

interface Props {
  id: string;
  type: MediaType;
}

export const Detail = ({ id, type }: Props) => {
  const dispatch = useAppDispatch();
  const { favouriteMedias } = useAppSelector((state) => state.favouritesMedia);
  const favourite = useMemo(
    () => favouriteMedias.findIndex((media) => media.id === Number(id)) > -1,
    [favouriteMedias, id]
  );
  const { data, loading } = useQuery<MEDIADETAILS>(GET_MEDIA_DETAILS, {
    variables: { id: Number(id), type },
  });

  const handleToogleFavorite = (id: number, type: MediaType) => {
    if (favouriteMedias.find((media) => media.id === id)) {
      dispatch(removeMediaID(id));
    } else {
      dispatch(addMediaID({ id, type }));
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col sm:flex-row p-8">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="relative w-[300px] self-center">
              <Image
                src={getImgUrl(data?.mediaDetails.poster_path || "")}
                height={100}
                width={100}
                alt="Media Poster"
                className="min-w-[300px] object-cover rounded-md md:flex-shrink-0"
                placeholder="blur"
                blurDataURL={getLoaderImg()}
                priority
              />
              <Rating
                rating={data?.mediaDetails.vote_average || 0}
                className="bottom-2 right-2"
              />
              <Favourite
                className="top-3 right-3"
                favourite={favourite}
                onClick={() => handleToogleFavorite(Number(id), type)}
              />
            </div>
            <div className="mt-4 sm:ml-8 sm:mt-0 w-full">
              <h1 className="font-bold text-xl text-center text-white">
                {data?.mediaDetails.title}
              </h1>
              {data?.mediaDetails.overview && (
                <>
                  <p className="font-bold text-sm mt-4 text-gray-200">
                    Summary:
                  </p>
                  <p className="text-sm text-gray-400">
                    {data?.mediaDetails.overview}
                  </p>
                </>
              )}
              {data?.mediaDetails.release_date && (
                <>
                  <p className="mt-4 font-bold text-sm text-gray-200">
                    Release date:
                  </p>
                  <p className="text-sm text-gray-400">
                    {data?.mediaDetails.release_date}
                  </p>
                </>
              )}
              {data?.mediaDetails.genres &&
                data.mediaDetails.genres.length > 0 && (
                  <>
                    <p className="font-bold text-sm mt-4 text-gray-200">
                      Genres:
                    </p>
                    <div className="mt-1">
                      {data.mediaDetails.genres.map((genre) => (
                        <span
                          key={genre?.id}
                          className="text-sm text-gray-400 [&:not(:first-child)]:ml-2 [&:not(:last-child)]:after:content-[',']"
                        >
                          {genre?.name}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              {data?.mediaDetails.production_companies &&
                data.mediaDetails.production_companies.length > 0 && (
                  <>
                    <p className="font-bold text-sm mt-4 text-gray-200">
                      Companies:
                    </p>
                    <div className="mt-1">
                      {data &&
                        data?.mediaDetails.production_companies?.map(
                          (companie) => (
                            <span
                              key={companie?.id}
                              className="text-sm text-gray-400 [&:not(:first-child)]:ml-2 [&:not(:last-child)]:after:content-[',']"
                            >
                              {companie?.name}
                            </span>
                          )
                        )}
                    </div>
                  </>
                )}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};
