import Deliverytable from "./components/DelilveryTable"
import PaymentTable from "./components/Paymentmode"
import Reviewitem from "./components/ReviewItem"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import '../css/checkouts.css'
import { useState } from "react"
import CheckoutInput from "./components/CheckoutInputs"
import Payment from "./components/Payment"


const Checkout = () => {
    const params = useParams();
    const product = useSelector(state => state.product.product);
    const paymentMode = useSelector(state => state.paymentMode.paymentMode)
    const [address, setAddress] = useState(true)
    const [pay, setPay] = useState(true)


    return (
        <section className="checkout">
            <h1 style={{
                textAlign: "center",
                padding: "20px",
                fontSize: "2rem",
                boxShadow: "0px 2px 2px grey",
                color: "white",
                backgroundColor: "orange"
            }}>Checkout</h1>
            <div>
                <div className="table-div">
                    <table cellSpacing={"10px"}>
                        <tbody>
                            <Deliverytable th={"Address"} value={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam."} setState={setAddress} state={address} />
                            <tr>
                                <td colSpan={2}>
                                    <CheckoutInput display={address ? "flex" : "none"} />
                                </td>
                            </tr>
                            <Deliverytable th={"Payment Method"} value={paymentMode} setState={setPay}/>
                            <tr>
                                <td colSpan={2}>
                                    <Payment display={pay?"flex": "none"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-div">
                </div>
                <Reviewitem product={product} />
            </div>
        </section>
    )
}
export default Checkout