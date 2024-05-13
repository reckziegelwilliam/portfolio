import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-extrabold">
              LET&apos;S RENDER RESULTS.
            </h1>
            <Button type="primary" href="https://calendly.com/reckziegel-william/30min">Schedule p call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.renderex.netlify.app">
          <p className="underline underline-offset-1">William Reckziegel</p>
        </Link>
      </h1>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        © 2023 by William Reckziegel. Proudly created with{" "}
        <Link href="https://nextjs.org/">
          <p className="underline underline-offset-1">Next.js</p>
        </Link>
      </h1>
      <h1 className="text-sm text-bold mt-1 laptop:mt-10 p-2 laptop:p-0">
        Inspired by 
        <Link href="https://www.chetanverma.com/">
          <p className="text-sm"
            >Chetan Verma</p>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
