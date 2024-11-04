import { useState } from "react"
import { useDispatch } from "react-redux"
import { layoutAction } from "../../redux/layoutSlice"


const Filters = ({display}) => {
    const [cardlayout, setCardlayout] = useState(true)
    const dispatch = useDispatch()

    return (
        <div className="filter" style={{display}}>
             space for Filteration
             <button onClick={() => dispatch(layoutAction())}>Layout</button>
        </div>
    )
}

export default Filters