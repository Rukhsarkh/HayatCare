const Header = () => {
  return (
    <header className="z-50 fixed mx-1.5 p-4 px-10 flex flex-row justify-between w-full text-white top-0 left-0 right-0 backdrop-blur-sm">
      <div>
        <p className="font-bold text-xl tracking-tighter">HayatCare.</p>
      </div>
      <div className="flex flex-row gap-5 pr-8">
        <button className="text-xl tracking-tighter font-extralight">
          Pricing
        </button>
        <button className="text-xl tracking-tighter font-extralight">
          Signin
        </button>
      </div>
    </header>
  );
};

export default Header;
