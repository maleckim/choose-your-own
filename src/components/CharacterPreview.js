import React from 'react';

const CharacterPreview = ({ character }) => {
  return (
    <div>
      <h2>Character Preview</h2>
      <p>Name: {character.name}</p>
      <p>Class: {character.class}</p>
    </div>
  );
};

export default CharacterPreview;
