"use client";

import { RiAddCircleFill } from "react-icons/ri";


const Projects = () => {
  return (
    <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-neutral-500">Projects</p>
                <RiAddCircleFill
                onClick={() => {}}
                className="text-neutral-500 size-5 cursor-pointer hover:opacity-75 transition"/>
            </div>
    </div>
  )
}

export default Projects;
