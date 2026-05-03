import { useState } from "react"

export default function Tabs({tabsContent, onChange}) {
    const [currentTab,setCurrentTab] = useState(0)

    function handleOnClick(getCurrentIndex) {
        setCurrentTab(getCurrentIndex);
        onChange(getCurrentIndex)
    }

    return <div className=" wrapper flex flex-col items-center justify-center h-screen">
        <div className="heading flex gap-1">
            {
                tabsContent.map((tabItem,index)=>{
                    return <div key={tabItem.label} onClick={()=>handleOnClick(index)} className={` bg-amber-800 py-4 px-8 text-wahite hover:brightness-120 cursor-pointer ${index===currentTab? 'brightness-130':''}`}>
                        <span className=" uppercase text-white">{tabItem.label}</span>
                    </div>
                })
            }
        </div>

        <div className="content mt-5">
            {
                tabsContent[currentTab] && tabsContent[currentTab].content
            }
        </div>
    </div>
}