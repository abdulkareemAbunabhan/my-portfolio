import React from "react";
import { motion } from "framer-motion";

const Skill = ({name,x,y})=>{
    return(
    <motion.div className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-dark text-light shadow-dark dark:bg-light dark:text-dark xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3" whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x,y:y,transition:{duration:1.5}}} viewport={{once:true}}>
        {name}
    </motion.div> 
    )
}

const Skills = ({ className = "", ...rest }) => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">Skills</h2>
      <div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark lg:h-[80-vh] sm:h-[60-vh] xs:h-[50-vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div className="flex items-center justify-center p-8 font-semibold rounded-full bg-dark text-light shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2" whileHover={{scale:1.05}}>
            web
        </motion.div>
        <Skill name="node.js" x="-5vw" y="-8vw" />
        <Skill name="python" x="0vw" y="8vw" />
        <Skill name="JavaScript" x="15vw" y="0vw" />
        <Skill name="Next.js" x="-15vw" y="-15vw" />
        <Skill name="React.js" x="15vw" y="-15vw" />
        <Skill name="Django" x="-10vw" y="17vw" />
        <Skill name="SQL" x="10vw" y="17vw" />
        <Skill name="CSS" x="25vw" y="8vw" />
        <Skill name="Tailwind CSS" x="-20vw" y="3vw" />
      </div>
    </>
  );
};
export default Skills;
