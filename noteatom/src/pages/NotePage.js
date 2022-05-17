import React from "react";
import { useParams } from "react-router-dom";

const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>This is a single note page</h1>
      {/* <div>{note.body}</div> */}
    </div>
  );
};

export default NotePage;
