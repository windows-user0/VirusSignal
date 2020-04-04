export default (props) => {
  const { recommendations } = props;
  return (
    <div className="flex flex-col pb-20 px-10 lg:px-20 text-white bg-black text-xl">
      {recommendations.map((recommendation) => (
        <div>
          <div className="font-bold pt-4">· {recommendation.title} </div>
          <div>{recommendation.subtitle} </div>
        </div>
      ))}
    </div>
  );
};
