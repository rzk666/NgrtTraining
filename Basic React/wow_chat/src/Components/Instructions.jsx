import React, { useState } from 'react';
// Libs
import { Modal } from 'semantic-ui-react';
import classnames from 'classnames';
// Styles
import styles from './Instructions.module.scss';
// Images
import CloseBtn from '../Static/Modals/close.png';

const InstructionsModal = ({ isInstModalOpen, setIsInstModalOpen }) => {
  const [isModalOut, setIsModalOut] = useState(false);
  return (
    <Modal
      open={isInstModalOpen}
      className={classnames(styles.modal_container,
        { [styles.out]: isModalOut })}
    >
      <div className={styles.modal}>
        <img
          src={CloseBtn}
          alt="close"
          className={styles.close_btn}
          onClick={() => {
            setIsInstModalOpen(!isInstModalOpen);
            setIsModalOut(true);
          }}
        />
        <h1>Instructions</h1>
        <div>
          <p>Welcome to my World Of Warcraft chat simulator!</p>
          <p>To start sending message press the "Enter" key.</p>
          <p>In order to send your message press the "Enter" key again</p>

          <p>
            You can switch channels in the chat by typing "/"
            and the channel name, Your options are:
            {' '}
          </p>
          <p>* /Say</p>
          <p style={{ color: 'red' }}>* /trade</p>
          <p style={{ color: '#FFB22A' }}>* /yell</p>
          <p style={{ color: '#85FF64' }}>* /guild</p>
          <p style={{ color: '#FF26F5' }}>* /whisper</p>
          <p>
            Also, you can add custom events to your chat such as
            loot, XP, ability and level up.
          </p>
        </div>
        <h2 style={{ marginTop: '50px' }}>Enjoy!</h2>
      </div>
    </Modal>
  );
};

export default InstructionsModal;
