import { useNavigate } from "react-router-dom"

const Homecards = ({img, heading, alt}) => {
    const navigate = useNavigate()


    return (
    <div style={{backgroundColor:"white "}} className="cards-h" onClick={() => navigate('/products-result')}>
        <h2>{heading}</h2>
        <img src={img} alt={alt} />
    </div>)
}

export default Homecards