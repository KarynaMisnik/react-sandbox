import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import Sticker from "./components/Sticker";
import Canvas from "./components/Canvas";
import { useMagnetStore } from "./store/useMagnetStore";
import WordMagnet from "./components/WordMagnet";
import FridgeDoor from "./components/FridgeDoor";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === "canvas-area") {
      setItems((prev) => [...prev, event.active.id as string]);
    }
  };

  const loadPreset = () => {
    setItems(["⭐", "💖", "🔥", "🚀"]);
  };

  const loadExpansionPack = useMagnetStore((s) => s.loadExpansionPack);
  const magnets = useMagnetStore((s) => s.magnets);
  const updateMagnet = useMagnetStore((s) => s.updateMagnet);

  const handleDragEndFridge = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || over.id !== "fridge-door") return;

    const node = document.getElementById("fridge-door");
    if (!node) return;

    const rect = node.getBoundingClientRect();

    const pointer = active.rect.current.translated;

    if (!pointer) return;

    updateMagnet(active.id as string, {
      status: "fridge",
      x: pointer.left - rect.left,
      y: pointer.top - rect.top,
    });
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="p-12 min-h-screen bg-slate-50 font-sans">
          {/* Header */}
          <div className="bg-zinc-800 text-white p-6 mb-8 rounded-2xl flex justify-between items-center shadow-lg print:hidden">
            <div>
              <h1 className="text-xl font-bold">Sticker Sandbox</h1>
              <p className="text-xs text-gray-400 italic">
                Drag emojis to the box below
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={loadPreset}
                className="bg-amber-500 px-4 py-2 rounded-lg font-bold"
              >
                Load Preset 📦
              </button>

              <button
                onClick={() => window.print()}
                className="bg-blue-600 px-4 py-2 rounded-lg font-bold"
              >
                Print Creation 🖨️
              </button>
            </div>
          </div>

          <div className="flex gap-12 items-start">
            {/* Drawer */}
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow print:hidden">
              <Sticker id="⭐" emoji="⭐" />
              <Sticker id="🚀" emoji="🚀" />
              <Sticker id="🔥" emoji="🔥" />
            </div>

            {/* Canvas */}
            <div className="flex-1">
              <Canvas>
                {items.length === 0 ? (
                  <p className="text-gray-300 font-bold m-auto">
                    Pudota tarroja tähän
                  </p>
                ) : (
                  items.map((emoji, idx) => (
                    <span key={idx} className="text-5xl m-2">
                      {emoji}
                    </span>
                  ))
                )}
              </Canvas>

              <p className="text-xs text-gray-400 mt-4 text-center print:hidden">
                Tip: Press Ctrl+P to see the print view.
              </p>
            </div>
          </div>
        </div>
      </DndContext>
      <DndContext onDragEnd={handleDragEndFridge}>
        <div className="p-12 min-h-screen bg-slate-50 font-sans">
          <div className="bg-zinc-800 text-white p-6 mb-8 rounded-2xl flex justify-between items-center shadow-lg print:hidden">
            <div>
              <h1 className="text-xl font-bold">Word Fridge</h1>
              <p className="text-xs text-gray-400 italic">
                Drag words to the fridge
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={loadExpansionPack}
                className="bg-amber-500 px-4 py-2 rounded-lg font-bold"
              >
                Load More Words 📦
              </button>
            </div>
          </div>

          <div className="flex gap-12 items-start">
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow print:hidden">
              {magnets
                .filter((m) => m.status === "bank")
                .map((m) => (
                  <WordMagnet key={m.id} magnet={m} />
                ))}
            </div>

            <div className="flex-1">
              <FridgeDoor>
                {magnets
                  .filter((m) => m.status === "fridge")
                  .map((m) => (
                    <WordMagnet key={m.id} magnet={m} />
                  ))}
              </FridgeDoor>

              <p className="text-xs text-gray-400 mt-4 text-center print:hidden">
                Drag words onto the fridge
              </p>
            </div>
          </div>
        </div>
      </DndContext>
    </>
  );
}
