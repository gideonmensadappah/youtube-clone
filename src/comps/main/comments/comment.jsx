import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <>
        <div className="card" key={comment.id}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{comment.comment}</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </>
    );
  }
}
export default Comment;
