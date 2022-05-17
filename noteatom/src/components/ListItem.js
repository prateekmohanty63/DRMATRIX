import React from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ note }) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  );
};
