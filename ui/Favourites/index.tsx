import { useRouter } from "next/router";

import { useAppSelector } from "@/redux/hooks";
import { useQuery } from "@apollo/client";

import { Card, Loader, MainLayout } from "@/components";
import { GET_MEDIAS_DETAILS } from "@/graphql/Movies/queries";
import { MEDIASDETAILS } from "@/utils/interfaces";
import { MediaType } from "@/__generated__/graphql";

export const Favourites = () => {
  const router = useRouter();
  const { favouriteMedias } = useAppSelector((state) => state.favouritesMedia);
  const { data, loading } = useQuery<MEDIASDETAILS>(GET_MEDIAS_DETAILS, {
    variables: { items: favouriteMedias },
  });

  const handleMediaClick = (id: number, type: MediaType) =>
    router.push(`/details/${id}?type=${type}`);

  return (
    <MainLayout>
      <div className="p-8">
        {favouriteMedias.length === 0 ? (
          <div className="w-full flex justify-center items-center h-20">
            <h1 className="text-lg font-bold text-white">
              You have not added any movie or tv show to your favourite list yet
            </h1>
          </div>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : (
              <>
                <h1 className="text-center text-lg font-bold text-white">
                  Favourites list
                </h1>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center lg:grid-cols-3 mt-8 xl:grid-cols-4">
                  {data?.mediasDetails &&
                    data.mediasDetails.map((media) => (
                      <Card
                        key={media.id}
                        id={media.id}
                        poster_path={media.poster_path || ""}
                        release_date={media.release_date || ""}
                        title={media.title}
                        type={media.type}
                        vote_average={media.vote_average}
                        showDelete
                        handleMediaClick={() =>
                          handleMediaClick(media.id, media.type)
                        }
                      />
                    ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
};
