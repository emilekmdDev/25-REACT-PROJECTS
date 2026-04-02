import { useState } from "react";
import data from "./data";

export default function Accordian (){
    
    const [selected, setSelected] = useState([]);
    const [multiselect,setMultiselect] = useState(false);

    function handleSelection(getCurrentId) {    
        if (multiselect) {
            setSelected(selected.includes(getCurrentId)? selected.filter(id=>id!=getCurrentId) : [...selected, getCurrentId])
        }else{
            setSelected(selected.includes(getCurrentId)? [] : getCurrentId)
        }
    }

    function enabledMultiSelection(){
        if (multiselect) {
            setSelected(selected.length>0?selected[0]:[])   
        }
        setMultiselect(!multiselect)
    }

    return<div className="wrapper flex flex-col items-center mt-5">
        <button onClick={enabledMultiSelection} className={` border-gray-400 py-2 px-4 rounded-2xl hover:cursor-pointer ${multiselect? 'bg-amber-400':'bg-gray-300'}`}>Enabled multiselection</button>
        
        <div className="accordian bg-amber-950 text-white flex flex-col gap-6 p-6 rounded-3xl w-[80%] mt-5 ">
                {
                    data && data.length>0 ? 
                    data.map(dataItem=>(
                        <div onClick={()=>handleSelection(dataItem.id)} className="item bg-amber-800 p-4 rounded-2xl">
                            <div className="title flex flex-row justify-between">
                                <h2>{dataItem.question}</h2>
                                <span className="text-amber-400">+</span>
                            </div>
                            {
                                selected.includes(dataItem.id)? <div className="content opacity-70 text-amber-100">{dataItem.answer}</div> : <></>
                            }
                        </div>
                    ))
                    : <div>No data found</div>
                }
        </div>
    </div>
}