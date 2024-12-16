import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);

  // Fetch articles from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/articles") 
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="bg-[rgba(234,239,231,1)] min-h-screen">
      <div className="max-w-7xl mx-auto p-6 sm:p-12 space-y-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mt-12 mb-12">
          Artikel Terkini
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Article Cards */}
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <img
                src={`http://localhost:5000/${article.image_path}`}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-green-700">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  to={`/Artikel/${article.id}`} 
                  className="text-green-600 hover:underline text-sm mt-4 block"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
