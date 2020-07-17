import React from 'react';
// styles
import styles from './CommentSection.module.scss';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComment: '',
    };
  }

  render() {
    return (
      <div className={styles.comments_container}>
        5
      </div>
    );
  }
}

export default CommentSection;
