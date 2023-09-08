import React from "react";
import {useScroll,motion, spring} from "framer-motion";
import {useRef} from "react";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:spring}}>
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
        {position}&nbsp; <a href={companyLink} target={"_blank"} className="capitalize text-primary dark:text-primaryDark">@{company}</a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">
            {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className="my-64">
      <h2 className="mb-32 font-bold text-center text-8xl 2-full md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY:scrollYProgress}} className="md:w-[2-px] md:left-[30px] xs:left-[20px] absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"/>
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position={"Intern software developer"}
            company="Abdul Al-Aziz Alghurair School for Advanced Computing(ASAC)"
            companyLink="https://www.ltuc.com/"
            time="January 2023 - August 2023"
            address="Amman, Jordan"
            work="As part of an internship, I collaborated within teams on three distinct projects, starting with an event planner project that utilized Node.js and React.js. Additionally, I  led a unique project involving Python and the Pygame library, where our team developed the game 'Maze Runner'. In my final internship project, we developed an art gallery and auction platform, utilizing Python, Django, and Next.js for a comprehensive web application."
          />
          {/* <Details
            position={"software Engineer"}
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization"
          />
          <Details
            position={"software Engineer"}
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization"
          />
          <Details
            position={"software Engineer"}
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization"
          />
          <Details
            position={"software Engineer"}
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
