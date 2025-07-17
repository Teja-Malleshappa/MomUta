const FooterCard = ({ navList }) => {
    const {heading, items} = navList
  return (
    <div className="flex flex-col gap-4">
      <p className="font-normal text-lg !leading-[22px] tracking-[-0.45px] text-[#02060ceb]">
        {heading}
      </p>
      <ul className="flex flex-col gap-4">
        {items?.map(({ name, link }, index) => (
          <a
            href={link}
            key={index}
            className="no-underline font-extralight text-base !leading-[21px] tracking-[-0.4px] text-[#02060c99]"
          >
            {name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
