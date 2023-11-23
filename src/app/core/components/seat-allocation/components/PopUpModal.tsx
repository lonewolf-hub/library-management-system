// Modal.tsx
import React from 'react';

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded">
      <p>{message}</p>
      <div className="mt-4 flex justify-end">
        <button
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
