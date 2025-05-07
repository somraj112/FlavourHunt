// const Hero = () => {
//     return (
//       <div className="relative bg-green-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
//                 Discover & Share <span className="text-green-600">Delicious Recipes</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
//                 Explore our collection of mouthwatering recipes, cooking tips, and culinary inspiration for every
//                 occasion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                 <a
//                   href="/blogs"
//                   className="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md"
//                 >
//                   Explore Blog
//                 </a>
//                 <a
//                   href="/services"
//                   className="px-6 py-3 bg-white text-green-600 font-medium rounded-full border border-green-600 hover:bg-green-50 transition-colors duration-300"
//                 >
//                   Get Started
//                 </a>
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="Delicious Food"
//                 className="rounded-lg shadow-xl w-full h-auto object-cover"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
//                 <div className="flex items-center gap-2">
//                   <div className="bg-green-100 p-2 rounded-full">
//                     <svg
//                       className="w-6 h-6 text-green-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Quick & Easy</p>
//                     <p className="text-xs text-gray-500">Ready in 30 minutes</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
//                 <div className="flex items-center gap-2">
//                   <div className="bg-green-100 p-2 rounded-full">
//                     <svg
//                       className="w-6 h-6 text-green-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">Loved by Many</p>
//                     <p className="text-xs text-gray-500">5000+ Happy Cooks</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
  
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
//             <path
//               fill="#ffffff"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     )
//   }
  
//   export default Hero
  
// const Hero = () => {
//     return (
//       <section className="bg-green-50 py-20">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
//           {/* Left Text Content */}
//           <div className="text-center lg:text-left flex-1">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               Discover & Share <span className="text-green-600">Delicious Recipes</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
//               Browse through thousands of tasty recipes, learn from culinary experts, and bring joy to your kitchen.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a
//                 href="/blogs"
//                 className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
//               >
//                 Explore Blog
//               </a>
//               <a
//                 href="/get-started"
//                 className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-100 transition"
//               >
//                 Get Started
//               </a>
//             </div>
//           </div>
  
//           {/* Right Image */}
//           <div className="flex-1 relative">
//             <img
//               src="./src/assets/foodpic.png"
//               alt="Delicious food"
//               className="rounded-xl shadow-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;



const Hero = () => {
    return (
      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{
            backgroundImage: "url('foodpic.png')",
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
      </section>
    );
  };
  
  export default Hero;
  
  