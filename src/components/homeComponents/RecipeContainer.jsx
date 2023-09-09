import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";
import "./RecipeContainer.css";

const RecipeContainer = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <section className="recipe-section">
      {/* <h2>Search a recipe!</h2> */}
      <span className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className="recipe-container">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;
