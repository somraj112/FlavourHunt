import Login from "./Login.jsx";
const Hero = () => {
  console.log("Hero component rendered");
    return (
      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{
            backgroundImage: "url('foodpic.png')",
            // backgroundImage: "url('https://thumbs.dreamstime.com/z/salad-tomatoes-greens-dressing-oil-feta-cheese-blue-plate-white-wooden-background-top-view-banner-website-52717635.jpg?ct=jpeg')",
          }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-xl max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10 shadow-lg py-10">
          {/* Left Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Discover & Share <span className="text-green-600">Delicious Recipes</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto lg:mx-0">
              Browse through thousands of tasty recipes, learn from culinary experts, and bring joy to your kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/blogs"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
              >
                Explore Blog
              </a>
              <a
                href="/get-started"
                className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-100 transition"
                onClick={Login}
              >
                Get Started
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg"
              alt="Delicious food"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
        {/* Section for Expert-Curated Recipes and Cooking Tips & Tricks */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {/* Expert-Curated Recipes Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Expert-Curated Recipes</h2>
                <p className="text-gray-700">Discover recipes from professional chefs and food enthusiasts worldwide.</p>
            </div>

            {/* Cooking Tips & Tricks Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Cooking Tips & Tricks</h2>
                <p className="text-gray-700">Learn professional techniques to elevate your cooking skills.</p>
            </div>
        </div>

        {/* What Our Community Says Section */}
        <div className="max-w-7xl mx-auto px-6 mt-10">
            <h2 className="text-7xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What Our Community Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="User1"
                        className="rounded-full w-24 h-24 object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Mark Chen</h3>
                    <p className="text-green-600 mb-3">Food Enthusiast</p>
                    <p className="text-gray-700 italic">
                        "Flavour Hunt has transformed how I discover new recipes. The community is incredibly supportive!"
                    </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                    <img
                        src="https://media.istockphoto.com/id/488961367/photo/homemade-cooking.jpg?s=612x612&w=0&k=20&c=TXva5xmIdFTm9swVVomLYHfnM_UOw1YpkpkBcb_oy8I="
                        alt="User Avatar"
                        className="rounded-full w-24 h-24 object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Rajiv Patel</h3>
                    <p className="text-green-600 mb-3">Home Cook</p>
                    <p className="text-gray-700 italic">
                        "I love how easy it is to search for recipes by ingredients. The step-by-step instructions are clear, and the photos make it even more fun to try new dishes."
                    </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?semt=ais_hybrid&w=740"
                        alt="User Avatar"
                        className="rounded-full w-24 h-24 object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Emily Nguyen</h3>
                    <p className="text-green-600 mb-3">Vegan Baker</p>
                    <p className="text-gray-700 italic">
                        "Finally, a platform with so many plant-based options! The filtering feature for dietary preferences is a lifesaver."
                    </p>
                </div>
            </div>
        </div>
        
      </section>
    );
  };
  
  export default Hero;
