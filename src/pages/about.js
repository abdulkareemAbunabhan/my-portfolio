import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import React, { useEffect } from "react";
import profilePic from "../../public/images/profile/profilePic2.png"
import Image from "next/image";
import { useInView, useMotionValue, useSpring} from "framer-motion";
import {useRef} from "react"
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers=({value}) =>{
const ref=useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000});
const isInView = useInView(ref,{once:true});
useEffect(()=>{ 
    if(isInView){
        motionValue.set(value);
    }
},[isInView,value,motionValue])

useEffect(()=>{
    springValue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0)<= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
},[springValue,value])
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Abdulkareem Abunabhan | About Page</title>
        <meta name="description" content="full stack developer" />
      </Head>
      <TransitionEffect /> 
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Determination Drives Achievement!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col items-start justify-start col-span-4 sm:gap-8 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p>
              Hello, I am Abdulkareem Abunabhan, a software developer with a unique background in architecture. My journey into the world of software development has been marked by a profound passion for creating digital solutions that are both elegant and functional.
              </p>

              <p>
              While my previous career was in architecture, I have transitioned to the world of technology, where I have developed skills in Node.js, React.js, Next.js, Python, Django, and SQL. I approach every project with a fresh perspective, drawing from my architectural roots to design intuitive and user-centered digital experiences.
              </p>

              <p>
              I firmly believe that software development is not just about writing code; it is about problem-solving and crafting solutions that provide users with enjoyable and seamless experiences. My commitment to excellence in design and user-centered thinking drives me to continuously seek innovative ways to bring your vision to life.
              </p>
              <p>
              I am excited about the opportunity to collaborate with you on your next project, leveraging my diverse skill set and passion for creating beautiful and functional digital solutions. Let us turn your ideas into reality together!
              </p>
            </div>
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                <Image src={profilePic} alt="Abdulkareem Abunabhan" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            {/* <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value="50"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value="40"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm">project completed</h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value="1"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm">years of experience</h2>
                </div>
            </div> */}
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
