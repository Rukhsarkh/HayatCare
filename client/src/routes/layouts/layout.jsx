import { Outlet } from "react-router-dom";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="lg:mx-20">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
