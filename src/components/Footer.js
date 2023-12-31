import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = ()=>{
    return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid sm:text-base border-dark dark:text-light dark:border-light">
        <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
            <span>
                {new Date().getFullYear()} &copy; All Rights Reserved.
            </span>
            <div className="flex items-center lg:py-2">
                Build with <span className="px-1 text-2xl text-primary dark:text-primaryDark">&hearts;</span>by &nbsp;<Link href="https://www.linkedin.com/in/abdulkareem-abunabhan/" target={"_blank"} className="underline underline-offset-2">Abdulkareem Abunabhan</Link>
            </div>
            
            <Link href="https://www.linkedin.com/in/abdulkareem-abunabhan/" target={"_blank"} className="underline underline-offset-2">Say hello</Link>
        </Layout>  
    </footer>
       
    )
}
export default Footer;