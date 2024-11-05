import { useState } from "react"

const Reviewitem = () => {
    const [qty, setQty] = useState(1)

    const decreaseQty = () => {
        setQty(p => {
            if (p > 1) {
                return p - 1
            }
        })
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
                <h1>name</h1>
                <h1><span>AP</span>CP</h1>
                <h1><button onClick={decreaseQty}> - </button> {1} <button onClick={increaseQty}> + </button></h1>
            </div>
        </div>
    )
}

export default Reviewitem