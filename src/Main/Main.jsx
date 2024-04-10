import About from "./About.jsx";
import Services from "./Services.jsx";
import Rating from "./Rating.jsx";
import Feedbacks from "./Feedbacks.jsx";
import Videos from "./Videos.jsx";
import Contact from "./Contact.jsx";
import Partners from "./Partners.jsx";
export default function Main() {
  return (
    <div className="w-full h-max bg-stone-100 flex flex-col font-raleway">
      <About />
      <Services />
      <Rating />
      <Feedbacks />
      <Videos />
      <Contact />
      <Partners />
    </div>
  );
}
