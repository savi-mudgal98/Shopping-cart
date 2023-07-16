import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div style={{ display: "flex", ...style }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" style={{ color: "yellow" }}/>
          ) : (
            <AiOutlineStar fontSize="15px" style={{ color: "yellow" }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating
