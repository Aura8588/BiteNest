import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"; // Import RecipeCard component
import "../styles/TrendingRecipes.css";

// ✅ Import images manually
import recipe1 from "../assets/biryani.jpg";
import recipe2 from "../assets/grilled-chiken.jpg";
import recipe3 from "../assets/avocado-salad.jpg";
import recipe4 from "../assets/panner.jpg";
import recipe5 from "../assets/choco.jpg";
import recipe6 from "../assets/fruit.jpg";
import recipe7 from "../assets/daal.jpg";
import recipe8 from "../assets/paratha.jpg";
import recipe9 from "../assets/pav.jpeg";
import recipe10 from "../assets/dosa.jpg";
import recipe11 from "../assets/chole.jpg";
import recipe12 from "../assets/gulab.jpg";

// ✅ Updated list with ALL 12 recipes
const recipes = [
  { id: 1, title: "Biryani", image: recipe1, rating: 4.8, description: "A flavorful and aromatic rice dish with spices and meat.", ingredients: ["Basmati rice", "Chicken", "Spices", "Yogurt", "Saffron"], steps: ["Marinate meat", "Cook rice", "Layer and steam", "Serve hot"] },
  { id: 2, title: "Grilled Chicken", image: recipe2, rating: 4.7, description: "Juicy grilled chicken marinated with herbs and spices.", ingredients: ["Chicken", "Garlic", "Lemon juice", "Olive oil", "Spices"], steps: ["Marinate chicken", "Preheat grill", "Grill for 10 min each side"] },
  { id: 3, title: "Avocado Salad", image: recipe3, rating: 4.6, description: "A healthy avocado salad with fresh veggies.", ingredients: ["Avocado", "Tomato", "Onion", "Lemon juice", "Olive oil"], steps: ["Chop ingredients", "Mix in a bowl", "Add dressing", "Serve"] },
  { id: 4, title: "Paneer Butter Masala", image: recipe4, rating: 4.9, description: "A rich and creamy Indian paneer dish.", ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Spices"], steps: ["Cook tomatoes", "Add spices & cream", "Add paneer", "Serve hot"] },
  { id: 5, title: "Chocolate Cake", image: recipe5, rating: 4.8, description: "A soft and delicious homemade chocolate cake.", ingredients: ["Flour", "Cocoa powder", "Eggs", "Milk", "Sugar"], steps: ["Mix ingredients", "Bake at 180°C", "Let cool", "Enjoy!"] },
  { id: 6, title: "Fruit Smoothie", image: recipe6, rating: 4.7, description: "A refreshing blend of mixed fruits.", ingredients: ["Banana", "Berries", "Yogurt", "Honey", "Ice"], steps: ["Blend all ingredients", "Pour into glass", "Serve chilled"] },
  { id: 7, title: "Dal Makhani", image: recipe7, rating: 4.9, description: "A creamy and buttery black lentil dish from Punjab.", ingredients: ["Black lentils", "Tomatoes", "Cream", "Butter", "Spices"], steps: ["Soak lentils overnight", "Cook with spices & butter", "Add cream", "Serve hot"] },
  { id: 8, title: "Aloo Paratha", image: recipe8, rating: 4.8, description: "Stuffed whole wheat flatbread with spiced mashed potatoes.", ingredients: ["Wheat flour", "Potatoes", "Spices", "Butter", "Ghee"], steps: ["Prepare dough", "Make potato stuffing", "Roll & cook on tawa", "Serve with butter"] },
  { id: 9, title: "Pav Bhaji", image: recipe9, rating: 4.9, description: "A popular Mumbai street food dish with spicy mashed vegetables.", ingredients: ["Potatoes", "Tomatoes", "Pav Bhaji Masala", "Butter", "Bread Rolls"], steps: ["Boil and mash vegetables", "Cook with spices & butter", "Toast pav", "Serve hot"] },
  { id: 10, title: "Masala Dosa", image: recipe10, rating: 4.8, description: "A crispy South Indian dosa stuffed with spiced potato filling.", ingredients: ["Rice batter", "Potatoes", "Spices", "Curry leaves", "Coconut chutney"], steps: ["Ferment batter", "Make potato filling", "Spread batter on tawa", "Serve with chutney & sambar"] },
  { id: 11, title: "Chole Bhature", image: recipe11, rating: 4.9, description: "A Punjabi dish with spicy chickpea curry and fried bread.", ingredients: ["Chickpeas", "Flour", "Spices", "Onion", "Tomatoes"], steps: ["Soak chickpeas overnight", "Cook with spices", "Make and fry bhature", "Serve hot"] },
  { id: 12, title: "Gulab Jamun", image: recipe12, rating: 4.9, description: "A classic Indian dessert made from khoya and soaked in sugar syrup.", ingredients: ["Khoya", "Flour", "Sugar Syrup", "Cardamom", "Ghee"], steps: ["Prepare dough", "Make small balls", "Deep fry", "Soak in sugar syrup & serve"] },
];

const TrendingRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // ✅ Load saved favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setFavorites(storedFavorites);
  }, []);

  // ✅ Toggle Favorite Function
  const toggleFavorite = (recipe) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === recipe.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedFavorites)); // ✅ Update localStorage
  };

  // ✅ Open Recipe Popup
  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // ✅ Close Recipe Popup
  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <section className={`trending ${selectedRecipe ? "blurred-bg" : ""}`}>
      <h2 className="section-title">Trending Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={() => openRecipe(recipe)} 
            onToggleFavorite={() => toggleFavorite(recipe)}
            isFavorite={favorites.some((fav) => fav.id === recipe.id)}
          />
        ))}
      </div>

      {/* ✅ Recipe Popup */}
      {selectedRecipe && (
        <div className="recipe-popup active">
          <div className="recipe-content">
            <button className="close-button" onClick={closeRecipe}>✖</button>
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="recipe-image-large" />
            <p className="recipe-description">{selectedRecipe.description}</p>

            {/* ✅ Ingredients */}
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* ✅ Steps */}
            <h3>Steps:</h3>
            <ol className="steps-list">
              {selectedRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingRecipes;
