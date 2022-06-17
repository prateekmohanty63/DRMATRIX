import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import notes from "../assets/data";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
const NotePage = (props) => {
  // console.log("props: ", props);
  const { id } = useParams(); // use params is a hook
  let navigate = useNavigate();
  //let note = notes.find((note) => note.id === Number(id));
  let [note, setNote] = useState(null); // always initialize state at the top (good practice)

  useEffect(() => {
    getNote();
  }, [id]);

  // csrf token
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  // function to get cookie
  // function getCookie(name) {
  //   var cookieValue = null;
  //   if (document.cookie && document.cookie !== '') {
  //       var cookies = document.cookie.split(';');
  //       for (var i = 0; i < cookies.length; i++) {
  //           var cookie = jQuery.trim(cookies[i]);
  //           if (cookie.substring(0, name.length + 1) === (name + '=')) {
  //               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  //               break;
  //           }
  //       }
  //   }
  //   return cookieValue;
  // }

  // csrf token
  // var csrftoken = getCookie('csrftoken');

  // function to get note
  let getNote = async () => {
    if (id === "new") return;
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  // function to update note
  let updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  // function to delete note

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'X-CSRFToken': csrftoken
      },
    });
    navigate("/");
  };

  // function to create a note
  const createNote = async () => {
    var token = "gyuuttutoto8o8";
    fetch("/api/notes/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": token,
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
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={createNote}>Done</button>
        )}
      </div>

      {/* <div>{note.body}</div> */}

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
