import { useState } from "react"

export const useCounter = () =>{
    
    const [counter, setCounter] = useState(0)

    const handleAgregar = () => {
        setCounter(counter+1)
    }
    const handleRestar = () => {
        setCounter(counter-1)
    }
    const handleResetear = () => {
        setCounter(0)
    }
    
    return {
        counter, handleAgregar, handleResetear, handleRestar
    }
}