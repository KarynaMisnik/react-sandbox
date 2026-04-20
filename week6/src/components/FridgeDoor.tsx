import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FridgeDoor({ children }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: "fridge-door",
  });

  return (
    <div
      id="fridge-door"
      ref={setNodeRef}
      className={`
        relative
        w-full
        h-[500px]
        border-4 border-dashed rounded-2xl
        transition-colors
        flex items-start
        ${isOver ? "border-green-500 bg-green-50" : "border-gray-300 bg-white"}
      `}
    >
      {children}
    </div>
  );
}
