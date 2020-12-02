import React from 'react';
// styles
import styles from './WHTM_chat.module.scss';

const CombatMessage = ({ data }) => (
  <div className={styles.battle_event_container}>
    <div className={styles.combat_event}>
      Rozdin &nbsp;
    </div>
    <div className={styles.ability_name}>
      {`${data.abilityName} `}
&nbsp;
    </div>
    <div className={styles.combat_event}>
      dealt &nbsp;
    </div>
    <div className={styles.ability_name}>
      {`${data.dmg} damage`}
    </div>
  </div>
);

const WHTMChat = ({ whatHappenedToMeEvents }) => {
  const x = 5;
  return (
    <>
      {whatHappenedToMeEvents.map((combatEvent) => (
        <CombatMessage data={combatEvent} />
      ))}
    </>
  );
};

export default WHTMChat;
