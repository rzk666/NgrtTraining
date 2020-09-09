import React from 'react';
// Componenets
import { Input, Button } from 'semantic-ui-react';
// Util
import classNames from 'classnames'
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

const Comment = ({ data, onDeleteClick, icon }) => (
  <div className={styles.comment}>
    {data}
    <CustomButton icon={icon} onClick={() => onDeleteClick()} />
  </div>
);

const RestoreButton = ({ onClick }) => (
  <Button onClick={() => onClick()}>Restore deleted comments</Button>
)



class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: '',
      currentSearch: '',
      deletedComments: [],
      isDeletedActive: false
    };
  }

  updateCurrentCommet(currentComment) {
    this.setState({ currentComment });
  }

  updateCurrentSearch(currentSearch) {
    this.setState({ currentSearch });
  }

  deleteComment(commentToDelete) {
    const { comments, deletedComments } = this.state;
    const newComments = [...comments].filter((comment) => comment !== commentToDelete);
    deletedComments.push(commentToDelete)
    this.setState({ comments: newComments });
    console.log(deletedComments)
  }

  addComment() {
    const { currentComment, comments } = this.state;
    const newComments = [...comments, currentComment];
    // Alternative way:
    // newComments.push(currentComment);
    this.setState({ comments: newComments, currentComment: '' });
  }

  openDeletedComments() {
      const { isDeletedActive } = this.state
      this.setState({ isDeletedActive: !isDeletedActive })
  }

  restoreDeletedComment(commentToRestore) {
    const { comments , deletedComments} = this.state;
    const newComments = [...comments, commentToRestore];
    const newDeletedComments = [...deletedComments].filter((comment) => comment !== commentToRestore);
    this.setState({ comments: newComments , deletedComments: newDeletedComments })
  }


  render() {
    const {
      currentComment,
      currentSearch,
      comments,
      isDeletedActive,
      deletedComments
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
                icon="delete"
              />
            ))}
          </div>
          <div className={styles.restore_btn}>
            <RestoreButton onClick={() => this.openDeletedComments()}/>
          </div>
          
          <div className={classNames(styles.deleted_comments_section,
            {
              [styles.deleted_comments_section_active]: isDeletedActive
            })}>
            {deletedComments.map((comment) => (
              <Comment
                data={comment}
                onDeleteClick={() => this.restoreDeletedComment(comment)}
                icon="chevron down"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
