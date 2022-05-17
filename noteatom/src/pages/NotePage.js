import React from "react";
import { useParams } from "react-router-dom";
import notes from "../assets/data";

const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams();
  let note = notes.find((note) => note.id === Number(id));

  console.log(id);
  return (
    <div>
      <p>{note?.body}</p>
      {/* <div>{note.body}</div> */}
    </div>
  );
};

export default NotePage;
