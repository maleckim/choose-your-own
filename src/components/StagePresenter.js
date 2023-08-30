import React from 'react';
import CharacterStage from './CharacterStage';
import FirstAct from '../dialogue/FirstAct';

const StagePresenter = ({ character }) => {
  const DetermineAct = () => {
    return <FirstAct />;
  };

  return <CharacterStage character={character} Act={DetermineAct} />;
};

export default StagePresenter;
