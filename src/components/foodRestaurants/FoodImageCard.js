import { Link } from "react-router";
import { Food_Image_Card_API } from "../../generic/Api";

const FoodImageCard = ({ link, imageId }) => {
  return (
    <Link to={link}>
      <div className="w-[144px] h-[180px] bg-white">
        <img alt="image" src={`${Food_Image_Card_API}${imageId}`} />
      </div>
    </Link>
  );
};

export default FoodImageCard;
