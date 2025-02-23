import React from "react";
import "../styles/TrendingRecipes.css";

const RecipeCard = ({ recipe, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p>⭐ {recipe.rating}</p>

      {/* ✅ Favorite Button */}
      <button 
        className={`favorite-btn ${isFavorite ? "saved" : ""}`} 
        onClick={(e) => {
          e.stopPropagation(); // ✅ Prevents popup opening when clicking the button
          onToggleFavorite();
        }}
      >
        {isFavorite ? "✔ Saved" : "Save to Favorites"}
      </button>
    </div>
  );
};

export default RecipeCard;
