import React, { useState } from 'react';
// ---Styles---//
import styles from './App.module.scss';
// ---Componenets---//
import Chat from './Components/Chat';
import Modals from './Components/Modals';
import InstructionsModal from './Components/Instructions';
import { Button } from 'semantic-ui-react';

const App = () => {
  // State
  const [isInstModalOpen, setIsInstModalOpen] = useState(false);
  const [generalChat, addGeneralChatEvent] = useState([]);
  const [whatHappenedToMeChat, setWHTMChat] = useState([]);
  const [myActionsChat, setMyActionsChat] = useState([]);
  return (
    <div className={styles.site_container}>
      <Button
        className={styles.instructions_btn}
        onClick={() => { setIsInstModalOpen(!isInstModalOpen); }}
      >
        INSTRUCTIONS
      </Button>
      <h2 className={styles.header}>World Of Warcraft Chat Simulator</h2>
      <Chat
        generalChatData={generalChat}
        addGeneralChatEvent={addGeneralChatEvent}
        whatHappenedToMeChat={whatHappenedToMeChat}
        myActionsChat={myActionsChat}
      />
      <Modals
        generalChatData={generalChat}
        addGeneralChatEvent={addGeneralChatEvent}
        setWHTMChat={setWHTMChat}
        setMyActionsChat={setMyActionsChat}
        whatHappenedToMeChat={whatHappenedToMeChat}
        myActionsChat={myActionsChat}
      />
      <InstructionsModal
        isInstModalOpen={isInstModalOpen}
        setIsInstModalOpen={setIsInstModalOpen}
      />
    </div>
  );
};

export default App;
