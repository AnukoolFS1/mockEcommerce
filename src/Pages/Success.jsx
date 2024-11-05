import { useState } from 'react'
import '../css/success.css'

const Success = () => {
    const [timer, setTimer] = useState(false)

    setTimeout(()=>{
        setTimer(true)
    }, 3000)
    return (
        <div className='success'>
            <div style={{display:timer?"none":"block"}} className="loader"></div>
            <div style={{display:timer?"block":"none"}} className='status-green'>
                <h1>Success</h1>
                <p>Your order has placed successfully</p>
            </div>
        </div>
    )
}

export default Success