import Header from "./components/Header1"
import Header2 from "./components/Header2"
import '../css/hompage.css'
import Homecards from "./components/Homecards"
const Homepage = () => {
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
            <div className="card-base">
                {cardsData.map(e => (<Homecards heading={e.heading} img={e.img} alt={e.alt} key={Math.random() * 100} />))}
            </div>
        </>
    )
}

export default Homepage