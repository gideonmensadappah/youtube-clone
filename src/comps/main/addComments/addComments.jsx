import React, { useState, useEffect, useCallback } from "react";
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

  function handleSubmit(e) {
    e.preventDefault();

    /**
     * function checks if an object is empty
     * @param {obj} obj
     * return boolean
     */

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
          loadComments();
        })
        .catch(err => console.log(err));
    }
  }

  function loadComments() {
    allComments()
      .then(res => setCommentList(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadComments();
  }, []);
  const style = {
    btn: { marginLeft: "4px" }
  };
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
              style={style.btn}
              className="btn btn-primary  mb-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <CommentListComponent activeId={activeId} _arrComment={commentList} />
    </>
  );
};
