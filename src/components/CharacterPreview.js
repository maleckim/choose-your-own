import React from 'react';

const CharacterPreview = ({ character }) => {
  const { name, class: characterClass, stats, selectedBackstory } = character;

  return (
    <div className="character-preview">
      <h3 className="preview-header">Character Preview</h3>
      <p>
        <span className="label">Name:</span> {name}
      </p>

      <p>
        <span className="label">Class:</span> {characterClass}
      </p>
      <div className="stats">
        <p>
          <span className="label">Strength:</span> {stats.strength}
        </p>
        <p>
          <span className="label">Dexterity:</span> {stats.dexterity}
        </p>
        <p>
          <span className="label">Constitution:</span> {stats.constitution}
        </p>
        <p>
          <span className="label">Intelligence:</span> {stats.intelligence}
        </p>
        <p>
          <span className="label">Wisdom:</span> {stats.wisdom}
        </p>
        <p>
          <span className="label">Charisma:</span> {stats.charisma}
        </p>
      </div>
    </div>
  );
};

export default CharacterPreview;
