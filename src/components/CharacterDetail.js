import React from 'react';

const CharacterDetail = (props) => {
  console.log(props);
  if (!props.selectedCharacter) return null;

  return (
    <div className="character-details">
      <h3>{props.selectedCharacter.name}</h3>
      <p>{props.selectedCharacter.house}</p>
      <p>{props.selectedCharacter.ancestry}</p>
      <img src={props.selectedCharacter.image}/>
    </div>
  )
}

export default CharacterDetail;
