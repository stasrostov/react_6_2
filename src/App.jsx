import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import './index.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:7070/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (content) => {
    try {
      await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:7070/notes/${id}`, {
        method: 'DELETE'
      });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="container">
      <h1>NOTES</h1>
      <AddNoteForm onAdd={addNote} />
      <button onClick={fetchNotes} className="refresh-button">Refresh</button>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
