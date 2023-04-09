import Head from "next/head";

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
      <div className="flex-1 bg-black">{children}</div>
    </>
  );
};
