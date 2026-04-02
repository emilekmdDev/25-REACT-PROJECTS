import { useState } from "react"

export default function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState("hexadecimal")
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length);
    }

    function hexToRgb(hex) {
        // delte  # if present
        hex = hex.replace(/^#/, '');

        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    function rgbToHex(r, g, b) {
        const hex = (c) => c.toString(16).padStart(2, '0');
        setColor(`#${hex(r)}${hex(g)}${hex(b)}`)
    }

    function changeType(type) {
        
        if (type===typeOfColor) {
            return
        }

        switch (type) {
            case 'hexadecimal':
                setTypeOfColor('hexadecimal');
                let tmp = color
                    .replace("rgb(", "")   
                    .replace(")", "")      
                    .split(",")            
                    .map(Number);          
                    
                rgbToHex(tmp[0],tmp[1],tmp[2]);
                break;
            
            case 'rgb':
                setTypeOfColor('rgb');
                hexToRgb(color);
                break;
            default:
                break;
        }
    }

    function createRandomColor() {
        
        switch (typeOfColor) {
            case 'rgb':
                const r = randomColorUtility(256);
                const g = randomColorUtility(256);
                const b = randomColorUtility(256);
                setColor(`rgb(${r},${g},${b})`)
                break;
        
            case 'hexadecimal':
                const hex= ['0','2','3','4','4','5','6','7','8','9','A','B','C','D','E','F'];
                let hexColor ="#";
                console.log('ok');
                
                for (let i = 0; i < 6; i++) {
                    hexColor+=hex[randomColorUtility(hex.length)]
                }
                setColor(hexColor)
                break

            default:
                console.log('unknow');
                break;
        }
    }

    return <div>
        <div className="" style={{
            width:'100vw',
            height:'100vh',
            background:color
        }}>
            <div className="buttons flex items-center justify-center gap-3 [&>button]:bg-white/50 [&>button]:border-1 [&>button]:border-white/50 p-7 text-xl font-light">
                <button onClick={()=>changeType("rgb")} className=" py-1 px-4 rounded-2xl hover:cursor-pointer">RGB</button>
                <button onClick={()=>changeType("hexadecimal")} className=" py-1 px-4 rounded-2xl hover:cursor-pointer ">HEXA</button>
                <button onClick={createRandomColor} className=" py-1 px-4 rounded-2xl hover:cursor-pointer">GENERATE</button>
            </div>
            <div className="text-8xl font-bold  flex flex-col items-center justify-center mt-[15%] gap-8">
                <h1>{typeOfColor.toUpperCase()}</h1>
                <h1>{color}</h1>
            </div>
        </div>
    </div>
}