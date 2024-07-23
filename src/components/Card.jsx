import Rating from "./Rating"

function Card({businessName, businessRating, businessDescription, businessLocation, businessPhoto}) {
    return (
        <div className="card">
            <img src={ businessPhoto } alt="" />
            <div className="name">{ businessName }</div>
            <Rating rating={businessRating} />
            <div className="description">{ businessDescription }</div>
            <div className="location">{ businessLocation }</div>
        </div>
    )
}

export default Card