import { motion } from "framer-motion";

import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Koleaje Olayinka Oluwatobi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Crafting user-friendly interfaces for seamless navigation",
                8000,
                "Creating stunning and interactive web experiences",
                8000,
                "Delivering high-performance and scalable solutions",
                8000,
                "Unlocking the potential of web technology", // initially rendered starting point
                500,
              ]}
              speed={50}
              repeat={Infinity}
              className={"type"}
            />
            <br className="sm:block hidden" />
            to drive success and captivate users.
          </p>
        </div>
      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
