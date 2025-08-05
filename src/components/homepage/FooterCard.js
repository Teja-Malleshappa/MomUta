import { Link } from "react-router";

const FooterCard = ({ navList, sliceIndex }) => {
    const {heading, items} = navList
  return (
    <section className="flex flex-col gap-4">
      <p className="font-normal text-lg !leading-[22px] tracking-[-0.45px] text-[#02060ceb]">
        {heading}
      </p>
      <ul className="flex flex-col gap-4">
        {items?.slice(0, sliceIndex).map(({ name, link }, index) => (
          <Link
            to={link}
            key={index}
            className="no-underline font-extralight text-base !leading-[21px] tracking-[-0.4px] text-[#02060c99]"
          >
            {name}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default FooterCard;
