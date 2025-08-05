
import { Link } from "react-router";
import { navList as NavList } from "../../generic/Constant";
import { ArrowUpIcon, LucideShieldUser } from "lucide-react";

const HomeHeader = () => {
  return (
    <section className="bg-[#ff5200] sticky">
      <section className="py-8 w-[992] mx-auto flex items-center justify-between">
      <Link to="/" className="w-[160px] h-[48px]">
        <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />
      </Link>
      <ul className="flex items-center gap-8">
        {NavList.map(({ name, link }, index) => <Link
            to={link}
            key={index}
            className="text-white text-base font-semibold cursor-pointer"
          >
            {name}
          </Link>
        )}
        <Link
          to=""
          className="py-3 px-4 border border-solid border-white text-white rounded-xl cursor-pointer h-[54px] flex items-center gap-1 text-base font-semibold"
        >
          Get the App
          <ArrowUpIcon className="size-6" />
        </Link>
        <Link to="">
          <div className="bg-gray-700 rounded-full p-2">
            <LucideShieldUser className="w-7 h-7" color="white" />
          </div>
        </Link>
      </ul>
      </section>
    </section>
  );
};

export default HomeHeader;
