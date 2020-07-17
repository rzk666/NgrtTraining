import React from 'react';
// Styles
import style from './App.module.scss';
// Components
import CommentSection from './componenets/CommentSection';

function App() {
  return (
    <div className={style.site_container}>
      <CommentSection />
    </div>
  );
}

export default App;
