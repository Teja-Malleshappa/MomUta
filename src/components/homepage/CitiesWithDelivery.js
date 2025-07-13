
const CitiesWithDelivery = ({title, cities, text}) => {
  return (
    <div className="px-[189px]">
      <p className="text-start mb-3  font-semibold text-2xl !leading-6 tracking-[-0.6px] text-[#02060ceb]">
       {title} 
      </p>
      <div className="flex gap-4 flex-wrap">
        {cities?.map(({ city, url }, index) => (
          <a
            key={index}
            href={url}
            className="p-4 cursor-pointer w-[calc(25%-32px)] border border-solid border-[#02060c26]  rounded-xl text-center text-sm !leading-[18px] tracking-[-0.35px] text-[#02060cbf]"
          >
            {text} <p>{city}</p>
          </a>
        ))}{" "}
      </div>
    </div>
  );
};

export default CitiesWithDelivery;
