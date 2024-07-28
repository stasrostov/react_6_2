import PropTypes from 'prop-types';
import './Note.css';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <div className="note-content">{note.content}</div>
      <button onClick={() => onDelete(note.id)} className="delete-button">&times;</button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
