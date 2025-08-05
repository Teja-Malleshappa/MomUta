import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";

const CitiesWithDelivery = ({ title, cities, text, endIndex, setEndIndex }) => {
  return (
    <section className="px-[189px]">
      <p className="text-start mb-3  font-semibold text-2xl !leading-6 tracking-[-0.6px] text-[#02060ceb]">
        {title}
      </p>
      <ul className="flex gap-4 flex-wrap">
        {cities?.slice(0, endIndex)?.map(({ city, url }, index) => (
          <Link
            key={index}
            to={url}
            className="p-4 cursor-pointer w-[calc(25%-32px)] border border-solid border-[#02060c26]  rounded-xl text-center text-sm !leading-[18px] tracking-[-0.35px] text-[#02060cbf]"
          >
            {text} <p>{city}</p>
          </Link>
        ))}{" "}
        {endIndex && <button className="p-4 cursor-pointer w-[calc(25%-32px)] border border-solid border-[#02060c26]  rounded-xl flex items-center gap-2 justify-center" onClick={()=> setEndIndex(undefined)}>
          <span className="text-center text-sm !leading-[18px] tracking-[-0.35px] text-[#ff5200]">Show More</span>
          <ChevronDown className="text-[#ff5200] size-5"/>
        </button>}
        {!endIndex && <button className="p-4 cursor-pointer w-[calc(25%-32px)] border border-solid border-[#02060c26]  rounded-xl flex items-center gap-2 justify-center" onClick={()=> setEndIndex(7)}>
          <span className="text-center text-sm !leading-[18px] tracking-[-0.35px] text-[#ff5200]">Show less</span>
          <ChevronUp className="text-[#ff5200] size-5"/>
        </button>}
      </ul>
    </section>
  );
};

export default CitiesWithDelivery;
