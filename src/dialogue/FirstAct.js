import React, { useState, useEffect } from "react";

const FirstAct = () => {

    const [dialogueCount, setDialogueCount] = useState(0);
    const [intro, setIntro] = useState(true);
    const [convoCount, setConvoCount] = useState();
    const [npcSpeaking, setNpcSpeaking] = useState(true)
    const [userDialogueCount, setUserDialogueCount] = useState(0);

    const dialogue = {
        introDialogue: [
            "Within the convoluted labyrinth, I dwell—a cryptic cat, entwined with the enigma. My fondness for cigarettes mirrors the veiled tendrils of the maze, a dance of smoke and secrets. In each twist, I ponder the mysteries hidden in whispers, as the labyrinth and I share our enigmatic truths.",
            "In the labyrinth's intricate embrace, I, a feline sage shrouded in enigma, find solace. Between its serpentine passages, I'm the custodian of cryptic knowledge, a connoisseur of cigarettes and riddles. Shadows and whispers meld, weaving tales as labyrinthine as the maze itself, and I, the arcane sentinel, guard its secrets with a wink of smoke-laden mystery.",
            "Ah, the allure of those slender sticks of contemplation, those cylindrical companions of mine, the cigarettes! Their embered tips whisper secrets to the night, casting a subtle haze that tangles reality with introspection. Oh, the dance of smoke, a dance of paradoxes, as it unfurls tendrils of both freedom and captivity. The way they nestle between my fingers, a bridge between worlds, and how they burn with a fervor that mirrors the fires of my ruminations. Yes, dear interlocutors, you might raise your eyebrows, but to me, these paper-clad wonders are an ephemeral escape, a paradoxical path to both solace and introspection."
        ],
        userResponses: {
            0: ['cool', 'rude', 'weird'],
            1: ['3', '3', '4']
        },
        npcDialogueFirst:{
            0: 'cool',
            1: 'rude',
            2: 'weird'
        }
    }



    const renderIntro = () => {
        if (dialogueCount >= 3) {
            if (intro === true) {
                setIntro(false)
                setConvoCount(convoCount + 1)
            }
            setNpcSpeaking(false)
            setDialogueCount(0)
        }

        return (
            <p>{dialogue.introDialogue[dialogueCount]}<button onClick={(e) => handleClick(e)}>Click me</button></p>
        )
    }

    const renderFirstResponse = () => {
        
    }

    const userDialogueHandler = (e) => {
        //increment dialogue and switch speaker
        console.log(e.target.value)
        setUserDialogueCount(userDialogueCount + 1)
        setNpcSpeaking(true)
    }

    const generateUserResponses = () => {
        const test = Object.values(dialogue.userResponses[userDialogueCount])
        return (

            <p>{test.map(a => { return <button value={a} onClick={(e) => userDialogueHandler(e) }>{a}</button> })}</p>

        )
    }


    const renderDialogue = () => {

        if (intro === true) {
            return renderIntro();
        }


        if (npcSpeaking !== true) {
            return generateUserResponses();
        }

    }

    const handleClick = (e) => {
        if (npcSpeaking) {
            setDialogueCount(dialogueCount + 1);
        }

       
    }

    return (
        <div>
            {renderDialogue()}
        </div>
    )
}

export default FirstAct