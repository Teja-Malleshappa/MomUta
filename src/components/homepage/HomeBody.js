import CitiesWithDelivery from "./CitiesWithDelivery";
import {
  BestFoodImages01,
  BestFoodImages02,
  DineoutList,
  FoodDeliveryCities,
  InstamartDeliveryCities,
  InstamartList,
} from "../../generic/Constant";
import GetAppBanner from "./GetAppBanner";
import CarouselHeading from "../../generic/CarouselHeading";
import BestFoodCard from "./BestFoodCard";
import InstamartCard from "./InstamartCard";
import DineoutCard from "./DineoutCard";
import { useRef, useState } from "react";
import { onClickScroll } from "../../generic/ScrollGenerics";

const HomeBody = () => {
  const [deliveryEndIndex, setDeliveryEndIndex] = useState(7);
  const [groceryEndIndex, setGroceryEndIndex] = useState(7);
  const scrollDineoutRef = useRef();
  const scrollInstamartRef = useRef();
  const scrollBestFoodRef = useRef();

  return (
    <>
      <section className="w-[80%] mx-auto mt-[120px]">
        <CarouselHeading
          title="Order our best food options"
          scrollPrev={() => onClickScroll(-1, scrollBestFoodRef)}
          scrollNext={() => onClickScroll(1, scrollBestFoodRef)}
        />
        <section
          ref={scrollBestFoodRef}
          className="overflow-x-scroll no-scrollbar"
        >
          <ul className="flex items-center gap-10">
            {BestFoodImages01?.map((imgSrc, index) => (
              <BestFoodCard key={index} imgSrc={imgSrc} />
            ))}
          </ul>
          <ul className="flex items-center gap-10">
            {BestFoodImages02?.map((imgSrc, index) => (
              <BestFoodCard key={index} imgSrc={imgSrc} />
            ))}
          </ul>
        </section>
      </section>

      <section className="w-[80%] mx-auto mt-[120px]">
        <CarouselHeading
          title="Shop groceries on Instamart"
          scrollNext={() => onClickScroll(1, scrollInstamartRef)}
          scrollPrev={() => onClickScroll(-1, scrollInstamartRef)}
        />
        <ul
          ref={scrollInstamartRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-10"
        >
          {InstamartList?.map(({ imgSrc, name }, index) => (
            <InstamartCard key={index} imgSrc={imgSrc} name={name} />
          ))}
        </ul>
      </section>

      <section className="w-[80%] mx-auto mt-[120px]">
        <CarouselHeading
          title="Discover best restaurants on Dineout"
          scrollNext={() => onClickScroll(1, scrollDineoutRef)}
          scrollPrev={() => onClickScroll(-1, scrollDineoutRef)}
        />
        <ul
          ref={scrollDineoutRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-10"
        >
          {DineoutList?.map((item) => {
            return <DineoutCard key={item?.id} item={item} />;
          })}
        </ul>
      </section>

      <GetAppBanner />

      <section className="pt-[84px]">
        <CitiesWithDelivery
          title="Cities with food delivery"
          text="Order food online in"
          cities={FoodDeliveryCities}
          endIndex={deliveryEndIndex}
          setEndIndex={setDeliveryEndIndex}
        />
      </section>
      <section className="pt-[62px] pb-[80px]">
        <CitiesWithDelivery
          title="Cities with grocery delivery"
          text="Order grocery delivery"
          cities={InstamartDeliveryCities}
          endIndex={groceryEndIndex}
          setEndIndex={setGroceryEndIndex}
        />
      </section>
    </>
  );
};

export default HomeBody;
