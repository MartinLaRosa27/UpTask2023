import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Welcome } from "@/components/home/Welcome";
import { List } from "@/components/List";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UpTask 2023</title>
      </Head>
      <main>
        <Header />
        <div className="list-container">
          <List />
          <Welcome />
        </div>
        <Footer />
      </main>
    </>
  );
}
