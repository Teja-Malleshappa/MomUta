import { ChevronDown, MapPin, Search } from "lucide-react";
import { HeroCardList } from "./Constant";

const HeroCard = ({ link, imgSrc }) => {
  return (
    <div className="w-full h-full">
      <a href={link} title="food" className="no-underline h-full w-full block">
        <img src={imgSrc} alt="Food" />
      </a>
    </div>
  );
};

const HomeHero = () => {
  return (
    <>
      <div className="bg-[#ff5200] flex flex-col items-center justify-center pt-16 pb-8 px-0 relative">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="left_img"
          className="h-[450px] w-[250px] absolute left-0 top-0 object-center border-none"
        />
        <div className="flex items-center justify-between py-0 px-4 order-1">
          <p className="w-[60%] text-center my-0 mx-auto pl-3 text-white  text-5xl font-semibold tracking-[-0.3px] !leading-14">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 mb-0 mx-auto order-2 w-full">
          <div className="bg-white rounded-2xl">
            <div className="relative flex items-center justify-center bg-white rounded-2xl px-4 py-0 gap-[10px] border-[1.5px] border-solid border-[#02060c26]">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 23"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                fill="#FF5200"
              ></path>
            </svg> */}
              <MapPin className="w-6 h-6" fill="#ff5200" strokeWidth={0} />
              <div className="block relative p-0">
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="off"
                  tabIndex={1}
                  maxLength={30}
                  placeholder="Enter your delivery location"
                  className="bg-transparent !leading-normal border-none outline-none w-full m-0 shadow-none rounded-none whitespace-nowrap overflow-ellipsis font-medium h-[58px] caret-[#ff5200] text-[#02060c99]  text-lg tracking-[-0.4px] p-0"
                />
                <div className="absolute right-5 bottom-[26px] text-sm font-normal text-[#5d8ed5] cursor-pointer [will-change:transform] translate-y-[70%] transition duration-200 ease-in-out"></div>
                <label className="absolute left-0 bottom-6 pl-5 leading-5 cursor-text transition duration-200 ease-in-out w-full pointer-events-none [will-change:transform,color,font-size]"></label>
              </div>
              <div className="leading-0">
                <ChevronDown className="w-5 h-[21px] text-[#02060c73]" />
              </div>
            </div>
          </div>
          <div className=" pl-4 w-[500px]">
            <div className="relative flex items-center w-full mx-auto my-0 rounded-2xl  h-[60px] bg-white border-[1.5px] border-solid border-[#02060c26]">
              <div type="button" className="pl-4">
                <div className=" font-normal text-lg !leading-[22px] tracking-[-0.45px] text-[#02060c73] overflow-hidden w-full text-left line-clamp-1">
                  Search for restaurant, item or more
                </div>
              </div>
              <div className="absolute top-4 right-4 w-5 h-5">
                {/* <svg
                aria-hidden="true"
                height="20"
                width="20"
                className="leading-0 [--fill-color:rgba(2,6,12,0.6)] [--stroke-color:rgba(2,6,12,0.6)]"
              >
                <use href="/core/sprite-CXUBnqBy.svg#search20"></use>
              </svg> */}
                <Search className="w-5 h-5 text-[#02060c73]" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="right_img"
          loading="lazy"
          className="h-[450px] w-[250px] absolute right-0 top-0 object-cover border-none"
        />
      </div>
      <div className="flex justify-center items-center bg-[#ff5200] px-2 pb-5">
        <div className="flex items-center justify-center overflow-x-scroll no-scollbar flex-nowrap w-full max-w-[80%] max-h-[320px]">
          {HeroCardList?.map(({ link, imgSrc }, index) => (
            <HeroCard key={index} link={link} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeHero;
