import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Main } from "@/components/settings/Main";
import auth from "@/middleware/auth";
import * as cookie from "cookie";
import Head from "next/head";

export default function Settings() {
  return (
    <>
      <Head>
        <title>My Account | UpTask 2023</title>
      </Head>
      <main>
        <Header />
        <div className="list-container">
          <List />
          <Main />
        </div>
        <Footer />
      </main>
    </>
  );
}


export const getServerSideProps = async (context: any) => {
  let token;
  if (typeof context.req.headers.cookie !== "string") {
    token = null;
  } else {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    token = parsedCookies.token;
  }

  if (!await auth(token)) {
    return {
      redirect: {
        destination: "/welcome",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        token,
      },
    };
  }
};
