import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-green-600">
        🍽️ About FlavourHunt
      </h1>
      <p className="mb-4 text-lg">
        <span className="font-semibold text-green-700">FlavourHunt</span> is
        your go-to destination for discovering mouthwatering recipes, hidden
        culinary gems, and food stories from around the world — all in one
        place.
      </p>
      <p className="mb-8 text-lg">
        Whether you're a passionate home cook, a food blogger, or someone simply
        looking for your next favorite dish, FlavourHunt helps you explore a
        wide range of flavorful experiences. From classic comfort foods to
        exotic international cuisine, we celebrate the joy of cooking and
        sharing.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">
        What You’ll Find Here:
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
        <li>
          <span className="font-medium">Curated recipes</span> with tempting
          visuals
        </li>
        <li>
          <span className="font-medium">Step-by-step cooking guides</span> for
          beginners & pros alike
        </li>
        <li>
          <span className="font-medium">Food blog posts</span> exploring tastes,
          ingredients, and stories
        </li>
        <li>
          <span className="font-medium">A clean, user-friendly interface</span>{" "}
          for an enjoyable browsing experience
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">
        Built with Love & Code
      </h2>
      <p className="mb-4 text-lg">
        FlavourHunt is built as part of a Capstone Project using:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
        <li>
          <span className="font-medium">React JS</span> for the frontend
        </li>
        <li>
          <span className="font-medium">GitHub Pages</span> for deployment
        </li>
        <li>
          <span className="font-medium">Future-ready features</span> like
          search, filtering, and user submissions
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">
        Let’s Hunt for Flavours Together!
      </h2>
      <p className="mb-6 text-lg">Explore. Cook. Share. Repeat.</p>

      <Link to="/recipes">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
          Start Exploring Recipes
        </button>
      </Link>
    </div>
  );
};

export default About;
