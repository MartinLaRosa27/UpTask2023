import { Footer } from "@/components/Footer";
import { SignInForm } from "@/components/sign-in/SignInForm";
import Head from "next/head";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Create your account | UpTask 2023</title>
      </Head>
      <main>
        <SignInForm />
        <Footer />
      </main>
    </>
  );
}
