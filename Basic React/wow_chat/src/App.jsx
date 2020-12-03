import React, { useState } from 'react';
// ---libs---//
import { motion } from 'framer-motion';
// ---Styles---//
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
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ height: '50px', width: '50px', backgroundColor: 'red' }}
      >
        TEST
      </motion.div>
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
