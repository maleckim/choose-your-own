import React from 'react';

const CharacterConfirmation = ({
  character,
  selectedBackstory,
  selectedItem,
}) => {
  return (
    <div className="confirmation-container">
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>Class: {character.class}</p>
        <p>Backstory: {selectedBackstory}</p>
      </div>
      <div className="item-info">
        <p>Item: {selectedItem}</p>
      </div>
    </div>
  );
};

export default CharacterConfirmation;
