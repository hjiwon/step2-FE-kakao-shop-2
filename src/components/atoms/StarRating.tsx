const staticServerUrl = process.env.REACT_APP_PATH || "";

const StarRating = ({starCount}) => {
  
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(<img src={staticServerUrl + "/assets/blueStar.png"} alt="star" className="w-4 h-4" />);
  }

  return (
    <div className="flex">
    {stars.map((star, index) => (
      <div key={index}>{star}</div>
    ))}
    </div>
  )
}

export default StarRating;