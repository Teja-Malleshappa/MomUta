import { useEffect, useRef } from "react";
import CarouselHeading from "../../generic/CarouselHeading";
import FoodImageCard from "./FoodImageCard";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOnMindData,
  fetchBlrRestoData,
  fecthSwiggyData,
} from "../../features/swiggySlice";
import { onClickScroll } from "../../generic/ScrollGenerics";

const Body = () => {
  const dispatch = useDispatch();
  const { onMindData, blrRestoData } = useSelector((state) => state.swiggy);
  const {
    locations,
    addressRecommended: {
      geometry: { location: { lat = "", lng = "" } = {} } = {},
    } = {},
  } = useSelector((state) => state?.location);
  const foodRef = useRef();
  const restourantRef = useRef();

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const data = await response.json();

  //   dispatch(fetchOnMindData(data?.data?.cards?.[0]?.card?.card));
  //   dispatch(fetchBlrRestoData(data?.data?.cards?.[1]?.card?.card));
  // };
  console.log(locations, lat, lng);

  useEffect(() => {
    dispatch(fecthSwiggyData());
  }, []);

  const { header: onMindHeader, imageGridCards } = onMindData ?? {};
  const { info: onMindCards } = imageGridCards ?? {};

  const { header: blrRestoHeader, gridElements } = blrRestoData ?? {};
  const { infoWithStyle } = gridElements ?? {};
  const { restaurants } = infoWithStyle ?? {};

  return (
    <main className="flex flex-col">
      {onMindData && (
        <section className="mx-[calc(7%+52px)] p-4 flex flex-col">
          <CarouselHeading
            title={onMindHeader?.title}
            scrollNext={() => onClickScroll(1, foodRef)}
            scrollPrev={() => onClickScroll(-1, foodRef)}
          />
          <menu
            className="flex overflow-y-hidden overflow-x-auto px-4 gap-6 no-scrollbar"
            ref={foodRef}
          >
            {onMindCards?.map(({ id, imageId, action: { link } }) => (
              <FoodImageCard key={id} imageId={imageId} link={link} />
            ))}
          </menu>
        </section>
      )}
      <hr className="border-t-2 border-solid border-[#02060c0d] my-8 w-[80%] mx-auto" />
      {blrRestoData && (
        <section className="mx-[calc(7%+52px)] p-4 flex flex-col">
          <CarouselHeading
            title={blrRestoHeader?.title}
            scrollNext={() => onClickScroll(1, restourantRef)}
            scrollPrev={() => onClickScroll(-1, restourantRef)}
          />
          <menu
            className="flex overflow-y-hidden overflow-x-auto px-4 gap-6 no-scrollbar"
            ref={restourantRef}
          >
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
          </menu>
        </section>
      )}
    </main>
  );
};
export default Body;
