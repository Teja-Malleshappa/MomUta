import { Food_Image_Card_API } from "../../generic/Api";

const FoodImageCard = ({ link, imageId }) => {
  return (
    <a href={link}>
      <div className="w-[144px] h-[180px] bg-white">
        <img alt="image" src={`${Food_Image_Card_API}${imageId}`} />
      </div>
    </a>
  );
};

export default FoodImageCard;
