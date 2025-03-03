import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
export function NotesPage() {
  const { notes, getNotes } = useNotes();
  useEffect(() => {
    getNotes(); // ✅ Se ejecuta al cargar la página
  }, []);

  useEffect(() => {
    console.log("Notas actualizadas:", notes);
  }, [notes]); // ✅ Se ejecuta cuando `notes` cambia

  if (notes.length == 0) return <h1>No hay tareas</h1>;
  return (
    <div className=" flex items-center justify-center min-h-screen bg-zinc-800">
      {notes.map((note) => (
        <NoteCard note={note} key={note._id} />
      ))}
    </div>
  );
}
