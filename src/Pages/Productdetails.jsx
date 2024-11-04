import Aboutitems from "./components/AboutItems"
import Detailtable from "./components/PrdctDtlTable"

const Product = () => {

    return (
        <section>
            <div className="p-image">
                <img src="" alt="" />
            </div>
            <div className="p-details">
                <div>
                    <h1>product name</h1>
                    <span>rating</span>
                    <span>reviews no.</span>
                </div>
                <div>
                    <h1>Price</h1>
                    <span>discount</span>
                </div>
                <div>offers</div>
                <div>
                    <Detailtable />
                </div>
                <div>
                    <Aboutitems />
                </div>
            </div>
        </section>
    )
}

export default Product