import Contagious from ".././components/Contagious";
import Recovered from ".././components/Recovered";
import Immuno from ".././components/Immuno";
export default () => (
  <div className="bg-gray-900 text-white ">
    <div className="text-5xl  font-black text-center pt-20 pb-20 px-10">
      What should you do
    </div>

    <div className="flex flex-col justify-start lg:justify-center lg:px-40 px-10">
      <div className="flex flex-col lg:flex-row w-full  items-start  text-left my-10">
        <div className="lg:w-2/5 bg-warningorange  flex  justify-center rounded p-2 mr-5  mb-5 p-10">
          <div className="w-1/2 ">
            <Contagious />
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col leading-relaxed   mb-5">
          <div className="text-lg font-semibold "> Possibly Infectious</div>
          <div>· Do not approach.</div>
          <div>· Create a barrier over your face with your elbow.</div>
          <div>· Hold your breath.</div>
          <div>· Move away.</div>
          <div>· Disinfect all touched surfaces.</div>
        </div>
        <div className="w-full lg:w-1/5">
          {" "}
          <a
            href="/inf"
            className=" mr-5 w-full p-5 rounded shadow border-blue-500 border-2 text-lg lg:text-xl font-bold text-blue-500  uppercase w-1/3 flex justify-center  items-center"
          >
            learn more
          </a>{" "}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full  items-start justify-start text-left  my-10">
        <div className="lg:w-2/5 bg-immunoblue  flex  justify-center rounded p-2 mr-5  mb-5 p-10">
          <div className="w-1/2 ">
            <Immuno />
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col leading-relaxed   mb-5">
          <div className="text-lg font-semibold "> Immunocompromised</div>
          <div>· Stay 6ft(2m) away.</div>
          <div>· Cover your mouth while talking.</div>
          <div>· Make way, even if you don't think you're infectious.</div>
        </div>
        <div className="w-full lg:w-1/5">
          <a
            href="/imm"
            className=" mr-5 w-full p-5 rounded shadow border-blue-500 border-2 text-lg lg:text-xl font-bold text-blue-500  uppercase w-1/3 flex justify-center  items-center"
          >
            learn more
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start text-left   my-10 ">
        <div className="lg:w-2/5 bg-recoveredgreen  flex  justify-center rounded p-2 mr-5  mb-5 p-10">
          <div className="w-1/2 ">
            <Recovered />
          </div>
        </div>
        <div className="w-3/5 lg:w-2/5 flex flex-col leading-relaxed  mb-5">
          <div className="text-lg font-semibold   h-full "> Recovered</div>
          <div> · Can approach even Immunosuppressed.</div>
          <div> · Ask for help if you are in need.</div>
          <div> · Let them deal with sick or immunosuppressed.</div>
        </div>
        <div className="w-full lg:w-1/5 ">
          <a
            href="/ok"
            className=" mr-5 w-full p-5 rounded shadow border-blue-500 border-2 text-lg lg:text-xl font-bold text-blue-500  uppercase w-1/3 flex justify-center  items-center"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  </div>
);
