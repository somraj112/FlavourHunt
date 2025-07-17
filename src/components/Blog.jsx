import React from 'react'


import { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            // Replace with your actual blog API endpoint
            const API_URL = 'YOUR_BLOG_API_ENDPOINT';

            try {
                setLoading(true);
                // const response = await fetch(API_URL);
                // const data = await response.json();
                // setPosts(data.posts); // Adjust based on API response structure

                // --- Placeholder Data for demonstration ---
                const dummyPosts = [
                    { id: 1, title: 'Top 10 Kitchen Gadgets', summary: 'Must-have tools for every home chef.', image: 'https://placehold.co/300x200/ADD8E6/000000?text=Gadgets' },
                    { id: 2, title: 'Mastering Sourdough Bread', summary: 'A comprehensive guide to baking sourdough.', image: 'https://placehold.co/300x200/F0E68C/000000?text=Sourdough' },
                    { id: 3, title: 'Seasonal Eating: Summer Fruits', summary: 'Delicious recipes featuring fresh summer produce.', image: 'https://placehold.co/300x200/90EE90/000000?text=Fruits' },
                ];
                setPosts(dummyPosts);
                // --- End Placeholder Data ---

            } catch (err) {
                setError("Failed to fetch blog posts. Please try again later.");
                console.error("API fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return <div className="min-h-screen bg-green-50 flex items-center justify-center text-xl text-gray-700">Loading Blog Posts...</div>;
    }

    if (error) {
        return <div className="min-h-screen bg-green-50 flex items-center justify-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-green-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Latest Blog Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Blog"; }} // Fallback
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                                <p className="text-gray-700 text-sm">{post.summary}</p>
                                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
