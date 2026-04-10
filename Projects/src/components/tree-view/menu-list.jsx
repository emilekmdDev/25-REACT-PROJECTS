import MenuItem from "./menu-item";

export default function MenuList({list=[]}) {
    return <ul className="pl-5 flex flex-col gap-1">
        {
            list && list.length ? 
                list.map(listItem=><MenuItem item={listItem}/>)
            : null
        }
    </ul>
    
}