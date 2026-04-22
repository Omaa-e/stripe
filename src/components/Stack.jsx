import React, {useRef, useState } from "react";
import Ticker from "framer-motion-ticker";
import { motion, useInView } from "framer-motion";

// Tech stack images
import openAi from "../assets/OpenAi.webp";
import Amazon from "../assets/Amazon.png";
import Nvidia from "../assets/Nvidia.png";
import ford from "../assets/Ford.jpg";
import coinbase from "../assets/coinbase.png";
import Google from "../assets/Google.png";
import shopify from "../assets/shopify.webp";
import mindbody from "../assets/mindbody.svg";
import Metlife from "../assets/metlife.png";
import ramp from "../assets/ramp.svg";
import Marriot from "../assets/marriot.jpg";
import Figma from "../assets/figma.svg";
import Woo from "../assets/woo.svg";
import Vercel from "../assets/vercel.jpg";
import Uber from "../assets/uber.png";
import Anthropic from "../assets/anthropic.png";
import Lightspeed from "../assets/lightspeed.png";
import Cursor from "../assets/cursor.svg";

const Stack = () => {
    const [tickerPlaying, setTickerPlaying] = useState(true);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

    const Stack = [
    { image: openAi, url:"https://openai.com" },
    { image: Amazon, url: "https://www.amazon.com" },
    { image: Nvidia, url: "https://www.nvidia.com/en-us" },
    { image: ford, url: "https://www.ford.com" },
    { image: coinbase, url: "https://www.coinbase.com" },
    { image: Google, url: "https://www.google.ng" },
    { image: shopify, name: "https://www.shopify.com" },
    { image: mindbody, name: "https://www.mindbodyonline.com" },
    { image: Metlife, url: "https://www.metlife.com" },
    { image: ramp, url: "https://ramp.com" },
    { image: Marriot, url: "https://www.marriott.com" },
    { image: Figma, url: "https://www.figma.com" },
    { image: Woo, url: "https://woocommerce.com" },
    { image: Vercel, url: "https://vercel.com" },
    { image: Uber, url: "https://www.uber.com/ng/en" },
    { image: Anthropic, url: "https://www.anthropic.com" },
    { image: Lightspeed, url: "https://www.lightspeedhq.com" },
    { image: Cursor, url: "https://cursor.com" },
  ];
  return (
    <div className="w-full sm:px-4 xl:px-[5%] border-b border-gray-200 sm:border-x sm:border-gray-200">
      <div className="">
        {/* Tech Stack */}
        <div
          className="sm:border-x sm:border-gray-200"
          onMouseEnter={() => setTickerPlaying(false)}
          onMouseLeave={() => setTickerPlaying(true)}
        >
          <Ticker duration={100} isPlaying={tickerPlaying}>
            {Stack.map((stack, index) => (
                <a 
                key={index}
                href={stack.url}
                >
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className=" cursor-pointer mx-6 w-28 h-28 flex flex-col items-center justify-center transition-transform mb-10"
              >
                <img
                  src={stack.image}
                  alt={stack.name}
                  className="w-15 object-contain"
                />
                
              </motion.div>
              </a>
            ))}
          </Ticker>
        </div>
      </div>
        
         
    </div>
  )
}

export default Stack