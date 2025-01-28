"use client";
import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        setComments(parsedComments);
      } catch (error) {
        console.error("Failed to parse stored comments", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() && comment.trim()) {
      setComments([{ name, comment }, ...comments]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-slate-100 shadow-lg rounded-lg mt-6 mb-6">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Comment Section</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 hover:bg-yellow-800 focus:outline-none bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
        >
          Submit Comment
        </button>
      </form>

      <div>
        <h3 className="text-xl text-black font-medium mb-2">Comments:</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((entry, index) => (
              <div key={index} className="text-sm p-4 bg-slate-400 rounded-lg">
                <p className="font-bold">{entry.name}</p>
                <p>{entry.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-green-600">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
