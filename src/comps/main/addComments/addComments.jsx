import React, { useState, useEffect } from "react";
import { addCommentFunc, allComments } from "../../../data/UserFunctions";
export const AddComments = props => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({});
  const activeId = props.id;

  //handle change
  function handleChange(e) {
    e.preventDefault();
    const inputComment = document.getElementById("inputComment").value;

    setComment({
      comment: inputComment,
      video_id: props.id
    });
  }

  // handle submitted form
  function handleSubmit(e) {
    e.preventDefault();

    if (false) {
      console.log("cant send, the comment is not valid");
    } else {
      addCommentFunc(comment)
        .then(res => {
          alert("added new comment...");
          // const added = res.data.data.comment;
          // setCommentList.push(added);
        })
        .catch(err => console.log(err));
    }
  }

  function getComments() {
    console.log("in");
    allComments()
      .then(res => setCommentList(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getComments();
  }, []);

  const renderCommentsList = () => {
    const filteredVideo = commentList.filter(
      comments => comments.video_id === activeId
    );
    if (filteredVideo.length != 0) {
      return filteredVideo.map(comment => (
        <div className="card" key={comment.id}>
          <div className="card-body">{comment.comment}</div>
        </div>
      ));
    } else {
      return <span>No comment for this video..</span>;
    }
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
              style={{ marginLeft: "4px" }}
              className="btn btn-primary  mb-2"
            >
              add
            </button>
          </div>
        </form>
      </div>
      {renderCommentsList()}
    </>
  );
};
