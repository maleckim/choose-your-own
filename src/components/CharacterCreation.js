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
  
  const CharacterCreation = ({ state, setState, onCreateCharacter }) => {
    const {
      characterName,
      selectedClass,
      pointsRemaining,
      stats,
    } = state;
  
    const handleClassChange = (className) => {
      setState(prevState => ({
        ...prevState,
        selectedClass: className,
        stats: classPresets[className]?.stats || prevState.stats,
      }));
    };
  
    const handleStatChange = (statName, value) => {
      const newStats = { ...stats };
      const diff = value - newStats[statName];
      if (pointsRemaining - diff >= 0) {
        newStats[statName] = value;
        setState(prevState => ({
          ...prevState,
          stats: newStats,
          pointsRemaining: pointsRemaining - diff,
        }));
      }
    };
  
    const handleCreate = () => {
      if (characterName && selectedClass) {
        const character = {
          name: characterName,
          class: selectedClass,
          stats,
        };
        onCreateCharacter(character);
      }
    };
  
    return (
      <div className="container">
        <h2 className="header">Character Creation</h2>
        <input
          type="text"
          placeholder="Character Name"
          value={characterName}
          onChange={(e) => setState(prevState => ({ ...prevState, characterName: e.target.value }))}
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
            <h3>Selected Class: {classPresets[selectedClass].name}</h3>
            <p>Skills:</p>
            <ul>
              {/* Add skill display logic here */}
            </ul>
          </div>
        )}
        <div className="stats">
          {Object.keys(stats).map((statName) => (
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
          <button onClick={handleCreate}>Preview Character</button>
        </div>
      </div>
    );
  };
  
  export default CharacterCreation;