import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { useQuery } from "@apollo/client";

import { GET_TOP_MEDIA } from "@/graphql/Movies/querys";
import {
  Button,
  Card,
  Loader,
  MainLayout,
  Rating,
  SearchInput,
} from "@/components";
import { MEDIA } from "@/utils/interfaces";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MediaType } from "@/__generated__/graphql";
import {
  setCurrentPage,
  setFilteredMedia,
  setQuery,
} from "@/redux/slices/pages";
import Link from "next/link";

export const Home = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentPage, filteredMedia, query } = useAppSelector(
    (state) => state.pages
  );
  const disablePrevious = useMemo(() => currentPage === 1, [currentPage]);
  const disableNext = useMemo(() => currentPage === 500, [currentPage]);

  const { loading, data, fetchMore } = useQuery<MEDIA>(GET_TOP_MEDIA, {
    variables: { page: currentPage },
  });

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
    fetchMore({ variables: { page: currentPage + 1 } });
  };
  const handlePreviousPage = () => dispatch(setCurrentPage(currentPage + -1));
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setQuery(e.target.value));
  const handleMediaClick = (id: number, type: MediaType) =>
    router.push(`/details/${id}?type=${type}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query && data) dispatch(setFilteredMedia(data.media));
      const filteredData = data?.media.filter((media) =>
        media.title?.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setFilteredMedia(filteredData || []));
    }, 0);
    return () => clearTimeout(timer);
  }, [query, data]);

  return (
    <MainLayout>
      <div className="p-8">
        {loading ? (
          <Loader />
        ) : (
          <>
            <SearchInput value={query} onChange={handleOnChange} />
            <div className="flex w-full justify-end mt-8">
              <Link href="/favourites">
                <Button title="Favourites" onClick={() => null} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center lg:grid-cols-3 mt-8 xl:grid-cols-4">
              {filteredMedia.map((media) => (
                <Card
                  key={media.id}
                  id={media.id}
                  poster_path={media.poster_path || ""}
                  release_date={media.release_date || ""}
                  title={media.title}
                  type={media.type}
                  vote_average={media.vote_average}
                  handleMediaClick={handleMediaClick}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Button
                onClick={handlePreviousPage}
                title="Previous"
                disabled={disablePrevious}
              />
              <Button
                onClick={handleNextPage}
                title="Next"
                disabled={disableNext}
              />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};
