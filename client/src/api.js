const API_BASE_URL = "http://localhost:5000/api";

export async function getPosts() {
  const res = await fetch(`${API_BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to load posts");
  return res.json();
}

export async function getRocks() {
  const res = await fetch(`${API_BASE_URL}/rocks`);
  if (!res.ok) throw new Error("Failed to load rocks");
  return res.json();
}

export async function likePost(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}/like`, {
    method: "PUT",
  });

  if (!res.ok) throw new Error("Failed to like post");
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`, { method: "DELETE" });

  if (!res.ok) throw new Error("Failed to delete post");

  return res.json();
}

export async function createPost(newPostData) {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(newPostData),
  });

  if (!res.ok) throw new Error("Failed to create post");

  return res.json();
}
