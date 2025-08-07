import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center text-2xl md:text-5xl min-h-screen gap-8">
      <div>
        {error.status}, {`Page ${error.statusText}`}
      </div>
      <Button
        variant="outline"
        className="text-black hover:bg-gray-300 bg-yellow-200 border-none lg:text-lg"
      >
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
