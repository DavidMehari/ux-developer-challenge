import { Dispatch, SetStateAction } from "react";

type ModalProps = {
    modalOpen: Boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ modalOpen, setModalOpen }: ModalProps) => {

  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <>
      <div
        id="overlay"
        className={`fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60 ${!modalOpen && 'hidden'}`}
        onClick={handleClose}
      ></div>

      <div
        id="modal"
        className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg ${!modalOpen && 'hidden'}`}
      >
        <h1 className="text-2xl font-semibold">Modal Title</h1>
        <div className="py-5 border-t border-b border-gray-300">
          <p>
            dialog content
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            id="cancel"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            id="done"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
