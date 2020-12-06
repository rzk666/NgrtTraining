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
// --Consts & Dicts---//
import PLAYERS from '../Common/Players';
import MONSTERS from '../Common/Monsters';

const Modals = ({
  generalChatData,
  addGeneralChatEvent,
  setWHTMChat,
  setMyActionsChat,
  whatHappenedToMeChat,
  myActionsChat,
}) => {
  // State
  const [currentModalEvent, setCurrentModalEvent] = useState('');
  const [combatWinner, setCombatWinner] = useState('');
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

  const randomAbility = (abilityArray) => {
    const randomAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    const chosenAbility = abilityArray[randomAbilityNum];
    return (
      chosenAbility
    );
  };

  const generateNewCombatEvent = () => {
    // Player stats
    let randomPlayerAbility = randomAbility(PLAYERS[0].abilities);
    let playerHp = PLAYERS[0].hp;
    const newMyActionsArray = [...myActionsChat];
    // Monster stats
    let randomMonsterAbility = randomAbility(MONSTERS[0].abilities);
    let monsterHp = MONSTERS[0].hp;
    const newMyWHTMArray = [...whatHappenedToMeChat];
    while (playerHp && monsterHp > 0) {
      // Player actions
      const battleEventPlayer = {
        abilityName: randomPlayerAbility.name,
        dmg: randomPlayerAbility.dmg,
        isCrit: true,
      };
      newMyActionsArray.push(battleEventPlayer);
      randomPlayerAbility = randomAbility(PLAYERS[0].abilities);
      // Monster actions
      const battleEventMonster = {
        abilityName: randomMonsterAbility.name,
        dmg: randomMonsterAbility.dmg,
        isCrit: true,
      };
      // Hp
      playerHp -= randomMonsterAbility.dmg;
      monsterHp -= randomPlayerAbility.dmg;
      newMyWHTMArray.push(battleEventMonster);
      randomMonsterAbility = randomAbility(MONSTERS[0].abilities);
      if (randomMonsterAbility.dmg > playerHp) {
        playerHp = 0;
        setCombatWinner('Enemy');
      } else if (randomPlayerAbility.dmg > monsterHp) {
        monsterHp = 0;
        setCombatWinner('Player');
      }
    }
    console.log(`player: ${playerHp}`);
    console.log(`monster: ${monsterHp}`);
    setMyActionsChat(newMyActionsArray);
    setWHTMChat(newMyWHTMArray);
    const chatEventObj = {
      content: combatWinner === 'Player' ? 'You won!!' : 'You have been defeated...',
      currentChat: 'COMBAT',
      type: 'message',
    };
    const newGeneralChatArray = [...generalChatData, chatEventObj];
    addGeneralChatEvent(newGeneralChatArray);
  };
  console.log(combatWinner);

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
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          style={{ backgroundColor: '#A80000' }}
          onClick={() => generateNewCombatEvent()}
        >
          COMBAT
        </Button>
      </motion.div>
    </div>
  );
};
export default Modals;
