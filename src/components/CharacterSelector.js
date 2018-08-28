import React from 'react';

const CharacterSelector = (props) => {
  function handleChange(evt) {
    props.onCharacterSelected(evt.target.value);
  }

  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  });

  return (
    <select
      id="character-selector"
      defaultValue="default"
      onChange={handleChange}
      >
      <option disabled value="default">Choose a wizard...</option>
      {options}
    </select>
  )
}

export default CharacterSelector;
