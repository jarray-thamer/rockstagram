import { create } from "zustand";
import * as api from "./api";

export const usePostStore = create((set) => ({
  posts: [],
  loading: true,

  // load the feed (posts)
  fetchPosts: async () => {
    try {
      const data = await api.getPosts();
      set({ posts: data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  // like -> bump the count locally (keeps the rock, feels instant)
  likePost: async (id) => {
    await api.likePost(id);
    set((state) => ({
      posts: state.posts.map((post) =>
        post._id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    }));
  },

  // delete -> remove it locally
  removePost: async (id) => {
    await api.deletePost(id);
    set((state) => ({
      posts: state.posts.filter((post) => post._id !== id),
    }));
  },

  // create -> refetch because the new post come back without its rock populated
  addPost: async (newPostData) => {
    await api.createPost(newPostData);
    const data = await api.getPosts();
    set({ posts: data });
  },
}));
