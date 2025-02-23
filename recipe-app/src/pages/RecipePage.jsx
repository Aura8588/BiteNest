import React from "react";
import { useParams } from "react-router-dom"; // ✅ Get recipe ID from URL
import "../styles/RecipePage.css";
import recipe1 from "../assets/biryani.jpg"; // ✅ Replace with actual data


const recipes = [
  { id: 1, title: "Spaghetti Carbonara", image: recipe1, rating: 4.8, description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper." },
  { id: 2, title: "Grilled Chicken", image: recipe1, rating: 4.7, description: "Juicy grilled chicken marinated with herbs and spices." },
  { id: 3, title: "Avocado Salad", image: recipe1, rating: 4.6, description: "A healthy avocado and greens salad with a zesty lemon dressing." },
];

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image-large" />
      <p>{recipe.description}</p>
      <p>⭐ Rating: {recipe.rating}</p>
    </div>
  );
};

export default RecipePage;
