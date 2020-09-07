import React, { Component } from 'react'
import { spellSearch } from '../../services/api-calls'
import SearchForm from '../SearchForm/SearchForm'

class SpellSearch extends Component {
  state = { 
    spells: []
  }

  handleSpellSearch = async formData => {
    const spells = await spellSearch(formData)
    console.log(spells.results)
    this.setState({ spells: spells.results })
  }
  
// This actually proved useful.  we can pass the function to the component ;)
// And we'll now use a presentational component, too!!!

  render() { 
    return ( 
      <>
        <h3>Such Spellz</h3>
        <SearchForm 
          handleSpellSearch={this.handleSpellSearch}
        />
        
      </>
     );
  }
}
 
export default SpellSearch;