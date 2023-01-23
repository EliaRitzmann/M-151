import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Signed in as {session.user.email}  <br />
        <button className="btn" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
    </>
  );
}
