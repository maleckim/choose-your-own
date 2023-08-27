import React from 'react';
import CharacterPreview from './CharacterPreview';
import '../index.css'

const CharacterPreviewPage = ({ character, selectedBackstory, selectedItem, onConfirm, onBack }) => {
  return (
    <div className="container">
      <CharacterPreview character={character} />
      <div className="backstory-item-container">
       
        <h3>Selected Backstory:</h3>
        <p>{character.selectedBackstory}</p>
        <h3>Selected Item:</h3>
        <p>{character.selectedItem}</p>
      </div>
      <div className="button-container">
        <button className="confirm-button" onClick={onConfirm}>Confirm</button>
        <button className="back-button" onClick={onBack}>Go Back</button>
      </div>
    </div>
  );
};

export default CharacterPreviewPage;
