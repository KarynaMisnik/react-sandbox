import React, { useState } from "react";

interface CardProps {
  name: string;
  role: string;
}

export function Card({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0);

  return (
    <div
      className="flex flex-col items-center bg-purple-900 
  text-white p-4 rounded-lg w-52 
  shadow-lg shadow-purple-500/50 text-center"
    >
      <h3 className="font-bold line-clamp-2">{name}</h3>
      <p className="break-words text-sm">{role}</p>
      <button
        className="mt-auto bg-black p-2 rounded-sm text-white text-xs font-bold 
         m-2"
        onClick={() => setVotes(votes + 1)}
      >
        Vote ({votes})
      </button>
    </div>
  );
}
