const Header2 = () => {
    const productCategory = ["Fresh", "MxPlayer", "Sell", "Best Sellers", "Today's Deals", "Mobiles", "Electronics", "Home & Kitchen", "Customer Service", "Prime", "New Releases", "Amazon Pay", "Fashion", "Car & Motorbike", "Computers"]



    return (
        <nav style={{
            display: "flex",
            backgroundColor: "#232f3e",
            color: "white",
            gap: "1rem",
            fontSize: '.9rem',
        }}>
            <div className="h2-nav"> all</div>
            {
                productCategory.map((e, i) => {
                    return (
                        <div key={Math.random() + i} className="h2-nav">
                            {e}
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Header2