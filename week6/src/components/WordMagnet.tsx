import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Magnet } from "../store/useMagnetStore";

type Props = {
  magnet: Magnet;
};

export default function WordMagnet({ magnet }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: magnet.id,
    });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    position: magnet.status === "fridge" ? "absolute" : "relative",
    left: magnet.status === "fridge" ? magnet.x : undefined,
    top: magnet.status === "fridge" ? magnet.y : undefined,
    zIndex: isDragging ? 50 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        px-3 py-2 rounded-lg bg-yellow-200 shadow-md
        cursor-grab active:cursor-grabbing
        select-none
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
    >
      {magnet.word}
    </div>
  );
}
