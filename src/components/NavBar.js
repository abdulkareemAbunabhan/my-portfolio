import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {motion} from "framer-motion"
import {DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {

  const [mode,setMode] = useThemeSwitcher();

  return (
    <header className="flex justify-between w-full px-32 py-8 font-medium item-center dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mr-3" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://some.com" target={"_blank"} className="w-6 mr-3" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://some.com" target={"_blank"} className="w-6 mr-3" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://some.com" target={"_blank"} className="w-6 mr-3" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <PinterestIcon />
        </motion.a>
        <motion.a href="https://some.com" target={"_blank"} className="w-6 mr-3" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <DribbbleIcon />
        </motion.a>
        <button onClick={()=>{
          setMode(mode==="light"?"dark":"light")
        }}
        className={`flex items-center justify-center p-1 ml-3 rounded-full ${mode === "light"?"bg-dark text-light":"bg-light text-dark"}`}>
          {
            mode === "dark"?
            <SunIcon className={"fill-dark"}/>:
            <MoonIcon className={"fill-dark"}/>

          }
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
