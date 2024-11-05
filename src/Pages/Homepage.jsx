import Header from "./components/Header1"
import Header2 from "./components/Header2"
import '../css/hompage.css'
import Homecards from "./components/Homecards"
import { useNavigate } from "react-router-dom"
import Footer from "./components/Footer"
const Homepage = () => {
    const navigate = useNavigate()
    const cardsData = [{
        heading: "Appliances",
        img: "https://images.pexels.com/photos/4068316/pexels-photo-4068316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "appliances"
    }, {
        heading: "Headphones",
        img: "https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Headphones"
    }, {
        heading: "Styles for Kids",
        img: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "styling for kids"
    }, {
        heading: "Best Sellers Phones",
        img: "https://images.pexels.com/photos/270257/pexels-photo-270257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "phones"
    }]


    return (
        <>
            <Header/>
            <Header2/>
            <div className="hero">
                <a href="#">
                    <img src="../src/assets/image.png" alt="ads" width={"1500px"} height={"650px"} />
                </a>
            </div>
            <div className="card-base" >
                {cardsData.map(e => (<Homecards heading={e.heading} img={e.img} alt={e.alt} key={Math.random() * 100} />))}
            </div>
            <div className="phones" onClick={() => navigate('/products-result')}>
                <h1>Phones</h1>
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="" />
            </div>
            <div className="card-base" style={{transform:'translateY(0)', marginBottom:"2rem"}}>
                {cardsData.map(e => (<Homecards heading={e.heading} img={e.img} alt={e.alt} key={Math.random() * 100} />))}
            </div>
            <div className="phones" onClick={() => navigate('/products-result')}>
                <h1>Laptops</h1>
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Homepage