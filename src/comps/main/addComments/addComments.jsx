import React, { useState } from "react";
import { addCommentFunc } from "../../../data/UserFunctions";
export const AddComments = props => {
  const [comment, setComment] = useState({});
  // console.log(props.id);

  function handleChange(e) {
    e.preventDefault();
    const inputComment = document.getElementById("inputComment").value;

    setComment({
      comment: inputComment,
      video_id: props.id
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(comment.hasOwnProperty("comment"));
    if (false) {
      console.log("cant send, the comment is not valid");
    } else {
      addCommentFunc(comment)
        .then(res => alert("added new comment..."))
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="col box">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <div className="form-group  mb-2">
            <label htmlFor="comment" className="sr-only">
              comment
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputComment"
              placeholder="comment..."
            />
          </div>
          <button
            type="submit"
            style={{ marginLeft: "4px" }}
            className="btn btn-primary  mb-2"
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
};
