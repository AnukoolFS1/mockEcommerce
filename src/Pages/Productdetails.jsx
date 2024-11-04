import Aboutitems from "./components/AboutItems"
import Detailtable from "./components/PrdctDtlTable"
import Header from "./components/Header1"
import Header2 from "./components/Header2"
import '../css/product.css'

const Product = () => {

    return (
        <section>
            <div>
                <Header />
                <Header2 />
            </div>

            <section className="product">
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
                    <div className="checkout">
                        <button>Buy now</button>
                        <button>Add to cart</button>
                    </div>
                    <div>
                        <Detailtable />
                    </div>
                    <div>
                        <Aboutitems />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Product