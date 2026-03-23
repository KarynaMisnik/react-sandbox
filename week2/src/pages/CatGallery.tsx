import { useState, useEffect } from "react";

type Cat = {
  id: string;
  url: string;
};

export default function CatGallery() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="p-8 text-center text-xs md:text-3xl lg:text-5xl font-extrabold">
        Random Cats
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ml-4">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="cat"
            className="w-full h-64 object-contain bg-gray-100"
          />
        ))}
      </div>
    </>
  );
}
