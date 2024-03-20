import React from 'react';

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image: "https://example.com/carbonara.jpg"
  },
];

const RecipeGallery = () => {
  return (
    <div className="recipe-gallery">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;