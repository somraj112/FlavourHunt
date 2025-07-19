import { useEffect, useState } from "react";
const RecipeBlog = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch recipes", err);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-10 text-xl text-orange-500 font-medium">
        Loading your delicious recipe blog...
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-10 text-center">
        FlavourHunt Blog
      </h1>

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-green-600">{recipe.name}</h2>
            <div className="text-right">
              <p className="text-yellow-500 font-semibold">
                ⭐ {recipe.rating} / 5
              </p>
              <p className="text-sm text-gray-500">
                {recipe.reviewCount} reviews
              </p>
            </div>
          </div>

          {/* Left */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-gray-100 px-2 py-1 rounded">
              {recipe.cuisine}
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded">
              {recipe.difficulty}
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded">
              {recipe.cookTimeMinutes} mins
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-4">
            {/* Ingredients */}
            <div className="md:w-2/3">
              <h3 className="font-semibold text-gray-800 mb-1">Ingredients:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-1/3 flex justify-center items-start">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full max-w-[180px] h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeBlog;
