const Header2 = () => {
    const productCategory = ["Fresh", "MxPlayer","Sell","Best Sellers","Today's Deals","Mobiles","Electronics","Home & Kitchen","Customer Service","Prime","New Releases","Amazon Pay","Fashion","Car & Motorbike","Computers","Sports, Fitness & Outdoors","Home Improvement","Books","Toys & Games","Gift Ideas","Beauty & Personal Care","Baby","Gift Cards","Grocery & Gourmet Foods","Health, Household & Personal Care","Custom Produc"]

    return (
        <nav style={{display:"flex"}}>
            <div> all</div>
            {
                productCategory.map((e, i) => {
                    return (
                        <div key={Math.random() + i}>
                            {e}
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Header2