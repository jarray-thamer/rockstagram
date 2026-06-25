import React, { useEffect, useState } from "react";
import { usePostStore } from "../store";
import { getRocks } from "../api";

const CreatePost = () => {
  const addPost = usePostStore((state) => state.addPost);

  const [rocks, setRocks] = useState([]);
  const [rockId, setRockId] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function loadRocks() {
      const data = await getRocks();

      setRocks(data);
    }

    loadRocks();
  });

  async function handleSubmit() {
    if (!rockId || !text) return;
    await addPost({ rock: rockId, text, imageUrl });
    setText("");
    setImageUrl("");
    setRockId("");
  }

  return (
    <div className="bg-white, rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col gap-3">
      <h2 className="font-semibold text-slate-900">Create a post</h2>
      <select
        value={rockId}
        className="border border-slate-300 rounded-lg px-3 py-2"
        onChange={(e) => setRockId(e.target.value)}
      >
        <option value="">Wish rock is posting?</option>
        {rocks.map((rock) => (
          <option key={rock._id} value={rock._id}>
            {rock.avatar} {rock.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a caption..."
        className="border border-slate-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL (optional)"
        className="border border-slate-300 rounded-lg px-3 py-2"
      />

      <button
        onClick={handleSubmit}
        disabled={!rockId || !text}
        className="bg-slate-900 text-white rounded-lg px-4 py-2 font-medium hover:bg-slate-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
