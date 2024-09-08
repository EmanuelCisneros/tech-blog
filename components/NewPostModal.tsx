import { useState } from 'react';
import axios from 'axios';

const NewPostModal = ({ onClose, onPostCreated }: any) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !image) return alert('Title and image are required');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    try {
      const res = await axios.post('/api/posts/related', formData);
      onPostCreated(res.data);
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            className="mb-4 p-2 border rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
