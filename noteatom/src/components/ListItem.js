import React from "react";

export const ListItem = ({ note }) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  );
};
