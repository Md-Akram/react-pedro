import { useState } from "react"

const Counter = () => {
    const [num, setNum] = useState(0)
    return <div>
        <h1>{num}</h1>
        <button onClick={() => { setNum(num + 1) }}>Increase</button>
        <button onClick={() => { setNum(num - 1) }}>Decrease</button>
        <button onClick={() => { setNum(0) }}>Set to Zero</button>
    </div>
}

export default Counter