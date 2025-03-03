import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";
function NoteCard({ note }) {
  const { deleteNote } = useNotes();
  return (
    <div className="bg-zinc-400 max-w-md w-full p-10 rounded-md m-2">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold text-blue-800">{note.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              deleteNote(note._id);
            }}
          >
            Delete
          </button>
          <Link to={`/notes/${note._id}`}>Edit</Link>
        </div>
      </header>
      <p className="text-yellow-100 mt-2">{note.description}</p>
      <span className="text-sm text-gray-500 mt-4 block">
        Fecha: {note.date}
      </span>
    </div>
  );
}

export default NoteCard;
