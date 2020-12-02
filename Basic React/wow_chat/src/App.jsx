import React, { useState } from 'react';
// ---Styles---
import styles from './App.module.scss';
// ---Componenets---//
import Chat from './Components/Chat';
import Modals from './Components/Modals';

const App = () => {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generalChat, addGeneralChatEvent] = useState([]);
  return (
    <div className={styles.site_container}>
      <h2 className={styles.header}>World Of Warcraft Chat Simulator</h2>
      <Chat
        generalChatData={generalChat}
        addGeneralChatEvent={addGeneralChatEvent}
      />
      <Modals
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        generalChatData={generalChat}
        addGeneralChatEvent={addGeneralChatEvent}
      />
    </div>
  );
};

export default App;
