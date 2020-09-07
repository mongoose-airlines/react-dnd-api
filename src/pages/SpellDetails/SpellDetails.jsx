import React, { Component } from 'react'
import { getSpellDetails } from '../../services/api-calls'

class SpellDetails extends Component {
  state = {
    spellDetails: []
   }

  async componentDidMount() {
    const spellDetails = await getSpellDetails(this.props.match.params.name)
    this.setState({ spellDetails: spellDetails.results })
  }

  render() { 
    return ( 
      <>
        <h3>Spell Deets</h3>
      </>
     );
  }
}
 
export default SpellDetails;
