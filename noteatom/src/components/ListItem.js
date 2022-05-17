import React from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <h3>{note.body}</h3>
    </Link>
  );
};
