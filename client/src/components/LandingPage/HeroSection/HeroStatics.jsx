const HeroStatics = ({ number, title, position }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-md px-2 py-1 shadow-lg shadow-gray-500 absolute ${position}`}
    >
      <p className="text-2xl sm:text-4xl md:text-5xl text-yellow-300">
        {number}
      </p>
      <p className="text-sm sm:text-base md:text-lg font-extralight text-black">
        {title}
      </p>
    </div>
  );
};

export default HeroStatics;
