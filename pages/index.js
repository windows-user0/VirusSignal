import "../styles/index.css";
import Contagious from ".././components/Contagious";
import Recovered from ".././components/Recovered";
import Immuno from ".././components/Immuno";
import Edu from ".././components/Edu";
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

    <div
      className="  text-white items-center  flex flex-col justify-center    content-center "
      style={{ backgroundColor: "#000" }}
    >
      <div className="pb-20 px-10">
        <h1 className=" text-6xl font-black">Social Signaling Works</h1>
        <p className=" text-5xl text-gray-100">
          save yours and other peoples lives
        </p>
        <div className="w-full flex flex-row text-white text-2xl pt-10 lg:pt-20 lg:text-4xl font-black justify-around ">
          <a
            href="/edu"
            className="rounded shadow hover:bg-blue-600 active:bg-blue-900 bg-blue-800 px-5 py-2 uppercase w-1/3 flex justify-center  items-center"
          >
            learn more
          </a>
          <a
            href="/kits"
            className="rounded  shadow hover:bg-gray-600 active:bg-gray-900  bg-gray-900 px-5 py-2 uppercase w-1/3  flex justify-center  items-center"
          >
            get kits
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:flex-row text-2xl font-bold w-full">
        <a
          href="/inf"
          className="bg-warningorange text-orange-100 lg:w-1/4 p-10 rounded-lg m-10  flex-col flex justify-center items-center content-center"
        >
          <div className="flex justify-center w-full h-full">
            <div className="w-1/2 ">
              <Contagious />
            </div>
          </div>
          <div className="text-2xl lg:text-3xl font-black">
            {" "}
            Possibly Infectious
          </div>
        </a>
        <a
          href="imm"
          className="bg-immunoblue text-blue-100   lg:w-1/4 p-10 rounded-lg m-10 flex-col flex justify-center items-center content-center"
        >
          <div className="flex justify-center w-full h-full">
            <div className="w-1/2 ">
              <Immuno />
            </div>
          </div>
          <div className="text-2xl lg:text-3xl font-black">
            {" "}
            Immuno - compromised
          </div>
        </a>
        <a
          href="/ok"
          className="bg-recoveredgreen  text-green-100  lg:w-1/4   p-10 rounded-lg  m-10 flex-col flex justify-center items-center content-center"
        >
          <div className="flex justify-center w-full h-full">
            <div className="w-1/2 ">
              <Recovered />
            </div>
          </div>
          <div className="text-2xl lg:text-3xl font-black"> Recovered</div>
        </a>
      </div>
    </div>
    <Edu />
    <div className="flex flex-col justify-center content-center items-center w-full px-10 lg:px-20">
      <div className="text-5xl pt-32 pb-10">How is this saving lives?</div>
      <div style={{ maxWidth: "75ch" }}>
        Social distancing is very effective and only way to beat pandemics of
        outbreaks. But some peoples situation require greater awareness. This is
        where agreed upon social signals come in.
      </div>
      <div className="text-5xl pt-20 pb-10">Do I need to buy anything?</div>
      <div style={{ maxWidth: "75ch" }}>
        No. Take care of yourself and your family first. This set of signs was
        created to be easily drawn by anyone. Check the drawing guides here>>.
        The kit store is just for convenience. This symbols are open source and
        free, you can use them as you with even commercially.
      </div>
      <div className="text-5xl pt-20 pb-10">How can I help? </div>
      <div style={{ maxWidth: "75ch" }}>
        This is a open sourced project. Help translate and improve this website
        on github. If you don't know how to do that, spread the word everywhere.
        Spreading the word is the most important.
      </div>
    </div>
  </>
);
