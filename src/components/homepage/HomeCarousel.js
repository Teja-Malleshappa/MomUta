import { ArrowLeft, ArrowRight } from "lucide-react";
import BestFoodCard from "./BestFoodCard";
import InstamartCard from "./InstamartCard";
import DineoutCard from "./DineoutCard";

const HomeCarousel = ({
  name,
  bestItemsRow1,
  bestItemsRow2,
  instamartList,
  dineoutList,
}) => {
  return (
    <div className="w-[80%] mx-auto mt-[120px]">
      <div className="bg-white p-0 overflow-hidden">
        <div className="bg-white mb-8 flex justify-between items-baseline overflow-hidden">
          <div className="flex justify-between items-center w-full">
            <p className="m-0 font-semibold text-2xl !leading-[26px] tracking-[-0.6px] text-[#02060ceb] overflow-hidden w-full [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] break-words">
              {name}
            </p>
            <div className="flex gap-2 pr-4">
              <button className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-[0.5]">
                <div className="mt-3 rounded-full h-[34px] pt-2 px-2 pb-1 bg-[#02060c26]">
                  <ArrowLeft className="size-4 overflow-hidden text-[#02060ceb] leading-0 stroke-[#02060ceb]" />
                </div>
              </button>
              <button className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-[0.5]">
                <div className="mt-3 rounded-full h-[34px] pt-2 px-2 pb-1 bg-[#02060c26]">
                  <ArrowRight className="size-4 overflow-hidden text-[#02060ceb] leading-0 stroke-[#02060ceb]" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll no-scrollbar mx-0">
          <div className="flex pt-0">
            {bestItemsRow1 &&
              bestItemsRow1.length > 0 &&
              bestItemsRow1?.map((imgSrc, index) => (
                <BestFoodCard key={index} imgSrc={imgSrc} />
              ))}
          </div>
          <div className="flex pt-0">
            {bestItemsRow2 &&
              bestItemsRow2.length > 0 &&
              bestItemsRow2?.map((imgSrc, index) => (
                <BestFoodCard key={index} imgSrc={imgSrc} />
              ))}
          </div>
          <div className="flex pt-0">
            {instamartList &&
              instamartList.length > 0 &&
              instamartList?.map(({ imgSrc, name }, index) => (
                <InstamartCard key={index} imgSrc={imgSrc} name={name} />
              ))}
          </div>
          <div className="flex gap-4">
            {dineoutList &&
              dineoutList.length > 0 &&
              dineoutList?.map((item) => {
                return <DineoutCard key={item?.id} item={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
