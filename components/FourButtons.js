export default props => {
  let link;
  if (props.immuno) link = "immuno";
  if (props.recovered) link = "recovered";
  if (props.contagious) link = "contagious";

  return (
    <div className="flex-col lg:flex-row  text-white  flex  items-center capitalize font-bold">
      <a
        href="./edu"
        className="px-2  mx-2 py-5 bg-gray-600 rounded  w-1/2 mb-1"
      >
        Other symbols
      </a>
      <a
        href={`./draw?${link}`}
        className="px-2  mx-2 py-5 bg-green-600 rounded  w-1/2 mb-1"
      >
        Symbol drawing guides
      </a>
      <a
        href="https://store.virussignal.com"
        className="px-2 mx-2 py-5 bg-orange-600 rounded  w-1/2 mb-1"
      >
        Get signs, clothing etc.
      </a>
    </div>
  );
};
