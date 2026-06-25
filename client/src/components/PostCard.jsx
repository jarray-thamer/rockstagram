import React from "react";
import { usePostStore } from "../store";

const PostCard = ({ post }) => {
  const likePost = usePostStore((state) => state.likePost);
  const removePost = usePostStore((state) => state.removePost);

  const rock = post.rock; // populated object: {name, avatar, mood}
  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
            {rock?.avatar || "🪨"}
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              {rock?.name || "Unknown rock"}
            </p>
            <p className="text-xs text-slate-500">{rock?.mood}</p>
          </div>
        </div>
        <button
          onClick={() => removePost(post._id)}
          className="text-slate-400 hover:text-red-500 text-sm cursor-pointer"
        >
          Delete
        </button>
      </header>
      {post?.imageUrl ? (
        <img
          src={post.imageUrl}
          alt={post.text}
          className="w-full aspect-square object-cover"
        />
      ) : (
        <img
          src="https://placehold.co/400"
          alt="placeholder image"
          className="w-full aspect-square object-cover"
        />
      )}
      <div className="p-4">
        <button
          onClick={() => likePost(post._id)}
          className="text-2xl hover:scale-110 transition active:scale-95 cursor-pointer"
        >
          ❤️
        </button>
        <p className="text-slate-900">
          {post.likes} {post.likes === 1 ? "like" : "likes"}
        </p>
        <p className="mt-1 text-slate-800">
          <span className="font-semibold">{rock?.name} </span>
          {post.text}
        </p>
        {formattedDate && (
          <p className="mt-2 text-[11px] text-slate-400 uppercase tracking-wide">
            {formattedDate}
          </p>
        )}
      </div>
    </article>
  );
};

export default PostCard;
