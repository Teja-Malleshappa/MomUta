import { ChevronDown, Search } from "lucide-react";
import { HeroCardList } from "../../generic/Constant";
import { Link, useLocation } from "react-router";
import { IoLocation } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fecthAddressRecommendation,
  fetchLocationData,
  getCards,
  resetLocations,
} from "../../features/locationSlice";
import { FaLocationArrow } from "react-icons/fa6";

const HeroCard = ({ link, imgSrc }) => {
  return (
    <div className="w-full h-full">
      <Link to={link} title="food" className="no-underline h-full w-full block">
        <img src={imgSrc} alt="Food" />
      </Link>
    </div>
  );
};

const HomeHero = () => {
  const [input, setInput] = useState("");
  const [callLocationAPI, setCallLocationsAPI] = useState(true);
  const [endIndex, setEndIndex] = useState(3);

  const {
    locations,
    addressRecommended: {
      geometry: { location: { lat = "", lng = "" } = {} } = {},
    } = {},
  } = useSelector((state) => state?.location);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      callLocationAPI && dispatch(fetchLocationData(input));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input, dispatch]);

  const handleSelectedLocation = (description, place_id) => {
    setInput(description);
    dispatch(fecthAddressRecommendation(place_id));
    dispatch(getCards(lat, lng, 15));

    // const locationData = JSON.parse(localStorage.setItem({'locations': locations, 'lat': lat, 'lng': lng}))
    // localStorage.setItem(JSON.stringify(locationData))

    dispatch(resetLocations());
    setCallLocationsAPI(false);
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setCallLocationsAPI(true);
    setEndIndex(3)
  };
  console.log(locations, lat, lng)

  return (
    <>
      <div className="bg-[#ff5200] flex flex-col items-center justify-center pt-16 pb-8 px-0 relative">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="left_img"
          className="h-[450px] w-[250px] absolute left-0 top-0 object-center border-none"
        />
        <div className="flex items-center justify-between py-0 px-4 order-1">
          <p className="w-[60%] text-center my-0 mx-auto pl-3 text-white text-5xl font-semibold tracking-[-0.3px] !leading-14">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 mb-0 mx-auto order-2 w-full">
          <div className="bg-white rounded-2xl">
            <div className="relative flex items-center justify-center bg-white rounded-2xl px-4 py-0 gap-[10px] border-[1.5px] border-solid border-[#02060c26]">
              <IoLocation className="w-6 h-6 text-[#ff5200]" />
              <div className="block relative p-0">
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="off"
                  tabIndex={1}
                  maxLength={30}
                  value={input}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
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
            {locations && locations.length > 0 && (
              <ul className="absolute mt-5 py-8 px-6 rounded-2xl bg-white z-20 flex flex-col gap-2 border border-[#02060c33] max-h-[400px] w-[785px] shadow shadow-[#282c3f1a] overflow-y-scroll overflow-x-hidden">
                <p className="text-base tracking-[2px] text-[#02060c73] uppercase mb-6">
                  SEARCH RESULT
                </p>
                {locations &&
                  locations
                    ?.slice(0, endIndex)
                    ?.map(({ description, place_id }, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleSelectedLocation(description, place_id);
                        }}
                        className="text-[#02060c99] flex items-center gap-2.5 text-lg hover:text-[#ff5200] cursor-pointer"
                      >
                        <FaLocationArrow className="size-5" />
                        <span className="w-full text-start truncate whitespace-nowrap">
                          {description}
                        </span>
                      </button>
                    ))}
                {endIndex && (
                  <button
                    className="text-lg flex gap-1 items-center text-[#ff5200] cursor-pointer"
                    onClick={() => setEndIndex(undefined)}
                  >
                    show more <ChevronDown className="size-5 text-[#ff5200]" />
                  </button>
                )}
              </ul>
            )}
          </div>
          <div className=" pl-4 w-[500px]">
            <div className="relative flex items-center w-full mx-auto my-0 rounded-2xl  h-[60px] bg-white border-[1.5px] border-solid border-[#02060c26]">
              <div type="button" className="pl-4">
                <div className=" font-normal text-lg !leading-[22px] tracking-[-0.45px] text-[#02060c73] overflow-hidden w-full text-left line-clamp-1">
                  Search for restaurant, item or more
                </div>
              </div>
              <div className="absolute top-4 right-4 w-5 h-5">
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
        <div className="flex items-center justify-center overflow-x-scroll no-scrollbar flex-nowrap w-full max-w-[80%] max-h-[320px]">
          {HeroCardList?.map(({ link, imgSrc }, index) => (
            <HeroCard key={index} link={link} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeHero;
