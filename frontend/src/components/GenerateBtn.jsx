import React, { useContext } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
const GenerateBtn = () => {
    const navigate = useNavigate();
    const {user} = useContext(AppContext);
    const handleClick = () => {
        if(user){
            navigate('/result');
        }else{
            navigate('/');
        }
    }
  return (
    <motion.dev
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center py-16"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 pb-6">
        See the magic. Try now
      </h1>
      <button onClick={handleClick} className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">
        Generate Images
        <img src={assets.star_group} className="h-6"/>
      </button>
    </motion.dev>
  );
};

export default GenerateBtn;
