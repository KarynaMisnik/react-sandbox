import React from "react";
// Import the newly created component
import { Profile } from "./components/Profile";
import { Card } from "./components/TeamCard";
export default function App() {
  return (
    <div className="p-8 bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-2xl text-white font-bold mb-8 text-slate-700">
        Welcome to React!
      </h1>
      {/* Use the component and pass it the required props */}
      <Profile name="John Doe" role="Software Engineer" />
      <div className="flex m-4 gap-4">
        <Card name="Squidward Tentacles" role="Manager" />
        <Card name="Sandy Cheeks" role="Scientist" />
        <Card name="Eugene Crabs" role="Businessman" />
        <Card name="SpongeBob SquarePants" role="Cook" />
      </div>
    </div>
  );
}
