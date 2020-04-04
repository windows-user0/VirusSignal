import "../styles/index.css";
import Contagious from ".././components/Contagious";
import Recovered from ".././components/Recovered";
import Immuno from ".././components/Immuno";
import BigTitle from ".././components/BigTitle";
import BackButton from ".././components/BackButton";
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
    {/* // Top panel with 3 equal cards */}
    <div
      style={{ backgroundColor: "#2c3e50", minHeight: "100vh" }}
      className="flex flex-col  items-center"
    >
      <BackButton white />
      <BigTitle />

      <div className="flex flex-row py-10 lg:py-20 text-2xl lg:text-4xl justify-around ">
        <a
          href="https://store.virussignal.com"
          className="bg-indigo-700 hover-indigo-800 py-2 px-2 lg:px-5 lg:py-5 text-white uppercase font-extrabold rounded my-5"
        >
          store
        </a>
        <a
          href="./draw"
          className="ml-5 bg-gray-700 hover-gray-800 py-2 px-2 text-white lg:px-5 lg:py-5  uppercase font-extrabold  rounded my-5"
        >
          drawing guide
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:px-20">
        <Card immuno /> <Card recovered /> <Card contagious />
      </div>
    </div>
  </>
);

function Card(props) {
  let Image;
  let text;
  let link;

  if (props.immuno) {
    Image = Immuno;
    text = "immuno - compromised";
    link = "immuno";
  }
  if (props.recovered) {
    Image = Recovered;
    text = "the recovered";
    link = "recovered";
  }
  if (props.contagious) {
    Image = Contagious;
    text = "possibly infectious";
    link = "contagious";
  }

  return (
    <div
      className={`rounded-lg ${
        props.immuno
          ? "bg-immunoblue"
          : props.recovered
          ? "bg-recoveredgreen"
          : "bg-warningorange"
      } p-2 lg:p-5 lg:mx-2 my-2 lg:mx-5 justify-end content-end items-stretch text-black text-xl`}
    >
      <div className="flex flex-col px-5 py-5  ">
        <span className="font-bold pb-4"> Kits for {text}:</span>
        <a href={`/en-${link}-house.png`} className="underline pb-1">
          For the house/object
        </a>
        <a href={`/en-${link}-person.png`} className="underline pb-1">
          For a person
        </a>
      </div>
      <div className="flex w-full justify-center ">
        <div style={{ maxWidth: "100px" }}>
          <Image />
        </div>
      </div>
    </div>
  );
}
