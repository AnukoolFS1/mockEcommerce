import { useState } from "react"


const Reviewitem = ({product}) => {
    const data = JSON.parse(localStorage.getItem("product"))
    const [qty, setQty] = useState(1)

    const decreaseQty = () => {
        if (qty > 1) {
                setQty(p => p - 1)
            }
    }

    const increaseQty = () => {
        setQty(p => p + 1)
    }

    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>{data.name}</h1>
                <h1><span style={{textDecoration:"line-through", color:"grey"}}>{(data.price * (100/(100-data.discount))).toFixed(2)} </span>{data.price}</h1>
                <h1><button onClick={decreaseQty}> - </button> {qty} <button onClick={increaseQty}> + </button></h1>
            </div>
        </div>
    )
}

export default Reviewitem