import { useState } from "react";
import { Trash } from "lucide-react";

const App = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  const [task, setTask] = useState([]);

  const DeleteNote = (idx) => {
    const CopyTask = [...task];
    CopyTask.splice(idx, 1);
    setTask(CopyTask);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];

    CopyTask.push({ noteTitle, note });

    setTask(CopyTask);

    setNoteTitle("");
    setNote("");
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="lg:w-1/2 flex items-start gap-4 flex-col p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes: </h1>
        <input
          type="text"
          placeholder="Enter Note Heading"
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
          className="px-5 py-2 w-full font-medium border-2 rounded outline-none"
        />
        <textarea
          type="text"
          placeholder="Write Note Details"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          className="h-full px-5 py-2 w-full font-medium border-2 rounded outline-none"
        />
        <button className="active:scale-95 border-2 w-full font-medium bg-white text-black px-5 py-2 rounded outline-none">
          Add Notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 h-[90%] overflow-auto lg:border-l-2">
        <h1 className="mb-5 text-4xl font-bold">Recent Notes: </h1>
        <div className="flex flex-wrap gap-5 items-start justify-start">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black py-9 px-4 pb-4 flex justify-between flex-col items-start"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.noteTitle}
                  </h3>
                  <p className="mt-4 pb-4 leading-tight text-sm font-medium text-gray-500">
                    {elem.note}
                  </p>
                </div>
                <button
                  onClick={() => {
                    DeleteNote(idx);
                  }}
                  className="bg-red-600 p-1 cursor-pointer rounded-full active:scale-95"
                >
                  <Trash color="white" size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
