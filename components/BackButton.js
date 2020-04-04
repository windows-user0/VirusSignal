export default props => {
  function goBack() {
    window.history.back();
  }
  return (
    <div
      className={`${
        props.white ? "text-white" : "text-black"
      } absolute top-0 left-0 lg:hidden underline pt-1 pl-1`}
      onClick={goBack}
    >
      {`< Back`}
    </div>
  );
};
