const PLAYERS = [{
  username: 'Nagorath',
  class: 'Warrior',
  realm: 'Kazzak',
  hp: 5000,
  abilities: [
    {
      name: 'Slash',
      dmg: 750,
      critDmg: 1000,
    },
    {
      name: 'Kamikaza',
      dmg: 1000,
      critDmg: 1500,
    },
    {
      name: 'Pray',
      dmg: 500,
      critDmg: 750,
    },
    {
      name: 'Band Of Brothers',
      dmg: 1000,
      critDmg: 1500,
    },
  ],
}];

export default PLAYERS;

    // generateNewCombatEvent() {
    //   const { whatHappenedToMeArray, myActionsArray } = this.state;
    //   const newWHTMArray = [...whatHappenedToMeArray];
    //   const newMyActionsArray = [...myActionsArray];
    //   let randomPlayerAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    //   let randomPlayerAbility = PLAYER[0].abilities[randomPlayerAbilityNum].dmg;
    //   let randomPlayerAbilityCrit = PLAYER[0].abilities[randomPlayerAbilityNum].critDmg;
    //   let playerAbilityArray = [randomPlayerAbility, randomPlayerAbilityCrit];
    //   let randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    //   let randomMonsterAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    //   let randomMonsterAbility = MONSTER[0].abilities[randomMonsterAbilityNum].dmg;
    //   const randomMonsterAbilityCrit = MONSTER[0].abilities[randomMonsterAbilityNum].critDmg;
    //   const monsterAbilityArray = [randomMonsterAbility, randomMonsterAbilityCrit];
    //   const randomMonsterAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    //   while (PLAYER[0].hp > 0 || MONSTER[0].hp > 0) {
    //     if (playerAbilityArray[randomPlayerAbillityIndex] === randomPlayerAbilityCrit) {
    //       MONSTER[0].hp -= playerAbilityArray[randomPlayerAbillityIndex];
    //       PLAYER[0].hp -= randomMonsterAbility;
    //       const battleEventPlayer = {
    //         abilityName: PLAYER[0].abilities[randomPlayerAbilityNum].name,
    //         type: 0,
    //         dmg: Math.round(playerAbilityArray[randomPlayerAbillityIndex]),
    //         isCrit: true,
    //       };
    //       newMyActionsArray.push(battleEventPlayer);
    //       randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    //       this.setState({ myActionsArray: newMyActionsArray });
    //     }
    //     MONSTER[0].hp -= randomPlayerAbility;
    //     PLAYER[0].hp -= randomMonsterAbility;
    //     const battleEventPlayer = {
    //       abilityName: PLAYER[0].abilities[randomPlayerAbilityNum].name,
    //       type: 0,
    //       dmg: Math.round(randomPlayerAbility),
    //       isCrit: false,
    //       isOverkill: false,

    //     };
    //     const battleEventMonster = {
    //       abilityName: MONSTER[0].abilities[randomMonsterAbilityNum].name,
    //       dmg: Math.round(randomMonsterAbility),
    //       isCrit: false,
    //       isOverkill: false,
    //     };
    //     newWHTMArray.push(battleEventMonster);
    //     newMyActionsArray.push(battleEventPlayer);
    //     randomPlayerAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    //     randomMonsterAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    //     randomPlayerAbility = PLAYER[0].abilities[randomPlayerAbilityNum].dmg;
    //     randomMonsterAbility = MONSTER[0].abilities[randomMonsterAbilityNum].dmg;
    //     randomPlayerAbilityCrit = PLAYER[0].abilities[randomPlayerAbilityNum].critDmg;
    //     playerAbilityArray = [randomPlayerAbility, randomPlayerAbilityCrit];
    //     randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    //   }
    //   PLAYER[0].hp = 5000;
    //   MONSTER[0].hp = 5000;
    //   this.setState({ myActionsArray: newMyActionsArray, whatHappenedToMeArray: newWHTMArray });
    // }