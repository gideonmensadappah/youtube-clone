import React, { useState, useEffect, useCallback } from "react";
import { addCommentFunc } from "../../../data/UserFunctions";
import CommentList from "../comments/comments";

/** Name: isEmpty()
 * function checks if an object is empty
 * @param {obj} obj
 * return boolean
 */

const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const style = {
  submitButton: { marginLeft: "4px" },
};

export const AddComments = (props) => {
  const [commentList, setCommentList] = useState([]);
  const activeId = props.id;

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const commentText = document.getElementById("inputComment").value;
      if (!isEmpty(commentText)) {
        const comment = {
          video_id: activeId,
          comment: commentText,
        };
        addCommentFunc(comment)
          .then((res) => {
            console.log(commentList);

            const inputComment = document.getElementById("inputComment");
            inputComment.value = "";
            setCommentList([...commentList, res.data]);
          })
          .catch((err) => console.log(err));
      } else {
        alert("not valid comment!");
      }
    },
    [commentList, activeId]
  );

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
                type="text"
                className="form-control"
                id="inputComment"
                placeholder="comment..."
              />
            </div>
            <button
              type="submit"
              style={style.submitButton}
              className="btn btn-primary  mb-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <CommentList activeId={activeId} _arrComment={commentList} />
    </>
  );
};
