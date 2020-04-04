import Edu from ".././components/Edu";
import "../styles/index.css";
import BigTitle from "../components/BigTitle";
import BackButton from "../components/BackButton";
export default () => (
  <div className="flex flex-col bg-gray-900 justify-center items-center ">
    <BackButton white />
    <div className="pb-5 pt-5">
      <BigTitle />
    </div>

    <Edu />
  </div>
);
