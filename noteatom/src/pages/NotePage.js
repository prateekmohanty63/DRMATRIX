import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import notes from "../assets/data";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams();
  //let note = notes.find((note) => note.id === Number(id));
  let [note, setNote] = useState(null); // always initilize state at the top (good practice)

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  console.log(id);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>

      {/* <div>{note.body}</div> */}

      <textarea value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
