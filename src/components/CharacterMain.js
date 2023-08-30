import React, { useState, useSyncExternalStore } from 'react';
import pic1 from '../a-cat-dressed-like-the-grim-reaper-smoking-a-cigarette.png';

function performSkillCheck(skillModifier) {
  const d20Roll = rollD20(); // Assuming you have a function to roll a d20
  const result = d20Roll + skillModifier;

  return {
    roll: d20Roll,
    total: result,
    success: result >= 10, // A basic success check, you can adjust the threshold
  };
}

function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
}

const dialogue = [
  'Within the convoluted labyrinth, I dwell—a cryptic cat, entwined with the enigma. My fondness for cigarettes mirrors the veiled tendrils of the maze, a dance of smoke and secrets. In each twist, I ponder the mysteries hidden in whispers, as the labyrinth and I share our enigmatic truths.',
  "In the labyrinth's intricate embrace, I, a feline sage shrouded in enigma, find solace. Between its serpentine passages, I'm the custodian of cryptic knowledge, a connoisseur of cigarettes and riddles. Shadows and whispers meld, weaving tales as labyrinthine as the maze itself, and I, the arcane sentinel, guard its secrets with a wink of smoke-laden mystery.",
  'Ah, the allure of those slender sticks of contemplation, those cylindrical companions of mine, the cigarettes! Their embered tips whisper secrets to the night, casting a subtle haze that tangles reality with introspection. Oh, the dance of smoke, a dance of paradoxes, as it unfurls tendrils of both freedom and captivity. The way they nestle between my fingers, a bridge between worlds, and how they burn with a fervor that mirrors the fires of my ruminations. Yes, dear interlocutors, you might raise your eyebrows, but to me, these paper-clad wonders are an ephemeral escape, a paradoxical path to both solace and introspection.',
];

const sceneOneUserDialogue = {
  1: [
    'what the fu** is up with you',
    'can i get one of them smokes',
    'youre dead bucko',
  ],
  2: ['tbh i hope i never see you again', 'weird smoking cat'],
  3: false,
};

const dialogueHolder = {
  dialogueFirstResponse: ['it is not whats wrong with I , etc etc'],
  dialogueSecondResponse: {
    skill: function (num) {
      const modifier = (num - 10) / 2;
      const skillCheckResult = performSkillCheck(modifier);
      if (skillCheckResult === true) {
        return this.successLine;
      } else {
        return this.failLine;
      }
    },
    successLine: [
      'sure you can have a smoke... etc',
      'weird story about smoking',
      'im happy we bonded',
    ],
    failLine: [
      'you are a fool to believe i would share with the likes of u cretin',
      'you sully my cigarettes from mere proximity u dote',
      'you will forever be my enemy',
    ],
  },
  dialogueThirdResponse: {
    //trigger fight or something
  },
};

const CharacterMain = ({ character }) => {
  const { stats, name, selectedBackstory, selectedItem } = character;
  const [currentDialogue, setDialogue] = useState(0);
  const [dialogueObj, setDialogueObj] = useState(null || dialogue);
  const [userDialogueCounter, setUserDialogueCounter] = useState(1);
  const [currentUserDialogueObject, setCurrentUserDialogueObject] = useState(
    null || sceneOneUserDialogue,
  );
  const [userDialogueStatus, setUserDialogueStatus] = useState(true);
  const parseStat = Object.entries(stats);
  const incrementDialogue = (bool) => {
    bool ? setDialogue(currentDialogue + 1) : setDialogue(currentDialogue);
  };

  const userScript = (choice) => {
    const newDialogueObject = Object.values(dialogueHolder)[choice];
    if (newDialogueObject.skill) {
      const updatedDialogue = newDialogueObject.skill();
      setDialogueObj(updatedDialogue);
    } else {
      setDialogueObj(newDialogueObject);
    }

    setDialogue(0);
    setUserDialogueCounter(userDialogueCounter + 1);
  };

  return (
    <>
      <div className="stat-box">
        {parseStat.map((a) => (
          <p>
            {a[0]}:{a[1]}
          </p>
        ))}
      </div>
      <div className="img-container">
        <img src={pic1}></img>
      </div>
      <div className="container">
        {dialogueObj[currentDialogue] && (
          <>
            {' '}
            <p>{dialogueObj[currentDialogue]}</p>
            <button onClick={() => incrementDialogue(true)}>Next</button>
          </>
        )}
        {!dialogueObj[currentDialogue] &&
          userDialogueStatus === true &&
          currentUserDialogueObject[userDialogueCounter].map(
            (choice, index) => (
              <button key={index} onClick={() => userScript(index)}>
                {choice}
              </button>
            ),
          )}
      </div>
    </>
  );
};

export default CharacterMain;
