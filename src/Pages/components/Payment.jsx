import { useState } from "react"
import { useDispatch } from "react-redux"
import { paymentAction } from "../../redux/paymentSlice"

const Payment = ({display}) => {
    const dispatch = useDispatch()
    let [displayCard, setDisplayCard] = useState(false)
    let [displayUpi, setDisplayUpi] = useState(false)

    function setDown(){
        setDisplayUpi(false)
        setDisplayCard(false)
    }

    function setUpi(){
        setDisplayUpi(true)
        setDisplayCard(false)
        dispatch(paymentAction("UPI"))
    }
    
    function setCard(){
        setDisplayUpi(false)
        setDisplayCard(true)
        dispatch(paymentAction("Cards"))
    }
    
    function setCash(){
        setDown()
        dispatch(paymentAction("Cash On Delivery"))
    }
    
    function setNetBanking(){
        setDown()
        dispatch(paymentAction("Net-Banking"))
    }

    return (
        <div className="payments" style={{display}}>
            <div>
                <input type="radio" name="payment" id="cash" onClick={setCash} />
                <label htmlFor="cash">Cash On Delivery</label>
            </div>
            <div>
                <input type="radio" name="payment" id="netBanking" onClick={setNetBanking} />
                <label htmlFor="netBanking">Net Banking</label>
            </div>
            <div>
                <input type="radio" name="payment" id="UPI" onClick={setUpi} />
                <label htmlFor="UPI">Upi</label>
                <div style={{ display: displayUpi ? "block" : "none" }}>
                    <input type="text" placeholder="Enter your UPI id" />
                </div>
            </div>
            <div>
                <input type="radio" name="payment" id="Card" onClick={setCard} />
                <label htmlFor="Card">Cards</label>
                <div style={{ display: displayCard ? "block" : "none" }}>
                    <input type="number" placeholder="Enter Your Card Number"/>
                </div>
            </div>
        </div>
    )
}

export default Payment