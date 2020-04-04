import "../styles/index.css";
import Recovered from "../components/Recovered";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";
import BackButton from "../components/BackButton";
import Head from "next/head";

const recommendations = [
  {
    title: "Recovered people can't spread infections",
    subtitle: `This means you can approach them even immuno-supressed`,
  },
  {
    title: "Ask for help if you need it.",
    subtitle: `In special times everyone wants to help out. Recovered people can transport food and help vunerable people safely`,
  },
];

export default () => (
  <div style={{ minHeight: "100vh" }} className="bg-black">
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
    <BackButton />
    <div className="flex flex-col justify-center items-center text-center pt-10  bg-black text-white">
      <div className="bg-recoveredgreen p-10 rounded mb-5 text-white">
        {" "}
        <Recovered />
        <div className="text-3xl font-black pb-5">Recovered</div>
      </div>
      <div className="text-xl lg:text-2xl pb-10">
        helpful guidelines how to behave around recovered people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons recovered />
  </div>
);
