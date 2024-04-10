import { Carousel } from "flowbite-react";
import lawyer1 from "../Images/lawyer1.jpg";
import lawyer3 from "../Images/lawyer3.jpg";
import lawyer4 from "../Images/lawyer4.jpg";
import lawyer5 from "../Images/lawyer5.jpg";

export default function Component() {
  return (
    <div className="w-full h-max flex flex-col items-center justify-center mt-[2rem]">
      <p className="lg:text-6xl text-4xl p-20  w-full h-max text-center font-bold text-slate-700">
        Videoçarxlar
      </p>
      <p className="lg:text-2xl text-2xl pb-10 w-full h-max text-center font-bold text-slate-700">
        Vəkil Elnur Quliyevin verdiyi müsahibələr
      </p>
      <div className="h-56 w-[20rem] lg:w-[40rem] mx-auto sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel className="hover:animate-pulse">
          <a href="https://www.youtube.com/watch?v=o5z8-9Op2nM" target="_blank">
            <img src={lawyer1} alt="..." />
          </a>
          <a href="https://www.youtube.com/watch?v=ImEnWAVRLU0" target="_blank">
            <img src={lawyer3} alt="..." />
          </a>
          <a href="https://www.youtube.com/watch?v=o6bO3zzrBp0" target="_blank">
            <img src={lawyer4} alt="..." />
          </a>
          <a href="https://www.youtube.com/watch?v=1NskFZKb1O8" target="_blank">
            <img src={lawyer5} alt="..." />
          </a>
        </Carousel>
      </div>
    </div>
  );
}
