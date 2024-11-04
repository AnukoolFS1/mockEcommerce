import { useNavigate } from 'react-router-dom'
import '../../css/gridlistcard.css'

const Gridlstcard = ({ name, price, discount, id }) => {
    const navigate = useNavigate();
    return (
        <article className="grid-list-card" onClick={() => navigate(`/product/${id}`)}>
            <div className='img'>
                <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='details'>
                <h1 className="name">{name}</h1>
                <span>rating</span>
                <h1 className="price">{price} <span>{discount}% discount</span></h1>
                <div id="checkouts">
                    <button>Buy Now</button> <button>Add to Cart</button>
                </div>
            </div>
        </article>
    )
}

export default Gridlstcard