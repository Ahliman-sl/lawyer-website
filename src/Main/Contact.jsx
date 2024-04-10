import { useState, useRef } from "react";

export default function Contact() {
  return (
    <div className="w-full h-max mt-[10rem] flex flex-col gap-2 items-center justify-center">
      <p className="lg:text-5xl text-3xl md:text-4xl font-bold text-slate-700 pb-10">
        Bizə mesaj göndərin...
      </p>
      <div className=" w-full h-max flex flex-col md:flex-row gap-10 items-center justify-center">
        <Map />
        <ContactUs />
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="md:w-1/2 w-full h-full">
      <p className="w-full h-max text-center text-2xl lg:text-3xl text-slate-500 p-2">
        Salam,Müraciətinizi mesaj bölməsi vasitəsi ilə bizə ünvanlayın.Ən qısa
        zamanda vəkilimiz tərəfindən sizə geri dönüş olunacaqdır.
      </p>
    </div>
  );
}

function ContactUs() {
  const form = useRef();
  const [isSucsess, setIsSucsess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    emailjs
      .sendForm("service_41fka7z", "template_fs7w17a", form.current, {
        publicKey: "cMOJNAf15-6wHCLrO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSucsess(true);
          setTimeout(() => {
            setIsSucsess(false);
          }, 7000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 7000);
        }
      );
  };

  return (
    <div className="md:w-1/2 w-full h-full mt-5">
      {isSucsess ? (
        <Sucsess />
      ) : isError ? (
        <Reject />
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center gap-2 pb-5 mx-4 font-meriendo "
        >
          <label className="text-md sm:text-xl text-stone-50">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Adınızı daxil edin"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
          />
          <label className="text-md sm:text-xl text-stone-50">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Emailinizi daxil edin"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
          />
          <label className="text-md sm:text-xl text-stone-50">Message</label>
          <textarea
            name="message"
            placeholder="Mesajınız"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full h-24 resize-none"
          />
          <input
            type="submit"
            value="Send"
            disabled
            className="cursor-pointer w-full h-10 mt-3 rounded-md bg-blue-500 text-white font-semibold text-md hover:bg-blue-700 transition duration-300"
          />
        </form>
      )}
    </div>
  );
}

function Sucsess() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-white text-md ">
        Mesajınız uğurla göndərildi,Ən qısa zamanda sizə geri dönüş ediləcək.
      </p>
    </div>
  );
}

function Reject() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-white text-md ">
        Mesajınız göndərilməsində problem yarandı,Yenidən cəhd edin!.
      </p>
    </div>
  );
}
