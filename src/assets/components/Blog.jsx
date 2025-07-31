import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeManager";

// Configuration interne :
const API_KEY = "AIzaSyDC9r5zuxWVaBaVfbTSlInHTLcl7teDj6Q";
const BLOG_ID = "9144815966165316060";
const MAX_POSTS = 6;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=${MAX_POSTS}`
        );
        const data = await res.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        Aucun article trouvé.
      </div>
    );
  }

  return (
    <div className="relative dark:bg-gray-900 min-h-screen"> {/* Ajout d'un fond sombre pour tout le composant */}
      {/* Bouton de bascule du thème positionné en haut à droite */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-16">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-2 dark:text-white text-center">{post.title}</h2>
              <div
                className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 flex-1 [&>*]:dark:text-gray-300 [&_a]:dark:text-blue-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Lire l'article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;