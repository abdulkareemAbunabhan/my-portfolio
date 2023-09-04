import React from "react";
import {useScroll,motion, spring} from "framer-motion";
import {useRef} from "react";
import LiIcon from "./LiIcon";


const Details = ({type,time,place,info }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:spring}}>
        <h3 className="text-2xl font-bold capitalize">
          {type}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
            {time} | {place}
        </span>
        <p className="w-full font-medium">
            {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className="my-64">
      <h2 className="mb-32 font-bold text-center text-8xl 2-full">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4">
          <Details
            type={"Training in software development"}
            time="January 2023 - August 2023"
            place="Abdul Aziz Al-Ghurair School for Advanced Computing(ASAC)(Code Fellows)"
            info="Relevant Skills includes Node.js,Python,Django,React.js,Next.js and SQL"
          />
          <Details
            type={"Bachelor of Architecture"}
            time="2016 - 2022"
            place="Al Al-Bayt University (AABU)"
            info="Relevant Courses includes Revit Course,Lumion Course ,Autocad Course and others"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
