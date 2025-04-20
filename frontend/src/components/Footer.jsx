import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} width={150} />
      <div className="flex gap-2.5">
        <a href="">
          <img
            src={assets.instagram_icon}
            width={35}
            className="cursor-pointer"
          />
        </a>
        <a href="">
          <img
            src={assets.twitter_icon}
            width={35}
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
