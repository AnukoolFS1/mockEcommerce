import { useEffect, useState } from "react"
import Aboutitems from "./components/AboutItems"
import Detailtable from "./components/PrdctDtlTable"
import Header from "./components/Header1"
import Header2 from "./components/Header2"
import { useParams } from "react-router-dom"
import axios from "axios"
import '../css/product.css'

const Product = () => {
    const param = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getData() {
            const data = await axios.get(`https://6727aca3270bd0b9755346dc.mockapi.io/mockecom/productname/${param.id}`)
            console.log(data.data)
            setProduct(data.data)
        }
        getData()
    }, [])
    return (
        <section>
            <div>
                <Header />
                <Header2 />
            </div>

            <section className="product">
                <div className="p-image">
                    <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="p-details">
                    <div>
                        <h1>{product.name}</h1>
                        <span>rating</span>
                        <span>reviews no.</span>
                    </div>
                    <div>
                        <h1>{product.price}</h1>
                        <span>{product.discount}</span>
                    </div>
                    <div>offers</div>
                    <div className="checkout">
                        <button>Buy now</button>
                        <button>Add to cart</button>
                    </div>
                    <div>
                        <Detailtable material={product.reviews} />
                    </div>
                    <div>
                        <Aboutitems details={product.details} />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Product