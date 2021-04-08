import Item from "./item";
import {useState} from "react";
function WorkList ( {works, setWorks}) {

    function Delete(id) {
         const newList = works.filter((item) => item.id !== id);
        setWorks(newList);

    }

    return (
        <div>
            <ul>
                {works.map(( work, index)=> {
                    return (
                        <Item key={index} work={work} Delete={() => Delete(work.id)}/>
                    )
                })
                }
            </ul>
        </div>
    )
}
export default WorkList;
