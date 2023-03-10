import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Progress } from "@/components/proyect/Progress";
import { Tasks } from "@/components/proyect/Tasks";
import { Participants } from "@/components/proyect/Participants";
import auth from "@/middleware/auth";
import * as cookie from "cookie";
import Head from "next/head";

export default function Proyect(props: { user: any; token: string }) {
  return (
    <>
      <Head>
        <title>Project Name | UpTask 2023</title>
      </Head>
      <main id="proyect">
        <Header user={props.user} token={props.token} />
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

export const getServerSideProps = async (context: any) => {
  let token;
  if (typeof context.req.headers.cookie !== "string") {
    token = null;
  } else {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    token = parsedCookies.token;
  }

  const user = await auth(token);
  if (!user) {
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
        user,
      },
    };
  }
};
