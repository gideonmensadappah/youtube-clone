import React, { Component } from "react";
import Comment from "./comment.jsx";
import { fetchAllComments } from "../../../data/UserFunctions";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { activeId } = this.props;

    fetchAllComments(activeId)
      .then((res) => {
        const { data } = res;
        console.log(data);
        const activeVideoComments = data.filter(
          (comment) => comment.video_id === activeId
        );

        this.setState({ comments: activeVideoComments });
      })
      .catch((err) => err);
  };
  componentDidUpdate(prevProps) {
    if (this.props.activeId !== prevProps.activeId) {
      this.getData();
    }
  }

  render() {
    const { comments } = this.state;

    return (
      <>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </>
    );
  }
}
export default CommentList;
