import React from 'react';

const CharacterDetail = (props) => {
  console.log(props);
  if (!props.selectedCharacter) return null;

  return (
    <div className="character-details">
      <h3>{props.selectedCharacter.name}</h3>
    </div>
  )
}

export default CharacterDetail;
