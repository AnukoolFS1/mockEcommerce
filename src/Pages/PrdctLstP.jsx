import { useState } from "react";
import Listingcards from "./components/Listingcards";
import Gridlstcard from "./components/GridLstCards";
import '../css/productlisting.css';
import Filters from "./components/Filters";
import Header from "./components/Header1";
import Header2 from "./components/Header2";

const PrdctListP = () => {
    const [filtersSwitch, setFilter] = useState(true)
    const [cardlayout, setCardlayout] = useState(true)



    return (
        <section>
            <Header />
            <Header2 />
            <section className="Product-list" onClick={() => setCardlayout(!cardlayout)}>

                <Filters display={filtersSwitch ? "block" : "none"} />
                <section style={{ padding: "8px 8px 8px 8px" }}>
                    {cardlayout ? <Listingcards /> : <Gridlstcard />}

                </section>
            </section>
        </section>
    )
}

export default PrdctListP