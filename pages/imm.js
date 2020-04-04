import "../styles/index.css";
import Immuno from "../components/Immuno";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";
import BackButton from ".././components/BackButton";
import Head from "next/head";

const recommendations = [
  {
    title: "Remember, they are risking their life being outside",
    subtitle: `They for sure have a very good reason for it. Try to emphatize, and help them out to avoid infection.`,
  },
  {
    title: "Make way if possible",
    subtitle: `You might be a carrier and not realize, your gesture might save their life.`,
  },
  {
    title:
      "Make a barrier in front of your mouth while speaking in their direction",
    subtitle: `Viruses spread with droplets. Even while talking, even your hand might shield them from possible infection.`,
  },
  {
    title: "Put special attention to distance between you and them",
    subtitle: `At least two meters (6 feet) are recommended.`,
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
    <div className="flex flex-col justify-center items-center text-center pt-10 bg-black text-white">
      <div className="bg-immunoblue p-10 rounded mb-5 text-white">
        {" "}
        <Immuno />
        <div className="text-3xl font-black pb-5">Immunocompromised</div>
      </div>
      <div className="text-xl lg:text-2xl pb-10">
        helpful guidelines how to behave around immunocompromised people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons immuno />
  </div>
);
