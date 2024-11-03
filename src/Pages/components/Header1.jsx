import '../../css/header.css'

const Header = () => {

    const searchCat = ["Appliances", "Fashion", "Sports", "Kids", "Electronics", "Books", "Furniture", "Beauty", "Mobiles", "Computers", "Luggage & Bags"]
    const style = {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        color: "white",
    }

    return (
        <header style={style}>
            <span className="h1-nav">Logo</span>
            <div className="h1-nav">Location</div>
            <div className="h1-nav input">
                <select name="searchCategory" id="searchCat" style={{flex:"1"}}>
                    <option value="All"> All </option>
                    {
                        searchCat.map(e => (<option value={e}>{e}</option>))
                    }
                </select>
                <input type="text" placeholder='search'/>
                <button>Search</button>
            </div>
            <div className="h1-nav">language</div>
            <div className="h1-nav">sign in</div>
            <div className="h1-nav">return & orders</div>
            <div className="h1-nav">cart</div>
        </header>
    )
}

export default Header