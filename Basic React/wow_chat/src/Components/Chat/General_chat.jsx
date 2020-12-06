import React from 'react';
import classNames from 'classnames';
// Styles
import styles from './General_chat.module.scss';

const Message = ({ data, activePlayer }) => (
  <>
    {data.currentChat === 'COMBAT' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.player]: data.currentChat === 'COMBAT',
            })}
        >
          {data.content}
        </div>
      </div>
    )}
    {data.currentChat === 'XP' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.player]: data.currentChat === 'XP',
            })}
        >
          {`You've gained ${data.content} XP`}
        </div>
      </div>
    )}
    {data.currentChat === 'LVL UP' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.player]: data.currentChat === 'LVL UP',
            })}
        >
          {`Congratulation on leveling to level ${data.content}!`}
        </div>
      </div>
    )}
    {data.currentChat === 'ABILITY' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.player]: data.currentChat === 'ABILITY',
            })}
        >
          New Ability [
        </div>
        <div className={styles.event_clicker}>{data.content}</div>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.player]: data.currentChat === 'ABILITY',
            })}
        >
          ] has been learned!
        </div>
      </div>
    )}
    {data.currentChat === 'LOOT' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.loot]: data.currentChat === 'LOOT',
            })}
        >
          Recieved loot: [
        </div>
        <div className={styles.event_clicker}>{data.content}</div>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.loot]: data.currentChat === 'LOOT',
            })}
        >
          ]
        </div>
      </div>
    )}
    {data.currentChat === 'Whisper' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.whisper]: data.currentChat === 'Whisper',
            })}
        >
          {`[${activePlayer[0].realm}][${activePlayer[0].username}] ${data.currentChat}: ${data.content}`}
        </div>
      </div>
    )}
    {data.currentChat === 'Yell' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.yell]: data.currentChat === 'Yell',
            })}
        >
          {`[${activePlayer[0].realm}][${activePlayer[0].username}] ${data.currentChat}: ${data.content}`}
        </div>
      </div>
    )}
    {data.currentChat === 'Trade' && (
      <div className={styles.chat_event_container}>
        <div
          className={classNames(styles.chat_event,
            {
              [styles.trade]: data.currentChat === 'Trade',
            })}
        >
          {`[${activePlayer[0].realm}][${activePlayer[0].username}] ${data.currentChat}: ${data.content}`}
        </div>
      </div>
    )}
    {data.currentChat === 'Guild' && (
    <div className={styles.chat_event_container}>
      <div
        className={classNames(styles.chat_event,
          {
            [styles.guild]: data.currentChat === 'Guild',
          })}
      >
        {`[${activePlayer[0].realm}][${activePlayer[0].username}] ${data.currentChat}: ${data.content}`}
      </div>
    </div>
    )}
    {data.currentChat === 'Says' && (
      <div className={styles.chat_event_container}>
        <div
          className={styles.chat_event}
        >
          {`[${activePlayer[0].realm}][${activePlayer[0].username}] ${data.currentChat}: ${data.content}`}
        </div>
      </div>
    )}
  </>
);

const GeneralChat = ({ chats, activePlayer }) => (
  <>
    <div className={styles.chat_container}>
      {chats.map((chat) => (
        <Message data={chat} activePlayer={activePlayer} />
      ))}
    </div>
  </>
);

export default GeneralChat;
