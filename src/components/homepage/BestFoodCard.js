const BestFoodCard = ({ imgSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="w-[140px] min-w-[140px] h-[180px] min-h-[180px] flex flex-col justify-center items-center">
        <img
          className="pointer-events-none w-full h-full object-cover"
          src={imgSrc}
        />
      </button>
    </div>
  );
};

export default BestFoodCard;
