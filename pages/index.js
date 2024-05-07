import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-10">
            <h1
              ref={textOne}
              className="text-3xl text-bold font-black tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1 className="mb-auto mx-auto flex item-center align-center">
              <div className="shadow-l p-0 rounded-[100px]">
                <Image
                  className="object-fit shadow-lg"
                  alt="Circular graphic"
                  src="/images/graphic_one.svg"
                  height={100}
                  width={100}
                ></Image>
              </div>
              <div className="p-0">
                <Image
                  className="shadow-xl p-4" 
                  alt="Circular graphic"
                  src="/images/graphic_two.svg"
                  height={100}
                  width={140}
                ></Image>
              </div>
              <div className="drop-shadow-xl rounded-[100px] m-0">
                <Image
                  alt="Circular graphic"
                  src="/images/graphic_one.svg"
                  height={100}
                  width={100}
                ></Image>
              </div>
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl text-bold tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-l tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-xl color-black tablet:text-6xl laptop:text-6xl laptopl:text-xl p-1 tablet:p-2 w-full laptop:w-full"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <div className="mt-10 color-black">
            <Button
              type="primary"
              href="https://calendly.com/reckziegel-william/30min"
            >
              Schedule a call
            </Button>
          </div>

          <Socials className="mt-2 bg-black text-white laptop:mt-5 p-4 rounded-[4px]" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl font-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                tagline={project.tagline}
                stack={project.stack}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
