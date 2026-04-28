import { useState } from 'react'
import {QRCode} from 'react-qr-code'
import style from '../../config'

export default function QrCodeGenerator() {
    
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
    }

    return <div className='flex items-center justify-center flex-col gap-6 mt-6'>
        <div className='flex gap-6'>
            <h1 className='text-2xl uppercase font-bold'>Qr code generator</h1>
            <input className='bg-gray-300 text-center rounded-xl'
                type="text" 
                placeholder="inserez votre lien !"   
                onChange={(e)=>{setInput(e.target.value)}}
            />
            <button 
                onClick={handleGenerateQrCode} 
                className={`${style.primaryColor} px-4 rounded-xl text-white ${input && input.trim()!=='' ? 'opacity-100' : 'opacity-50'}`}
            >   
            Generer</button>
            </div>
        <div>
            <QRCode size={400} value={qrCode}></QRCode>
        </div>
    </div>
}