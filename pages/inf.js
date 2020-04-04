import "../styles/index.css";
import Contagious from "../components/Contagious";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";
import BackButton from ".././components/BackButton";

const recommendations = [
  {
    title: "Maintain your distance. If possible turn around and walk away.",
    subtitle: `Viruses stay on surfaces and the air for a very long time. Mantain as much distance as possible`
  },
  {
    title: "Do not assume why they are outside",
    subtitle: `It must be life and death, for them to go outside. Its as bad for them as it is for you.`
  },
  {
    title: "Cover your face or hold your breath if possible.",
    subtitle: `Air born viruses, get in your system via particles in the air. Only way to avoid them is to hold your breath. Or minimize them with some sort of barrier, like your elbow.`
  },
  {
    title: "Disinfect all surfaces",
    subtitle: `Particles breathed out by the contagious person will get on everything. `
  }
];

export default () => (
  <>
    <BackButton />
    <div className="flex flex-col justify-center items-center text-center  pt-10">
      <div className="bg-warningorange p-10 rounded mb-5 text-white">
        {" "}
        <Contagious />
        <div className="text-2xl font-black pb-5">Possibly infected</div>
      </div>
      <div className="text-xl pb-10">
        helpful guidelines how to behave around possibly infectious people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons contagious />
  </>
);
