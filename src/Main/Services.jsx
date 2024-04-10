import { useEffect } from "react";
import Glide from "@glidejs/glide";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { BsYoutube } from "react-icons/bs";
import esasMuqavile from "../Images/esasMuqavile.jpg";
import muqavile from "../Images/muqavile.jpg";
import fitTerazi from "../Images/fitTerazi.jpg";
import ofis from "../Images/ofis.jpg";
import cinayet from "../Images/cinayet.jpg";
import borc from "../Images/borc.jpg";
import kid from "../Images/kid.svg";
import handcuff from "../Images/handcuff.svg";
import usd from "../Images/dollar.svg";
import ecommerce from "../Images/ecommerce.svg";
import license from "../Images/license.svg";
import contract from "../Images/contract.svg";

export default function Services() {
  return (
    <div className="w-full mt-10  h-max flex flex-col items-center justify-center ">
      <CarouselCard />
      <ServicesText />
    </div>
  );
}
function CarouselCard() {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Card Carousel --> */}
      <div className="glide-06 relative w-full  overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <figure>
                <img
                  src={cinayet}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Mülki,kommersiya,inzibati və cinayət işlərində peşəkar hüquqi
                  xidmət
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={muqavile}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Mürəkkəb Müqavilələrin tərtib edilməsi və hüquqi ekspertizası
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={borc}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Borc tələbləri
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={esasMuqavile}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Əqli Mülkiyyət işləri
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={fitTerazi}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Vərəsəlik işləri
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={ofis}
                  className="m-auto max-h-full w-full max-w-full"
                />
                <figcaption className="w-full h-full text-center text-xl font-semibold">
                  Şirkətlərin təsis edilməsi
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>öncəki</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>sonraki</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Carousel --> */}
    </>
  );
}

function ServicesText() {
  return (
    <div className="mt-[5rem] w-full h-max gap-5 flex flex-wrap items-center justify-center">
      <CardIcon
        title="Mülkü Mübahisələr"
        text="Ailə,nigah,əmlak mübahisələri,vərəsəlik işlərində vəkil yardımı"
        img={kid}
      />
      <CardIcon
        title="Kommersiya Mübahisələri"
        text="Kommersiya müqaviləsinin icrası,müflisləşmə hallarında hüquqşunas məsləhəti"
        img={ecommerce}
      />
      <CardIcon
        title="Cinayət işləri"
        text="Cinayət işi hadisələrində ixtisaslı və təcrübəli vəkil xidməti və müşayiəti"
        img={handcuff}
      />
      <CardIcon
        title="Stimullaşdırıcı Loterayaların Təşkili"
        text="Lotereya təşkili prosedurlarında,icazənin alınmasında hüquqşunas yardımı"
        img={usd}
      />
      <CardIcon
        title="Əmtəə Nişanlarının Dövlət Qeydiyyatı"
        text="Lotereya təşkili prosedurlarında,icazənin alınmasında hüquqşunas yardımı"
        img={license}
      />
      <CardIcon
        title="Korporativ Hüquqi Yardım"
        text="Hüquqi şəxsin təsis edilməsi, nizamnamə kapitalının dəyişdirilməsi və s.xidmətlər"
        img={contract}
      />
    </div>
  );
}

function CardIcon({ title, text, img }) {
  return (
    <>
      {/*<!-- Component: Card with icon --> */}
      <a href="/">
        <div className="overflow-hidden text-center h-max w-[25rem] bg-white rounded shadow-md text-slate-500 shadow-slate-200 hover:bg-stone-200 transition duration-300">
          {/*  <!-- Icon --> */}
          <figure className="p-6 pb-0">
            <div className="flex items-center justify-center">
              <img src={img} className="w-[10rem]" />
            </div>
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <h3 className="mb-4 text-xl font-medium text-slate-700">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </a>
      {/*<!-- End Card with icon --> */}
    </>
  );
}
