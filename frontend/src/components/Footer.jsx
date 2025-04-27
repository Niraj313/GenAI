import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const twitterId = import.meta.env.VITE_TWITTER_ID;
  const instagramId = import.meta.env.VITE_INSTAGRAM_ID;

  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} width={150} />
      <div className="flex gap-2.5">
        <a href={`${instagramId}`} target="_blank" rel="noopener noreferrer">
          <img
            src={assets.instagram_icon}
            width={35}
            className="cursor-pointer"
          />
        </a>
        <a href={`${twitterId}`} target="_blank" rel="noopener noreferrer">
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
