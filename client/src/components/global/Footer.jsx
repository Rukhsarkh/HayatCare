import {
  ArrowRight,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-10 gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-2">HayatCare.</h2>
          <p className="text-md text-gray-400">
            Your trusted platform for seamless healthcare consultation and
            services.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <div className="flex w-full md:w-[300px] gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border-none text-black bg-white"
            />
            <Button className="rounded-full bg-yellow-500">
              <ArrowRight className="text-white h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row justify-between pt-10 gap-10">
        <div>
          <ul className="flex space-x-4 mb-4">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
              <li
                key={idx}
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-7 h-7" />
              </li>
            ))}
          </ul>
          <p className="text-md text-gray-500">
            © {currentYear} HayatCare. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 text-sm max-lg:gap-10">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@hayatcare.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
