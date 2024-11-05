import { useState } from "react"
import { useDispatch } from "react-redux"
import { addressAction } from "../../redux/AddressSlice"

const CheckoutInput = ({display, setAddress}) => {
    const dispatch = useDispatch()
    const [userAddress, setUserAddress] = useState({
        name:"",
        phone:"",
        address:"",
        pin:"",
    })

    function saveAddress(e){
        setUserAddress({
            ...userAddress,
            [e.target.name]:e.target.value
        })
    }

    function updateAddress(e){
        e.preventDefault();
        dispatch(addressAction(userAddress));
        setAddress(false)
    }


    return (
        <form action="" style={{display}} className="address" >
                <div>
                    <label htmlFor="Fname">Full Name</label>
                    <input type="text" name="name" id="Fname" placeholder="Enter Your Full-Name" onChange={saveAddress}/>
                </div>
                <div>
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter Your Mobile Number" onChange={saveAddress}/>
                </div>
                <div>
                    <label htmlFor="Address">Address</label>
                    <input type="text" name="address" id="Address" placeholder="Enter Your Address" onChange={saveAddress}/>
                </div>
                <div>
                    <label htmlFor="pin">Pin</label>
                    <input type="text" name="pin" id="pin" placeholder="Enter Your Pin" onChange={saveAddress}/>
                </div>

                {/* <div style={{justifyContent:"start", gap:"1.2rem"}}>
                    <label htmlFor="remember-address">save this address for future deliveries</label>
                    <input type="checkbox" id="remember-address"/>
                </div> */}
                <div>
                    <button onClick={updateAddress}>Save Address</button>
                </div>
        </form>
    )
}

export default CheckoutInput