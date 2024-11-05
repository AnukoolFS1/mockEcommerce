import Deliverytable from "./components/DelilveryTable"
import PaymentTable from "./components/Paymentmode"
import Reviewitem from "./components/ReviewItem"

const Checkout = () => {
    return (
        <section>
            <h1>Checkout</h1>
            <Deliverytable />
            <PaymentTable />
            <Reviewitem />
        </section>
    )
}
export default Checkout