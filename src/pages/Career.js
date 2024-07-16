<div className="bg-white relative z-auto">
<p className="font-Quicksand font-semibold text-xl md:text-3xl px-12 mL:px-70px lg:ps-8.8% xl:ps-8% 2k:ps-7.7% 4k:ps-6.8% py-10 z-40 relative  lg:text-start">
  Explore Our Internship Programme
</p>

<div className="flex flex-wrap mx-3% md:mx-4% lg:mx-5% ">
  {CareerExploreData.map((data, index) => (
    <div
      key={data.id}
      className={`max-md:max-w-358px lg:flex-flex-50 xl:flex-flex-30 px-10 mL:ms-6 md:ms-0   lg:py-5  ${
        scaleIn && index === scaleIndex ? "scaleIn" : "scaleOut"
      }`}
      onMouseEnter={() => handleScale(index)}
      onMouseLeave={() => handleScaleDown(index)}
    >
      <div className="overflow-hidden">
        <img
          src={data.url}
          alt="Department"
          className={`${
            scaleIn && index === scaleIndex
              ? "scale-110 duration-800 "
              : " duration-800"
          }`}
        />
      </div>

      <div
        className={`px-0 lg:px-10 font-Inter lg:min-h-190px  ${
          scaleIn && index === scaleIndex
            ? "shadow-bottom-only px-2 lg:px-0"
            : ""
        }`}
      >
        <p
          className={`text-md md:text-xl font-semibold py-4 tracking-wider ${
            scaleIn && index === scaleIndex
              ? "text-career-button-orange duration-700"
              : " duration-700"
          }`}
        >
          {data.title}
        </p>
        <p
          className={`text-13px leading-6 tracking-tight pb-6 ${
            scaleIn && index === scaleIndex
              ? "font-semibold duration-700"
              : "font-normal duration-700 "
          }`}
        >
          {data.description}
        </p>
      </div>
    </div>
  ))}
</div>
</div>