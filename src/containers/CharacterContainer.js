import React, {Component} from 'react';
import CharacterDetail from '../components/CharacterDetail';
import CharacterSelector from '../components/CharacterSelector';
import HouseSelector from '../components/HouseSelector';

class CharacterContainer extends Component{
constructor(props){
  super(props);
  this.state= {
    characters:[],
    selectedCharacter: null,
    selectedHouse: null
  };
  this.handleCharacterSelected = this.handleCharacterSelected.bind(this);

  this.handleHouseSelected = this.handleHouseSelected.bind(this);

}
componentDidMount(){
  const url = 'http://hp-api.herokuapp.com/api/characters';
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((characters) => {
    this.setState({characters: characters})
  })
}

handleCharacterSelected(index) {
  const selectedCharacter = this.state.characters[index];
  console.log(selectedCharacter);
  this.setState({selectedCharacter: selectedCharacter})
}

handleHouseSelected(index) {
  const houses = this.state.characters.map((character) => {
    return character.house
  })
  console.log(houses);

  const uniqueHouses = Array.from(new Set(houses));

console.log(uniqueHouses);

const selectedHouse = this.uniqueHouses[index]
console.log(selectedHouse);

const charactersByHouse = function (selectedHouse) {
  return this.state.characters.filter((character) => {
    character.house === selectedHouse
  });
  }
}

  render(){
    return(
      <div>
        <h2>Harry Potter Characters</h2>
        <HouseSelector
          characters={this.state.characters}
          onHouseSelected={this.handleHouseSelected}/>
        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}/>
          <CharacterDetail
            selectedCharacter = {this.state.selectedCharacter}
            selectedHouse = {this.state.selectedHouse}/>
      </div>
    );
  }
}

export default CharacterContainer;
