import React from 'react'

import { useEffect, useState } from 'react';
// import { useFirebase } from '../path/to/FirebaseContext'; // If recipes are user-specific or require auth

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const { userId, isAuthReady } = useFirebase(); // If you need user ID or auth status

    useEffect(() => {
        const fetchRecipes = async () => {
            // You'll need to replace this with your actual API endpoint and API key
            const API_URL = 'YOUR_RECIPE_API_ENDPOINT'; // e.g., 'https://api.spoonacular.com/recipes/complexSearch'
            const API_KEY = 'YOUR_API_KEY'; // Get this from your chosen API provider

            try {
                setLoading(true);
                
                // const response = await fetch(`${API_URL}?apiKey=${API_KEY}&query=pasta&number=9`);
                // const data = await response.json();
                // setRecipes(data.results); // Adjust based on API response structure

                // If you don't have an API key yet, you can use this structure
                const dummyRecipes = [
                    { id: 1, title: 'Spicy Chicken Curry', image: 'https://placehold.co/300x200/FF5733/FFFFFF?text=Curry', description: 'A fiery and flavorful chicken curry recipe.' },
                    { id: 2, title: 'Vegetable Lasagna', image: 'https://placehold.co/300x200/33FF57/FFFFFF?text=Lasagna', description: 'Classic Italian lasagna with layers of fresh vegetables.' },
                    { id: 3, title: 'Chocolate Lava Cake', image: 'https://placehold.co/300x200/8A2BE2/FFFFFF?text=Dessert', description: 'Rich, molten chocolate cake for dessert lovers.' },
                    { id: 4, title: 'Healthy Smoothie Bowl', image: 'https://placehold.co/300x200/33A0FF/FFFFFF?text=Smoothie', description: 'A refreshing and nutritious breakfast bowl.' },
                    { id: 5, title: 'Homemade Pizza', image: 'https://placehold.co/300x200/FFC300/FFFFFF?text=Pizza', description: 'Craft your perfect pizza from scratch.' },
                    { id: 6, title: 'Classic Tomato Soup', image: 'https://placehold.co/300x200/DAF7A6/FFFFFF?text=Soup', description: 'Comforting and easy-to-make tomato soup.' },
                ];
                setRecipes(dummyRecipes);

            } catch (err) {
                setError("Failed to fetch recipes. Please try again later.");
                console.error("API fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []); 

    if (loading) {
        return <div className="min-h-screen bg-green-50 flex items-center justify-center text-xl text-gray-700">Loading Recipes...</div>;
    }

    if (error) {
        return <div className="min-h-screen bg-green-50 flex items-center justify-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-green-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Delicious Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Recipe"; }} // Fallback
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
                                <p className="text-gray-700 text-sm">{recipe.description}</p>
                                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Recipes;

