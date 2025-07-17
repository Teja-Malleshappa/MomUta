import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { navSections } from "../../generic/Constant";
import FooterCard from "./FooterCard";

const HomeFooter = () => {
  const { company, contact, legal, availableCities, lifeAtSwiggy } =
    navSections;
  return (
    <div className="bg-[#f0f0f5]">
      <div className="pl-[189px] pr-[248px] py-12 flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <a href="/">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy Logo"
            />
          </a>
          <p className="font-extralight text-base !leading-[21px] tracking-[-0.4px] text-[#02060c99]">
            © 2025 Swiggy Limited
          </p>
        </div>
        <FooterCard navList={company} />
        <div className="flex flex-col gap-[83px]">
          <FooterCard navList={contact} />
          <FooterCard navList={legal} />
        </div>
        <FooterCard navList={availableCities} />
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
      </div>
      <hr className="text-[#02060c] w-[calc(100%-126px)] mx-auto" />
      <div className="flex justify-center items-center py-8 gap-8">
        <p className="text-[#02060ceb] text-2xl font-semibold !leading-[26px] tracking-[-0.4px]">
          For better experience, download the Swiggy app now
        </p>
        <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="_blank" className="no-underline">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="apple store link" className="hover:scale-105 duration-500 transition-transform ease-in-out w-[200px] h-[65px]"/>
        </a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank" className="no-underline">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="play store link" className="hover:scale-105 duration-500 transition-transform ease-in-out w-[200px] h-[65px]"/>
        </a>
        
      </div>
    </div>
  );
};

export default HomeFooter;
