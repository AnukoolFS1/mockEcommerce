const Header2 = () => {
    const productCategory = ["Fresh", "Best Sellers", "Today's Deals", "Mobiles", "Electronics", "Home & Kitchen", "Customer Service", "Prime", "New Releases" ,"Fashion", "Car & Motorbike", "Computers"]

    const style = {
        display: "flex",
        backgroundColor: "#232f3e",
        color: "white",
        gap: "1rem",
        fontSize: '.9rem',
        padding:"0px 1rem"
    }

    return (
        <nav style={style}>
            <div className="h2-nav">All</div>
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