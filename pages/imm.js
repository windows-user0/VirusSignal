import "../styles/index.css";
import Immuno from "../components/Immuno";
import FourButtons from "../components/FourButtons";
import Recommendations from "../components/Recommendations";

const recommendations = [
  {
    title: "Remember, they are risking their life being outside",
    subtitle: `They for sure have a very good reason for it. Try to emphatize, and help them out to avoid infection.`
  },
  {
    title: "Make way if possible",
    subtitle: `You might be a carrier and not realize, your gesture might save their life.`
  },
  {
    title:
      "Make a barrier in front of your mouth while speaking in their direction",
    subtitle: `Viruses spread with droplets. Even while talking, even your hand might shield them from possible infection.`
  },
  {
    title: "Put special attention to distance between you and them",
    subtitle: `At least two meters (6 feet) are recommended.`
  }
];

export default () => (
  <>
    <div className="flex flex-col justify-center items-center text-center pt-2 lg:pt-10">
      <div className="bg-immunoblue p-10 rounded mb-5 text-white">
        {" "}
        <Immuno />
        <div className="text-2xl font-black pb-5">Immunocompromised</div>
      </div>
      <div className="text-xl pb-10">
        helpful guidelines how to behave around immunocompromised people
      </div>
    </div>
    <Recommendations recommendations={recommendations} />
    <FourButtons />
  </>
);
