import { useState } from "react";
import { MdMenu } from "react-icons/md"; // Hamburger menü simgesi
import { MdClose } from "react-icons/md"; // Menüyü kapatma simgesi
//Import icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import { SiMinutemailer } from "react-icons/si";
import edliyye from "../Images/edliyye.png";
import gerb from "../Images/gerb.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Əsas səhifə" },
    { name: "Haqqımızda" },
    { name: "Konsultasiya" },
    { name: "Hüquqi işlər" },
    { name: "Ünvan və Əlaqə" },
  ];
  return (
    <div className="w-full h-[8rem]">
      {/* <div className="overlayForHeader"></div> */}
      <div className={`w-full h-2/3  flex `}>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-start gap-2 pl-3 mx-auto ">
          <img
            src={gerb}
            alt="gerb"
            className="w-[4.2rem] h-[4.5rem] object-cover"
          />
          <img
            src={edliyye}
            alt="edliyye"
            className="w-[4.2rem] h-[4.2rem] object-cover"
          />

          <div className="hidden w-max lg:flex flex-col items-center justify-center">
            <div className="w-max flex items-center justify-center">
              <MdLocationPin className="text-white text-xl" />
              <p className="text-white text-md w-max">
                Bakı şəhəri,Nərimanov rayonu,Koroğlu Rəhimov 824-856.
              </p>
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <MdEmail className="text-white text-xl" />
              <p className="text-white text-md w-max">aliyevali@gmail.com</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2 pt-2">
              <BsFacebook className="text-white text-md cursor-pointer transition duration-300 hover:scale-[1.2] hover:text-blue-600" />
              <BsInstagram className="text-white text- cursor-pointer transition duration-300 hover:scale-[1.2] hover:text-orange-600" />
              <BsLinkedin className="text-white text- cursor-pointer transition duration-300 hover:scale-[1.2] hover:text-sky-400" />
              <BsWhatsapp className="text-white text- cursor-pointer transition duration-300 hover:scale-[1.2] hover:text-green-500" />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden  lg:flex items-center justify-center gap-5">
          <p className="text-xl text-stone-50 font-bold text-center">
            Pulsuz konsultasiya
          </p>
          <button className="w-[16rem] h-[3rem] transiton duration-300 bg-red-700 hover:bg-red-500 text-xl text-stone-200 text-center font-semibold  ">
            <a href="tel:+994502121212" className="animate-pulse">
              +994(50)-212-12-12
            </a>
          </button>
        </div>
        <div className="lg:hidden flex items-center justify-center pr-5">
          {isOpen ? (
            <MdClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MdMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`w-full h-[20rem] relative z-10 lg:h-1/3 ${
          isOpen ? "bg-[#EA580C] " : ""
        }  lg:bg-transparent  border-t-2 border-stone-400  flex justify-center items-center transition duration-300`}
      >
        <ul
          className={`lg:flex-row lg:flex flex-col lg:w-[60rem] gap-6 items-center justify-between text-xl text-stone-200 font-semibold ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:scale-[1.1] transition duration-300 cursor-pointer hover-underline-animation"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
