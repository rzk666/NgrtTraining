import React from 'react';
import classNames from 'classnames';
// ---Styles---
import { Button } from 'semantic-ui-react';
import styles from './App.module.scss';
// ---Componenets---//
import GeneralChat from './Components/General_chat';
import CombatChat from './Components/Combat_chat';
import MyActionsChat from './Components/MyActions_chat';
import WHTMChat from './Components/WHTM_chat';
import XPEventModal from './Components/XP_event_modal';
import LVLEventModal from './Components/Level_event_modal';
import AbilityEventModal from './Components/Ability_event_modal';
import LootEventModal from './Components/Loot_event_modal';
// --Consts & Dicts---//
import CHATS from './Common/Chats';

const generateBandOfBrothers = (x, y) => Math.random() * (y - x) + x;

function generateDmgKamikaza(x, y) {
  return (
    Math.random() * (y - x) + x
  );
}

const MONSTER = [{
  name: 'ROZDIN',
  hp: 5000,
  abilities: [
    {
      name: 'Skull Basher',
      dmg: 500,
      critDmg: 750,
    },
    {
      name: 'Splitter',
      dmg: 1000,
      critDmg: 1500,
    },
    {
      name: 'Heal',
      dmg: 500,
      critDmg: 750,
    },
    {
      name: 'Monastry',
      dmg: 800,
      critDmg: 1200,
    },
  ],
},
];

const PLAYER = [{
  username: 'Nagorath',
  class: 'Warrior',
  realm: 'Tahat',
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
},
{
  username: 'Rozadin',
  class: 'Mage',
  realm: 'Pipi',
  hp: 5000,
},
{
  userame: 'Skubar',
  class: 'Paladin',
  realm: 'Kaki',
}];

const COLORS = {
  Says: 'black',
  Trade: 'red',
  Whisper: 'purple',
  Yell: 'orange',
  Guild: 'green',
};

const COMBATCHATS = {
  MYACTIONS: './myActions',
  WHTM: '/whatHappenedToMe',
};

// FIRST MAKE CHAT WORK LIKE WOW ON FOCUS: Say:

// ----- CHANNEL TYPES ----- //
// Guild, Party, Say, Trade, Whisper, Raid

// NEXT -> Add realm & player class colors to chat,
// make it look exactly like WoW
// Step One -> Format properly [Channel][Player]: [content]
// Step Two -> Add channel functionality and colors
// * Make /yell to go to yell channel, etc...
// Step Three -> Handle class colors

// gain XP
// lvl up
// new ability: [Name]
// color: yellow

// loot
// recived loot: [item]
// color: green

