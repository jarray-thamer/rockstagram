const API_BASE_URL = "http://localhost:5000/api";

export async function getPosts() {
  const res = await fetch(`${API_BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to load posts");
  return res.json();
}
