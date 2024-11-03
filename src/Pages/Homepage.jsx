import Header from "./components/Header1"
import Header2 from "./components/Header2"
import '../css/hompage.css'
import Homecards from "./components/Homecards"
const Homepage = () => {
    const cardsData = [{
        heading: "Appliances",
        img: "",
        alt: "appliances"
    }, {
        heading: "Headphones",
        img: "",
        alt: "Headphones"
    }, {
        heading: "Styles for Kids",
        img: "",
        alt: "styling for kids"
    }, {
        heading: "Best Sellers Phones",
        img: "",
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
            <div className="card-base">
                {cardsData.map(e => (<Homecards heading={e.heading} img={e.img} alt={e.alt} key={Math.random() * 100} />))}
            </div>
        </>
    )
}

export default Homepage