import React, { useState } from 'react';
import CharacterCreation from './components/CharacterCreation';
import CharacterPreviewPage from './components/CharacterPreviewPage';
import CharacterMain from './components/CharacterMain';
import CharacterStage from './components/CharacterStage'
import './index.css';

function App() {
  const [createdCharacter, setCreatedCharacter] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [confirmChar, setConfirmChar] = useState(false);
  const [characterCreationState, setCharacterCreationState] = useState({
    characterName: '',
    selectedClass: '',
    pointsRemaining: 30,
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 9,
    },
  });

  const handleCreateCharacter = (character) => {
    setCreatedCharacter(character);
    setShowPreview(true);
  };

  const handleConfirm = () => {
    // Handle confirm logic (e.g., save character)
    setShowPreview(false);
    setConfirmChar(true);
  };

  const handleBack = () => {
    setShowPreview(false);
    console.log(createdCharacter);
  };

  return (
    <div className="App">
      {confirmChar && !showPreview && (
        // <CharacterMain character={createdCharacter} />
        <CharacterStage character={createdCharacter} />
      )}
      {!showPreview && !confirmChar && (
        <CharacterCreation
          state={createdCharacter}
          defaul={characterCreationState}
          updateChar={setCharacterCreationState}
          onCreateCharacter={handleCreateCharacter}
        />
      )}
      {showPreview && createdCharacter && (
        <CharacterPreviewPage
          character={createdCharacter}
          onConfirm={handleConfirm}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
