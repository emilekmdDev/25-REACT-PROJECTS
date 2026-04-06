import { useEffect, useState } from "react"

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);

    async function fetchProducts() {
        setLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
            const result = await response.json();
            if (result && result.products && result.products.length ) {
                setProducts((prevData)=>[...prevData,...result.products])
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[count])

    if (loading) {
        return <div>Loading data, please wait</div>
    }

    return <div className="flex flex-col items-center m-4">
        <div className="products-container grid grid-cols-5 gap-4 ">
            {
               products && products.length ? products.map((item,index)=> <div key={`${item.id}-${index}`} className="product border border-gray-300 rounded-2xl p-4 flex items-center flex-col">
                    <img src={item.thumbnail} alt={item.title}></img>
                    <p>{item.title}</p>
                    <p>{item.id}</p>
                </div> ): null
            }
        </div>
        <div className="button-container mt-4">
            <button onClick={()=>setCount(count+1)} className="bg-gray-300 border border-gray-400 px-4 py-1 rounded-2xl cursor-pointer">Load more products</button>
        </div>
    </div>
}