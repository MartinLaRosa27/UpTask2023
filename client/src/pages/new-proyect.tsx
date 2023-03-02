import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Form } from "@/components/new-proyect/Form";
import Head from "next/head";

export default function NewProyect() {
  return (
    <>
      <Head>
        <title>New Proyect | UpTask 2023</title>
      </Head>
      <main>
        <Header />
        <div className="list-container">
          <List />
          <Form />
        </div>
        <Footer />
      </main>
    </>
  );
}
