import { useCounter } from "./useCounter"


export const App = () => {

    const {counter, handleAgregar, handleResetear, handleRestar} =  useCounter()

    return(
        <>
            <h1>{counter}</h1>
            <button className="btn btn-success" onClick={handleAgregar}>+1</button>
            <button className="btn btn-danger ms-1 "onClick={handleRestar}>-1</button>
            <button className="btn btn-secondary ms-1" onClick={handleResetear}>Reset</button>
        </>
    )
}