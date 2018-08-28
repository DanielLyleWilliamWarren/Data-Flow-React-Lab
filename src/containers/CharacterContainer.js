import React, {Component} from 'react';
import CharacterDetail from '../components/CharacterDetail'
import CharacterSelector from '../components/CharacterSelector'

class CharacterContainer extends Component{
constructor(props){
  super(props);
  this.state= {
    characters:[],
    selectedCharacter: null
  };
  this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
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
  this.setState({selectedCharacter: selectedCharacter})
}

  render(){
    return(
      <div>
        <h2>Harry Potter Characters</h2>
        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}/>
          <CharacterDetail selectedCharacter = {this.state.selectedCharacter}/>
      </div>
    );
  }
}

export default CharacterContainer;
