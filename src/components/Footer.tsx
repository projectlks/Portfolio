import { useEffect } from "react";
import ContactToConnected from "./ContactToConnected";
import Aos from "aos";

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <footer className=" bg-transparent text-[#100259] overflow-hidden w-full py-5">
      <h1 data-aos="zoom-out" className="w-full text-center text-8xl font-bold">
        Thank
      </h1>
      <p
        data-aos="flip-left"
        data-aos-delay="500"
        className="w-full text-center text-xl font-bold"
      >
        for scrollig all the way down here
      </p>
      <h1
        data-aos="zoom-out"
        className="w-full text-center text-8xl font-bold mb-10"
      >
        You
      </h1>

      <div className="relative   border items-center py-5  360:px-0 600:px-3  flex xl:justify-between justify-evenly h-auto md:h-[130px] md:px-5 xl:px-10 w-[95%] md:w-[80%] mx-auto mb-10 rounded-md border-[#100259]">
        {/* text */}
        <div className="absolute -top-[32px] flex justify-center left-0 right-0">
          <p
            data-aos="flip-left"
            data-aos-delay="1000"
            className=" px-4 py-2 text-lg md:text-2xl text-center overflow-hidden whitespace-nowrap  bg-blue-200 border border-[#100259] inline-block"
          >
            Looking forward to connect with You
          </p>
        </div>

        {/* phone */}

        <ContactToConnected
          icon="fa-solid fa-phone"
          title="Phone"
          num1="09 446 276 110"
          link1="tel:09446276110"
          num2="09 665 193 631"
          link2="tel:09665193631"
        />

        {/* email */}
        <ContactToConnected
          icon="fa-solid fa-envelope"
          title="Email"
          num1="mglinkar08@gmail.com"
          link1="mailto:mglinkar08@gmail.com"
        />
        {/* viber */}

        <ContactToConnected
          icon="fa-brands fa-viber"
          title="Viber"
          num1="09 446 276 110"
          link1="viber://contact?number=09446276110"
          num2="09 665 193 631"
          link2="viber://contact?number=09665193631"
        />
      </div>
    </footer>
  );
}
