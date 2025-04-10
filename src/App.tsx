import React from "react";
import './index.css';
import Sidebar from "./components/Sidebar";

const App: React.FC=()=>{
  return(
    <div className="h-screen bg-white flex flex-col ">
      {/*header*/}
      <div className="h-16 bg-white flex">
        {/*profile*/}
        <div className="w-64 bg-red-100 flex justify-center items-center">
          <h1 className="text-md font-semibold  ">Madhushan tharanga</h1>
        </div>
        {/*searchbar*/}
        <div className="w-200 bg-red-200">

        </div>
        {/*date & time*/}
        <div className="flex-1 bg-red-300"></div>
      </div>
      {/*main-body*/}
      <div className="flex-1 bg-red-200 flex">
        {/*sidebar*/}
        <div className="w-64 bg-gray-200">
          <Sidebar/>
        </div>
        <div className="w-200 bg-blue-200"></div>
        <div className="flex-1 bg-green-100"></div>
      </div>
    </div>
  )
}
export default App;