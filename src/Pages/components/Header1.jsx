import { useNavigate } from 'react-router-dom'
import '../../css/header.css'

const Header = () => {
    const navigate = useNavigate()
    const Languages = ["English", "Hindi", "Gujrati", "Marathi", "Tamil", "telugu"]
    const searchCat = ["Appliances", "Fashion", "Sports", "Kids", "Electronics", "Books", "Furniture", "Beauty", "Mobiles", "Computers", "Luggage & Bags"]
    const style = {
        display: "flex",
        justifyContent: "center",
        gap:"10px",
        alignItems:"center",
        backgroundColor: "black",
        color: "white",
    }

    return (
        <header style={style}>
            <span className="h1-nav">Brand Logo</span>
            <div className="h1-nav">Delivery Location</div>
            <div className="h1-nav input">
                <select name="searchCategory" id="searchCat" style={{flex:"1"}}>
                    <option value="All"> All </option>
                    {
                        searchCat.map(e => (<option value={e} key={Math.random()*100}>{e}</option>))
                    }
                </select>
                <input type="text" placeholder='search'/>
                <button onClick={() => navigate('/products-result')}>Search</button>
            </div>
            <div className="h1-nav">
                <select name="" id="" style={{width:"10rem", height:"2rem"}}>
                    {Languages.map((e, i) => (<option key={i}>{e}</option>))}
                </select>
            </div>
            <div className="h1-nav">sign in</div>
            <div className="h1-nav">return & orders</div>
            <div className="h1-nav">cart</div>
        </header>
    )
}

export default Header