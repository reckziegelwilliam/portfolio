import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Socials from "../components/Socials";
// import Button from "../components/Button";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";

const { about, headers, booleans } = data;

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {booleans.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          booleans.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{headers.name}</h1>
              <h2 className="text-xl mt-5">{about.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {about.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>
                {about.experiences.map(
                  ({ id, dates, position, bullets }) => (
                    <Experience
                      key={id}
                      dates={dates}
                      position={position}
                      bullets={Array.isArray(bullets) ? bullets : bullets.split("●").filter(Boolean)}
                    />
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {about.education && about.education.map((index, education) => (
                <div key={education.index} className="mt-2">
                  <h2 className="text-lg">{education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {about.education.degree}
                  </h3>
                </div>
                ))}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {about.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {about.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {about.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {about.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {about.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {about.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
