import React from 'react';
// Componenets
import { Input, Button } from 'semantic-ui-react';
// styles
import styles from './CommentSection.module.scss';

// -- Help Components -- //
const CustomButton = ({ onClick, icon }) => (
  <Button
    onClick={() => onClick()}
    className={styles.post_btn}
    icon={icon}
  />
);

const Comment = ({ data, onDeleteClick }) => (
  <div className={styles.comment}>
    {data}
    <CustomButton icon="delete" onClick={() => onDeleteClick()} />
  </div>
);

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: '',
      currentSearch: '',
    };
  }

  updateCurrentCommet(currentComment) {
    this.setState({ currentComment });
  }

  updateCurrentSearch(currentSearch) {
    this.setState({ currentSearch });
  }

  deleteComment(commentToDelete) {
    const { comments } = this.state;
    const newComments = [...comments].filter((comment) => comment !== commentToDelete);
    this.setState({ comments: newComments });
  }

  addComment() {
    const { currentComment, comments } = this.state;
    const newComments = [...comments, currentComment];
    // Alternative way:
    // newComments.push(currentComment);
    this.setState({ comments: newComments, currentComment: '' });
  }

  render() {
    const {
      currentComment,
      currentSearch,
      comments,
    } = this.state;
    const filteredComments = comments.filter((comment) => comment.includes(currentSearch));
    return (
      <div className={styles.comments_container}>
        <div className={styles.content_wrapper}>
          <div className={styles.inputs_wrapper}>
            <Input
              value={currentComment}
              placeholder="Enter comment"
              className={styles.input_bar}
              fluid
              icon="search"
              onChange={(event) => this.updateCurrentCommet(event.currentTarget.value)}
            />
            <CustomButton icon="chevron down" onClick={() => this.addComment()} />
            <Input
              placeholder="Search..."
              className={styles.search_bar}
              fluid
              icon="search"
              onChange={(event) => this.updateCurrentSearch(event.currentTarget.value)}
            />
          </div>
          <div className={styles.comments}>
            {filteredComments.map((comment) => (
              <Comment
                data={comment}
                onDeleteClick={() => this.deleteComment(comment)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
