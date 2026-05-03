
import './App.css'
import menus from './components/tree-view/data'
import Accordian from './components/accordian'
import ColorGenerator from './components/ColorGenrator'
import StarRating from './components/star-rating'
import ImageSlider from './components/image slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import QrCode from './components/qrCodeGenerator'
import LightDarkMode from './components/LightDarkMode'
import ScrollIndicator from './components/scroolIndicator'
import TabTest from './components/customTabs/tabTest'

function App() {
  return <div>
    {/* accordian components */}
    {/* <Accordian/> */}

    {/* Color generator */}
    {/* <ColorGenerator/> */}

    {/* star rating */}
    {/* <StarRating noOfStars={10}/> */}

    {/* image slider */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}></ImageSlider> */}

    {/* load more button */}
    {/* <LoadMoreData/> */}

    {/* rexursive navigation menu */}
    {/* <TreeView menus={menus}/> */}
    
    {/* Qr code generator */}
    {/* <QrCode/> */}
    
    {/* sswitch Color mode */}
    {/* <LightDarkMode/> */}

    {/* scroll indicator */}
    {/* <ScrollIndicator url={'http://dummyjson.com/products?limit=100'}/> */}

    {/* Custom tabs */}
    <TabTest/>
  </div>
}


export default App
