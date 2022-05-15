import React from "react";

export const NotePage = ({ note }) => {
  return (
    <div>
      <h1>This is a single note page</h1>
      <div>{note.body}</div>
    </div>
  );
};
