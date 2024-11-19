import React from 'react';
import { DarkMode } from "../darkMode";




export default function HeaderHome() {

  return (
    <>
      <header className=" bg-gradient-to-r from-gray-400 from-1%  to-transparent  dark:bg-gradient-to-r dark:from-gray-400 dark:from-1%  dark:to-transparent ">
        <div className="flex justify-between   p-8">
          <div className="text-justify content-center">
            <a href='#'
              className="text-lg hover:text-gray-200 ml-3 dark:hover:text-black">
              Inicio
            </a>

            <a href='#'
              className="text-lg hover:text-gray-200 ml-3 dark:hover:text-black">
              About
            </a >
          </div>
          <p> <DarkMode />
          </p>
        </div>


      </header>


  
    </>
  )
}


