import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CarouselHeading = ({ title, scrollNext, scrollPrev }) => {
  return (
    <section className="flex items-center justify-between mb-4">
      <p className="text-[#02060ceb] text-2xl font-semibold ">{title}</p>
      <section className="flex gap-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer"
          onClick={scrollPrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer"
          onClick={scrollNext}
        >
          <FaArrowRight />
        </button>
      </section>
    </section>
  );
};

export default CarouselHeading;
