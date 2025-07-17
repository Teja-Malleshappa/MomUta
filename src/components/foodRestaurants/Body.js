import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import CarouselHeading from "../../generic/CarouselHeading";
import { Food_Image_Card_API } from "../../generic/Api";
import FoodImageCard from "./FoodImageCard";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [onMindData, setOnMindData] = useState({});
  const [blrRestoData, setBlrRestoData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    
    const data = await response.json();
console.log(data);

    setOnMindData(data?.data?.cards?.[0]?.card?.card);
    setBlrRestoData(data?.data?.cards?.[1]?.card?.card);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { header: onMindHeader, imageGridCards } = onMindData ?? {};
  const { info: onMindCards } = imageGridCards ?? {};

  const { header: blrRestoHeader, gridElements } = blrRestoData ?? {};
  const { infoWithStyle } = gridElements ?? {};
  const { restaurants } = infoWithStyle ?? {};


  return (
    <div className="flex flex-col">
      {onMindData && (
        <div className="mx-[calc(7%+52px)] p-4 flex flex-col">
          <CarouselHeading title={onMindHeader?.title} />
          <div className="flex overflow-y-hidden overflow-x-auto px-4 gap-6 no-scrollbar">
            {onMindCards?.map(({ id, imageId, action: { link } }) => (
              <FoodImageCard key={id} imageId={imageId} link={link} />
            ))}
          </div>
        </div>
      )}
      <hr className="border-t-2 border-solid border-[#02060c0d] my-8 w-[80%] mx-auto" />
      {blrRestoData && (
        <div className="mx-[calc(7%+52px)] p-4 flex flex-col">
          <CarouselHeading title={blrRestoHeader?.title} />
          <div className="flex overflow-y-hidden overflow-x-auto px-4 gap-6 no-scrollbar">
            {restaurants?.map(
              ({
                info: {
                  id,
                  name,
                  cloudinaryImageId,
                  avgRating,
                  sla: { slaString },
                  cuisines,
                  areaName,
                  costForTwo,
                },
                cta: { link },
              }) => (
                <RestaurantCard
                  key={id}
                  link={link}
                  name={name}
                  cloudinaryImageId={cloudinaryImageId}
                  avgRating={avgRating}
                  slaString={slaString}
                  cuisines={cuisines}
                  areaName={areaName}
                  costForTwo={costForTwo}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Body;
