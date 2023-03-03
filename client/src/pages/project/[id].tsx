import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Progress } from "@/components/proyect/Progress";
import { Tasks } from "@/components/proyect/Tasks";
import { Participants } from "@/components/proyect/Participants";

export default function Proyect() {
  return (
    <>
      <Head>
        <title>Project Name | UpTask 2023</title>
      </Head>
      <main id="proyect">
        <Header />
        <div className="list-container">
          <List />
          <div className="information pt-5 pb-5">
            <h1 className="fw-bold">Project Name</h1>
            <div className="buttons mt-2 mb-3">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
              <button type="button" className="btn btn-warning">
                Change Name
              </button>
            </div>
            <Progress />
            <Tasks />
            <Participants />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
