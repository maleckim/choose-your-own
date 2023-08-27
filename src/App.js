import React, { useState } from 'react';
import CharacterCreation from './components/CharacterCreation';
import CharacterPreview from './components/CharacterPreview';

function App() {
  const [createdCharacter, setCreatedCharacter] = useState(null);

  const handleCreateCharacter = (character) => {
    setCreatedCharacter(character);
  };

  return (
    <div className="App">
      <CharacterCreation onCreateCharacter={handleCreateCharacter} />
      {createdCharacter && <CharacterPreview character={createdCharacter} />}
    </div>
  );
}

export default App;
