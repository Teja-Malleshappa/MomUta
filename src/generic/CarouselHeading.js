import { ArrowLeft, ArrowRight } from "lucide-react";
import BestFoodCard from "../components/homepage/BestFoodCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CarouselHeading = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-4 ">
      <p className="text-[#02060ceb] text-[21px] font-semibold ">
        {title}
      </p>
      <div className="flex gap-2">
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
          <FaArrowLeft />
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselHeading;
