
import './App.css'
import menus from './components/tree-view/data'
import Accordian from './components/accordian'
import ColorGenerator from './components/ColorGenrator'
import StarRating from './components/star-rating'
import ImageSlider from './components/image slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'

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
    <TreeView menus={menus}/>
  </div>
}


export default App
