import "../styles/index.css";
import Recovered from "../components/Recovered";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";

const recommendations = [
  {
    title: "Recovered people can't spread infections",
    subtitle: `This means you can approach them even immuno-supressed`
  },
  {
    title: "Ask for help if you need it.",
    subtitle: `In special times everyone wants to help out. Recovered people can transport food and help vunerable people safely`
  }
];

export default () => (
  <>
    <div className="flex flex-col justify-center items-center text-center pt-2 lg:pt-10">
      <div className="bg-recoveredgreen p-10 rounded mb-5 text-white">
        {" "}
        <Recovered />
        <div className="text-2xl font-black pb-5">Recovered</div>
      </div>
      <div className="text-xl pb-10">
        helpful guidelines how to behave around recovered people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons />
  </>
);
