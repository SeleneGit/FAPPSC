import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function NotesFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createNotes, getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadNote() {
      if (params.id) {
        const note = await getNote(params.id);
        setValue("title", note.title);
        setValue("description", note.description);
      }
    }
    loadNote();
  }, []);
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateNote(params.id, data);
    } else {
      createNotes(data);
    }
    navigate("/notes");
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md flex justify-self-start items-center ">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-400 text-white px-2 rounded-md my-2"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        <textarea
          rows="3"
          className="w-full bg-zinc-400 text-white px-2 rounded-md my-2"
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </form>
    </div>
  );
}
export default NotesFormPage;
