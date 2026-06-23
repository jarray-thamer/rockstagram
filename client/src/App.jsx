import { useEffect, useState } from "react";
import { getPosts } from "./api";
import PostCard from "./components/PostCard";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        console.log(data);
        setPosts(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0">
        <h1 className="max-w-md mx-auto px-4 py-4 text-2xl font-bold text-slate-900">
          Rockstagram 🪨
        </h1>
      </header>
      <main className="max-w-md mx-auto px-4 py-6 flex flex-col gap-6">
        {loading && (
          <p className="text-center text-slate-500">Loading the feed...</p>
        )}
        {!loading && posts.length === 0 && (
          <p className="text-center text-slate-500">
            No posts yet. Go make some rocks post!
          </p>
        )}

        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
