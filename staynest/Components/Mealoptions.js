import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  return (
    isOpen && (
      <div className="modal-overlay fixed inset-0 flex items-center justify-center transition-opacity">
        <div className="modal bg-white p-8 rounded shadow-md transition-transform">
          <h3>Add New Item</h3>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Price:
              <input type="text" name="price" required />
            </label>
            <label>
              Description:
              <input type="text" name="description" required />
            </label>
            <label>
              Image URL:
              <input type="text" name="image" required />
            </label>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full" onClick={onSubmit(e)} >
              Submit
            </button>
          </form>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;