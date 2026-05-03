import Tabs from "./tabs"

const TabTest = () => {
  
    const tabs = [
        {
            label : "tab 1",
            content : <div>here is the content of tab 1</div>
        },
        {
            label : "tab 2",
            content : <div>here is the content of tab 2</div>
        },
        {
            label : "tab 3",
            content : <div>here is other content for tab 3</div>
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }
    
    return (
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}

export default TabTest
