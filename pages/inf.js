import "../styles/index.css";
import Contagious from "../components/Contagious";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";
import BackButton from ".././components/BackButton";
import Head from "next/head";
const recommendations = [
  {
    title: "Maintain your distance. If possible turn around and walk away.",
    subtitle: `Viruses stay on surfaces and the air for a very long time. Mantain as much distance as possible`,
  },
  {
    title: "Do not assume why they are outside",
    subtitle: `It must be life and death, for them to go outside. Its as bad for them as it is for you.`,
  },
  {
    title: "Cover your face or hold your breath if possible.",
    subtitle: `Air born viruses, get in your system via particles in the air. Only way to avoid them is to hold your breath. Or minimize them with some sort of barrier, like your elbow.`,
  },
  {
    title: "Disinfect all surfaces",
    subtitle: `Particles breathed out by the contagious person will get on everything. `,
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
    <div className="flex flex-col justify-center items-center text-center  pt-10  bg-black text-white">
      <div className="bg-warningorange p-10 rounded mb-5 text-white">
        {" "}
        <Contagious />
        <div className="text-3xl font-black pb-5">Possibly infected</div>
      </div>
      <div className="text-xl lg:text-2xl pb-10">
        helpful guidelines how to behave around possibly infectious people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons contagious />
  </div>
);
