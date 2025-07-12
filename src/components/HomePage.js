const HomePage = () => {
  const navList = [
    { name: "Swiggy Corporate", link: "https://www.swiggy.com/corporate/" },
    {
      name: "Partner with us",
      link: "https://partner.swiggy.com/login#/swiggy",
    },
  ];

  return (
    <div className="bg-[#ff5200] p-8 flex justify-center items-center relative z-50">
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
          {navList.map((item, index) => (
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
