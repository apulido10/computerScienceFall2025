import { Children } from "react";
import Image from "next/image";

type StudentInfo= {
    name?:string;
    children?: React.ReactNode
    className?: string;
    major?: string;
    projectLinks?: React.ReactNode; 
    imageSrc: string;
    role?: string;
    skills?: string; 
    about?: string;
}

export default function StudentInfo({name,children,className,major,projectLinks,imageSrc,role,skills,about}:StudentInfo){
    return(
        <div className={`flex flex-col bg-neutral-900 p-2 items-center justify-center rounded-md font-bold ${className}`}>
            <div className="text-xl">{name}</div>
            <Image 
            src={imageSrc} 
            alt={name ?? "Student"}
            width={100}
            height={200}
            className="rounded-3xl m-2"
            />
            <div>Role: {role}</div>
            <div>Major: {major}</div>
            <div className="flex items-center gap-2 overflow-x-auto">
                <span >Projects:</span>
                <div className="inline-flex gap-3 whitespace-nowrap">
                {projectLinks}
                </div>
                </div>
            <div>Skills: {skills}</div>
            <div>{children}</div>
        </div>
    )
}