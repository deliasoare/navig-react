import Rating from './Rating.jsx';

function Review({userRating, userName, reviewDescription, userPfp, reviewDate}){
    return (
        <div className="review">
            <div className="user">
                <img src={userPfp}></img>
                <div className="userName">{userName}</div>
            
            </div>
            <div className="rating">
                <Rating rating={userRating} color={"black"} size={15}></Rating>
                <div>{reviewDate}</div>
            </div>
            <div className="description"> 
                {reviewDescription}
            </div>
        </div>

    )
}

export default Review