import React,{useState} from 'react'

function Counter(){
    const [count,setCount] = useState(0);

    const increameantFive = () => {
        setCount( prevState => prevState + 5 )
    }
    return (
    <div>
        <div>{count}</div>
        <button onClick= {() => setCount(count+1)} > Incremeant BY 1</button>
        <button onClick= {increameantFive} > Incremeant BY 5</button>
    </div>)
}
export default Counter;