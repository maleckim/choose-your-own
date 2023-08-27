import React, {useState} from "react";
import pic1 from '../a-cat-dressed-like-the-grim-reaper-smoking-a-cigarette.png'
const dialogue = ['Within the convoluted labyrinth, I dwell—a cryptic cat, entwined with the enigma. My fondness for cigarettes mirrors the veiled tendrils of the maze, a dance of smoke and secrets. In each twist, I ponder the mysteries hidden in whispers, as the labyrinth and I share our enigmatic truths.',
"In the labyrinth's intricate embrace, I, a feline sage shrouded in enigma, find solace. Between its serpentine passages, I'm the custodian of cryptic knowledge, a connoisseur of cigarettes and riddles. Shadows and whispers meld, weaving tales as labyrinthine as the maze itself, and I, the arcane sentinel, guard its secrets with a wink of smoke-laden mystery.",
"Ah, the allure of those slender sticks of contemplation, those cylindrical companions of mine, the cigarettes! Their embered tips whisper secrets to the night, casting a subtle haze that tangles reality with introspection. Oh, the dance of smoke, a dance of paradoxes, as it unfurls tendrils of both freedom and captivity. The way they nestle between my fingers, a bridge between worlds, and how they burn with a fervor that mirrors the fires of my ruminations. Yes, dear interlocutors, you might raise your eyebrows, but to me, these paper-clad wonders are an ephemeral escape, a paradoxical path to both solace and introspection."
]

const CharacterMain = ({character}) => {
    const {stats, name, selectedBackstory, selectedItem} = character
    const [currentDialogue, setDialogue] = useState(0)

    const parseStat = Object.entries(stats)
    const incrementDialogue = () => {
        setDialogue(currentDialogue + 1)
    }
    return(
        <>
        <div className="stat-box">
        {parseStat.map(a => (
            <p>{a[0]}:{a[1]}</p>
        ))}
        </div>
        <div className="img-container">
            <img src={pic1}></img>
        </div>
        <div className="container">
            {currentDialogue === 0 && (
                <p>Welcome, {name}</p>
            )}
            
            <p>{dialogue[currentDialogue]}
</p>
<button onClick={() => incrementDialogue()}>Next</button>
        </div>
        </>
    )

    
}

export default CharacterMain;