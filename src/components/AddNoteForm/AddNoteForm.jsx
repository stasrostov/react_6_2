import { useState } from 'react';
import PropTypes from 'prop-types';
import './AddNoteForm.css';

const AddNoteForm = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter a note"
      />
      <button type="submit">Add</button>
    </form>
  );
};

AddNoteForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddNoteForm;
