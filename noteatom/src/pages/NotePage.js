import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import notes from "../assets/data";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams();
  let navigate = useNavigate();
  //let note = notes.find((note) => note.id === Number(id));
  let [note, setNote] = useState(null); // always initilize state at the top (good practice)

  useEffect(() => {
    getNote();
  }, [id]);

  // function to get note
  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  // function to update note
  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let handleSubmit = () => {
    updateNote();
    navigate("/");
  };

  // function to delete note

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  console.log(id);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>

        <button onClick={deleteNote}>Delete</button>
      </div>

      {/* <div>{note.body}</div> */}

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
