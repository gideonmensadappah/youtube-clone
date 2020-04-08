import React, { Component } from "react";
import Comment from "./comment.jsx";
import { AddComments } from "../addComments/addComments";
import { fetchAllComments } from "../../../data/UserFunctions";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      setComments: (comments) => {
        this.setState({ comments: [...this.state.comments, comments] });
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { activeVideoId } = this.props;

    fetchAllComments(activeVideoId)
      .then((res) => {
        const { data } = res;

        this.setState({ comments: data });
      })
      .catch((err) => err);
  };
  componentDidUpdate(prevProps) {
    if (this.props.activeVideoId !== prevProps.activeVideoId) {
      this.getData();
    }
  }

  render() {
    const { comments } = this.state;
    const { activeVideoId } = this.props;
    return (
      <>
        <AddComments id={activeVideoId} setComments={this.state.setComments} />
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </>
    );
  }
}
export default Comments;
