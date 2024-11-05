import Deliverytable from "./components/DelilveryTable"
import PaymentTable from "./components/Paymentmode"
import Reviewitem from "./components/ReviewItem"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import '../css/reviewcard.css'


const Checkout = () => {
    const params = useParams();
    const product = useSelector(state => state.product.product)

    console.log(product)
    return (
        <section>
            <h1 style={{textAlign:"center", 
                padding:"20px", 
                fontSize:"2rem", 
                boxShadow: "0px 2px 2px grey",
                color:"white",
                backgroundColor:"orange"}}>Checkout</h1>
            <Deliverytable />
            <PaymentTable />
            <Reviewitem product={product} />
        </section>
    )
}
export default Checkout