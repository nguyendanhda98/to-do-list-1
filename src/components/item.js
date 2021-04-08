import {useState} from "react";
function Item( {work, Delete}) {
    const [status, setStatus] = useState("");
    const [text, setText] = useState("Done")
    function Done() {
        if(status === "") {
            setStatus("line-through");
            setText("Undone");
        } else{
            setStatus("");
            setText("Done");
        }
    }

 return (
     <div className={"flex justify-between"}>
         <li className={status}>{work.name} </li>
         <div>
             <button type={"button"} className={"border-2"} onClick={Done}>{text}</button>
             <button type={"button"} className={"border-2"} onClick={Delete}>Delete</button>
         </div>

     </div>
 )
}
export default Item;
