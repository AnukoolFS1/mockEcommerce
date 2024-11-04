import { useState } from "react";
import Listingcards from "./components/Listingcards";
import Gridlstcard from "./components/GridLstCards";
import '../css/productlisting.css';
import Filters from "./components/Filters";

const PrdctListP = () => {
    const [filtersSwitch, setFilter] = useState(true)
    const [cardlayout, setCardlayout] = useState(true)



    return (
        <section className="Product-list" onClick={() => setCardlayout(!cardlayout)}>

            <Filters display={filtersSwitch ? "block" : "none"} />
            <section style={{padding:"8px 8px 8px 8px"}}>
                {cardlayout ? <Listingcards /> : <Gridlstcard />}

            </section>
        </section>
    )
}

export default PrdctListP