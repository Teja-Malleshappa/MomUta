import CitiesWithDelivery from "./CitiesWithDelivery";
import { BestFoodImages01, BestFoodImages02, DineoutList, FoodDeliveryCities, InstamartDeliveryCities, InstamartList } from "../../generic/Constant";
import GetAppBanner from "./GetAppBanner";
import HomeBanner from "./GetAppBanner";
import HomeCarousel from "./HomeCarousel"

const HomeBody = () => {
  return (
    <>
      <HomeCarousel name="Order our best food options" bestItemsRow1={BestFoodImages01} bestItemsRow2={BestFoodImages02} />
      <HomeCarousel name="Shop groceries on Instamart" instamartList= {InstamartList} />
      <HomeCarousel name="Discover best restaurants on Dineout" dineoutList={DineoutList} />
      <GetAppBanner />
      <div className="pt-[84px]">
        <CitiesWithDelivery title="Cities with food delivery" text="Order food online in" cities={FoodDeliveryCities} />
      </div>
      <div className="pt-[62px] pb-[80px]">
        <CitiesWithDelivery title="Cities with grocery delivery" text="Order grocery delivery" cities={InstamartDeliveryCities}/>
      </div>
    </>
  );
};

export default HomeBody;
