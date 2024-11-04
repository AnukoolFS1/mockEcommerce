import '../../css/listingcards.css'

const Listingcards = () => {
    return (
        <article className="listing-card">
            <div className='img'>
                <img src="" alt="" />
            </div>
            <div className='details'>
                <h1 className='name'>Product Name</h1>
                <span>rating</span>
                <h1 className='price'>Price <span>discount</span></h1>
                <div id="checkouts">
                    <button>Buy Now</button> <button>Add to Cart</button>
                </div>
            </div>
        </article>
    )
}

export default Listingcards