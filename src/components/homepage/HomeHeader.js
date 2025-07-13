import { ArrowUpRight, LucideShieldUser } from "lucide-react";
import { navList as NavList } from "./Constant";
const HomeHeader = () => {
  return (
    <div className="bg-[#ff5200] py-8 px-0 flex justify-center items-center relative z-50">
      <div className="flex justify-between items-center w-[80%]">
        <a href="/" className="h-12 w-40 bg-transparent visited:no-underline">
          <img
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            className="h-full w-full"
            loading="lazy"
            alt="Swiggy-Logo"
          />
        </a>
        <div className="flex justify-center items-center gap-8">
          {NavList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white text-base !leading-[21px] not-italic font-semibold tracking-[-0.4px] cursor-pointer no-underline z-40 bg-transparent font-[Gilroy]"
            >
              {item.name}
            </a>
          ))}
          <a
            href=""
            className="flex h-[54px] py-3 px-4 justify-center items-center gap-1 rounded-xl border border-solid border-white text-white cursor-pointer font-[Gilroy] text-base !leading-[21px] not-italic font-semibold no-underline bg-transparent"
          >
            Get the App{" "}
            <div className="leading-0">
              <ArrowUpRight className="w-[21px] h-[21px]" strokeWidth={2.5}/>
            </div>
          </a>
          <div className="relative">
            
            <div className="bg-gray-700 rounded-full p-2">
              <LucideShieldUser className="w-7 h-7"  color="white"/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
