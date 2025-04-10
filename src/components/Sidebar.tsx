import React from "react";

const Sidebar: React.FC=()=>{
    return(
        <div className="w-64 flex flex-col bg-white h-full shadow-md">
            {/*menu-items*/}
            <div className="p-4">
                <h2 className="text-md font-semibold text-gray-700">MENU</h2>
                <ul className="mt-4 space-y-2">
                    <li>
                        <button className="w-full flex items-center gap-2 text-left p-2 bg-blue-100 text-blue-600 rounded-lg hover:cursor-pointer">
                        <img className="w-5 h-5 " src="src/assets/dashboard.png " alt="dashboard"  />
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-2 text-left p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
                        <img className="w-5 h-5 " src="src/assets/project.png " alt="dashboard"  />
                            Project
                        </button>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-2 text-left p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
                        <img className="w-5 h-5 " src="src/assets/today.png " alt="dashboard"  />
                            Today's Task
                        </button>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-2 text-left p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
                        <img className="w-5 h-5 " src="src/assets/all.png " alt="dashboard"  />
                            All Task
                        </button>
                    </li>
                    <li>
                        <button className="mb-5 w-full flex items-center gap-2 text-left p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
                        <img className="w-5 h-5 " src="src/assets/calender.png " alt="dashboard"  />
                            Calender
                        </button>
                    </li>
                </ul>
                <hr />
            </div>
            {/*teams*/}
            <div className="p-4">
                <h2 className="text-md font-semibold text-gray-700 flex justify-between">
                    TEAMS
                    <img className="cursor-pointer" src="src/assets/add.png" alt="" />
                </h2>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center justify-between">
                        <span className="text-gray-600">Duxla</span>
                        <span className="p-1 bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm">9</span>
                    </li>
                    <li className="flex items-center justify-between mb-5">
                        <span className="text-gray-600">Miow</span>
                        <span className="p-1 bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm">11</span>
                    </li>
                </ul>
                <hr />
            </div>
            {/*general-section*/}
            <div className="p-4">
                <h2 className="text-gray-700 font-semibold">GENERAL</h2>
                <ul className="mt-4 space-y-2 flex gap-2 mb-8">
                    <img src="src/assets/setting.png" alt="" />
                    <li className="text-gray-600">Setting</li>
                </ul>
            </div>
            {/*button-section*/}
            <div className="p-4 flex justify-around">
                <button className="px-5 py-2 cursor-pointer bg-gray-200 rounded-lg">Dark</button>
                <button className="px-5 py-2 cursor-pointer bg-gray-200 rounded-lg">Light</button>
            </div>
        </div>
    )
} 

export default Sidebar;