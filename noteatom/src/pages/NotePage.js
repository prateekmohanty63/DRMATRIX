import React from "react";
import { useParams } from "react-router-dom";
import notes from "../assets/data";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams();
  let note = notes.find((note) => note.id === Number(id));

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
