import { dummyClients } from "@/lib/constants.jsx";

const HeroClients = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-0 sm:space-x-6 gap-3">
      <div className="flex items-center">
        {dummyClients.map((item, index) => (
          <div key={item.id} className={index !== 0 ? "-ml-4 sm:-ml-5" : ""}>
            <img
              src={item.imgSrc}
              alt={item.imgTitle}
              className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-yellow-400"
            />
          </div>
        ))}
      </div>

      <p className="text-base sm:text-lg md:text-xl text-white font-extralight whitespace-nowrap">
        100k+ Patients Recovered
      </p>
    </div>
  );
};

export default HeroClients;
