import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className="recipe-card">
      <div>
        <div className="recipe-image-container">
          <img src={recipe.image_url} />
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
