import Head from "next/head";
import Link from "next/link";
import { Authentication } from "../Authentication";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movies" />
      </Head>
      <div className="flex-1 bg-black">
        <Authentication />
        {children}
      </div>
    </>
  );
};
