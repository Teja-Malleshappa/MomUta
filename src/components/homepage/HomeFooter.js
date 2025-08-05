import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { navSections } from "../../generic/Constant";
import FooterCard from "./FooterCard";
import { Link } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const HomeFooter = () => {
  const [otherCities, setOtherCities] = useState(false);
  const { company, contact, legal, availableCities, lifeAtSwiggy } =
    navSections;

  const hanldeCitiesClick = () => {
    setOtherCities(!otherCities);
  };

  return (
    <section className="bg-[#f0f0f5]">
      <section className="pl-[189px] pr-[248px] py-12 flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <Link to="/">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy Logo"
            />
          </Link>
          <p className="font-extralight text-base !leading-[21px] tracking-[-0.4px] text-[#02060c99]">
            © 2025 Swiggy Limited
          </p>
        </div>
        <FooterCard navList={company} />
        <div className="flex flex-col gap-[83px]">
          <FooterCard navList={contact} />
          <FooterCard navList={legal} />
        </div>
        <div className="flex flex-col gap-4">
          <FooterCard navList={availableCities} sliceIndex={6} />
          <button
            className="border border-solid border-[#02060c26] py-1 px-2 w-fit rounded-lg flex items-center gap-0.5 cursor-pointer"
            onClick={hanldeCitiesClick}
          >
            <span className="text-[#02060c99] text-sm font-extralight">
              {availableCities?.items?.length} cities
            </span>
            {otherCities ? <ChevronUp className="size-4 text-[#02060c99] stroke-2" /> : <ChevronDown className="size-4 text-[#02060c99] stroke-2" />}
          </button>
        </div>
        <div className="flex flex-col gap-[119px]">
          <FooterCard navList={lifeAtSwiggy} />
          <div className="flex flex-col gap-4">
            <p className="text-[#02060ceb] text-lg !leading-[22px] tracking-[-0.45px]">
              Social Links
            </p>
            <div className="flex gap-4">
              <FaLinkedin className="size-4" />
              <FaInstagram className="size-4" />
              <FaFacebook className="size-4" />
              <FaTwitter className="size-4" />
            </div>
          </div>
        </div>
      </section>
      <hr className="text-[#02060c] w-[calc(100%-126px)] mx-auto" />
      <section className="flex justify-center items-center py-8 gap-8">
        <p className="text-[#02060ceb] text-2xl font-semibold !leading-[26px] tracking-[-0.4px]">
          For better experience, download the Swiggy app now
        </p>
        <Link
          to="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
          target="_blank"
          className="no-underline"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="apple store link"
            className="hover:scale-105 duration-500 transition-transform ease-in-out w-[200px] h-[65px]"
          />
        </Link>
        <Link
          to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
          target="_blank"
          className="no-underline"
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="play store link"
            className="hover:scale-105 duration-500 transition-transform ease-in-out w-[200px] h-[65px]"
          />
        </Link>
      </section>
      {otherCities && (
        <>
          <hr className="w-full text-gray-300" />
          <section className="py-[4%] px-[10%]">
            <p className="py-4 text-lg text-[#02060ceb]">
              Other cities that we deliver:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {availableCities?.items?.map(({ name, link }, index) => {
                return (
                  <Link to={link} key={index}>
                    <span className="text-base font-extralight text-[#5e6c8199]">
                      {name}
                    </span>
                  </Link>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </section>
  );
};

export default HomeFooter;
