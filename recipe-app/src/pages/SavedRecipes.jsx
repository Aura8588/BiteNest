import React, { useState, useEffect } from "react";
import "../styles/SavedRecipes.css";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // ✅ Load saved recipes from localStorage on component mount
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(storedRecipes);
  }, []);

  // ✅ Function to remove a saved recipe
  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes)); // ✅ Update localStorage
  };

  return (
    <div className="saved-recipes-container">
      <h2>Saved Recipes</h2>

      {savedRecipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        <div className="saved-recipes-grid">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-recipe-card">
              <img src={recipe.image} alt={recipe.title} className="saved-recipe-image" />
              <h3>{recipe.title}</h3>
              <button className="remove-btn" onClick={() => removeRecipe(recipe.id)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
