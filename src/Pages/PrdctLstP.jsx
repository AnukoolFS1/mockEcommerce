import { useState, useEffect } from "react";
import Listingcards from "./components/Listingcards";
import Gridlstcard from "./components/GridLstCards";
import '../css/productlisting.css';
import Filters from "./components/Filters";
import Header from "./components/Header1";
import Header2 from "./components/Header2";
import axios from "axios";
import { useSelector } from "react-redux";

const PrdctListP = () => {
    const [products, setProducts] = useState([])
    const [filtersSwitch, setFilter] = useState(true)
    const cardlayout = useSelector(state => state.layout.state)


    useEffect(() => {
        async function getData() {
            let data = await axios.get('https://6727aca3270bd0b9755346dc.mockapi.io/mockecom/productname')
            setProducts(data.data)
        }
        getData()
    }, [])
    return (
        <section>
            <Header />
            <Header2 />
            <section className="Product-list" >

                <Filters display={filtersSwitch ? "block" : "none"} />
                <section style={{ padding: "8px 8px 8px 8px", flexDirection:cardlayout?"column":"row", flexWrap:"wrap"}}>
                    {/* {cardlayout ? <Listingcards /> : <Gridlstcard />} */}
                    {
                        cardlayout?
                            products.length > 0?
                            products?.map(e => ( <Listingcards key={e.id} id={e.id} name={e.name} price={e.price} details={e.details} discount={e.discount} material={e.reviews} />)):
                            null:
                        products.length > 0?
                        products?.map(e => ( <Gridlstcard key={e.id} id={e.id} name={e.name} price={e.price} details={e.details} discount={e.discount} material={e.reviews} />)):
                        null
                    }

                </section>
            </section>
        </section>
    )
}

export default PrdctListP