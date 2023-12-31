import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import {motion} from "framer-motion"
import project1 from "../../public/images/projects/creativity.png"
import project2 from "../../public/images/projects/project2.jpg"
import project3 from "../../public/images/projects/project3.png"
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github,video }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-8 border border-solid shadow-2xl dark:bg-dark dark:border-light rounded-3xl rounded-br-2xl border-dark bg-light xs:rounded-2xl xs:rounded-br-3xl xs:p-4 lg:flex-col">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light lg:flex-col lg:p-8 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
      <Link href={link} target={"_blank"} className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        {/* <span className="text-xl font-medium text-primary font dark:text-primaryDark xs:text-base">{type}</span> */}
        <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">{title}</h2>
        </Link>
      <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
      <div className="flex items-center mt-2 font-medium">
        <div className="w-10">
          <Link href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
        </div>
        <Link href={link} target={"_blank"} className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark dark:border-light sm:px-4 sm:text-base">
          Visit Project
        </Link>
        <Link href={video} target={"_blank"} className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark dark:border-light sm:px-4 sm:text-base">
          Video
        </Link>
      </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github ,word,video }) => {
  return (
    <article className="relative flex flex-col justify-center w-full p-6 border border-solid item rounded-2xl dark:border-light border-dark bg-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "/>
      <Link href={link} target={"_blank"} className="w-full overflow-hidden rounded-lg cursor-pointer">
        <FramerImage src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        {/* <span className="text-xl font-medium text-primary font dark:text-primaryDark lg:text-lg md:text-base">{type}</span> */}
        <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-2xl font-bold text-left lg:text-2xl ">{title}</h2>
        </Link>
      {/* <p className="my-2 font-medium text-dark ">{summary}</p> */}
      <div className="flex items-center justify-between w-full mt-2 font-medium">
      <Link href={link} target={"_blank"} className="text-lg font-semibold underline rounded-lg md:text-base">
          {word}
        </Link>
        <Link href={video} target={"_blank"} className="text-lg font-semibold underline rounded-lg md:text-base">
          Video
        </Link>
        <div className="w-10 md:w-8">
          <Link href={github} target={"_blank"}>
            <GithubIcon />
          </Link>
        </div>
        
      </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Abdulkareem Abunabhan | About Page</title>
        <meta name="description" content="full stack developer" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Exploring Boundless Creativity!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Creativity overflow"
                summary='
"Creativity Overflow" is an online art platform that caters to both artists and customers. Artists can showcase and auction their artworks, while customers can browse, bid, and purchase art pieces. The platform features separate dashboards for each user type, a robust auction system, and easy-to-use interfaces, creating a vibrant community for art enthusiasts and creators alike.'
                link="https://creativity-overflow.vercel.app/"
                github="https://github.com/Creativity-Overflow"
                img={project1}
                type="Featured Project"
                video="https://drive.google.com/file/d/1JPRVVjnwhOT9Fp5bcZdhfybwGCEQwtsD/view?usp=sharing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="The Maze Runner(2d game)"
                summary='
"Creativity Overflow" is an online art platform that caters to both artists and customers. Artists can showcase and auction their artworks, while customers can browse, bid, and purchase art pieces. The platform features separate dashboards for each user type, a robust auction system, and easy-to-use interfaces, creating a vibrant community for art enthusiasts and creators alike.'
                link="https://drive.google.com/drive/folders/1TTULmMTcqTZKlZJC17vdxDRrdvQETPeh?usp=drive_link"
                video="https://drive.google.com/file/d/1ZidIBwYfoOJTaxAyRjElfBzE5HmsU33a/view?usp=sharing"
                github="https://github.com/Creativity-Overflow"
                img={project2}
                type="Project"
                word="download"
              />
              </div>
            <div className="col-span-6 sm:col-span-12"><Project
                title="Celebrate Pro (Event Planner)"
                summary='
"Creativity Overflow" is an online art platform that caters to both artists and customers. Artists can showcase and auction their artworks, while customers can browse, bid, and purchase art pieces. The platform features separate dashboards for each user type, a robust auction system, and easy-to-use interfaces, creating a vibrant community for art enthusiasts and creators alike.'
                link="https://drive.google.com/file/d/15RyxrKjH6oPBWkeYzJPhPLlYrmRPY-mO/view?usp=sharing"
                video="https://drive.google.com/file/d/15RyxrKjH6oPBWkeYzJPhPLlYrmRPY-mO/view?usp=sharing"
                github="https://github.com/orgs/Group-5-Abdullah/repositories"
                img={project3}
                type="Project"
                word="Visit"
              /></div>
            {/* <div className="col-span-12">Featured Project2</div>
            <div className="col-span-6 sm:col-span-12">Project-3</div>
            <div className="col-span-6 sm:col-span-12">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
