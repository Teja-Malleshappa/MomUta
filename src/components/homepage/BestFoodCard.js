const BestFoodCard = ({ imgSrc }) => {
  return (
    <div className="mr-10 flex flex-col justify-center items-center">
      <button className="w-[130px] min-w-[130px] h-[180px] min-h-[180px] flex flex-col justify-center items-center">
        <img
          className="pointer-events-none w-full h-full object-cover"
          src={imgSrc}
        />
      </button>
    </div>
  );
};

export default BestFoodCard;
