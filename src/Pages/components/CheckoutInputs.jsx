const CheckoutInput = ({display}) => {
    return (
        <form action="" style={{display}} className="address" >
                <div>
                    <label htmlFor="Fname">Full Name</label>
                    <input type="text" name="name" id="Fname" placeholder="Enter Your Full-Name"/>
                </div>
                <div>
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter Your Mobile Number"/>
                </div>
                <div>
                    <label htmlFor="Address">Address</label>
                    <input type="text" name="address" id="Address" placeholder="Enter Your Address"/>
                </div>
                <div>
                    <label htmlFor="pin">Pin</label>
                    <input type="text" name="pin" id="pin" placeholder="Enter Your Pin"/>
                </div>

                <div style={{justifyContent:"start", gap:"1.2rem"}}>
                    <label htmlFor="remember-address">save this address for future deliveries</label>
                    <input type="checkbox" id="remember-address"/>
                </div>
                <div>
                    <button>Save Address</button>
                </div>
        </form>
    )
}

export default CheckoutInput