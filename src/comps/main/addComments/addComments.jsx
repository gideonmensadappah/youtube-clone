import React, { useState, useEffect } from "react";
import { addCommentFunc, allComments } from "../../../data/UserFunctions";
import CommentListComponent from "../comments/comments";

export const AddComments = props => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({});
  const activeId = props.id;

  function handleChange(e) {
    e.preventDefault();
    const inputComment = document.getElementById("inputComment").value;

    setComment({
      comment: inputComment,
      video_id: props.id
    });
  }

  // On  SubmitForm
  function handleSubmit(e) {
    e.preventDefault();

    const isEmpty = obj => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    };

    if (isEmpty(comment)) {
      alert("The comment is not valid!");
    } else {
      addCommentFunc(comment)
        .then(res => {
          alert("added new comment!");
          getComments();
        })
        .catch(err => console.log(err));
    }
  }

  function getComments() {
    allComments()
      .then(res => setCommentList(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
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
      <CommentListComponent activeId={activeId} _arrComment={commentList} />
    </>
  );
};
