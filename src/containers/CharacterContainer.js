import React, {Component} from 'react';

class CharacterContainer extends Component{
constructor(props){
  super(props);
  this.state= {
    characters:[],
    selectedCharacter: null
  };
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
