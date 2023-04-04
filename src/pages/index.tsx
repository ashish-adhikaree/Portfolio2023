import { AdditionalComponent, Experience, Projects, Skills, About } from "$sections";
import { USER } from "@/lib/ts/constants";
import { PrimaryLayout } from "$components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {USER.name} | {USER.title}
        </title>
        <meta name="description" content={USER.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AdditionalComponent />
      </PrimaryLayout>
    </>
  );
}
