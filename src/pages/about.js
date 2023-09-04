import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect } from "react";
import profilePic from "../../public/images/profile/profilePic2.png"
import Image from "next/image";
import { useInView, useMotionValue, useSpring} from "framer-motion";
import {useRef} from "react"
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

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
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Determination Drives Achievement!" className="mb-16"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex flex-col items-start justify-start col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p>
              Hello, I'm Abdulkareem Abunabhan, a software developer with a unique background in architecture. My journey into the world of software development has been marked by a profound passion for creating digital solutions that are both elegant and functional.
              </p>

              <p>
              While my previous career was in architecture, I've transitioned to the world of technology, where I've developed skills in Node.js, React.js, Next.js, Python, Django, and SQL. I approach every project with a fresh perspective, drawing from my architectural roots to design intuitive and user-centered digital experiences.
              </p>

              <p>
              I firmly believe that software development is not just about writing code; it's about problem-solving and crafting solutions that provide users with enjoyable and seamless experiences. My commitment to excellence in design and user-centered thinking drives me to continuously seek innovative ways to bring your vision to life.
              </p>
              <p>
              I'm excited about the opportunity to collaborate with you on your next project, leveraging my diverse skill set and passion for creating beautiful and functional digital solutions. Let's turn your ideas into reality together!
              </p>
            </div>
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                <Image src={profilePic} alt="Abdulkareem Abunabhan" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            {/* <div className="flex flex-col items-end justify-between col-span-2">
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block font-bold text-7xl"><AnimatedNumbers value="50"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">satisfied clients</h2>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block font-bold text-7xl"><AnimatedNumbers value="40"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">project completed</h2>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block font-bold text-7xl"><AnimatedNumbers value="1"/>+</span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">years of experience</h2>
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
