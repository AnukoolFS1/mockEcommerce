const Homecards = ({img, heading, alt}) => {


    return (
    <div style={{backgroundColor:"white "}} className="cards-h">
        <h2>{heading}</h2>
        <img src={img} alt={alt} />
    </div>)
}

export default Homecards