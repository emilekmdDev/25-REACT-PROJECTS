import React, { useEffect, useState } from 'react'

const UserLocalStorage = (key, defaultValue) => {
  
  const [value, setValue] = useState(()=>{
    let currentValue;
    try {
        currentValue = JSON.parse(localStorage.getItem(key)).theme || String(defaultValue)
    } catch (error) {
        console.log(error);
        currentValue = defaultValue;
    }
    return currentValue;
  })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },
    [key,value])

    return [value, setValue]
}

export default UserLocalStorage