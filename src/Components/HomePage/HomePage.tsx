import AppBar from "./AppBar/AppBar"
import Darin from "./NameComponent/Name"
import React from "react";

import './homestyles.css';

export const HomePage = () => {
      
    return (
        <div className="sm:text-center">
            <section>
                <div  className="text-3xl mb-3 font-bold tracking-tight text-rose-900 sm:text-4xl">
                    <Darin />
                </div>
                <AppBar />
            </section >
            <section >
            </section>
        </div>
    )
}