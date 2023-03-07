import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Main } from "@/components/settings/Main";
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
