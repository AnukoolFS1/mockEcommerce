import { useState } from "react"


const Reviewitem = ({ product }) => {
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
        <div >
            <h3>review items</h3>
            <div className="review-card">
                <div>
                    <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="your product image" />
                </div>
                <div>
                    <h1>{data.name}</h1>
                    <h1><span style={{ textDecoration: "line-through", color: "grey" }}>{(data.price * (100 / (100 - data.discount))).toFixed(2)} </span>{data.price}</h1>
                    <h1>QTY <button onClick={decreaseQty}> - </button> {qty} <button onClick={increaseQty}> + </button></h1>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Reviewitem