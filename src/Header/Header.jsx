import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className="w-full h-screen bg-image">
      <Navbar />
      <TopText />
    </div>
  );
}

function TopText() {
  return (
    <div className="w-full h-[30rem] mt-5 flex items-center justify-center">
      <div className="w-max h-max flex flex-col gap-7 items-center justify-center">
        <h1 className="lg:text-5xl text-4xl  p-3 mx-2 text-center text-stone-50 shadow-lg bg-black font-bold rounded-md">
          Peşəkar hüquqi yardıma ehtiyacınız var?
        </h1>
        <button className="before:ease relative h-[4rem] w-[14rem] rounded-md overflow-hidden border border-[#e1b382] bg-[#e1b382] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#e1b382] hover:before:-translate-x-40">
          <span className="relative z-10 text-md font-bold text-gray-50">
            Bizimlə əlaqə saxlayın
          </span>
        </button>
      </div>
    </div>
  );
}
