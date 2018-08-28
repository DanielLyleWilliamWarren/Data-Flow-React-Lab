import React from 'react';

const HouseSelector = (props) => {
  console.log(props);
  function handleChange(evt) {
    props.onHouseSelected(evt.target.value);
  }
  const houses = props.characters.map((character) => {
    return character.house;
  })

  const uniqueHouses = Array.from(new Set(houses));

  const options = uniqueHouses.map((house, index) => {
    return <option value={house} key={index}>{house}</option>
  });

  return(
    <select
      id = "house-selector"
      defaultValue = "default"
      onChange={handleChange}
      >
        <option disabled value="default">Choose a house...

        </option>
          {options}
      </select>
    );
  }

export default HouseSelector;
