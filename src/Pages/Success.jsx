import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../css/success.css'

const Success = () => {
    const userAddress = useSelector(state => state.address.address)
    const [timer, setTimer] = useState(false)
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (userAddress?.address && userAddress?.pin) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [userAddress])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer(true)
        }, 3000)
        
        return () => clearTimeout(timeout) // Clean up timer
    }, [])

    return (
        <div className='success'>
            <div style={{ display: timer ? "none" : "block" }} className="loader"></div>
            {status ?
                <div style={{ display: timer ? "block" : "none" }} className="status status-green">

                    <h1>Success</h1>
                    <p>Your has placed successfully</p>

                </div> : <div style={{ display: timer ? "block" : "none" }} className="status status-red">

                    <h1>Failed</h1>
                    <p>Something went wrong</p>

                </div>
            } 
        </div>
    )
}

export default Success