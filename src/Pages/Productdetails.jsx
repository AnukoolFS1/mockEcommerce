import { useEffect, useState } from "react"
import Aboutitems from "./components/AboutItems"
import Detailtable from "./components/PrdctDtlTable"
import Header from "./components/Header1"
import Header2 from "./components/Header2"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import '../css/product.css'
import { useDispatch } from "react-redux"
import { productAction } from "../redux/ProductSlice"

const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param = useParams()
    const [product, setProduct] = useState({})

    const offerStyle = {
        alignSelf: "start",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "1px 1px 5px #b1b1b1",
        transform: "translateY(-8px)"
    }

    const checkout = () => {
        dispatch(productAction(product))
        localStorage.setItem("product", JSON.stringify(product))
        navigate('/checkout')
    }

    useEffect(() => {
        async function getData() {
            const data = await axios.get(`https://6727aca3270bd0b9755346dc.mockapi.io/mockecom/productname/${param.id}`)
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
                        <h1 className="name">{product.name}</h1>
                        <span>rating</span>
                        <span> reviews </span>
                    </div>
                    <div>
                        <h1 className="price">{product.price}</h1>
                        <span>{(product.price * (100 / (100 - product.discount))).toFixed(2)}</span>
                        <span className="dis">{product.discount}% discount </span>
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <div style={offerStyle}>offer1</div>
                        <div style={offerStyle}>offer2</div>
                        <div style={offerStyle}>offer3</div>
                        <div style={offerStyle}>offer4</div>
                    </div>
                    <div className="checkout">
                        <button onClick={checkout}>Buy now</button>
                        <button>Add to cart</button>
                    </div>
                    <div>
                        <Detailtable material={product.reviews} />
                    </div>
                    <div>
                        <h1>About this item</h1>
                        <Aboutitems details={product.details} />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Product