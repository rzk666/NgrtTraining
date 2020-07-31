import React from 'react';
// styles
import { Input, Button } from 'semantic-ui-react';
import styles from './CommentSection.module.scss';
// componenets

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
    this.setState({currentComment});
  }

  render() {
    return (
      <div className={styles.comments_container}>
        <div className={styles.content_wrapper}>
          <div className={styles.inputs_wrapper}>
            <Input placeholder="Enter comment" className={styles.input_bar} fluid icon="search" onChange={(event) => console.log(event.currentTarget.value)}/>
            <Button className={styles.post_btn} icon="chevron down" />
            <Input placeholder="Search..." className={styles.search_bar} fluid icon="search" />

          </div>
          <div className={styles.comments}>
            5
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
