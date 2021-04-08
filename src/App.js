import Add from "./components/add";

import WorkList from "./components/workList";
import React, {useState} from "react";


function App() {

    const [works, setWorks] = useState([
        {
            id: 1,
            name: "Work 1"
        },{
            id: 2,
            name: "Work 2"
        },{
            id: 3,
            name: "Work 3"
        },
    ]);

    return (
    <div className=" flex justify-center items-center w-screen h-screen">
        <div className={"w-96 h-96 bg-blue-200 text-center"}>
            <div className="border">Todo List</div>
            <Add works={works} setWorks={setWorks} />
            <WorkList works = {works} setWorks={setWorks}/>
        </div>
    </div>
  );
}

export default App;
