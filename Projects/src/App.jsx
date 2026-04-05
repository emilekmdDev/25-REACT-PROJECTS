
import './App.css'
import Accordian from './components/accordian'
import ColorGenerator from './components/ColorGenrator'
import StarRating from './components/star-rating'
import ImageSlider from './components/image slider'

function App() {
  return <div>
    {/* accordian components */}
    {/* <Accordian/> */}

    {/* Color generator */}
    {/* <ColorGenerator/>*/}

    {/* star rating */}
    {/* <StarRating noOfStars={10}/> */}

    {/* image slider */}
    <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}></ImageSlider>
  </div>
}


export default App
