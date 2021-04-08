import React, { useState } from 'react';
function Add({works, setWorks}) {
    const [work, setWork] =useState({id:"", name:""});
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    function addItem(event) {
        event.preventDefault();
        if (work.name.trim()!=="") {
            setWorks([...works, work]);
            setWork({id:"", name:""});
        }else {
            setWork({id:"", name:""});
        }
    }
    function handleOnChange(event) {
        const target = event.target;
        var value = target.value ;
        setWork({
            id: s4(),
            name : value
        });
    }
    return (
        <div className={""}>
            <form onSubmit={addItem}>
                <input className={"border-gray-100"} type={"text"} id={"add"} name={"work"} value={work.name} onChange={handleOnChange} required = {true} />
                <button className={"border-2"} type="submit">Add</button>
            </form>
        </div>
    )
}
export default Add;
