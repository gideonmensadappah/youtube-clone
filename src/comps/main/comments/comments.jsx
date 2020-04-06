import React, { Component } from "react";
import { allComments } from "../../../data/UserFunctions";
class CommentListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: this.props.activeId,
      commentList: [],
    };

    this.renderCommentsList = (commentList) => this.commentList();
  }

  // Extract to diffrent component commentCardComponent
  commentList = () => {
    return this.state.commentList
      .filter((comments) => comments.video_id === this.state.activeVideo)
      .map((res) => (
        <div className="card" key={res.id}>
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{res.comment}</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      ));
  };

  componentDidMount() {
    allComments()
      .then((res) => this.setState({ commentList: res.data }))
      .catch((err) => err);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        activeVideo: this.props.activeId,
        commentList: this.props._arrComment,
      });
    }
  }

  render() {
    return this.renderCommentsList(this.state.commentList);
  }
}
export default CommentListComponent;
