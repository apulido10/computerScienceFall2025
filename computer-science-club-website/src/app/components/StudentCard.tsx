import { Children } from "react";
import Image from "next/image";

type StudentInfo = {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  major?: string;
  projectLinks?: React.ReactNode;
  imageSrc: string;
  role?: string;
  skills?: string;
  about?: string;
};

export default function StudentInfo({
  name,
  children,
  className,
  major,
  projectLinks,
  imageSrc,
  role,
  skills,
  about,
}: StudentInfo) {
  return (
    <div
      className={`flex flex-col bg-neutral-900 p-2 items-center justify-center rounded-md font-bold ${className}`}
    >
      <div className="text-xl text-amber-300">{name}</div>
      <Image
        src={imageSrc}
        alt={name ?? "Student"}
        width={100}
        height={200}
        className="rounded-3xl m-2 border-2 border-amber-300"
      />
      <div className="self-start">
        <span className="text-amber-300">Role:</span> {role}
      </div>
      <div className="self-start">
        <span className="text-amber-300">Major:</span> {major}
      </div>
      <div className="flex items-center gap-2 overflow-x-auto self-start">
        <span className="text-amber-300">Projects:</span>
        <div className="inline-flex gap-3 whitespace-nowrap">
          {projectLinks}
        </div>
      </div>
      <div>
        <span className="text-amber-300 self-start">Skills: </span>
        {skills}
      </div>
      <div>{children}</div>
    </div>
  );
}
