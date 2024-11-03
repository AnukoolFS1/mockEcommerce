import '../../css/header.css'

const Header = () => {

    return (
        <header style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            backgroundColor: "black", 
            color: "white",
             }}>
            <span className="h1-nav">Logo</span>
            <div className="h1-nav">Location</div>
            <div className="h1-nav">search</div>
            <div className="h1-nav">language</div>
            <div className="h1-nav">sign in</div>
            <div className="h1-nav">return & orders</div>
            <div className="h1-nav">cart</div>
        </header>
    )
}

export default Header