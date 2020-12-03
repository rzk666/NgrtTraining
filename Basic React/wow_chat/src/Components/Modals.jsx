import React, { useState } from 'react';
import { motion } from 'framer-motion';
// ---Styles--- //
import styles from './Modals.module.scss';
// ---Componenets---//
import { Button } from 'semantic-ui-react';
import XPEventModal from './Modals/XP_event_modal';
import LVLEventModal from './Modals/Level_event_modal';
import AbilityEventModal from './Modals/Ability_event_modal';
import LootEventModal from './Modals/Loot_event_modal';

const Modals = ({ generalChatData, addGeneralChatEvent }) => {
  // State
  const [currentModalEvent, setCurrentModalEvent] = useState('');
  // Functions
  const addNewXPEvent = () => {
    const newXPEvent = {
      content: currentModalEvent,
      currentChat: 'XP',
    };
    const newArray = [...generalChatData, newXPEvent];
    addGeneralChatEvent(newArray);
    setCurrentModalEvent('');
  };

  const addNewLvlUpEvent = () => {
    const newLvlEvent = {
      content: currentModalEvent,
      currentChat: 'LVL UP',
    };
    const newArray = [...generalChatData, newLvlEvent];
    addGeneralChatEvent(newArray);
    setCurrentModalEvent('');
  };

  const addNewAbilityEvent = () => {
    const newAbilityEvent = {
      content: currentModalEvent,
      currentChat: 'ABILITY',
    };
    const newArray = [...generalChatData, newAbilityEvent];
    addGeneralChatEvent(newArray);
    setCurrentModalEvent('');
  };

  const addNewLootEvent = () => {
    const newLootEvent = {
      content: currentModalEvent,
      currentChat: 'LOOT',
    };
    const newArray = [...generalChatData, newLootEvent];
    addGeneralChatEvent(newArray);
    setCurrentModalEvent('');
  };

  return (
    <div className={styles.event_modal_container}>
      <XPEventModal
        onChangeXP={(e) => setCurrentModalEvent(e.currentTarget.value)}
        onClickXP={addNewXPEvent}
        inputValue={currentModalEvent}
        className={styles.event_modal}
        setCurrentModalEvent={setCurrentModalEvent}
      />
      <LVLEventModal
        onChangeLvl={(e) => setCurrentModalEvent(e.currentTarget.value)}
        onClickLvl={addNewLvlUpEvent}
        inputValue={currentModalEvent}
        className={styles.event_modal}
        setCurrentModalEvent={setCurrentModalEvent}
      />
      <AbilityEventModal
        onChangeAbility={(e) => setCurrentModalEvent(e.currentTarget.value)}
        onClickAbility={addNewAbilityEvent}
        inputValue={currentModalEvent}
        className={styles.event_modal}
        setCurrentModalEvent={setCurrentModalEvent}
      />
      <LootEventModal
        onChangeLoot={(e) => setCurrentModalEvent(e.currentTarget.value)}
        onClickLoot={addNewLootEvent}
        inputValue={currentModalEvent}
        className={styles.event_modal}
        setCurrentModalEvent={setCurrentModalEvent}
      />
      <Button
        style={{ backgroundColor: '#A80000' }}
      >
        COMBAT
      </Button>
    </div>
  );
};
export default Modals;
