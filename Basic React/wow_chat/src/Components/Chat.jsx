import React, { useState, useRef } from 'react';
import classNames from 'classnames';
// ---Styles---//
import { Button } from 'semantic-ui-react';
import styles from './Chat.module.scss';
// ---Hooks--- //
import useKey from '../hooks/useKey';
// ---Componenets---//
import GeneralChat from './Chat/General_chat';
import CombatChat from './Chat/Combat_chat';
import MyActionsChat from './Chat/MyActions_chat';
import WHTMChat from './Chat/WHTM_chat';
// --Consts & Dicts---//
import CHATS from '../Common/Chats';
import PLAYERS from '../Common/Players';

const Chat = ({ generalChatData, addGeneralChatEvent, whatHappenedToMeChat, myActionsChat }) => {
  const {
    GENERAL, COMBAT, MYACTIONS, WHTM,
  } = CHATS;
  // State
  const [activeChat, setActiveChat] = useState(GENERAL);
  const [currentChatInput, setCurrentChatInput] = useState('');
  const [isInputFocused, toggleInputFocus] = useState(false);
  const [currentChatChannel, setCurrentChatChannel] = useState('Says');
  const [activeCombatChat, setActiveCombatChat] = useState(MYACTIONS);
  // useRef
  const textInput = useRef();
  // Functions
  const updateCurrentChatInput = (ChatInput) => {
    setCurrentChatInput(ChatInput);
  };

  const setGeneralChat = () => {
    if (currentChatInput.length > 0) {
      const chatEventObj = {
        content: currentChatInput,
        currentChat: currentChatChannel,
        type: 'message',
      };
      const newArray = [...generalChatData, chatEventObj];
      addGeneralChatEvent(newArray);
      setCurrentChatInput('');
    }
  };

  const handleEnterKey = () => {
    if (!isInputFocused) {
      textInput.current.focus();
    } else if (isInputFocused) {
      setGeneralChat();
      textInput.current.blur();
    }
    toggleInputFocus(!isInputFocused);
  };

  if (currentChatInput === '/say') {
    setCurrentChatChannel('Say');
    setCurrentChatInput('');
  }
  if (currentChatInput === '/yell') {
    setCurrentChatChannel('Yell');
    setCurrentChatInput('');
  }
  if (currentChatInput === '/guild') {
    setCurrentChatChannel('Guild');
    setCurrentChatInput('');
  }
  if (currentChatInput === '/trade') {
    setCurrentChatChannel('Trade');
    setCurrentChatInput('');
  }
  if (currentChatInput === '/whisper') {
    setCurrentChatChannel('Whisper');
    setCurrentChatInput('');
  }

  return (
    <>
      <div className={styles.chat_selector_container}>
        <Button
          className={styles.chat_selector_btn}
          onClick={() => setActiveChat(GENERAL)}
          active={activeChat === GENERAL}
        >
          General
        </Button>
        <Button
          className={styles.chat_selector_btn}
          onClick={() => setActiveChat(COMBAT)}
          active={activeChat === COMBAT}
        >
          Combat
        </Button>
        {activeChat === COMBAT && (
        <div className={styles.combat_chat_selector_container}>
          <Button
            className={styles.chat_selector_btn}
            onClick={() => setActiveCombatChat(MYACTIONS)}
            active={activeCombatChat === MYACTIONS}
          >
            My Actions
          </Button>
          <Button
            className={styles.chat_selector_btn}
            onClick={() => setActiveCombatChat(WHTM)}
            active={activeCombatChat === WHTM}
          >
            What Happened To Me
          </Button>
        </div>
        )}
      </div>
      <div className={styles.chat_container}>
        {activeChat === GENERAL && (
        <GeneralChat
          activePlayer={PLAYERS}
          chats={generalChatData}
          currentChat={currentChatChannel}
        />
        )}
        {activeChat === COMBAT && (
        <CombatChat
          whatHappenedToMeEvents={whatHappenedToMeChat}
          myActionsEvents={myActionsChat}
        />
        )}
        {activeChat === COMBAT && activeCombatChat === MYACTIONS && (
        <MyActionsChat
          myActionsEvents={myActionsChat}
        />
        )}
        {activeChat === COMBAT && activeCombatChat === WHTM && (
        <WHTMChat
          whatHappenedToMeEvents={whatHappenedToMeChat}
        />
        )}
      </div>
      <div className={styles.input_container}>
        {isInputFocused && (
        <div
          className={classNames(styles.chat_channel,
            {
              [styles.yell]: currentChatChannel === 'Yell',
              [styles.guild]: currentChatChannel === 'Guild',
              [styles.whisper]: currentChatChannel === 'Whisper',
              [styles.trade]: currentChatChannel === 'Trade',
            })}
        >
          {currentChatChannel}
          :
          {' '}
        </div>
        )}
        <input
          value={currentChatInput}
          ref={textInput}
          onChange={(event) => updateCurrentChatInput(event.currentTarget.value)}
          onKeyPress={useKey('Enter', handleEnterKey)}
          className={classNames(styles.chat_input,
            {
              [styles.yell]: currentChatChannel === 'Yell',
              [styles.guild]: currentChatChannel === 'Guild',
              [styles.whisper]: currentChatChannel === 'Whisper',
              [styles.trade]: currentChatChannel === 'Trade',
            })}
        />
      </div>
    </>
  );
};
export default Chat;