class App extends React.Component {
  constructor(props) {
    super(props);
    const { GENERAL, COMBAT } = CHATS;
    const { MYACTIONS, WHTM } = COMBATCHATS;
    this.state = {
      activeChat: GENERAL,
      generalChat: [],
      combatChat: [],
      currentChatInput: '',
      isBtnActive: true,
      isInputFocused: false,
      currentChatChannel: 'Says',
      currentModalEvent: '',
      whatHappenedToMeArray: [],
      myActionsArray: [],
      activeCombatChat: MYACTIONS,
    };
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterPress);
  }

  componentDidUpdate() {
    this.setCurrentChat();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterPress);
  }

  setGeneralChat() {
    const { GENERAL } = CHATS;
    this.setState({ activeChat: GENERAL });
  }

  setCombatChat() {
    const { COMBAT } = CHATS;
    this.setState({ activeChat: COMBAT });
  }

  setMyActionsChat() {
    const { MYACTIONS } = COMBATCHATS;
    this.setState({ activeCombatChat: MYACTIONS });
  }

  setWHTMChat() {
    const { WHTM } = COMBATCHATS;
    this.setState({ activeCombatChat: WHTM });
  }

  toggleInputFocus() {
    const { isInputFocused } = this.state;
    this.setState({ isInputFocused: !isInputFocused });
  }

  setCurrentChat() {
    const { currentChatInput } = this.state;
    if (currentChatInput === '/say') {
      this.setState({ currentChatChannel: 'Says', currentChatInput: '' });
    }
    if (currentChatInput === '/yell') {
      this.setState({ currentChatChannel: 'Yell', currentChatInput: '' });
    }
    if (currentChatInput === '/guild') {
      this.setState({ currentChatChannel: 'Guild', currentChatInput: '' });
    }
    if (currentChatInput === '/trade') {
      this.setState({ currentChatChannel: 'Trade', currentChatInput: '' });
    }
    if (currentChatInput === '/whisper') {
      this.setState({ currentChatChannel: 'Whisper', currentChatInput: '' });
    }
  }

  updateCurrentChatInput(currentChatInput) {
    this.setState({ currentChatInput });
  }

  handleEnterPress(e) {
    const { isInputFocused } = this.state;
    if (e.keyCode === 13) {
      if (!isInputFocused) {
        this.inputRef.current.focus();
      } else {
        this.inputRef.current.blur();
      }
      this.toggleInputFocus();
    }
  }

  addGeneralChatEvent() {
    const { generalChat, currentChatInput, currentChatChannel } = this.state;
    if (currentChatInput.length > 0) {
      const chatEventObj = {
        content: currentChatInput,
        currentChat: currentChatChannel,
        // Next -> Add and support more types
        type: 'message',
      };
      const newArray = [...generalChat, chatEventObj];
      this.setState({ generalChat: newArray, currentChatInput: '' });
    }
  }

  setCurrentModalEvent(currentModalEvent) {
    this.setState({ currentModalEvent });
  }

  addNewXPEvent() {
    const { currentModalEvent, generalChat } = this.state;
    const newXPEvent = {
      content: currentModalEvent,
      currentChat: 'XP',
    };
    const newArray = [...generalChat, newXPEvent];
    this.setState({ generalChat: newArray, currentModalEvent: '' });
  }

  addNewLvlUpEvent() {
    const { currentModalEvent, generalChat } = this.state;
    const newLvlEvent = {
      content: currentModalEvent,
      currentChat: 'LVL UP',
    };
    const newArray = [...generalChat, newLvlEvent];
    this.setState({ generalChat: newArray, currentModalEvent: '' });
  }

  addNewAbilityEvent() {
    const { currentModalEvent, generalChat } = this.state;
    const newAbilityEvent = {
      content: currentModalEvent,
      currentChat: 'ABILITY',
    };
    const newArray = [...generalChat, newAbilityEvent];
    this.setState({ generalChat: newArray, currentModalEvent: '' });
  }

  addNewLootEvent() {
    const { currentModalEvent, generalChat } = this.state;
    const newLootEvent = {
      content: currentModalEvent,
      currentChat: 'LOOT',
    };
    const newArray = [...generalChat, newLootEvent];
    this.setState({ generalChat: newArray, currentModalEvent: '' });
  }

  generateNewCombatEvent() {
    const { whatHappenedToMeArray, myActionsArray } = this.state;
    const newWHTMArray = [...whatHappenedToMeArray];
    const newMyActionsArray = [...myActionsArray];
    let randomPlayerAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    let randomPlayerAbility = PLAYER[0].abilities[randomPlayerAbilityNum].dmg;
    let randomPlayerAbilityCrit = PLAYER[0].abilities[randomPlayerAbilityNum].critDmg;
    let playerAbilityArray = [randomPlayerAbility, randomPlayerAbilityCrit];
    let randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    let randomMonsterAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
    let randomMonsterAbility = MONSTER[0].abilities[randomMonsterAbilityNum].dmg;
    const randomMonsterAbilityCrit = MONSTER[0].abilities[randomMonsterAbilityNum].critDmg;
    const monsterAbilityArray = [randomMonsterAbility, randomMonsterAbilityCrit];
    const randomMonsterAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    while (PLAYER[0].hp > 0 || MONSTER[0].hp > 0) {
      if (playerAbilityArray[randomPlayerAbillityIndex] === randomPlayerAbilityCrit) {
        MONSTER[0].hp -= playerAbilityArray[randomPlayerAbillityIndex];
        PLAYER[0].hp -= randomMonsterAbility;
        const battleEventPlayer = {
          abilityName: PLAYER[0].abilities[randomPlayerAbilityNum].name,
          type: 0,
          dmg: Math.round(playerAbilityArray[randomPlayerAbillityIndex]),
          isCrit: true,
        };
        newMyActionsArray.push(battleEventPlayer);
        randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
        this.setState({ myActionsArray: newMyActionsArray });
      }
      MONSTER[0].hp -= randomPlayerAbility;
      PLAYER[0].hp -= randomMonsterAbility;
      const battleEventPlayer = {
        abilityName: PLAYER[0].abilities[randomPlayerAbilityNum].name,
        type: 0,
        dmg: Math.round(randomPlayerAbility),
        isCrit: false,
        isOverkill: false,

      };
      const battleEventMonster = {
        abilityName: MONSTER[0].abilities[randomMonsterAbilityNum].name,
        dmg: Math.round(randomMonsterAbility),
        isCrit: false,
        isOverkill: false,
      };
      newWHTMArray.push(battleEventMonster);
      newMyActionsArray.push(battleEventPlayer);
      randomPlayerAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
      randomMonsterAbilityNum = Math.floor(Math.random() * (4 - 0 + 0)) + 0;
      randomPlayerAbility = PLAYER[0].abilities[randomPlayerAbilityNum].dmg;
      randomMonsterAbility = MONSTER[0].abilities[randomMonsterAbilityNum].dmg;
      randomPlayerAbilityCrit = PLAYER[0].abilities[randomPlayerAbilityNum].critDmg;
      playerAbilityArray = [randomPlayerAbility, randomPlayerAbilityCrit];
      randomPlayerAbillityIndex = Math.floor(Math.random() * (2 - 0 + 0)) + 0;
    }
    PLAYER[0].hp = 5000;
    MONSTER[0].hp = 5000;
    this.setState({ myActionsArray: newMyActionsArray, whatHappenedToMeArray: newWHTMArray });
  }

  render() {
    const {
      generalChat,
      currentChatInput,
      activeChat,
      currentChatChannel,
      isInputFocused,
      currentModalEvent,
      whatHappenedToMeArray,
      myActionsArray,
      activeCombatChat,
    } = this.state;
    const { GENERAL, COMBAT } = CHATS;
    const { MYACTIONS, WHTM } = COMBATCHATS;
    return (
      <div className={styles.site_container}>
        <h2 className={styles.header}>World Of Warcraft Chat Simulator</h2>
        <div className={styles.chat_selector_container}>
          <Button
            className={styles.chat_selector_btn}
            onClick={() => this.setGeneralChat()}
            active={activeChat === GENERAL}
          >
            General
          </Button>
          <Button
            className={styles.chat_selector_btn}
            onClick={() => this.setCombatChat()}
            active={activeChat === COMBAT}
          >
            Combat
          </Button>
          {activeChat === COMBAT && (
            <div className={styles.combat_chat_selector_container}>
              <Button
                className={styles.chat_selector_btn}
                onClick={() => this.setMyActionsChat()}
                active={activeCombatChat === MYACTIONS}
              >
                My Actions
              </Button>
              <Button
                className={styles.chat_selector_btn}
                onClick={() => this.setWHTMChat()}
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
            activePlayer={PLAYER}
            chats={generalChat}
            currentChat={currentChatChannel}
          />
          )}
          {activeChat === COMBAT && (
          <CombatChat
            whatHappenedToMeEvents={whatHappenedToMeArray}
            myActionsEvents={myActionsArray}
          />
          )}
          {activeChat === COMBAT && activeCombatChat === MYACTIONS && (
          <MyActionsChat
            myActionsEvents={myActionsArray}
          />
          )}
          {activeChat === COMBAT && activeCombatChat === WHTM && (
          <WHTMChat
            whatHappenedToMeEvents={whatHappenedToMeArray}
          />
          )}
        </div>
        <div className={styles.input_container}>
          {isInputFocused === true && (
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
            onChange={(event) => this.updateCurrentChatInput(event.currentTarget.value)}
            ref={this.inputRef}
            onKeyDown={(e) => (e.keyCode === 13) && this.addGeneralChatEvent()}
            className={classNames(styles.chat_input,
              {
                [styles.yell]: currentChatChannel === 'Yell',
                [styles.guild]: currentChatChannel === 'Guild',
                [styles.whisper]: currentChatChannel === 'Whisper',
                [styles.trade]: currentChatChannel === 'Trade',
              })}
          />
        </div>
        <div className={styles.event_modal_container}>
          <XPEventModal
            onChangeXP={(e) => this.setCurrentModalEvent(e.currentTarget.value)}
            onClickXP={() => this.addNewXPEvent()}
            inputValue={currentModalEvent}
            className={styles.event_modal}
          />
          <LVLEventModal
            onChangeXP={(e) => this.setCurrentModalEvent(e.currentTarget.value)}
            onClickLvl={() => this.addNewLvlUpEvent()}
            inputValue={currentModalEvent}
            className={styles.event_modal}
          />
          <AbilityEventModal
            onChangeXP={(e) => this.setCurrentModalEvent(e.currentTarget.value)}
            onClickAbility={() => this.addNewAbilityEvent()}
            inputValue={currentModalEvent}
          />
          <LootEventModal
            onChangeXP={(e) => this.setCurrentModalEvent(e.currentTarget.value)}
            onClickLoot={() => this.addNewLootEvent()}
            inputValue={currentModalEvent}
          />
          <Button onClick={() => this.generateNewCombatEvent()} style={{ backgroundColor: '#A80000' }}>COMBAT</Button>
        </div>
      </div>
    );
  }
}

export default App;
