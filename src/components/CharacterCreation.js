import React, { useState } from 'react';
import '../index.css';

const classPresets = {
    fighter: {
      name: 'Fighter',
      stats: {
        strength: 15,
        dexterity: 10,
        constitution: 12,
        intelligence: 8,
        wisdom: 10,
        charisma: 8,
      },
    },
    wizard: {
      name: 'Wizard',
      stats: {
        strength: 8,
        dexterity: 10,
        constitution: 12,
        intelligence: 15,
        wisdom: 10,
        charisma: 8,
      },
    },
    rogue: {
      name: 'Rogue',
      stats: {
        strength: 10,
        dexterity: 15,
        constitution: 10,
        intelligence: 12,
        wisdom: 8,
        charisma: 10,
      },
    },
    // Add more class presets here
  };

  const defaultStats = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  const backstories = [
    "Orphaned by a dragon attack, seeking revenge.",
    "Exiled noble, on a quest to regain honor.",
    "Mysterious wanderer with a forgotten past.",
    // Add more backstories here
  ];
  
  const items = [
    "Rusty Dagger",
    "Old Spellbook",
    "Lucky Charm",
    "Tattered Map",
    "Empty Vial",
    // Add more items here
  ];
  
 



  const CharacterCreation = ({state, defaul, updateChar, onCreateCharacter}) => {
    const [characterName, setCharacterName] = useState(state ? state.name : '');
    const [selectedClass, setSelectedClass] = useState(state ? state.class : '');
    const [pointsRemaining, setPointsRemaining] = useState(30);
    const [stats, setStats] = useState(state ? state.stats : {...defaultStats} );
    const [selectedBackstory, setSelectedBackstory] = useState(state ? state.selectedBackstory : '');
    const [selectedItem, setSelectedItem] = useState(state ? state.selectedItem : '');
    const character = state || defaul;
    
    const handleCreate = (func) => {
        const character = {name:characterName, class:selectedClass,stats, selectedBackstory, selectedItem}
        return func(character)
    }
  
    const handleClassChange = (className) => {
      setSelectedClass(className);
      if (classPresets[className]) {
        setStats(classPresets[className].stats);
      }
    };
  
    const handleStatChange = (statName, value) => {
      const newStats = { ...stats };
      const diff = value - newStats[statName];
      if (pointsRemaining - diff >= 0) {
        newStats[statName] = value;
        setStats(newStats);
        setPointsRemaining(pointsRemaining - diff);
      }
    };
  
    const handleRandomBackstory = () => {
      const randomIndex = Math.floor(Math.random() * backstories.length);
      setSelectedBackstory(backstories[randomIndex]);
    };
  
    const handleRandomItem = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
    };
  
    return (
      <div className="container">
        <h2 className="header">Character Creation</h2>
        <input
          type="text"
          placeholder="Character Name"
          value={state ? state.name : characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <div className="input-container">
          <label className="label">Select Class:</label>
          <select onChange={(e) => handleClassChange(e.target.value)}>
            <option value="">Choose a class</option>
            {Object.keys(classPresets).map((className) => (
              <option key={className} value={className}>
                {classPresets[className].name}
              </option>
            ))}
          </select>
        </div>
        {selectedClass && (
          <div>
            <h3>Selected Class: {state ? state.class : classPresets[selectedClass].name}</h3>
            <p>Skills:</p>
            <ul>
              {/* Add skill display logic here */}
            </ul>
          </div>
        )}
        <div className="stats">
          {Object.keys( stats).map((statName) => (
            <div key={statName}>
              <label className="label">
                {statName.charAt(0).toUpperCase() + statName.slice(1)}:
              </label>
              <input
                type="number"
                value={stats[statName]}
                onChange={(e) => handleStatChange(statName, parseInt(e.target.value))}
              />
            </div>
          ))}
        </div>
        <p className="remaining-points">Points Remaining: {pointsRemaining}</p>
        <div className="button-container">
          <button onClick={() => handleCreate(onCreateCharacter)}>Preview Character</button>
        </div>
        <div className="backstory-container">
          <h3>Select Backstory:</h3>
          <ul>
            {backstories.map((backstory, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="backstory"
                    value={backstory}
                    onChange={() => setSelectedBackstory(backstory)}
                    checked={selectedBackstory === backstory}
                  />
                  {backstory}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleRandomBackstory}>Random Backstory</button>
        </div>
        <div className="item-container">
          <h3>Pick a Random Item: { selectedItem}</h3>
          <select  onChange={(e) => setSelectedItem(e.target.value)}>
            <option >Choose an item</option>
            
            {items.map((item, index) => (
                item === selectedItem ? <option key={index} value={item}>{selectedItem}</option>
                 :
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={handleRandomItem}>Random Item</button>
        </div>
      </div>
    );
  };
  
  export default CharacterCreation;