import BigTitle from ".././components/BigTitle";
import "../styles/index.css";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Head from "next/head";

export default () => {
  const [showingGif, setShowingGif] = useState("immuno");

  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("recovered") > 0) setShowingGif("recovered");

    if (url.indexOf("immuno") > 0) setShowingGif("immuno");

    if (url.indexOf("contagious") > 0) setShowingGif("contagious");
  }, []);

  return (
    <div style={{ minWidth: "100vw" }}>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Drawing guide for Virus Signals</title>
        <meta name="title" content="Drawing guide for Virus Signals" />
        <meta
          name="description"
          content="Created to help the fight with outbreaks and pandemics. Open-source universal signs for immunocompromised, possibly contagious and recovered."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virussignal.com/" />
        <meta property="og:title" content="Drawing guide for Virus Signals" />
        <meta
          property="og:description"
          content="Created to help the fight with outbreaks and pandemics. Open-source universal signs for immunocompromised, possibly contagious and recovered."
        />
        <meta
          property="og:image"
          content="https://virussignal.com/OGImage.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virussignal.com/" />
        <meta
          property="twitter:title"
          content="Drawing guide for Virus Signals"
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
        style={{ minWidth: "100vw", minHeight: "100vh" }}
        className="flex content-center justify-start items-center"
      >
        <BackButton />

        <div className="flex flex-col-reverse lg:flex-row w-full">
          <div className="flex   w-full lg:w-1/2 flex-col bg-offwhite lg:justify-center pt-10 lg:pt-0">
            <BigTitle black />

            <div className="font-black text-3xl lg:text-4xl  pb-5">
              Drawing Guide
            </div>
            <div>
              <div
                className={`${
                  showingGif === "immuno"
                    ? "bg-black text-white"
                    : "bg-white  text-black"
                }  hover:bg-gray-900 hover:text-white cursor-pointer py-2`}
                onClick={() => setShowingGif("immuno")}
              >
                Immuno Compromised
              </div>
              <div
                className={`${
                  showingGif === "recovered"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }  hover:bg-gray-900 hover:text-white cursor-pointer  py-2`}
                onClick={() => setShowingGif("recovered")}
              >
                Recovered
              </div>
              <div
                className={`${
                  showingGif === "contagious"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }  hover:bg-gray-900  hover:text-white cursor-pointer  py-2`}
                onClick={() => setShowingGif("contagious")}
              >
                Possibly infectious
              </div>
            </div>
          </div>

          <div className="lg:w-1/2  flex justify-start items-center pt-10 lg:pt-0 lg:pl-5 ">
            <img
              src="./en-recovered-drawing-guide.gif"
              className={`${showingGif !== "recovered" && "hidden"}`}
              style={{ maxWidth: "500px", maxHeight: "375px" }}
            />
            <img
              src="./en-contagious-drawing-guide.gif"
              className={`${showingGif !== "contagious" && "hidden"}`}
              style={{ maxWidth: "500px", maxHeight: "375px" }}
            />
            <img
              src="./en-immuno-drawing-guide.gif"
              className={`${showingGif !== "immuno" && "hidden"}`}
              style={{ maxWidth: "500px", maxHeight: "375px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
