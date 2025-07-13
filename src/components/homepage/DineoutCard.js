import { CalendarCheck, PercentCircle, Star } from "lucide-react";

const DineoutCard = ({ item }) => {
  const {
    link,
    name,
    rating,
    cuisines,
    costForTwo,
    location,
    distance,
    features,
    offers,
    additionalOffersCount,
    imageUrl,
  } = item;
  return (
    <a
      href={link}
      target="_blank"
      className="min-w-[328px] bg-white rounded-2xl h-fit border border-solid border-[#02060c14] no-underline block [filter:drop-shadow(0px_0px_7.905px_rgba(27,30,36,0.08))]"
    >
      <div className="relative w-full h-[189px] rounded-2xl">
        <div className="flex justify-center items-center w-full rounded-2xl h-[calc(100%-50px)]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-t-2xl opacity-[1] z-10"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
        <div className="flex text-white justify-between items-center bg-[linear-gradient(0deg,black_0%,rgba(0,0,0,0)_100%)] absolute h-[50px] pt-4 px-3 pb-3 bottom-0 w-full z-50">
          <p className=" font-extrabold text-xl !leading-6 tracking-[-0.5px] bg-transparent overflow-hidden w-full [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] break-words">
            {name}
          </p>
          <p className="flex items-center gap-0.5">
            <Star className="size-4" />
            <span className=" font-normal text-base !leading-[21px] tracking-[-0.4px] bg-transparent">
              {rating}
            </span>
          </p>
        </div>
      </div>
      <div className="pt-2 px-3 pb-3">
        <div className="flex justify-between gap-4 mt-1">
          <p className=" font-extralight text-[13px] leading-[17px] tracking-[-0.33px] text-[#02060c99] overflow-hidden w-full">
            {cuisines?.join(".")}
          </p>
          <p className="whitespace-nowrap  font-extralight text-[13px] leading-[17px] tracking-[-0.33px] text-[#02060c99]">
            {costForTwo}
          </p>
        </div>
        <div className="flex justify-between gap-4 mt-1">
          <p className=" font-extralight text-[13px] leading-[17px] tracking-[-0.33px] text-[#02060c99] overflow-hidden w-full">
            {location}
          </p>
          <p className="whitespace-nowrap  font-extralight text-[13px] leading-[17px] tracking-[-0.33px] text-[#02060c99]">
            {distance}
          </p>
        </div>
        <div className="flex gap-1 mt-[10px] mr-[-12px] overflow-scroll ">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex py-0.5 px-2 items-center gap-0.5 rounded-xl bg-[#f0f0f5]"
            >
              <CalendarCheck className="size-3 object-cover" />
              <p className=" font-extralight text-[13px] leading-[17px] tracking-[-0.33px] text-[##02060c99]">
                {feature}
              </p>
            </div>
          ))}
        </div>
        {offers?.find((offer) => offer.type === "pre-booking") && (
          <div className="rounded-lg bg-[#1ba672] h-9 mt-3 flex items-center justify-between px-2">
            <div className="flex gap-1 items-center">
              <PercentCircle className="w-[26px] h-5 text-[#1ba672] stroke-[#1ba672] bg-transparent object-contain" />
              <p className=" font-semibold text-sm !leading-[18px] tracking-[-0.35px] text-white">
                {
                  offers?.find((offer) => offer.type === "pre-booking")
                    ?.description
                }
              </p>
            </div>
            <p className=" font-semibold text-[13px] !leading-[17px] tracking-[-0.35px] text-white">
              + {additionalOffersCount} more
            </p>
          </div>
        )}
        {offers?.find((offer) => offer.type === "bank") && (
          <div className="flex items-center h-9 rounded-lg bg-[#c8f9e5] mt-3 pl-2">
            <p className=" font-extralight text-base !leading-[21px] tracking-[-0.4px] text-[#1ba672]">
              {offers?.find((offer) => offer.type === "bank")?.description}
            </p>
          </div>
        )}
      </div>
    </a>
  );
};

export default DineoutCard;
