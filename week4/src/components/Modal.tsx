import type { ReactNode } from "react";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {children}

          <button
            onClick={onClose}
            className="absolute  top-3 right-3  mt-4 bg-black text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
