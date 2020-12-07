import React from 'react';
// styles
import styles from './MyActions_chat.module.scss';

const CombatMessage = ({ data }) => (
  <div className={styles.battle_event_container}>
    <div className={styles.combat_event}>
      Your &nbsp;
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
      &nbsp;
    </div>
    {data.isCrit === true && (
      <div className={styles.combat_event}>
        (Critical)
        &nbsp;
      </div>
    )}
  </div>

);

const MyActionsChat = ({ myActionsEvents }) => {
  const x = 5;
  return (
    <>
      {myActionsEvents.map((combatEvent) => (
        <CombatMessage data={combatEvent} />
      ))}
    </>
  );
};

export default MyActionsChat;
