import { useState } from 'react'
import MenuList from './menu-list'
import {FaMinus, FaPlus} from 'react-icons/fa'
const MenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren((prev)=>({
            ...prev,
            [getCurrentLabel] : !prev[getCurrentLabel],
        }))    
        console.log(displayCurrentChildren);
    }

    return (
        <li className=' bg-amber-700/30  pl-5 p-3 rounded-xl'>
        <div className='flex gap-5 items-center'>
            <p>{item.label}</p>
            {
                item.children && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus/> : <FaPlus/>
                    }
                </span> : null
            }
        </div>
        {
            item && item.children && item.children.length>0 && displayCurrentChildren[item.label]? 
                <MenuList list={item.children} />
            : null
        }
        </li>
    )
}

export default MenuItem
