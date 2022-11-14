import AppBar from "./AppBar/AppBar"
import Darin from "./NameComponent/Name"
import React from "react";
import { Resume } from "./Resume/resume";

import './homestyles.css';
import Projects from "./NameComponent/Projects";

export const HomePage = () => {
      
    return (
        <div className="sm:text-center">
            <section>
                <div  className="text-3xl mb-3 font-bold tracking-tight text-rose-900 sm:text-4xl">
                    <Darin />
                </div>
                <hr className="mb-5"></hr>
                <AppBar />
                <Resume />
            </section >
            <section >
                <Projects />
                <div className="grid grid-rows-3 grid-flow-col gap-4 text-rose-900">
                    <div className="row-span-3 ...">01</div>
                    <div className="col-span-2 ...">02</div>
                    <div className="row-span-2 col-span-2 ...">03</div>
                </div>
            </section>
        </div>
    )
}