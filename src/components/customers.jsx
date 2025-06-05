import React from "react";

const customers = [
  { src: "https://framerusercontent.com/images/27bNT9pMW0iqyTvRm74anDcoows.png", alt: "Unpaid Company" },
  { src: "https://framerusercontent.com/images/cYW2A5MJmlmIeVtS6VQjXHcEOjk.png", alt: "5 Dollar Jobs" },
  { src: "https://framerusercontent.com/images/Wfy4oCjLxcGHRHeoWYr1OoBKeg.png", alt: "Virtual Company" },
  { src: "https://framerusercontent.com/images/nOiWaDRVfaKyO0jd1tSTxFhY5SI.png?lossless=1", alt: "2:47 Studio" },
  { src: "https://framerusercontent.com/images/nlnrJ62SNOC5Rybt236FnLBUjY.png?scale-down-to=512", alt: "Hypermove" },
  { src: "https://framerusercontent.com/images/cbwQyloUTLWp8ccnGLyhHZUA.png", alt: "Heystack" },
  { src: "https://framerusercontent.com/images/htLwGC9IpD6IlyHrehR4Ll3wOk.png", alt: "Crown World" },
  { src: "https://framerusercontent.com/images/zWnYCRfnzfQMr6NdaLtBrDN2MA.png", alt: "BitcoinVerse" },
  { src: "https://framerusercontent.com/images/RYm38xEWGmbITRnSn0C8Y54.png", alt: "Reacti.ai" },
  { src: "https://framerusercontent.com/images/tp6oFseHCnwtrtEVtwfYIpUY6G0.png", alt: "DZAP" },
  { src: "https://framerusercontent.com/images/AUkVtEJZgQfMd874n3X1v3Qto.png?scale-down-to=512", alt: "Grabz" },
];

function Customers() {
  return (
    <section className="bg-black text-white py-20 text-center">
      <h2 className="text-1xl md:text-2xl font-semibold text-blue-300 mb-10">
        The Customers Who Didn't Immediately Asked for a Refund
      </h2>

      <div className=" xxxx flex flex-wrap justify-center items-center w-full max-w-6xl mx-auto gap-6 px-5 py-5">
        {customers.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-20 md:h-16 max-w-[160px] object-contain px-10"
          />
        ))}
        <p className="text-white justify-content-center mt-12 text-lg">and more</p>
      </div>

      {/* <p className="text-white mt-12 text-lg">and more</p> */}
    </section>
  );
}
export default Customers;
