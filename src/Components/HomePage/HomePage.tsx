import AppBar from "./AppBar/AppBar"
import Darin from "./NameComponent/Name"
import React from "react";
import { Resume } from "./Resume/resume";

import './homestyles.css';

import { Description } from "./Description/Description";
import { ProjectText } from "../Projects/ProjectText/ProjectText";

export const HomePage = () => {
      
    return (
        <div className="sm:text-center">
            <section>
                <div  className="text-3xl mb-3 font-bold tracking-tight text-rose-900 sm:text-4xl">
                    <Darin />
                    
                </div>
                <div className="grid  place-items-center">
                    <hr className="mb-5" />
                </div>
               
                <AppBar />
                <Resume />
                <Description />
            </section >
            
            {/* <section className="grid-cols-2 text-rose-800 grid grid-rows-3 grid-flow-col gap-4 mt-6 " >
                <div className="text-center col-start-1 col-span-2">
                    <ProjectText />
                </div>
                <div className="col-start-1">
                   
                </div>
            </section> */}
        </div>
    )
}