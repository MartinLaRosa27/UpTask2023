import { Footer } from "@/components/Footer";
import { Login } from "@/components/welcome/Login";
import Head from "next/head";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Login with your account | UpTask 2023</title>
      </Head>
      <main>
        <Login />
        <Footer />
      </main>
    </>
  );
}
