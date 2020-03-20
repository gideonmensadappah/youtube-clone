import React, { useState, useEffect } from "react";
import comments from "./comment.css";
import data from "../../../data/data.json";
import { allComments } from "../../../data/UserFunctions";
export const Comments = props => {
  const [commentList, setCommentList] = useState([]);

  const activeId = props.activeVideoId;

  function getComments() {
    console.log("in");
    allComments()
      .then(res => setCommentList(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getComments();
  }, []);
  const filter = commentList.filter(num => num.video_id == activeId);
  // console.log(filter);
  return (
    <React.Fragment>
      {filter.map((_data, index) => {
        return (
          <div className="card w-50 mt-3" key={_data.id}>
            <div className="card-body">
              <p className="card-text">{_data.comment}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Comments;
