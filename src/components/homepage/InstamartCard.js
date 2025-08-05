const InstamartCard = ({ imgSrc, name }) => {
  return (
    <section className="flex flex-col snap-start">
      <button className="w-[140px] min-w-[140px] h-[180px] min-h-[180px]">
        <img
          className="pointer-events-none w-full h-full object-cover flex justify-start"
          src={imgSrc}
        />
      </button>
      <p className="font-semibold text-xl text-[#02060cbf] text-center pt-3">
        {name}
      </p>
    </section>
  );
};

export default InstamartCard;
