import React, { useState } from 'react';
import CharacterCreation from './components/CharacterCreation';
import CharacterPreviewPage from './components/CharacterPreviewPage';
import './index.css';

function App() {
  const [createdCharacter, setCreatedCharacter] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
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
      charisma: 10,
    },
  });

  const handleCreateCharacter = (character) => {
    setCreatedCharacter(character);
    setShowPreview(true);
  };

  const handleConfirm = () => {
    // Handle confirm logic (e.g., save character)
    setShowPreview(false);
  };

  const handleBack = () => {
    setShowPreview(false);
    setCreatedCharacter(null);
  };

  return (
    <div className="App">
      {!showPreview && (
        <CharacterCreation
          state={characterCreationState}
          setState={setCharacterCreationState}
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
