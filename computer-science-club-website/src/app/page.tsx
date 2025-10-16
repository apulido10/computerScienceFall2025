import Image from "next/image";
import StudentInfo from "./components/StudentCard";
import alexPicture from "../../public/pictures/alex.jpg";
import robbyPicture from "../../public/pictures/robby.webp";

export default function Home({}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-yellow-200 text-center mt-10 text-2xl font-bold">
        Computer Science Club
      </h1>
      <h1 className="text-yellow-200 text-center mb-10 text-xl">
        At Butte College
      </h1>

      <div>
        <h1 className="text-center mb-4 text-xl font-bold">Members:</h1>
        <StudentInfo
          className="flex justify-center items-center  mb-10"
          name="Alex"
          role="Vice President"
          major="Computer Science"
          imageSrc={alexPicture.src}
          projectLinks={
            <div className="flex gap-2">
              <a
                href="https://www.essentialsites.co/"
                className="text-blue-400 underline hover:text-blue-200"
              >
                Essential Sites
              </a>
              <a
                href="https://elsapitotaquizasyaguachiles.com/"
                className="text-blue-400 underline hover:text-blue-200"
              >
                Catering Business
              </a>
            </div>
          }
          skills="Next.js, Vercel, PostgreSQL, Typescript"
        ></StudentInfo>

        <StudentInfo
          className="flex justify-center items-center  mb-10"
          name="Robby"
          role="Secretary / ICC Representative"
          major="Cybersecurity"
          imageSrc={robbyPicture.src}
          projectLinks={
            <div className="flex gap-2">
              <a
                href="https://www.robbywideman.dev"
                className="text-blue-400 underline hover:text-blue-200"
              >
                Portfolio Site
              </a>
              <a
                href="https://starwoven.vercel.app"
                className="text-blue-400 underline hover:text-blue-200"
              >
                Personal Project
              </a>
            </div>
          }
          skills="Cisco Networking, WebDev, Python, Linux"
        ></StudentInfo>
      </div>
    </div>
  );
}
