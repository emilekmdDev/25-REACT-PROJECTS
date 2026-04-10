import MenuList from "./menu-list";

export default function TreeView({menus=[]}) {
    return <div className="bg-amber-800 text-white p-5 w-[30%] h-[100vh]">
        <MenuList list={menus}></MenuList>
    </div>
}