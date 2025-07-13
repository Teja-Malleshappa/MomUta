import CitiesWithDelivery from "./CitiesWithDelivery";
import { BestFoodImages01, BestFoodImages02, DineoutList, FoodDeliveryCities, InstamartDeliveryCities, InstamartList } from "./Constant";
import HomeBanner from "./HomeBanner";
import HomeCarousel from "./HomeCarousel"
import HomeFooter from "./HomeFooter";

const HomeBody = () => {
  return (
    <>
      <HomeCarousel name="Order our best food options" bestItemsRow1={BestFoodImages01} bestItemsRow2={BestFoodImages02} />
      <HomeCarousel name="Shop groceries on Instamart" instamartList= {InstamartList} />
      <HomeCarousel name="Discover best restaurants on Dineout" dineoutList={DineoutList} />
      <HomeBanner />
      <div className="pt-[84px]">
        <CitiesWithDelivery title="Cities with food delivery" text="Order food online in" cities={FoodDeliveryCities} />
      </div>
      <div className="pt-[62px] pb-[80px]">
        <CitiesWithDelivery title="Cities with grocery delivery" text="Order grocery delivery" cities={InstamartDeliveryCities}/>
      </div>
      <HomeFooter />
    </>
  );
};

export default HomeBody;
