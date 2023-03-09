import { useSession } from "next-auth/react";
import Head from "next/head";
import { type PropsWithChildren } from "react";
import Navbar from "~/components/common/Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Drawsybot</title>
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
