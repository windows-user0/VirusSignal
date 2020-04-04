import Edu from ".././components/Edu";
import "../styles/index.css";
import BigTitle from "../components/BigTitle";
import BackButton from "../components/BackButton";
import Head from "next/head";

export default () => (
  <>
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Universal Open Source Social Signals</title>
      <meta name="title" content="Universal Open Source Social Signals" />
      <meta
        name="description"
        content="Created to help the fight with outbreaks and pandemics. Open-source universal signs for immunocompromised, possibly contagious and recovered."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://virussignal.com/" />
      <meta
        property="og:title"
        content="Universal Open Source Social Signals"
      />
      <meta
        property="og:description"
        content="Created to help the fight with outbreaks and pandemics. Open-source universal signs for immunocompromised, possibly contagious and recovered."
      />
      <meta property="og:image" content="https://virussignal.com/OGImage.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://virussignal.com/" />
      <meta
        property="twitter:title"
        content="Universal Open Source Social Signals"
      />
      <meta
        property="twitter:description"
        content="Created to help the fight with outbreaks and pandemics. Open-source universal signs for immunocompromised, possibly contagious and recovered."
      />
      <meta
        property="twitter:image"
        content="https://virussignal.com/OGImage.png"
      />
    </Head>
    <div className="flex flex-col bg-gray-900 justify-center items-center ">
      <BackButton white />
      <div className="pb-5 pt-5">
        <BigTitle />
      </div>

      <Edu />
    </div>{" "}
  </>
);
