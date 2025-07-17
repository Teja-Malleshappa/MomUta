import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const RestaurantCard = ({
  link,
  cloudinaryImageId,
  costForTwo,
  name,
  avgRating,
  slaString,
  cuisines,
  areaName,
}) => {
  return (
    <a href={link}>
      <div className="w-[273px] bg-white flex flex-col gap-3">
        <div className="relative">
          <div className="bg-gradient-to-t from-black to-transparent z-10 absolute  rounded-b-2xl h-[70px] left-0 bottom-0 right-0"></div>

          <img
            alt="Image"
            className="w-[273px] h-[180px] object-cover rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          />
          {costForTwo && (
            <p className="absolute bottom-3 z-10 text-white pl-3 font-extrabold text-xl !leading-6 tracking-[-0.5px]">
              {costForTwo}
            </p>
          )}
        </div>
        <div className="flex flex-col ml-3">
          <div className="flex flex-col gap-0.5">
            {name && (
              <p className="text-lg font-semibold !leading-[22px] text-[#02060ceb] tracking-[-0.4px]">
                {name}
              </p>
            )}
            <div className="flex gap-1">
              <div className="bg-green-600 p-0.5 rounded-lg">
                <FaStar className="text-white" />
              </div>
              {avgRating && (
                <p className="text-base font-extralight text-[#02060ceb] !leading-[21px] tracking-[-0.4px]">
                  {avgRating}
                </p>
              )}

              {slaString && (
                <p className="text-base font-normal text-[#02060ceb] !leading-[21px] tracking-[-0.4px] flex items-center">
                  <BsDot />
                  {slaString}
                </p>
              )}
            </div>
          </div>
          <div>
            {cuisines && cuisines.length > 0 && (
              <p className="text-base font-normal text-[#02060c99] !leading-[21px] tracking-[-0.4px]">
                {cuisines.join(", ")}
              </p>
            )}
            {areaName && (
              <p className="text-base font-normal text-[#02060c99] !leading-[21px] tracking-[-0.4px]">
                {areaName}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;
