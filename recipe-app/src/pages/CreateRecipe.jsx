import React, { useState } from "react";
import "../styles/CreateRecipe.css"; // Ensure styles are linked

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [""],
    steps: [""],
    category: "",
  });

  const handleInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...recipe.steps];
    newSteps[index] = value;
    setRecipe({ ...recipe, steps: newSteps });
  };

  const addStepField = () => {
    setRecipe({ ...recipe, steps: [...recipe.steps, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
  };

  return (
    <div className="recipe-container">
      <div className="recipe-box">
        {/* Left Side - Gradient Image Placeholder */}
        <div className="recipe-image"></div>

        {/* Right Side - Form Section */}
        <div className="recipe-form">
          <h2>Create a New Recipe</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Recipe Name:</label>
              <input type="text" name="name" value={recipe.name} onChange={handleInputChange} required />
            </div>

            <div className="input-group">
              <label>Ingredients:</label>
              {recipe.ingredients.map((ing, index) => (
                <input
                  key={index}
                  type="text"
                  value={ing}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
              ))}
              <button type="button" className="add-btn" onClick={addIngredientField}>
                + Add Ingredient
              </button>
            </div>

            <div className="input-group">
              <label>Steps:</label>
              {recipe.steps.map((step, index) => (
                <textarea
                  key={index}
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  required
                />
              ))}
              <button type="button" className="add-btn" onClick={addStepField}>
                + Add Step
              </button>
            </div>

            <div className="input-group">
              <label>Category:</label>
              <select name="category" value={recipe.category} onChange={handleInputChange} required>
                <option value="">Select a Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Submit Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
